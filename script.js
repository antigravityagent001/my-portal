// script.js - Config-driven vanilla JS portal for bacondev123

export const DEFAULT_CONFIG = {
  site: {
    title: 'bacondev123 Portal',
    description: 'Centralized portal syncing repositories from bacondev123 and antigravityagent001.',
    copyrightName: 'bacondev123',
    footerText: 'Developer Portal',
    defaultTab: 'repositories',
  },
  theme: {
    primaryColor: '#2563eb',
    primaryHover: '#1d4ed8',
    textMain: '#1e293b',
    textMuted: '#64748b',
    bgGradientStart: '#e8f2fe',
    bgGradientMid: '#edf5fd',
    bgGradientEnd: '#e4eefb',
    cardBg: 'rgba(255, 255, 255, 0.95)',
    borderLight: 'rgba(226, 232, 240, 0.85)',
    cardRadius: '1.5rem',
    fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  profile: {
    name: 'bacondev123',
    handle: 'bacondev123',
    avatarPath: './assets/profile/avatar.png',
    fallbackAvatarUrl: 'https://github.com/bacondev123.png',
    showOnlineBadge: true,
    accounts: [
      {
        id: 'main',
        username: 'bacondev123',
        label: 'Main',
        icon: '🐙',
        url: 'https://github.com/bacondev123',
        variant: 'main',
      },
      {
        id: 'alt',
        username: 'antigravityagent001',
        label: 'Alt',
        icon: '⚡',
        url: 'https://github.com/antigravityagent001',
        variant: 'alt',
      },
    ],
  },
  certificates: {
    enabled: true,
    badge: 'Soon',
    emptyTitle: 'Certificates',
    emptyMessage: 'Certifications are currently empty and will be updated as credentials become available.',
    items: [],
  },
  githubSync: {
    enabled: true,
    recommendedRepos: ['MathAnimations'],
    excludedRepos: [
      'robotics',
      'bacondev123.github.io',
      'bacondev123-github-io',
      'project isla',
      'project-isla',
      'antigravity-agent-toolkit',
      'vavr robot se',
      'vavr-robot-se',
      'realtime-sensor-mesh',
      'python youtube downloader project',
      'python-youtube-downloader',
      'crms6',
      'lsms',
    ],
  },
  assetPaths: {
    'meteor-dodge': './assets/repos/meteor-dodge.png',
    mathanimations: './assets/repos/mathanimations.png',
    'project-sao': './assets/repos/project-sao.png',
    'chinese-game-project': './assets/repos/chinese-game-project.png',
    profile: './assets/repos/profile.png',
  },
  languageColors: {
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
  },
  repositories: [
    {
      id: 'bacondev123-meteor-dodge',
      name: 'meteor-dodge',
      fullName: 'bacondev123/meteor-dodge',
      owner: {
        login: 'bacondev123',
        avatarUrl: 'https://github.com/bacondev123.png',
        htmlUrl: 'https://github.com/bacondev123',
      },
      description: 'Fast-paced arcade 2D space obstacle dodging game.',
      htmlUrl: 'https://github.com/bacondev123/meteor-dodge',
      homepage: 'https://bacondev123.github.io/meteor-dodge',
      language: 'JavaScript',
      stargazersCount: 24,
      forksCount: 3,
      openIssuesCount: 0,
      updatedAt: '2026-05-15T12:00:00Z',
      isRecommended: false,
      topics: ['game', 'arcade', 'javascript', 'html5-canvas'],
      bannerImage: './assets/repos/meteor-dodge.png',
      account: 'main',
    },
    {
      id: 'bacondev123-MathAnimations',
      name: 'MathAnimations',
      fullName: 'bacondev123/MathAnimations',
      owner: {
        login: 'bacondev123',
        avatarUrl: 'https://github.com/bacondev123.png',
        htmlUrl: 'https://github.com/bacondev123',
      },
      description: 'Programmatic math animations and visualizations built with Python and Manim.',
      htmlUrl: 'https://github.com/bacondev123/MathAnimations',
      homepage: null,
      language: 'Python',
      stargazersCount: 41,
      forksCount: 5,
      openIssuesCount: 1,
      updatedAt: '2026-05-20T14:30:00Z',
      isRecommended: true,
      topics: ['python', 'manim', 'mathematics', 'animation', 'visualization'],
      bannerImage: './assets/repos/mathanimations.png',
      account: 'main',
    },
    {
      id: 'bacondev123-Project-SAO-docs',
      name: 'Project-SAO-Temporary-Discontinued-',
      fullName: 'bacondev123/Project-SAO-Temporary-Discontinued-',
      owner: {
        login: 'bacondev123',
        avatarUrl: 'https://github.com/bacondev123.png',
        htmlUrl: 'https://github.com/bacondev123',
      },
      description: 'Sword Art Online inspired MMORPG system interface and mechanics prototype.',
      htmlUrl: 'https://github.com/bacondev123/Project-SAO-Temporary-Discontinued-',
      homepage: null,
      language: 'C#',
      stargazersCount: 18,
      forksCount: 2,
      openIssuesCount: 0,
      updatedAt: '2026-04-10T09:15:00Z',
      isRecommended: false,
      topics: ['game-development', 'unity', 'sao', 'prototype'],
      bannerImage: './assets/repos/project-sao.png',
      account: 'main',
    },
    {
      id: 'antigravity-Chinese-game-project',
      name: 'Chinese-game-project',
      fullName: 'antigravityagent001/Chinese-game-project',
      owner: {
        login: 'antigravityagent001',
        avatarUrl: 'https://github.com/antigravityagent001.png',
        htmlUrl: 'https://github.com/antigravityagent001',
      },
      description: 'Interactive cultural adventure and language learning game project.',
      htmlUrl: 'https://github.com/antigravityagent001/Chinese-game-project',
      homepage: null,
      language: 'JavaScript',
      stargazersCount: 29,
      forksCount: 3,
      openIssuesCount: 0,
      updatedAt: '2026-06-05T11:00:00Z',
      isRecommended: false,
      topics: ['chinese', 'game-project', 'interactive', 'learning'],
      bannerImage: './assets/repos/chinese-game-project.png',
      account: 'alt',
    },
    {
      id: 'antigravity-profile',
      name: 'profile',
      fullName: 'antigravityagent001/profile',
      owner: {
        login: 'antigravityagent001',
        avatarUrl: 'https://github.com/antigravityagent001.png',
        htmlUrl: 'https://github.com/antigravityagent001',
      },
      description: 'Specialized profile repository and configuration for @antigravityagent001.',
      htmlUrl: 'https://github.com/antigravityagent001/profile',
      homepage: null,
      language: 'Markdown',
      stargazersCount: 14,
      forksCount: 1,
      openIssuesCount: 0,
      updatedAt: '2026-06-01T15:00:00Z',
      isRecommended: false,
      topics: ['profile', 'github-config', 'portfolio'],
      bannerImage: './assets/repos/profile.png',
      account: 'alt',
    },
  ],
};

export function isRepoExcluded(name, excludedRepos = DEFAULT_CONFIG.githubSync.excludedRepos) {
  const lower = String(name || '').trim().toLowerCase();
  if (!lower) return true;
  const spaced = lower.replace(/[-_]/g, ' ');
  for (const item of excludedRepos || []) {
    const ex = String(item || '').trim().toLowerCase();
    if (!ex) continue;
    if (lower === ex || spaced === ex) return true;
  }
  return false;
}

export function normalizeConfig(raw) {
  const src = raw && typeof raw === 'object' ? raw : {};
  const excludedRepos = Array.isArray(src.githubSync?.excludedRepos)
    ? src.githubSync.excludedRepos
    : DEFAULT_CONFIG.githubSync.excludedRepos;

  const rawRepos = Array.isArray(src.repositories) ? src.repositories : DEFAULT_CONFIG.repositories;
  const repositories = rawRepos.filter((repo) => repo && !isRepoExcluded(repo.name, excludedRepos));

  const accounts = Array.isArray(src.profile?.accounts) && src.profile.accounts.length > 0
    ? src.profile.accounts
    : DEFAULT_CONFIG.profile.accounts;

  const defaultTab = src.site?.defaultTab === 'certificates' ? 'certificates' : 'repositories';

  return {
    site: { ...DEFAULT_CONFIG.site, ...(src.site || {}), defaultTab },
    theme: { ...DEFAULT_CONFIG.theme, ...(src.theme || {}) },
    profile: { ...DEFAULT_CONFIG.profile, ...(src.profile || {}), accounts },
    certificates: {
      ...DEFAULT_CONFIG.certificates,
      ...(src.certificates || {}),
      items: Array.isArray(src.certificates?.items) ? src.certificates.items : DEFAULT_CONFIG.certificates.items,
    },
    githubSync: {
      ...DEFAULT_CONFIG.githubSync,
      ...(src.githubSync || {}),
      recommendedRepos: Array.isArray(src.githubSync?.recommendedRepos)
        ? src.githubSync.recommendedRepos
        : DEFAULT_CONFIG.githubSync.recommendedRepos,
      excludedRepos,
    },
    assetPaths: { ...DEFAULT_CONFIG.assetPaths, ...(src.assetPaths || {}) },
    languageColors: { ...DEFAULT_CONFIG.languageColors, ...(src.languageColors || {}) },
    repositories,
  };
}

export function mergeRepositories(baseRepos, fetchedRepos, excludedRepos, recommendedRepos = []) {
  const recSet = new Set((recommendedRepos || []).map((r) => String(r).trim().toLowerCase()));
  const map = new Map();

  for (const r of baseRepos || []) {
    if (!r || isRepoExcluded(r.name, excludedRepos)) continue;
    map.set(String(r.fullName || r.name).toLowerCase(), r);
  }

  for (const f of fetchedRepos || []) {
    if (!f || isRepoExcluded(f.name, excludedRepos)) continue;
    const key = String(f.fullName || f.name).toLowerCase();
    const existing = map.get(key);
    if (existing) {
      map.set(key, {
        ...existing,
        ...f,
        description: f.description || existing.description || '',
        topics: Array.isArray(f.topics) && f.topics.length > 0 ? f.topics : existing.topics || [],
        bannerImage: existing.bannerImage || f.bannerImage || null,
        isRecommended: typeof existing.isRecommended === 'boolean'
          ? existing.isRecommended
          : recSet.has(String(f.name || '').toLowerCase()),
      });
    } else {
      map.set(key, {
        ...f,
        isRecommended: typeof f.isRecommended === 'boolean'
          ? f.isRecommended
          : recSet.has(String(f.name || '').toLowerCase()),
      });
    }
  }

  return Array.from(map.values());
}

export function getAvailableLanguages(repos) {
  const set = new Set();
  for (const r of repos || []) {
    if (r && r.language) set.add(r.language);
  }
  return Array.from(set).sort();
}

export function applyFiltersAndSort(repos, filters) {
  const {
    accountFilter = 'all',
    languageFilter = 'all',
    onlyRecommended = false,
    search = '',
    sortBy = 'recommended',
  } = filters || {};

  const q = String(search).trim().toLowerCase();
  const list = (repos || []).filter((repo) => {
    if (accountFilter !== 'all' && repo.account !== accountFilter) return false;
    if (languageFilter !== 'all' && repo.language !== languageFilter) return false;
    if (onlyRecommended && !repo.isRecommended) return false;
    if (q) {
      const inName = String(repo.name || '').toLowerCase().includes(q);
      const inDesc = String(repo.description || '').toLowerCase().includes(q);
      const inTopics = (repo.topics || []).some((t) => String(t).toLowerCase().includes(q));
      if (!inName && !inDesc && !inTopics) return false;
    }
    return true;
  });

  list.sort((a, b) => {
    if (sortBy === 'recommended') {
      if (a.isRecommended && !b.isRecommended) return -1;
      if (!a.isRecommended && b.isRecommended) return 1;
      return (b.stargazersCount || 0) - (a.stargazersCount || 0);
    }
    if (sortBy === 'stars') return (b.stargazersCount || 0) - (a.stargazersCount || 0);
    if (sortBy === 'forks') return (b.forksCount || 0) - (a.forksCount || 0);
    if (sortBy === 'name') return String(a.name || '').localeCompare(String(b.name || ''));
    if (sortBy === 'updated') return new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime();
    return 0;
  });

  return list;
}

export function buildCloneCommands(repo) {
  return {
    https: `git clone ${repo.htmlUrl}.git`,
    ssh: `git clone git@github.com:${repo.fullName}.git`,
    cli: `gh repo clone ${repo.fullName}`,
  };
}

export function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// App State
const initialConfig = normalizeConfig(DEFAULT_CONFIG);
const state = {
  config: initialConfig,
  activeTab: initialConfig.site.defaultTab,
  userChangedTab: false,
  repos: initialConfig.repositories,
  search: '',
  accountFilter: 'all',
  languageFilter: 'all',
  sortBy: 'recommended',
  onlyRecommended: false,
  activeModalRepo: null,
  activeModalMethod: 'https',
  copied: false,
  copiedRepoUrl: null,
};

let copyTimer = null;
let cardCopyTimer = null;

function applyTheme(config) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const theme = config.theme || {};
  const cssVars = {
    '--primary': theme.primaryColor,
    '--primary-hover': theme.primaryHover,
    '--text-main': theme.textMain,
    '--text-muted': theme.textMuted,
    '--bg-gradient-start': theme.bgGradientStart,
    '--bg-gradient-mid': theme.bgGradientMid,
    '--bg-gradient-end': theme.bgGradientEnd,
    '--card-bg': theme.cardBg,
    '--border-light': theme.borderLight,
    '--card-radius': theme.cardRadius,
    '--font-family': theme.fontFamily,
  };
  for (const [prop, value] of Object.entries(cssVars)) {
    if (value) root.style.setProperty(prop, value);
  }

  if (config.site?.title) {
    document.title = config.site.title;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', config.site.title);
  }
  if (config.site?.description) {
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', config.site.description);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', config.site.description);
  }
}

