import React, { useState } from 'react';
import { X, Copy, Check, Terminal, ExternalLink, Shield } from 'lucide-react';
import type { Repository } from '../types/index.ts';

interface CloneModalProps {
  repo: Repository | null;
  onClose: () => void;
}

export const CloneModal: React.FC<CloneModalProps> = ({ repo, onClose }) => {
  const [method, setMethod] = useState<'https' | 'ssh' | 'cli'>('https');
  const [copied, setCopied] = useState(false);

  if (!repo) return null;

  const cloneCommands = {
    https: `git clone ${repo.htmlUrl}.git`,
    ssh: `git clone git@github.com:${repo.fullName}.git`,
    cli: `gh repo clone ${repo.fullName}`,
  };

  const activeCommand = cloneCommands[method];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="clone-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <h3 id="clone-modal-title" className="text-lg font-bold text-slate-900">
              Clone Repository
            </h3>
            <p className="text-xs text-slate-500 font-mono">{repo.fullName}</p>
          </div>
        </div>

        <p className="text-xs text-slate-600 mt-2 mb-4">
          Choose your preferred method to clone this repository to your local machine:
        </p>

        {/* Method selector */}
        <div className="flex border-b border-slate-200 mb-4 text-xs font-semibold">
          <button
            onClick={() => setMethod('https')}
            className={`pb-2.5 px-3 transition-colors cursor-pointer ${
              method === 'https'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            HTTPS
          </button>
          <button
            onClick={() => setMethod('ssh')}
            className={`pb-2.5 px-3 transition-colors cursor-pointer ${
              method === 'ssh'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            SSH
          </button>
          <button
            onClick={() => setMethod('cli')}
            className={`pb-2.5 px-3 transition-colors cursor-pointer ${
              method === 'cli'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            GitHub CLI
          </button>
        </div>

        {/* Code Snippet Box */}
        <div className="relative bg-slate-900 rounded-2xl p-4 text-slate-200 font-mono text-xs flex items-center justify-between gap-3 border border-slate-800">
          <span className="truncate select-all">{activeCommand}</span>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer text-xs font-sans"
            aria-label="Copy command"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Details */}
        <div className="mt-5 grid grid-cols-3 gap-2 py-3 border-t border-slate-100 text-center text-xs">
          <div className="bg-slate-50 p-2.5 rounded-xl">
            <span className="block text-slate-400 text-[10px]">Stars</span>
            <span className="font-bold text-slate-800">{repo.stargazersCount}</span>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-xl">
            <span className="block text-slate-400 text-[10px]">Forks</span>
            <span className="font-bold text-slate-800">{repo.forksCount}</span>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-xl">
            <span className="block text-slate-400 text-[10px]">Language</span>
            <span className="font-bold text-slate-800">{repo.language || 'Code'}</span>
          </div>
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <a
            href={repo.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
          >
            <span>Open on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
