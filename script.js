// script.js - Pure vanilla JS application for bacondev123 Portal

const ASSET_PATHS = {
  'meteor-dodge': './assets/repos/meteor-dodge.png',
  mathanimations: './assets/repos/mathanimations.png',
  'project-sao': './assets/repos/project-sao.png',
  'chinese-game-project': './assets/repos/chinese-game-project.png',
  profile: './assets/repos/profile.png',
};

const INITIAL_REPOSITORIES = [
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
    isRecommended: true,
    topics: ['game', 'arcade', 'javascript', 'html5-canvas'],
    bannerImage: ASSET_PATHS['meteor-dodge'],
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
    bannerImage: ASSET_PATHS.mathanimations,
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
    bannerImage: ASSET_PATHS['project-sao'],
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
    isRecommended: true,
    topics: ['chinese', 'game-project', 'interactive', 'learning'],
    bannerImage: ASSET_PATHS['chinese-game-project'],
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
    bannerImage: ASSET_PATHS.profile,
    account: 'alt',
  },
];

const LANGUAGE_COLORS = {
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

const EXCLUDED_REPOS = new Set([
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
]);

// App State
let state = {
  activeTab: 'repositories',
  repos: INITIAL_REPOSITORIES,
  search: '',
  accountFilter: 'all',
  languageFilter: 'all',
  sortBy: 'recommended',
  onlyRecommended: false,
  activeModalRepo: null,
  activeModalMethod: 'https',
  copied: false,
};

function isRepoExcluded(name) {
  const lower = name.toLowerCase();
  if (EXCLUDED_REPOS.has(lower)) return true;
  for (const ex of EXCLUDED_REPOS) {
    if (lower === ex || lower.replace(/[-_]/g, ' ') === ex) return true;
  }
  return false;
}

// Live GitHub fetch
async function fetchLiveRepos() {
  const accounts = [
    { username: 'bacondev123', type: 'main' },
    { username: 'antigravityagent001', type: 'alt' },
  ];
  const fetched = [];

  for (const acc of accounts) {
    try {
      const res = await fetch(`https://api.github.com/users/${acc.username}/repos?per_page=100&sort=updated`);
      if (!res.ok) continue;
      const data = await res.json();
      if (Array.isArray(data)) {
        for (const item of data) {
          const name = item.name || '';
          if (isRepoExcluded(name)) continue;
          const normalized = name.toLowerCase();
          const bannerAsset = ASSET_PATHS[normalized] || `./assets/repos/${name}.png`;
          fetched.push({
            id: item.id,
            name: name,
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
            isRecommended: ['robotics', 'meteor', 'math', 'chinese'].some((k) => normalized.includes(k)),
            topics: Array.isArray(item.topics) ? item.topics : [],
            bannerImage: bannerAsset,
            account: acc.type,
          });
        }
      }
    } catch {
      // ignore network errors
    }
  }

  if (fetched.length > 0) {
    const map = new Map();
    for (const r of INITIAL_REPOSITORIES) {
      if (!isRepoExcluded(r.name)) map.set(r.fullName.toLowerCase(), r);
    }
    for (const f of fetched) {
      if (isRepoExcluded(f.name)) continue;
      const key = f.fullName.toLowerCase();
      const existing = map.get(key);
      if (existing) {
        map.set(key, { ...existing, ...f });
      } else {
        map.set(key, f);
      }
    }
    state.repos = Array.from(map.values());
    render();
  }
}

// Helpers
function getAvailableLanguages(repos) {
  const set = new Set();
  repos.forEach((r) => {
    if (r.language) set.add(r.language);
  });
  return Array.from(set).sort();
}

function getFilteredAndSortedRepos() {
  let list = state.repos.filter((repo) => {
    if (state.accountFilter !== 'all' && repo.account !== state.accountFilter) return false;
    if (state.languageFilter !== 'all' && repo.language !== state.languageFilter) return false;
    if (state.onlyRecommended && !repo.isRecommended) return false;
    if (state.search.trim()) {
      const q = state.search.trim().toLowerCase();
      const inName = repo.name.toLowerCase().includes(q);
      const inDesc = (repo.description || '').toLowerCase().includes(q);
      const inTopics = (repo.topics || []).some((t) => t.toLowerCase().includes(q));
      if (!inName && !inDesc && !inTopics) return false;
    }
    return true;
  });

  list.sort((a, b) => {
    if (state.sortBy === 'recommended') {
      if (a.isRecommended && !b.isRecommended) return -1;
      if (!a.isRecommended && b.isRecommended) return 1;
      return (b.stargazersCount || 0) - (a.stargazersCount || 0);
    }
    if (state.sortBy === 'stars') return (b.stargazersCount || 0) - (a.stargazersCount || 0);
    if (state.sortBy === 'forks') return (b.forksCount || 0) - (a.forksCount || 0);
    if (state.sortBy === 'name') return a.name.localeCompare(b.name);
    if (state.sortBy === 'updated') return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    return 0;
  });

  return list;
}

// Render Functions
function render() {
  const app = document.getElementById('app');
  if (!app) return;

  const filteredRepos = getFilteredAndSortedRepos();
  const availableLangs = getAvailableLanguages(state.repos);
  const repoCount = state.repos.length;
  const hasActiveFilters = Boolean(state.search.trim() || state.accountFilter !== 'all' || state.languageFilter !== 'all' || state.onlyRecommended);

  app.innerHTML = `
    <!-- Header -->
    <header class="portal-header container">
      <div class="header-card">
        <div class="profile-section">
          <div class="avatar-wrapper">
            <img
              src="./assets/profile/avatar.png"
              alt="bacondev123"
              class="avatar-img"
              onerror="if(this.src!=='https://github.com/bacondev123.png')this.src='https://github.com/bacondev123.png'"
            />
            <span class="online-badge" title="Online"></span>
          </div>
          <div class="profile-details">
            <div class="profile-title-row">
              <h1 class="profile-name">bacondev123</h1>
              <span class="handle-pill">github.com/bacondev123</span>
            </div>
            <div class="account-links-row">
              <a href="https://github.com/bacondev123" target="_blank" rel="noopener noreferrer" class="github-chip main">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                <span>Main: <strong>@bacondev123</strong></span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
              <a href="https://github.com/antigravityagent001" target="_blank" rel="noopener noreferrer" class="github-chip alt">
                <span>⚡ Alt: <strong>@antigravityagent001</strong></span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container" style="flex: 1; padding-bottom: 4rem;">
      <!-- Navigation Tabs -->
      <nav class="nav-tabs" aria-label="Portal Navigation">
        <button class="tab-btn ${state.activeTab === 'certificates' ? 'active' : ''}" onclick="window.switchTab('certificates')">
          <span>📜</span>
          <span>Certificates</span>
          <span class="badge-tag soon">Soon</span>
        </button>
        <button class="tab-btn ${state.activeTab === 'repositories' ? 'active' : ''}" onclick="window.switchTab('repositories')">
          <span>💻</span>
          <span>Repositories</span>
          <span class="badge-tag count">${repoCount}</span>
        </button>
      </nav>

      <!-- View: Repositories -->
      ${state.activeTab === 'repositories' ? `
        <!-- Toolbar -->
        <div class="toolbar-card">
          <div class="toolbar-main-row">
            <!-- Search -->
            <div class="search-wrapper">
              <span class="search-icon-left">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
              <input
                type="text"
                class="search-input"
                placeholder="Search repositories by name, topic, or description..."
                value="${escapeHtml(state.search)}"
                oninput="window.handleSearch(this.value)"
              />
              ${state.search ? `
                <button class="search-clear-btn" onclick="window.handleSearch('')" title="Clear search">✕</button>
              ` : ''}
            </div>

            <!-- Account Filter -->
            <div class="segmented-control">
              <button class="segment-btn ${state.accountFilter === 'all' ? 'active' : ''}" onclick="window.setAccountFilter('all')">
                All Accounts
              </button>
              <button class="segment-btn ${state.accountFilter === 'main' ? 'active' : ''}" onclick="window.setAccountFilter('main')">
                🐙 bacondev123
              </button>
              <button class="segment-btn ${state.accountFilter === 'alt' ? 'active' : ''}" onclick="window.setAccountFilter('alt')">
                ⚡ antigravityagent001
              </button>
            </div>

            <!-- Sort and Recommended -->
            <div class="toolbar-controls-right">
              <button class="rec-toggle-btn ${state.onlyRecommended ? 'active' : ''}" onclick="window.toggleRecommended()">
                <span>⭐</span>
                <span>Recommended</span>
              </button>

              <select class="sort-select" onchange="window.setSortBy(this.value)">
                <option value="recommended" ${state.sortBy === 'recommended' ? 'selected' : ''}>Sort: Recommended</option>
                <option value="stars" ${state.sortBy === 'stars' ? 'selected' : ''}>Sort: Most Stars</option>
                <option value="updated" ${state.sortBy === 'updated' ? 'selected' : ''}>Sort: Recently Updated</option>
                <option value="name" ${state.sortBy === 'name' ? 'selected' : ''}>Sort: Alphabetical</option>
                <option value="forks" ${state.sortBy === 'forks' ? 'selected' : ''}>Sort: Most Forks</option>
              </select>
            </div>
          </div>

          <!-- Language Filters -->
          ${availableLangs.length > 0 ? `
            <div class="language-filter-row">
              <span class="lang-label">Language:</span>
              <button class="lang-btn ${state.languageFilter === 'all' ? 'active' : ''}" onclick="window.setLanguageFilter('all')">All</button>
              ${availableLangs.map((lang) => `
                <button class="lang-btn ${state.languageFilter === lang ? 'active' : ''}" onclick="window.setLanguageFilter('${escapeHtml(lang)}')">
                  ${escapeHtml(lang)}
                </button>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <!-- Count Bar -->
        <div class="count-bar">
          <div>
            Showing <strong>${filteredRepos.length}</strong> of ${repoCount} repositories
            ${hasActiveFilters ? `<span class="clear-link" onclick="window.clearFilters()">Clear filters</span>` : ''}
          </div>
        </div>

        <!-- Cards Grid -->
        ${filteredRepos.length > 0 ? `
          <div class="repos-grid">
            ${filteredRepos.map((repo) => renderRepoCard(repo)).join('')}
          </div>
        ` : `
          <div class="empty-box">
            <div class="empty-icon">🔍</div>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: #1e293b;">No repositories found</h3>
            <p style="font-size: 0.875rem; color: #64748b; margin-top: 0.25rem;">
              We couldn't find any repositories matching your current search terms or filters.
            </p>
            <button class="btn-primary" style="margin-top: 1rem;" onclick="window.clearFilters()">Reset All Filters</button>
          </div>
        `}
      ` : `
        <!-- View: Certificates -->
        <div class="empty-box">
          <div class="empty-icon">📜</div>
          <span class="badge-tag soon" style="display: inline-block; margin-bottom: 0.5rem;">Coming Soon</span>
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a;">Certificates</h2>
          <p style="font-size: 0.875rem; color: #64748b; margin-top: 0.5rem; line-height: 1.6;">
            Certifications are currently empty and will be updated as credentials become available.
          </p>
        </div>
      `}
    </main>

    <!-- Footer -->
    <footer class="portal-footer">
      <div class="container footer-content">
        <div class="footer-left">
          <span>© ${new Date().getFullYear()} bacondev123</span>
          <span>•</span>
          <span class="font-mono">Developer Portal</span>
        </div>
        <div class="footer-right">
          <a href="https://github.com/bacondev123" target="_blank" rel="noopener noreferrer" class="footer-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path></svg>
            <span>@bacondev123</span>
          </a>
          <a href="https://github.com/antigravityagent001" target="_blank" rel="noopener noreferrer" class="footer-link">
            <span>⚡ @antigravityagent001</span>
          </a>
        </div>
      </div>
    </footer>

    <!-- Clone Modal Dialog -->
    ${state.activeModalRepo ? renderCloneModal(state.activeModalRepo) : ''}
  `;
}

function renderRepoCard(repo) {
  const langColor = repo.language ? (LANGUAGE_COLORS[repo.language] || '#64748b') : '#64748b';
  const repoJson = encodeURIComponent(JSON.stringify(repo));

  return `
    <article class="repo-card">
      <!-- Clickable Showcase Header -->
      <a
        href="${escapeHtml(repo.htmlUrl)}"
        target="_blank"
        rel="noopener noreferrer"
        class="card-showcase-link"
        title="Open ${escapeHtml(repo.name)} on GitHub"
      >
        <div class="code-fallback-box">
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
              <span class="fallback-stars-count">${repo.stargazersCount || 0} stars</span>
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
          <span>${repo.account === 'main' ? '🐙' : '⚡'}</span>
          <span>@${escapeHtml(repo.owner.login)}</span>
        </div>
      </a>

      <!-- Card Body -->
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

        <!-- Footer -->
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
            <button class="action-icon-btn" onclick="window.copyCloneCommand('${escapeHtml(repo.htmlUrl)}')" title="Copy git clone URL">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
            <button class="action-icon-btn" onclick="window.openCloneModal('${repoJson}')" title="Inspect clone commands and repo info">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCloneModal(repo) {
  const commands = {
    https: `git clone ${repo.htmlUrl}.git`,
    ssh: `git clone git@github.com:${repo.fullName}.git`,
    cli: `gh repo clone ${repo.fullName}`,
  };
  const activeCmd = commands[state.activeModalMethod];

  return `
    <div class="modal-overlay" onclick="if(event.target===this)window.closeCloneModal()">
      <div class="modal-dialog">
        <button class="modal-close-btn" onclick="window.closeCloneModal()" title="Close dialog">✕</button>
        <div class="modal-header">
          <div class="modal-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
          </div>
          <div>
            <h3 class="modal-title">Clone Repository</h3>
            <p class="modal-subtitle">${escapeHtml(repo.fullName)}</p>
          </div>
        </div>
        <p style="font-size: 0.75rem; color: #64748b; margin-top: 0.25rem;">
          Choose your preferred method to clone this repository to your local machine:
        </p>

        <!-- Method Tabs -->
        <div class="modal-methods-tab">
          <button class="modal-tab-btn ${state.activeModalMethod === 'https' ? 'active' : ''}" onclick="window.setModalMethod('https')">HTTPS</button>
          <button class="modal-tab-btn ${state.activeModalMethod === 'ssh' ? 'active' : ''}" onclick="window.setModalMethod('ssh')">SSH</button>
          <button class="modal-tab-btn ${state.activeModalMethod === 'cli' ? 'active' : ''}" onclick="window.setModalMethod('cli')">GitHub CLI</button>
        </div>

        <!-- Code Snippet Box -->
        <div class="code-box">
          <span class="code-text">${escapeHtml(activeCmd)}</span>
          <button class="copy-btn ${state.copied ? 'copied' : ''}" onclick="window.copyActiveCommand('${escapeHtml(activeCmd)}')">
            <span>${state.copied ? '✓ Copied!' : 'Copy'}</span>
          </button>
        </div>

        <!-- Stats -->
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

        <!-- Footer -->
        <div class="modal-footer">
          <a href="${escapeHtml(repo.htmlUrl)}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
            <span>Open on GitHub</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
          <button class="btn-primary" onclick="window.closeCloneModal()">Done</button>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Global actions for inline HTML events
window.switchTab = function (tab) {
  state.activeTab = tab;
  render();
};

window.handleSearch = function (val) {
  state.search = val;
  render();
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
  navigator.clipboard.writeText(`git clone ${url}.git`);
  alert('Copied git clone command to clipboard!');
};

window.openCloneModal = function (repoJsonEncoded) {
  try {
    state.activeModalRepo = JSON.parse(decodeURIComponent(repoJsonEncoded));
    state.copied = false;
    render();
  } catch {}
};

window.closeCloneModal = function () {
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
  navigator.clipboard.writeText(cmd);
  state.copied = true;
  render();
  setTimeout(() => {
    state.copied = false;
    render();
  }, 2000);
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  render();
  fetchLiveRepos();
});
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  render();
  fetchLiveRepos();
}