async function loadConfig() {
  try {
    const res = await fetch('./config.json', { cache: 'no-store' });
    if (!res.ok) return;
    const raw = await res.json();
    const normalized = normalizeConfig(raw);
    state.config = normalized;
    state.repos = normalized.repositories;
    if (!state.userChangedTab) {
      state.activeTab = normalized.site.defaultTab;
    }
    applyTheme(normalized);
    render();
  } catch {
    // Keep DEFAULT_CONFIG when config.json cannot be fetched
  }
}

async function fetchLiveRepos() {
  const { profile, githubSync, assetPaths } = state.config;
  if (!githubSync?.enabled) return;

  const accounts = profile.accounts || [];
  const recSet = new Set((githubSync.recommendedRepos || []).map((r) => String(r).trim().toLowerCase()));
  const fetched = [];

  for (const acc of accounts) {
    try {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(acc.username)}/repos?per_page=100&sort=updated`);
      if (!res.ok) continue;
      const data = await res.json();
      if (!Array.isArray(data)) continue;

      for (const item of data) {
        const name = item.name || '';
        if (isRepoExcluded(name, githubSync.excludedRepos)) continue;
        const normalizedName = name.toLowerCase();
        const bannerAsset = assetPaths[normalizedName] || null;
        fetched.push({
          id: item.id,
          name,
          fullName: item.full_name || `${acc.username}/${name}`,
          owner: {
            login: item.owner?.login || acc.username,
            avatarUrl: `https://github.com/${acc.username}.png`,
            htmlUrl: item.owner?.html_url || `https://github.com/${acc.username}`,
          },
          description: item.description || '',
          htmlUrl: item.html_url || `https://github.com/${acc.username}/${name}`,
          homepage: item.homepage || null,
          language: item.language || null,
          stargazersCount: item.stargazers_count ?? 0,
          forksCount: item.forks_count ?? 0,
          openIssuesCount: item.open_issues_count ?? 0,
          updatedAt: item.updated_at || new Date().toISOString(),
          isRecommended: recSet.has(normalizedName),
          topics: Array.isArray(item.topics) ? item.topics : [],
          bannerImage: bannerAsset,
          account: acc.id,
        });
      }
    } catch {
      // Ignore transient GitHub API network failures
    }
  }

  if (fetched.length > 0) {
    state.repos = mergeRepositories(
      state.config.repositories,
      fetched,
      githubSync.excludedRepos,
      githubSync.recommendedRepos,
    );
    render();
  }
}

