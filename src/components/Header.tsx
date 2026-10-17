import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROFILE_INFO } from '../data/seedData.ts';

export const Header: React.FC = () => {
  const [avatarSrc, setAvatarSrc] = useState<string>(PROFILE_INFO.avatarAssetPath);

  const handleAvatarError = () => {
    // If local custom asset is not yet added, fallback cleanly to real GitHub avatar
    if (avatarSrc !== PROFILE_INFO.fallbackAvatarUrl) {
      setAvatarSrc(PROFILE_INFO.fallbackAvatarUrl);
    }
  };

  return (
    <header className="w-full pt-8 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Clean Minimalist Top Banner Bar */}
      <div className="bg-white/85 backdrop-blur-md border border-white/80 rounded-3xl p-6 sm:p-7 shadow-sm transition-all hover:shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          {/* User Profile Info */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative group shrink-0">
              <img
                src={avatarSrc}
                alt={PROFILE_INFO.name}
                className="w-16 h-16 sm:w-18 sm:h-18 shrink-0 aspect-square rounded-full object-cover ring-4 ring-blue-100 shadow-sm transition-transform group-hover:scale-105"
                onError={handleAvatarError}
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" title="Online" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                  {PROFILE_INFO.name}
                </h1>
                <span className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 font-semibold rounded-full border border-blue-200/60 font-mono">
                  github.com/{PROFILE_INFO.handle}
                </span>
              </div>

              {/* GitHub Destination Links */}
              <div className="flex flex-wrap items-center gap-2.5 mt-3 text-xs">
                {/* Main GitHub */}
                <a
                  href={PROFILE_INFO.mainAccount.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white transition-colors rounded-full font-medium shadow-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Main: <strong>@{PROFILE_INFO.mainAccount.username}</strong></span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                {/* Alt GitHub */}
                <a
                  href={PROFILE_INFO.altAccount.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors rounded-full border border-slate-300 font-medium"
                >
                  <span>⚡ Alt: <strong>@{PROFILE_INFO.altAccount.username}</strong></span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
