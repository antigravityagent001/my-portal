import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpDown, X, Star } from 'lucide-react';
import { RepoCard } from './RepoCard.tsx';
import {
  filterRepositories,
  sortRepositories,
  getAvailableLanguages,
} from '../utils/filterUtils.ts';
import type { Repository, AccountFilter, SortOption } from '../types/index.ts';

interface RepoListProps {
  repos: Repository[];
  onOpenClone: (repo: Repository) => void;
}

export const RepoList: React.FC<RepoListProps> = ({ repos, onOpenClone }) => {
  const [search, setSearch] = useState('');
  const [accountFilter, setAccountFilter] = useState<AccountFilter>('all');
  const [languageFilter, setLanguageFilter] = useState('all');
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [onlyRecommended, setOnlyRecommended] = useState(false);

  const availableLanguages = useMemo(() => getAvailableLanguages(repos), [repos]);

  const filteredAndSortedRepos = useMemo(() => {
    const filtered = filterRepositories(repos, {
      search,
      account: accountFilter,
      language: languageFilter,
      onlyRecommended,
    });
    return sortRepositories(filtered, sortBy);
  }, [repos, search, accountFilter, languageFilter, sortBy, onlyRecommended]);

  const hasActiveFilters =
    search.trim() !== '' ||
    accountFilter !== 'all' ||
    languageFilter !== 'all' ||
    onlyRecommended;

  const handleClearFilters = () => {
    setSearch('');
    setAccountFilter('all');
    setLanguageFilter('all');
    setOnlyRecommended(false);
  };

  return (
    <section aria-label="Repositories Section" className="mt-4">
      {/* Search & Filter Toolbar */}
      <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl p-4 sm:p-5 shadow-sm mb-6">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search repositories by name, topic, or description..."
              className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200/90 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              aria-label="Search repositories"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Account Filter Segmented Control */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-semibold self-start lg:self-auto">
            <button
              onClick={() => setAccountFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                accountFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Accounts
            </button>
            <button
              onClick={() => setAccountFilter('main')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                accountFilter === 'main'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🐙</span>
              <span>bacondev123</span>
            </button>
            <button
              onClick={() => setAccountFilter('alt')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                accountFilter === 'alt'
                  ? 'bg-white text-purple-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>⚡</span>
              <span>antigravityagent001</span>
            </button>
          </div>

          {/* Sort & Recommended Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOnlyRecommended(!onlyRecommended)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                onlyRecommended
                  ? 'bg-amber-50 text-amber-700 border-amber-300'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
              title="Show only recommended featured projects"
            >
              <Star className={`w-3.5 h-3.5 ${onlyRecommended ? 'fill-amber-500 text-amber-500' : 'text-slate-400'}`} />
              <span>Recommended</span>
            </button>

            <div className="relative inline-flex items-center">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="pl-8 pr-7 py-2 bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer appearance-none"
                aria-label="Sort repositories"
              >
                <option value="recommended">Sort: Recommended</option>
                <option value="stars">Sort: Most Stars</option>
                <option value="updated">Sort: Recently Updated</option>
                <option value="name">Sort: Alphabetical</option>
                <option value="forks">Sort: Most Forks</option>
              </select>
            </div>
          </div>
        </div>

        {/* Language Filter Pills */}
        {availableLanguages.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-slate-100 text-xs">
            <span className="text-slate-400 font-medium mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Language:
            </span>
            <button
              onClick={() => setLanguageFilter('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                languageFilter === 'all'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All
            </button>
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguageFilter(lang)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  languageFilter === lang
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Repositories Count Bar */}
      <div className="flex items-center justify-between mb-4 px-1 text-xs text-slate-500">
        <div>
          Showing <span className="font-bold text-slate-700">{filteredAndSortedRepos.length}</span> of {repos.length} repositories
          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="ml-3 text-blue-600 hover:underline font-medium cursor-pointer"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Grid of Repository Cards */}
      {filteredAndSortedRepos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedRepos.map((repo) => (
            <RepoCard
              key={`${repo.owner.login}-${repo.name}`}
              repo={repo}
              onOpenClone={onOpenClone}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white/80 rounded-3xl border border-slate-200 p-12 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-2xl">
            🔍
          </div>
          <h3 className="text-lg font-bold text-slate-800">No repositories found</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            We couldn't find any repositories matching your current search terms or filters.
          </p>
          <button
            onClick={handleClearFilters}
            className="mt-4 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </section>
  );
};