function getFilteredReposFromState() {
  return applyFiltersAndSort(state.repos, {
    accountFilter: state.accountFilter,
    languageFilter: state.languageFilter,
    onlyRecommended: state.onlyRecommended,
    search: state.search,
    sortBy: state.sortBy,
  });
}

function renderReposOutputMarkup() {
  const filteredRepos = getFilteredReposFromState();
  const repoCount = state.repos.length;
  const hasActiveFilters = Boolean(
    state.search.trim() ||
    state.accountFilter !== 'all' ||
    state.languageFilter !== 'all' ||
    state.onlyRecommended,
  );

  return `
    <div class="count-bar">
      <div>
        Showing <strong>${filteredRepos.length}</strong> of ${repoCount} repositories
        ${hasActiveFilters ? `<button type="button" class="clear-link" onclick="window.clearFilters()">Clear filters</button>` : ''}
      </div>
    </div>

    ${filteredRepos.length > 0 ? `
      <div class="repos-grid">
        ${filteredRepos.map((repo) => renderRepoCard(repo)).join('')}
      </div>
    ` : `
      <div class="empty-box">
        <div class="empty-icon">🔍</div>
        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main);">No repositories found</h3>
        <p style="font-size: 0.875rem; color: var(--text-muted); margin-top: 0.25rem;">
          We couldn't find any repositories matching your current search terms or filters.
        </p>
        <button type="button" class="btn-primary" style="margin-top: 1rem;" onclick="window.clearFilters()">Reset All Filters</button>
      </div>
    `}
  `;
}

