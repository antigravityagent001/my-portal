import React from 'react';
import { Star, GitFork, Copy, Check, Terminal, ExternalLink } from 'lucide-react';
import type { Repository } from '../types/index.ts';

interface RepoCardProps {
  repo: Repository;
  onOpenClone: (repo: Repository) => void;
}

const LANGUAGE_COLORS: Record<string, string> = {
  Python: '#3572A5',
  'C++': '#f34b7d',
  'C#': '#178600',
  C: '#555555',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  Markdown: '#083fa1',
};

export const RepoCard: React.FC<RepoCardProps> = ({ repo, onOpenClone }) => {
  const [copied, setCopied] = React.useState(false);
  const [imgFailed, setImgFailed] = React.useState(false);

  const handleCopyClone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`git clone ${repo.htmlUrl}.git`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const langColor = repo.language ? LANGUAGE_COLORS[repo.language] || '#64748b' : '#64748b';

  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)] hover:border-blue-200/70 transition-all duration-200 flex flex-col">
      {/* Clickable Showcase Picture - clicking automatically opens link to the repo */}
      <a
        href={repo.htmlUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full aspect-[16/9] bg-slate-900 overflow-hidden border-b border-slate-100 cursor-pointer"
        title={`Open ${repo.name} on GitHub`}
        aria-label={`Open ${repo.name} repository on GitHub`}
      >
        {repo.bannerImage && !imgFailed ? (
          <img
            src={repo.bannerImage}
            alt={`${repo.name} showcase`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            onError={() => setImgFailed(true)}
          />
        ) : (
          /* Clean minimalist code header fallback when custom image file is not yet added in assets */
          <div className="w-full h-full flex flex-col justify-between p-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white transition-all group-hover:from-slate-850 group-hover:to-slate-900">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                {repo.owner.login}/{repo.name}
              </span>
            </div>

            <div className="my-auto py-2">
              <span className="text-xl sm:text-2xl font-mono font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                {repo.name}
              </span>
              <div className="flex items-center gap-2 mt-2">
                {repo.language && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/10 text-[11px] font-mono text-slate-300">
                    <span
                      className="w-2 h-2 rounded-full inline-block"
                      style={{ backgroundColor: langColor }}
                    />
                    <span>{repo.language}</span>
                  </span>
                )}
                <span className="text-[11px] text-slate-400">
                  {repo.stargazersCount} {repo.stargazersCount === 1 ? 'star' : 'stars'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
              <span className="font-mono text-slate-400">github.com</span>
              <span className="inline-flex items-center gap-1 text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform">
                <span>View repo</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </div>
        )}

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

        {/* Account Badge on image */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 backdrop-blur-sm text-slate-800 shadow-sm border border-white/60">
          <span>{repo.account === 'main' ? '🐙' : '⚡'}</span>
          <span>@{repo.owner.login}</span>
        </div>
      </a>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
              <a
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {repo.name}
              </a>
            </h2>
          </div>

          {/* ⭐ RECOMMENDED Badge */}
          {repo.isRecommended && (
            <div className="mt-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50/90 text-blue-700 font-bold text-xs tracking-wider rounded-lg border border-blue-200/60 uppercase">
                <span>⭐</span>
                <span>RECOMMENDED</span>
              </span>
            </div>
          )}

          {/* Description */}
          <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal min-h-[2.5rem]">
            {repo.description || 'No description provided.'}
          </p>

          {/* Topics & Tags */}
          {repo.topics && repo.topics.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3.5">
              {repo.topics.slice(0, 4).map((topic) => (
                <span
                  key={topic}
                  className="text-[11px] px-2 py-0.5 bg-slate-100/80 text-slate-600 rounded-md font-mono"
                >
                  #{topic}
                </span>
              ))}
              {repo.topics.length > 4 && (
                <span className="text-[10px] text-slate-400 self-center">
                  +{repo.topics.length - 4} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Card Footer: Language, Stats, Clone Quick Action */}
        <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-4">
            {/* Language */}
            {repo.language && (
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ backgroundColor: langColor }}
                />
                <span>{repo.language}</span>
              </span>
            )}

            {/* Stars */}
            <span
              className="inline-flex items-center gap-1 text-slate-600 font-medium hover:text-amber-600 transition-colors"
              title={`${repo.stargazersCount} stargazers`}
            >
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
              <span>{repo.stargazersCount}</span>
            </span>

            {/* Forks */}
            {repo.forksCount > 0 && (
              <span
                className="inline-flex items-center gap-1 text-slate-600 font-medium"
                title={`${repo.forksCount} forks`}
              >
                <GitFork className="w-3.5 h-3.5 text-slate-400" />
                <span>{repo.forksCount}</span>
              </span>
            )}
          </div>

          {/* Quick Actions: Copy Clone & Terminal info */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopyClone}
              className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
              title="Copy git clone URL"
              aria-label={`Copy git clone url for ${repo.name}`}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => onOpenClone(repo)}
              className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Inspect clone commands and repo info"
              aria-label={`View instructions for ${repo.name}`}
            >
              <Terminal className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
