import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { NavigationTabs } from './components/NavigationTabs.tsx';
import { RepoList } from './components/RepoList.tsx';
import { CertificatesView } from './components/CertificatesView.tsx';
import { CloneModal } from './components/CloneModal.tsx';
import { loadPortalData } from './services/githubService.ts';
import { INITIAL_REPOSITORIES } from './data/seedData.ts';
import type { TabType, Repository } from './types/index.ts';
import { Github } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('repositories');
  const [repos, setRepos] = useState<Repository[]>(INITIAL_REPOSITORIES);
  const [selectedCloneRepo, setSelectedCloneRepo] = useState<Repository | null>(null);

  useEffect(() => {
    // Automatically load repositories from GitHub sync or cache
    loadPortalData(false)
      .then((result) => {
        if (result.repos && result.repos.length > 0) {
          setRepos(result.repos);
        }
      })
      .catch((err) => {
        console.warn('Initial load fallback', err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f2fe] via-[#edf5fd] to-[#e4eefb] text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Profile Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Navigation Tabs (Certificates & Repositories) */}
        <div className="mb-4">
          <NavigationTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            repoCount={repos.length}
          />
        </div>

        {/* View Selection */}
        {activeTab === 'repositories' && (
          <RepoList repos={repos} onOpenClone={(repo) => setSelectedCloneRepo(repo)} />
        )}

        {activeTab === 'certificates' && <CertificatesView />}
      </main>

      {/* Clone Command Modal */}
      <CloneModal
        repo={selectedCloneRepo}
        onClose={() => setSelectedCloneRepo(null)}
      />

      {/* Minimalist Footer */}
      <footer className="mt-auto border-t border-slate-200/60 bg-white/40 backdrop-blur-sm py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} bacondev123</span>
            <span>•</span>
            <span className="font-mono text-slate-600">bacondev123.github.io</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/bacondev123"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors inline-flex items-center gap-1 font-medium"
            >
              <Github className="w-3.5 h-3.5" />
              <span>@bacondev123</span>
            </a>
            <a
              href="https://github.com/antigravityagent001"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-colors inline-flex items-center gap-1 font-medium"
            >
              <span>⚡ @antigravityagent001</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
