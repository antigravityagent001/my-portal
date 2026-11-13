(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={site:{title:`bacondev123 Portal`,description:`Centralized portal syncing repositories from bacondev123 and antigravityagent001.`,copyrightName:`bacondev123`,footerText:`Developer Portal`,defaultTab:`repositories`},theme:{primaryColor:`#2563eb`,primaryHover:`#1d4ed8`,textMain:`#1e293b`,textMuted:`#64748b`,bgGradientStart:`#e8f2fe`,bgGradientMid:`#edf5fd`,bgGradientEnd:`#e4eefb`,cardBg:`rgba(255, 255, 255, 0.95)`,borderLight:`rgba(226, 232, 240, 0.85)`,cardRadius:`1.5rem`,fontFamily:`'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`},profile:{name:`bacondev123`,handle:`bacondev123`,avatarPath:`./assets/profile/avatar.png`,fallbackAvatarUrl:`https://github.com/bacondev123.png`,showOnlineBadge:!0,accounts:[{id:`main`,username:`bacondev123`,label:`Main`,icon:`🐙`,url:`https://github.com/bacondev123`,variant:`main`},{id:`alt`,username:`antigravityagent001`,label:`Alt`,icon:`⚡`,url:`https://github.com/antigravityagent001`,variant:`alt`}]},certificates:{enabled:!0,badge:`Soon`,emptyTitle:`Certificates`,emptyMessage:`Certifications are currently empty and will be updated as credentials become available.`,items:[]},githubSync:{enabled:!0,recommendedRepos:[`MathAnimations`],excludedRepos:[`robotics`,`bacondev123.github.io`,`bacondev123-github-io`,`project isla`,`project-isla`,`antigravity-agent-toolkit`,`vavr robot se`,`vavr-robot-se`,`realtime-sensor-mesh`,`python youtube downloader project`,`python-youtube-downloader`,`crms6`,`lsms`]},assetPaths:{"meteor-dodge":`./assets/repos/meteor-dodge.png`,mathanimations:`./assets/repos/mathanimations.png`,"project-sao":`./assets/repos/project-sao.png`,"chinese-game-project":`./assets/repos/chinese-game-project.png`,profile:`./assets/repos/profile.png`},languageColors:{Python:`#3572A5`,"C++":`#f34b7d`,"C#":`#178600`,C:`#555555`,TypeScript:`#3178c6`,JavaScript:`#f1e05a`,HTML:`#e34c26`,CSS:`#563d7c`,Java:`#b07219`,Go:`#00ADD8`,Rust:`#dea584`,Markdown:`#083fa1`},repositories:[{id:`bacondev123-meteor-dodge`,name:`meteor-dodge`,fullName:`bacondev123/meteor-dodge`,owner:{login:`bacondev123`,avatarUrl:`https://github.com/bacondev123.png`,htmlUrl:`https://github.com/bacondev123`},description:`Fast-paced arcade 2D space obstacle dodging game.`,htmlUrl:`https://github.com/bacondev123/meteor-dodge`,homepage:`https://bacondev123.github.io/meteor-dodge`,language:`JavaScript`,stargazersCount:24,forksCount:3,openIssuesCount:0,updatedAt:`2026-05-15T12:00:00Z`,isRecommended:!1,topics:[`game`,`arcade`,`javascript`,`html5-canvas`],bannerImage:`./assets/repos/meteor-dodge.png`,account:`main`},{id:`bacondev123-MathAnimations`,name:`MathAnimations`,fullName:`bacondev123/MathAnimations`,owner:{login:`bacondev123`,avatarUrl:`https://github.com/bacondev123.png`,htmlUrl:`https://github.com/bacondev123`},description:`Programmatic math animations and visualizations built with Python and Manim.`,htmlUrl:`https://github.com/bacondev123/MathAnimations`,homepage:null,language:`Python`,stargazersCount:41,forksCount:5,openIssuesCount:1,updatedAt:`2026-05-20T14:30:00Z`,isRecommended:!0,topics:[`python`,`manim`,`mathematics`,`animation`,`visualization`],bannerImage:`./assets/repos/mathanimations.png`,account:`main`},{id:`bacondev123-Project-SAO-docs`,name:`Project-SAO-Temporary-Discontinued-`,fullName:`bacondev123/Project-SAO-Temporary-Discontinued-`,owner:{login:`bacondev123`,avatarUrl:`https://github.com/bacondev123.png`,htmlUrl:`https://github.com/bacondev123`},description:`Sword Art Online inspired MMORPG system interface and mechanics prototype.`,htmlUrl:`https://github.com/bacondev123/Project-SAO-Temporary-Discontinued-`,homepage:null,language:`C#`,stargazersCount:18,forksCount:2,openIssuesCount:0,updatedAt:`2026-04-10T09:15:00Z`,isRecommended:!1,topics:[`game-development`,`unity`,`sao`,`prototype`],bannerImage:`./assets/repos/project-sao.png`,account:`main`},{id:`antigravity-Chinese-game-project`,name:`Chinese-game-project`,fullName:`antigravityagent001/Chinese-game-project`,owner:{login:`antigravityagent001`,avatarUrl:`https://github.com/antigravityagent001.png`,htmlUrl:`https://github.com/antigravityagent001`},description:`Interactive cultural adventure and language learning game project.`,htmlUrl:`https://github.com/antigravityagent001/Chinese-game-project`,homepage:null,language:`JavaScript`,stargazersCount:29,forksCount:3,openIssuesCount:0,updatedAt:`2026-06-05T11:00:00Z`,isRecommended:!1,topics:[`chinese`,`game-project`,`interactive`,`learning`],bannerImage:`./assets/repos/chinese-game-project.png`,account:`alt`},{id:`antigravity-profile`,name:`profile`,fullName:`antigravityagent001/profile`,owner:{login:`antigravityagent001`,avatarUrl:`https://github.com/antigravityagent001.png`,htmlUrl:`https://github.com/antigravityagent001`},description:`Specialized profile repository and configuration for @antigravityagent001.`,htmlUrl:`https://github.com/antigravityagent001/profile`,homepage:null,language:`Markdown`,stargazersCount:14,forksCount:1,openIssuesCount:0,updatedAt:`2026-06-01T15:00:00Z`,isRecommended:!1,topics:[`profile`,`github-config`,`portfolio`],bannerImage:`./assets/repos/profile.png`,account:`alt`}]};function t(t,n=e.githubSync.excludedRepos){let r=String(t||``).trim().toLowerCase();if(!r)return!0;let i=r.replace(/[-_]/g,` `);for(let e of n||[]){let t=String(e||``).trim().toLowerCase();if(t&&(r===t||i===t))return!0}return!1}function n(n){let r=n&&typeof n==`object`?n:{},i=Array.isArray(r.githubSync?.excludedRepos)?r.githubSync.excludedRepos:e.githubSync.excludedRepos,a=(Array.isArray(r.repositories)?r.repositories:e.repositories).filter(e=>e&&!t(e.name,i)),o=Array.isArray(r.profile?.accounts)&&r.profile.accounts.length>0?r.profile.accounts:e.profile.accounts,s=r.site?.defaultTab===`certificates`?`certificates`:`repositories`;return{site:{...e.site,...r.site||{},defaultTab:s},theme:{...e.theme,...r.theme||{}},profile:{...e.profile,...r.profile||{},accounts:o},certificates:{...e.certificates,...r.certificates||{},items:Array.isArray(r.certificates?.items)?r.certificates.items:e.certificates.items},githubSync:{...e.githubSync,...r.githubSync||{},recommendedRepos:Array.isArray(r.githubSync?.recommendedRepos)?r.githubSync.recommendedRepos:e.githubSync.recommendedRepos,excludedRepos:i},assetPaths:{...e.assetPaths,...r.assetPaths||{}},languageColors:{...e.languageColors,...r.languageColors||{}},repositories:a}}function r(e,n,r,i=[]){let a=new Set((i||[]).map(e=>String(e).trim().toLowerCase())),o=new Map;for(let n of e||[])n&&!t(n.name,r)&&o.set(String(n.fullName||n.name).toLowerCase(),n);for(let e of n||[]){if(!e||t(e.name,r))continue;let n=String(e.fullName||e.name).toLowerCase(),i=o.get(n);i?o.set(n,{...i,...e,description:e.description||i.description||``,topics:Array.isArray(e.topics)&&e.topics.length>0?e.topics:i.topics||[],bannerImage:i.bannerImage||e.bannerImage||null,isRecommended:typeof i.isRecommended==`boolean`?i.isRecommended:a.has(String(e.name||``).toLowerCase())}):o.set(n,{...e,isRecommended:typeof e.isRecommended==`boolean`?e.isRecommended:a.has(String(e.name||``).toLowerCase())})}return Array.from(o.values())}function i(e){let t=new Set;for(let n of e||[])n&&n.language&&t.add(n.language);return Array.from(t).sort()}function a(e,t){let{accountFilter:n=`all`,languageFilter:r=`all`,onlyRecommended:i=!1,search:a=``,sortBy:o=`recommended`}=t||{},s=String(a).trim().toLowerCase(),c=(e||[]).filter(e=>{if(n!==`all`&&e.account!==n||r!==`all`&&e.language!==r||i&&!e.isRecommended)return!1;if(s){let t=String(e.name||``).toLowerCase().includes(s),n=String(e.description||``).toLowerCase().includes(s),r=(e.topics||[]).some(e=>String(e).toLowerCase().includes(s));if(!t&&!n&&!r)return!1}return!0});return c.sort((e,t)=>o===`recommended`?e.isRecommended&&!t.isRecommended?-1:!e.isRecommended&&t.isRecommended?1:(t.stargazersCount||0)-(e.stargazersCount||0):o===`stars`?(t.stargazersCount||0)-(e.stargazersCount||0):o===`forks`?(t.forksCount||0)-(e.forksCount||0):o===`name`?String(e.name||``).localeCompare(String(t.name||``)):o===`updated`?new Date(t.updatedAt||0).getTime()-new Date(e.updatedAt||0).getTime():0),c}function o(e){return{https:`git clone ${e.htmlUrl}.git`,ssh:`git clone git@github.com:${e.fullName}.git`,cli:`gh repo clone ${e.fullName}`}}function s(e){return e?String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`):``}var c=n(e),l={config:c,activeTab:c.site.defaultTab,userChangedTab:!1,repos:c.repositories,search:``,accountFilter:`all`,languageFilter:`all`,sortBy:`recommended`,onlyRecommended:!1,activeModalRepo:null,activeModalMethod:`https`,copied:!1,copiedRepoUrl:null},u=null,d=null;function f(e){if(typeof document>`u`)return;let t=document.documentElement,n=e.theme||{},r={"--primary":n.primaryColor,"--primary-hover":n.primaryHover,"--text-main":n.textMain,"--text-muted":n.textMuted,"--bg-gradient-start":n.bgGradientStart,"--bg-gradient-mid":n.bgGradientMid,"--bg-gradient-end":n.bgGradientEnd,"--card-bg":n.cardBg,"--border-light":n.borderLight,"--card-radius":n.cardRadius,"--font-family":n.fontFamily};for(let[e,n]of Object.entries(r))n&&t.style.setProperty(e,n);if(e.site?.title){document.title=e.site.title;let t=document.querySelector(`meta[property="og:title"]`);t&&t.setAttribute(`content`,e.site.title)}if(e.site?.description){let t=document.querySelector(`meta[name="description"]`);t&&t.setAttribute(`content`,e.site.description);let n=document.querySelector(`meta[property="og:description"]`);n&&n.setAttribute(`content`,e.site.description)}}async function p(){try{let e=await fetch(`./config.json`,{cache:`no-store`});if(!e.ok)return;let t=n(await e.json());l.config=t,l.repos=t.repositories,l.userChangedTab||(l.activeTab=t.site.defaultTab),f(t),v()}catch{}}async function m(){let{profile:e,githubSync:n,assetPaths:i}=l.config;if(!n?.enabled)return;let a=e.accounts||[],o=new Set((n.recommendedRepos||[]).map(e=>String(e).trim().toLowerCase())),s=[];for(let e of a)try{let r=await fetch(`https://api.github.com/users/${encodeURIComponent(e.username)}/repos?per_page=100&sort=updated`);if(!r.ok)continue;let a=await r.json();if(!Array.isArray(a))continue;for(let r of a){let a=r.name||``;if(t(a,n.excludedRepos))continue;let c=a.toLowerCase(),l=i[c]||null;s.push({id:r.id,name:a,fullName:r.full_name||`${e.username}/${a}`,owner:{login:r.owner?.login||e.username,avatarUrl:`https://github.com/${e.username}.png`,htmlUrl:r.owner?.html_url||`https://github.com/${e.username}`},description:r.description||``,htmlUrl:r.html_url||`https://github.com/${e.username}/${a}`,homepage:r.homepage||null,language:r.language||null,stargazersCount:r.stargazers_count??0,forksCount:r.forks_count??0,openIssuesCount:r.open_issues_count??0,updatedAt:r.updated_at||new Date().toISOString(),isRecommended:o.has(c),topics:Array.isArray(r.topics)?r.topics:[],bannerImage:l,account:e.id})}}catch{}s.length>0&&(l.repos=r(l.config.repositories,s,n.excludedRepos,n.recommendedRepos),v())}function h(){return a(l.repos,{accountFilter:l.accountFilter,languageFilter:l.languageFilter,onlyRecommended:l.onlyRecommended,search:l.search,sortBy:l.sortBy})}function g(){let e=h(),t=l.repos.length,n=!!(l.search.trim()||l.accountFilter!==`all`||l.languageFilter!==`all`||l.onlyRecommended);return`
    <div class="count-bar">
      <div>
        Showing <strong>${e.length}</strong> of ${t} repositories
        ${n?`<button type="button" class="clear-link" onclick="window.clearFilters()">Clear filters</button>`:``}
      </div>
    </div>

    ${e.length>0?`
      <div class="repos-grid">
        ${e.map(e=>y(e)).join(``)}
      </div>
    `:`
      <div class="empty-box">
        <div class="empty-icon">🔍</div>
        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main);">No repositories found</h3>
        <p style="font-size: 0.875rem; color: var(--text-muted); margin-top: 0.25rem;">
          We couldn't find any repositories matching your current search terms or filters.
        </p>
        <button type="button" class="btn-primary" style="margin-top: 1rem;" onclick="window.clearFilters()">Reset All Filters</button>
      </div>
    `}
  `}function _(){let e=l.config.certificates,t=e.items||[];return t.length===0?`
      <div class="empty-box">
        <div class="empty-icon">📜</div>
        ${e.badge?`<span class="badge-tag soon" style="display: inline-block; margin-bottom: 0.5rem;">${s(e.badge)}</span>`:``}
        <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a;">${s(e.emptyTitle)}</h2>
        <p style="font-size: 0.875rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.6;">
          ${s(e.emptyMessage)}
        </p>
      </div>
    `:`
    <div class="repos-grid">
      ${t.map(e=>`
        <article class="repo-card">
          <div class="card-body">
            <div>
              <h2 class="card-title-link">${s(e.title||`Certificate`)}</h2>
              <p class="card-description">${s(e.issuer||``)}${e.date?` • ${s(e.date)}`:``}</p>
            </div>
            ${e.url?`
              <div class="card-footer">
                <a href="${s(e.url)}" target="_blank" rel="noopener noreferrer" class="btn-secondary">Verify credential</a>
              </div>
            `:``}
          </div>
        </article>
      `).join(``)}
    </div>
  `}function v(){let e=document.getElementById(`app`);if(!e)return;let{site:t,profile:n,certificates:r}=l.config,a=n.accounts||[],o=i(l.repos),c=l.repos.length,u=s(n.fallbackAvatarUrl||`https://github.com/bacondev123.png`);e.innerHTML=`
    <header class="portal-header container">
      <div class="header-card">
        <div class="profile-section">
          <div class="avatar-wrapper">
            <img
              src="${s(n.avatarPath||u)}"
              alt="${s(n.name)}"
              class="avatar-img"
              onerror="if(this.src!=='${u}')this.src='${u}'"
            />
            ${n.showOnlineBadge?`<span class="online-badge" title="Online"></span>`:``}
          </div>
          <div class="profile-details">
            <div class="profile-title-row">
              <h1 class="profile-name">${s(n.name)}</h1>
              <span class="handle-pill">github.com/${s(n.handle)}</span>
            </div>
            <div class="account-links-row">
              ${a.map(e=>`
                <a href="${s(e.url)}" target="_blank" rel="noopener noreferrer" class="github-chip ${e.variant===`alt`?`alt`:`main`}">
                  <span>${s(e.icon||``)} ${s(e.label)}: <strong>@${s(e.username)}</strong></span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              `).join(``)}
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="container" style="flex: 1; padding-bottom: 4rem;">
      <nav class="nav-tabs" aria-label="Portal Navigation">
        ${r.enabled===!1?``:`
          <button type="button" class="tab-btn ${l.activeTab===`certificates`?`active`:``}" onclick="window.switchTab('certificates')">
            <span>📜</span>
            <span>Certificates</span>
            ${r.items.length>0?`<span class="badge-tag count">${r.items.length}</span>`:`<span class="badge-tag soon">${s(r.badge||`Soon`)}</span>`}
          </button>
        `}
        <button type="button" class="tab-btn ${l.activeTab===`repositories`?`active`:``}" onclick="window.switchTab('repositories')">
          <span>💻</span>
          <span>Repositories</span>
          <span class="badge-tag count">${c}</span>
        </button>
      </nav>

      ${l.activeTab===`repositories`?`
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
                value="${s(l.search)}"
                oninput="window.handleSearch(this.value)"
              />
              <button
                type="button"
                class="search-clear-btn"
                id="search-clear-btn"
                style="display: ${l.search?`inline-flex`:`none`};"
                onclick="window.clearSearch()"
                title="Clear search"
                aria-label="Clear search"
              >✕</button>
            </div>

            <div class="segmented-control" role="group" aria-label="Filter by account">
              <button type="button" class="segment-btn ${l.accountFilter===`all`?`active`:``}" onclick="window.setAccountFilter('all')">
                All Accounts
              </button>
              ${a.map(e=>`
                <button type="button" class="segment-btn ${l.accountFilter===e.id?`active`:``}" onclick="window.setAccountFilter('${s(e.id)}')">
                  ${s(e.icon||``)} ${s(e.username)}
                </button>
              `).join(``)}
            </div>

            <div class="toolbar-controls-right">
              <button type="button" class="rec-toggle-btn ${l.onlyRecommended?`active`:``}" onclick="window.toggleRecommended()" aria-pressed="${l.onlyRecommended}">
                <span>⭐</span>
                <span>Recommended</span>
              </button>

              <select class="sort-select" aria-label="Sort repositories" onchange="window.setSortBy(this.value)">
                <option value="recommended" ${l.sortBy===`recommended`?`selected`:``}>Sort: Recommended</option>
                <option value="stars" ${l.sortBy===`stars`?`selected`:``}>Sort: Most Stars</option>
                <option value="updated" ${l.sortBy===`updated`?`selected`:``}>Sort: Recently Updated</option>
                <option value="name" ${l.sortBy===`name`?`selected`:``}>Sort: Alphabetical</option>
                <option value="forks" ${l.sortBy===`forks`?`selected`:``}>Sort: Most Forks</option>
              </select>
            </div>
          </div>

          ${o.length>0?`
            <div class="language-filter-row" role="group" aria-label="Filter by language">
              <span class="lang-label">Language:</span>
              <button type="button" class="lang-btn ${l.languageFilter===`all`?`active`:``}" onclick="window.setLanguageFilter('all')">All</button>
              ${o.map(e=>`
                <button type="button" class="lang-btn ${l.languageFilter===e?`active`:``}" onclick="window.setLanguageFilter('${s(e)}')">
                  ${s(e)}
                </button>
              `).join(``)}
            </div>
          `:``}
        </div>

        <div id="repos-output">
          ${g()}
        </div>
      `:_()}
    </main>

    <footer class="portal-footer">
      <div class="container footer-content">
        <div class="footer-left">
          <span>© ${new Date().getFullYear()} ${s(t.copyrightName)}</span>
          <span>•</span>
          <span class="font-mono">${s(t.footerText)}</span>
        </div>
        <div class="footer-right">
          ${a.map(e=>`
            <a href="${s(e.url)}" target="_blank" rel="noopener noreferrer" class="footer-link">
              <span>${s(e.icon||``)} @${s(e.username)}</span>
            </a>
          `).join(``)}
        </div>
      </div>
    </footer>

    ${l.activeModalRepo?b(l.activeModalRepo):``}
  `}function y(e){let t=l.config.languageColors||{},n=(l.config.profile.accounts||[]).find(t=>t.id===e.account)?.icon||(e.account===`main`?`🐙`:`⚡`),r=e.language&&t[e.language]||`#64748b`,i=encodeURIComponent(JSON.stringify(e)),a=l.copiedRepoUrl===e.htmlUrl,o=!!e.bannerImage;return`
    <article class="repo-card">
      <a
        href="${s(e.htmlUrl)}"
        target="_blank"
        rel="noopener noreferrer"
        class="card-showcase-link"
        title="Open ${s(e.name)} on GitHub"
      >
        ${o?`
          <img
            src="${s(e.bannerImage)}"
            alt="${s(e.name)} banner"
            class="card-showcase-img"
            loading="lazy"
            onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"
          />
        `:``}
        <div class="code-fallback-box" ${o?`style="display:none;"`:``}>
          <div class="fallback-top-row">
            <div class="traffic-dots">
              <span class="traffic-dot red"></span>
              <span class="traffic-dot yellow"></span>
              <span class="traffic-dot green"></span>
            </div>
            <span class="fallback-repo-path">${s(e.owner.login)}/${s(e.name)}</span>
          </div>
          <div class="fallback-main-info">
            <div class="fallback-repo-title">${s(e.name)}</div>
            <div class="fallback-meta-tags">
              ${e.language?`
                <span class="fallback-lang-tag">
                  <span class="lang-dot" style="background-color: ${r};"></span>
                  <span>${s(e.language)}</span>
                </span>
              `:``}
              <span class="fallback-stars-count">${e.stargazersCount||0} ${(e.stargazersCount||0)===1?`star`:`stars`}</span>
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
          <span>${s(n)}</span>
          <span>@${s(e.owner.login)}</span>
        </div>
      </a>

      <div class="card-body">
        <div>
          <h2>
            <a href="${s(e.htmlUrl)}" target="_blank" rel="noopener noreferrer" class="card-title-link">
              ${s(e.name)}
            </a>
          </h2>
          ${e.isRecommended?`
            <div>
              <span class="rec-badge">
                <span>⭐</span>
                <span>RECOMMENDED</span>
              </span>
            </div>
          `:``}
          <p class="card-description">${s(e.description||`No description provided.`)}</p>
          ${e.topics&&e.topics.length>0?`
            <div class="card-topics">
              ${e.topics.slice(0,4).map(e=>`<span class="topic-tag">#${s(e)}</span>`).join(``)}
              ${e.topics.length>4?`<span style="font-size: 0.65rem; color: #94a3b8; align-self: center;">+${e.topics.length-4} more</span>`:``}
            </div>
          `:``}
        </div>

        <div class="card-footer">
          <div class="footer-stats">
            ${e.language?`
              <span class="stat-item">
                <span class="lang-dot" style="background-color: ${r};"></span>
                <span>${s(e.language)}</span>
              </span>
            `:``}
            <span class="stat-item" title="${e.stargazersCount} stargazers">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>${e.stargazersCount||0}</span>
            </span>
            ${e.forksCount>0?`
              <span class="stat-item" title="${e.forksCount} forks">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
                <span>${e.forksCount}</span>
              </span>
            `:``}
          </div>

          <div class="footer-actions">
            <button
              type="button"
              class="action-icon-btn ${a?`copied`:``}"
              onclick="window.copyCloneCommand('${s(e.htmlUrl)}')"
              title="${a?`Copied!`:`Copy git clone URL`}"
              aria-label="${a?`Copied git clone command`:`Copy git clone command for ${s(e.name)}`}"
            >
              ${a?`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`}
            </button>
            <button
              type="button"
              class="action-icon-btn"
              onclick="window.openCloneModal('${i}')"
              title="Inspect clone commands and repo info"
              aria-label="Open clone commands for ${s(e.name)}"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  `}function b(e){let t=o(e),n=t[l.activeModalMethod]||t.https;return`
    <div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="clone-modal-title" onclick="if(event.target===this)window.closeCloneModal()">
      <div class="modal-dialog">
        <button type="button" class="modal-close-btn" onclick="window.closeCloneModal()" title="Close dialog" aria-label="Close dialog">✕</button>
        <div class="modal-header">
          <div class="modal-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
          </div>
          <div>
            <h3 id="clone-modal-title" class="modal-title">Clone Repository</h3>
            <p class="modal-subtitle">${s(e.fullName)}</p>
          </div>
        </div>
        <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">
          Choose your preferred method to clone this repository to your local machine:
        </p>

        <div class="modal-methods-tab" role="tablist">
          <button type="button" role="tab" aria-selected="${l.activeModalMethod===`https`}" class="modal-tab-btn ${l.activeModalMethod===`https`?`active`:``}" onclick="window.setModalMethod('https')">HTTPS</button>
          <button type="button" role="tab" aria-selected="${l.activeModalMethod===`ssh`}" class="modal-tab-btn ${l.activeModalMethod===`ssh`?`active`:``}" onclick="window.setModalMethod('ssh')">SSH</button>
          <button type="button" role="tab" aria-selected="${l.activeModalMethod===`cli`}" class="modal-tab-btn ${l.activeModalMethod===`cli`?`active`:``}" onclick="window.setModalMethod('cli')">GitHub CLI</button>
        </div>

        <div class="code-box">
          <span class="code-text">${s(n)}</span>
          <button type="button" class="copy-btn ${l.copied?`copied`:``}" onclick="window.copyActiveCommand('${s(n)}')">
            <span>${l.copied?`✓ Copied!`:`Copy`}</span>
          </button>
        </div>

        <div class="modal-stats-row">
          <div class="modal-stat-card">
            <span class="modal-stat-label">Stars</span>
            <span class="modal-stat-val">${e.stargazersCount||0}</span>
          </div>
          <div class="modal-stat-card">
            <span class="modal-stat-label">Forks</span>
            <span class="modal-stat-val">${e.forksCount||0}</span>
          </div>
          <div class="modal-stat-card">
            <span class="modal-stat-label">Language</span>
            <span class="modal-stat-val">${s(e.language||`Code`)}</span>
          </div>
        </div>

        <div class="modal-footer">
          <a href="${s(e.htmlUrl)}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
            <span>Open on GitHub</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
          <button type="button" class="btn-primary" onclick="window.closeCloneModal()">Done</button>
        </div>
      </div>
    </div>
  `}function x(e){return typeof navigator<`u`&&navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).catch(()=>{}):Promise.resolve()}var S=!1;async function C(){S||(S=!0,f(l.config),v(),await p(),await m())}typeof window<`u`&&typeof document<`u`&&(window.switchTab=function(e){l.activeTab=e,l.userChangedTab=!0,v()},window.handleSearch=function(e){l.search=e;let t=document.getElementById(`repos-output`),n=document.getElementById(`search-clear-btn`);t?(t.innerHTML=g(),n&&(n.style.display=e?`inline-flex`:`none`)):v()},window.clearSearch=function(){l.search=``;let e=document.querySelector(`.search-input`);e&&(e.value=``,e.focus()),window.handleSearch(``)},window.setAccountFilter=function(e){l.accountFilter=e,v()},window.setLanguageFilter=function(e){l.languageFilter=e,v()},window.toggleRecommended=function(){l.onlyRecommended=!l.onlyRecommended,v()},window.setSortBy=function(e){l.sortBy=e,v()},window.clearFilters=function(){l.search=``,l.accountFilter=`all`,l.languageFilter=`all`,l.onlyRecommended=!1,v()},window.copyCloneCommand=function(e){x(`git clone ${e}.git`),l.copiedRepoUrl=e,d&&clearTimeout(d),v(),d=setTimeout(()=>{l.copiedRepoUrl=null,v()},2e3)},window.openCloneModal=function(e){try{l.activeModalRepo=JSON.parse(decodeURIComponent(e)),l.copied=!1,v()}catch{}},window.closeCloneModal=function(){l.activeModalRepo&&(l.activeModalRepo=null,l.copied=!1,v())},window.setModalMethod=function(e){l.activeModalMethod=e,l.copied=!1,v()},window.copyActiveCommand=function(e){x(e),l.copied=!0,u&&clearTimeout(u),v(),u=setTimeout(()=>{l.copied=!1,v()},2e3)},document.addEventListener(`keydown`,e=>{e.key===`Escape`&&l.activeModalRepo&&window.closeCloneModal()}),document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>{C()}):C());