function renderCertificatesView() {
  const certs = state.config.certificates;
  const items = certs.items || [];

  if (items.length === 0) {
    return `
      <div class="empty-box">
        <div class="empty-icon">📜</div>
        ${certs.badge ? `<span class="badge-tag soon" style="display: inline-block; margin-bottom: 0.5rem;">${escapeHtml(certs.badge)}</span>` : ''}
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a;">${escapeHtml(certs.emptyTitle)}</h2>
        <p style="font-size: 0.875rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.6;">
          ${escapeHtml(certs.emptyMessage)}
        </p>
      </div>
    `;
  }

  return `
    <div class="repos-grid">
      ${items.map((item) => `
        <article class="repo-card">
          <div class="card-body">
            <div>
              <h2 class="card-title-link">${escapeHtml(item.title || 'Certificate')}</h2>
              <p class="card-description">${escapeHtml(item.issuer || '')}${item.date ? ` • ${escapeHtml(item.date)}` : ''}</p>
            </div>
            ${item.url ? `
              <div class="card-footer">
                <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" class="btn-secondary">Verify credential</a>
              </div>
            ` : ''}
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function render() {
  const app = document.getElementById('app');
  if (!app) return;

  const { site, profile, certificates } = state.config;
  const accounts = profile.accounts || [];
  const availableLangs = getAvailableLanguages(state.repos);
  const repoCount = state.repos.length;
  const fallbackAvatar = escapeHtml(profile.fallbackAvatarUrl || 'https://github.com/bacondev123.png');
  const avatarSrc = escapeHtml(profile.avatarPath || fallbackAvatar);

  app.innerHTML = `
    <header class="portal-header container">
      <div class="header-card">
        <div class="profile-section">
          <div class="avatar-wrapper">
            <img
              src="${avatarSrc}"
              alt="${escapeHtml(profile.name)}"
              class="avatar-img"
              onerror="if(this.src!=='${fallbackAvatar}')this.src='${fallbackAvatar}'"
            />
            ${profile.showOnlineBadge ? '<span class="online-badge" title="Online"></span>' : ''}
          </div>
          <div class="profile-details">
            <div class="profile-title-row">
              <h1 class="profile-name">${escapeHtml(profile.name)}</h1>
              <span class="handle-pill">github.com/${escapeHtml(profile.handle)}</span>
            </div>
            <div class="account-links-row">
              ${accounts.map((acc) => `
                <a href="${escapeHtml(acc.url)}" target="_blank" rel="noopener noreferrer" class="github-chip ${acc.variant === 'alt' ? 'alt' : 'main'}">
                  <span>${escapeHtml(acc.icon || '')} ${escapeHtml(acc.label)}: <strong>@${escapeHtml(acc.username)}</strong></span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="container" style="flex: 1; padding-bottom: 4rem;">
      <nav class="nav-tabs" aria-label="Portal Navigation">
        ${certificates.enabled !== false ? `
          <button type="button" class="tab-btn ${state.activeTab === 'certificates' ? 'active' : ''}" onclick="window.switchTab('certificates')">
            <span>📜</span>
            <span>Certificates</span>
            ${certificates.items.length > 0
              ? `<span class="badge-tag count">${certificates.items.length}</span>`
              : `<span class="badge-tag soon">${escapeHtml(certificates.badge || 'Soon')}</span>`
            }
          </button>
        ` : ''}
        <button type="button" class="tab-btn ${state.activeTab === 'repositories' ? 'active' : ''}" onclick="window.switchTab('repositories')">
          <span>💻</span>
          <span>Repositories</span>
          <span class="badge-tag count">${repoCount}</span>
        </button>
      </nav>

      ${state.activeTab === 'repositories' ? `
        <div class="toolbar-card">
          <div class="toolbar-main-row">
            <div class="search-wrapper">
              <span class="search-icon-left" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
              <input
                type="text"
                class="search-input"
                aria-label="Search repositories"
                placeholder="Search repositories by name, topic, or description..."
                value="${escapeHtml(state.search)}"
                oninput="window.handleSearch(this.value)"
              />
              <button
                type="button"
                class="search-clear-btn"
                id="search-clear-btn"
                style="display: ${state.search ? 'inline-flex' : 'none'};"
                onclick="window.clearSearch()"
                title="Clear search"
                aria-label="Clear search"
              >✕</button>
            </div>

            <div class="segmented-control" role="group" aria-label="Filter by account">
              <button type="button" class="segment-btn ${state.accountFilter === 'all' ? 'active' : ''}" onclick="window.setAccountFilter('all')">
                All Accounts
              </button>
              ${accounts.map((acc) => `
                <button type="button" class="segment-btn ${state.accountFilter === acc.id ? 'active' : ''}" onclick="window.setAccountFilter('${escapeHtml(acc.id)}')">
                  ${escapeHtml(acc.icon || '')} ${escapeHtml(acc.username)}
                </button>
              `).join('')}
            </div>

            <div class="toolbar-controls-right">
              <button type="button" class="rec-toggle-btn ${state.onlyRecommended ? 'active' : ''}" onclick="window.toggleRecommended()" aria-pressed="${state.onlyRecommended}">
                <span>⭐</span>
                <span>Recommended</span>
              </button>

              <select class="sort-select" aria-label="Sort repositories" onchange="window.setSortBy(this.value)">
                <option value="recommended" ${state.sortBy === 'recommended' ? 'selected' : ''}>Sort: Recommended</option>
                <option value="stars" ${state.sortBy === 'stars' ? 'selected' : ''}>Sort: Most Stars</option>
                <option value="updated" ${state.sortBy === 'updated' ? 'selected' : ''}>Sort: Recently Updated</option>
                <option value="name" ${state.sortBy === 'name' ? 'selected' : ''}>Sort: Alphabetical</option>
                <option value="forks" ${state.sortBy === 'forks' ? 'selected' : ''}>Sort: Most Forks</option>
              </select>
            </div>
          </div>

          ${availableLangs.length > 0 ? `
            <div class="language-filter-row" role="group" aria-label="Filter by language">
              <span class="lang-label">Language:</span>
              <button type="button" class="lang-btn ${state.languageFilter === 'all' ? 'active' : ''}" onclick="window.setLanguageFilter('all')">All</button>
              ${availableLangs.map((lang) => `
                <button type="button" class="lang-btn ${state.languageFilter === lang ? 'active' : ''}" onclick="window.setLanguageFilter('${escapeHtml(lang)}')">
                  ${escapeHtml(lang)}
                </button>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <div id="repos-output">
          ${renderReposOutputMarkup()}
        </div>
      ` : renderCertificatesView()}
    </main>

    <footer class="portal-footer">
      <div class="container footer-content">
        <div class="footer-left">
          <span>© ${new Date().getFullYear()} ${escapeHtml(site.copyrightName)}</span>
          <span>•</span>
          <span class="font-mono">${escapeHtml(site.footerText)}</span>
        </div>
        <div class="footer-right">
          ${accounts.map((acc) => `
            <a href="${escapeHtml(acc.url)}" target="_blank" rel="noopener noreferrer" class="footer-link">
              <span>${escapeHtml(acc.icon || '')} @${escapeHtml(acc.username)}</span>
            </a>
          `).join('')}
        </div>
      </div>
    </footer>

    ${state.activeModalRepo ? renderCloneModal(state.activeModalRepo) : ''}
  `;
}

function renderRepoCard(repo) {
  const languageColors = state.config.languageColors || {};
  const accounts = state.config.profile.accounts || [];
  const accountMeta = accounts.find((a) => a.id === repo.account);
  const accountIcon = accountMeta?.icon || (repo.account === 'main' ? '🐙' : '⚡');
  const langColor = repo.language ? (languageColors[repo.language] || '#64748b') : '#64748b';
  const repoJson = encodeURIComponent(JSON.stringify(repo));
  const isCardCopied = state.copiedRepoUrl === repo.htmlUrl;
  const hasBanner = Boolean(repo.bannerImage);

  return `
    <article class="repo-card">
      <a
        href="${escapeHtml(repo.htmlUrl)}"
        target="_blank"
        rel="noopener noreferrer"
        class="card-showcase-link"
        title="Open ${escapeHtml(repo.name)} on GitHub"
      >
        ${hasBanner ? `
          <img
            src="${escapeHtml(repo.bannerImage)}"
            alt="${escapeHtml(repo.name)} banner"
            class="card-showcase-img"
            loading="lazy"
            onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"
          />
        ` : ''}
        <div class="code-fallback-box" ${hasBanner ? 'style="display:none;"' : ''}>
          <div class="fallback-top-row">
            <div class="traffic-dots">
              <span class="traffic-dot red"></span>
              <span class="traffic-dot yellow"></span>
              <span class="traffic-dot green"></span>
            </div>
            <span class="fallback-repo-path">${escapeHtml(repo.owner.login)}/${escapeHtml(repo.name)}</span>
          </div>
          <div class="fallback-main-info">
            <div class="fallback-repo-title">${escapeHtml(repo.name)}</div>
            <div class="fallback-meta-tags">
              ${repo.language ? `
                <span class="fallback-lang-tag">
                  <span class="lang-dot" style="background-color: ${langColor};"></span>
                  <span>${escapeHtml(repo.language)}</span>
                </span>
              ` : ''}
              <span class="fallback-stars-count">${repo.stargazersCount || 0} ${(repo.stargazersCount || 0) === 1 ? 'star' : 'stars'}</span>
            </div>
          </div>
          <div class="fallback-bottom-row">
            <span class="font-mono">github.com</span>
            <span class="view-repo-hint">
              <span>View repo</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </span>
          </div>
        </div>
        <div class="card-account-pill">
          <span>${escapeHtml(accountIcon)}</span>
          <span>@${escapeHtml(repo.owner.login)}</span>
        </div>
      </a>

      <div class="card-body">
        <div>
          <h2>
            <a href="${escapeHtml(repo.htmlUrl)}" target="_blank" rel="noopener noreferrer" class="card-title-link">
              ${escapeHtml(repo.name)}
            </a>
          </h2>
          ${repo.isRecommended ? `
            <div>
              <span class="rec-badge">
                <span>⭐</span>
                <span>RECOMMENDED</span>
              </span>
            </div>
          ` : ''}
          <p class="card-description">${escapeHtml(repo.description || 'No description provided.')}</p>
          ${repo.topics && repo.topics.length > 0 ? `
            <div class="card-topics">
              ${repo.topics.slice(0, 4).map((t) => `<span class="topic-tag">#${escapeHtml(t)}</span>`).join('')}
              ${repo.topics.length > 4 ? `<span style="font-size: 0.65rem; color: #94a3b8; align-self: center;">+${repo.topics.length - 4} more</span>` : ''}
            </div>
          ` : ''}
        </div>

        <div class="card-footer">
          <div class="footer-stats">
            ${repo.language ? `
              <span class="stat-item">
                <span class="lang-dot" style="background-color: ${langColor};"></span>
                <span>${escapeHtml(repo.language)}</span>
              </span>
            ` : ''}
            <span class="stat-item" title="${repo.stargazersCount} stargazers">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>${repo.stargazersCount || 0}</span>
            </span>
            ${repo.forksCount > 0 ? `
              <span class="stat-item" title="${repo.forksCount} forks">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
                <span>${repo.forksCount}</span>
              </span>
            ` : ''}
          </div>

          <div class="footer-actions">
            <button
              type="button"
              class="action-icon-btn ${isCardCopied ? 'copied' : ''}"
              onclick="window.copyCloneCommand('${escapeHtml(repo.htmlUrl)}')"
              title="${isCardCopied ? 'Copied!' : 'Copy git clone URL'}"
              aria-label="${isCardCopied ? 'Copied git clone command' : `Copy git clone command for ${escapeHtml(repo.name)}`}"
            >
              ${isCardCopied
                ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>'
                : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'
              }
            </button>
            <button
              type="button"
              class="action-icon-btn"
              onclick="window.openCloneModal('${repoJson}')"
              title="Inspect clone commands and repo info"
              aria-label="Open clone commands for ${escapeHtml(repo.name)}"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCloneModal(repo) {
  const commands = buildCloneCommands(repo);
  const activeCmd = commands[state.activeModalMethod] || commands.https;

  return `
    <div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="clone-modal-title" onclick="if(event.target===this)window.closeCloneModal()">
      <div class="modal-dialog">
        <button type="button" class="modal-close-btn" onclick="window.closeCloneModal()" title="Close dialog" aria-label="Close dialog">✕</button>
        <div class="modal-header">
          <div class="modal-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
          </div>
          <div>
            <h3 id="clone-modal-title" class="modal-title">Clone Repository</h3>
            <p class="modal-subtitle">${escapeHtml(repo.fullName)}</p>
          </div>
        </div>
        <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">
          Choose your preferred method to clone this repository to your local machine:
        </p>

        <div class="modal-methods-tab" role="tablist">
          <button type="button" role="tab" aria-selected="${state.activeModalMethod === 'https'}" class="modal-tab-btn ${state.activeModalMethod === 'https' ? 'active' : ''}" onclick="window.setModalMethod('https')">HTTPS</button>
          <button type="button" role="tab" aria-selected="${state.activeModalMethod === 'ssh'}" class="modal-tab-btn ${state.activeModalMethod === 'ssh' ? 'active' : ''}" onclick="window.setModalMethod('ssh')">SSH</button>
          <button type="button" role="tab" aria-selected="${state.activeModalMethod === 'cli'}" class="modal-tab-btn ${state.activeModalMethod === 'cli' ? 'active' : ''}" onclick="window.setModalMethod('cli')">GitHub CLI</button>
        </div>

        <div class="code-box">
          <span class="code-text">${escapeHtml(activeCmd)}</span>
          <button type="button" class="copy-btn ${state.copied ? 'copied' : ''}" onclick="window.copyActiveCommand('${escapeHtml(activeCmd)}')">
            <span>${state.copied ? '✓ Copied!' : 'Copy'}</span>
          </button>
        </div>

        <div class="modal-stats-row">
          <div class="modal-stat-card">
            <span class="modal-stat-label">Stars</span>
            <span class="modal-stat-val">${repo.stargazersCount || 0}</span>
          </div>
          <div class="modal-stat-card">
            <span class="modal-stat-label">Forks</span>
            <span class="modal-stat-val">${repo.forksCount || 0}</span>
          </div>
          <div class="modal-stat-card">
            <span class="modal-stat-label">Language</span>
            <span class="modal-stat-val">${escapeHtml(repo.language || 'Code')}</span>
          </div>
        </div>

        <div class="modal-footer">
          <a href="${escapeHtml(repo.htmlUrl)}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
            <span>Open on GitHub</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
          <button type="button" class="btn-primary" onclick="window.closeCloneModal()">Done</button>
        </div>
      </div>
    </div>
  `;
}

function writeClipboard(text) {
  if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).catch(() => {});
  }
  return Promise.resolve();
}

let initialized = false;

async function initPortal() {
  if (initialized) return;
  initialized = true;
  applyTheme(state.config);
  render();
  await loadConfig();
  await fetchLiveRepos();
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  window.switchTab = function (tab) {
    state.activeTab = tab;
    state.userChangedTab = true;
    render();
  };

  window.handleSearch = function (val) {
    state.search = val;
    const output = document.getElementById('repos-output');
    const clearBtn = document.getElementById('search-clear-btn');
    if (output) {
      output.innerHTML = renderReposOutputMarkup();
      if (clearBtn) clearBtn.style.display = val ? 'inline-flex' : 'none';
    } else {
      render();
    }
  };

  window.clearSearch = function () {
    state.search = '';
    const input = document.querySelector('.search-input');
    if (input) {
      input.value = '';
      input.focus();
    }
    window.handleSearch('');
  };

  window.setAccountFilter = function (acc) {
    state.accountFilter = acc;
    render();
  };

  window.setLanguageFilter = function (lang) {
    state.languageFilter = lang;
    render();
  };

  window.toggleRecommended = function () {
    state.onlyRecommended = !state.onlyRecommended;
    render();
  };

  window.setSortBy = function (sort) {
    state.sortBy = sort;
    render();
  };

  window.clearFilters = function () {
    state.search = '';
    state.accountFilter = 'all';
    state.languageFilter = 'all';
    state.onlyRecommended = false;
    render();
  };

  window.copyCloneCommand = function (url) {
    writeClipboard(`git clone ${url}.git`);
    state.copiedRepoUrl = url;
    if (cardCopyTimer) clearTimeout(cardCopyTimer);
    render();
    cardCopyTimer = setTimeout(() => {
      state.copiedRepoUrl = null;
      render();
    }, 2000);
  };

  window.openCloneModal = function (repoJsonEncoded) {
    try {
      state.activeModalRepo = JSON.parse(decodeURIComponent(repoJsonEncoded));
      state.copied = false;
      render();
    } catch {
      // ignore invalid payload
    }
  };

  window.closeCloneModal = function () {
    if (!state.activeModalRepo) return;
    state.activeModalRepo = null;
    state.copied = false;
    render();
  };

  window.setModalMethod = function (m) {
    state.activeModalMethod = m;
    state.copied = false;
    render();
  };

  window.copyActiveCommand = function (cmd) {
    writeClipboard(cmd);
    state.copied = true;
    if (copyTimer) clearTimeout(copyTimer);
    render();
    copyTimer = setTimeout(() => {
      state.copied = false;
      render();
    }, 2000);
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.activeModalRepo) {
      window.closeCloneModal();
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initPortal();
    });
  } else {
    initPortal();
  }
}
