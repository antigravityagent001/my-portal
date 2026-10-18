import type { Repository } from '../types/index.ts';
import { INITIAL_REPOSITORIES, ASSET_PATHS } from '../data/seedData.ts';

const CACHE_KEY_REPOS = 'github_portal_repos_v7';
const CACHE_KEY_LAST_SYNC = 'github_portal_last_sync_v7';

const EXCLUDED_REPOS = new Set([
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

export interface SyncResult {
  repos: Repository[];
  lastSyncTime: string;
  source: 'live' | 'cache' | 'seed';
  error?: string;
}

function isKnownRecommended(name: string): boolean {
  const lower = name.toLowerCase();
  return (
    lower.includes('robotics') ||
    lower.includes('meteor') ||
    lower.includes('math') ||
    lower.includes('chinese')
  );
}

function isRepoExcluded(name: string): boolean {
  const lower = name.toLowerCase();
  if (EXCLUDED_REPOS.has(lower)) return true;
  for (const ex of EXCLUDED_REPOS) {
    if (lower === ex || lower.replace(/[-_]/g, ' ') === ex) {
      return true;
    }
  }
  return false;
}

export async function fetchLiveRepositories(): Promise<{
  repos: Repository[];
  error?: string;
}> {
  const accounts: { username: string; type: 'main' | 'alt' }[] = [
    { username: 'bacondev123', type: 'main' },
    { username: 'antigravityagent001', type: 'alt' },
  ];

  const fetchedRepos: Repository[] = [];
  let encounteredError: string | undefined;

  for (const account of accounts) {
    try {
      const url = `https://api.github.com/users/${account.username}/repos?per_page=100&sort=updated`;
      const response = await fetch(url, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      });

      if (!response.ok) {
        continue;
      }

      const data = await response.json();
      if (Array.isArray(data)) {
        for (const item of data) {
          const repoName = item.name || '';
          if (isRepoExcluded(repoName)) {
            continue;
          }

          const isRec = isKnownRecommended(repoName);
          const normalizedKey = repoName.toLowerCase();
          const bannerAsset = ASSET_PATHS[normalizedKey] || `/assets/repos/${repoName}.png`;

          fetchedRepos.push({
            id: item.id,
            name: repoName,
            fullName: item.full_name || `${account.username}/${repoName}`,
            owner: {
              login: item.owner?.login || account.username,
              avatarUrl: `https://github.com/${account.username}.png`,
              htmlUrl: item.owner?.html_url || `https://github.com/${account.username}`,
            },
            description: item.description || '',
            htmlUrl: item.html_url || `https://github.com/${account.username}/${repoName}`,
            homepage: item.homepage || null,
            language: item.language || null,
            stargazersCount: item.stargazers_count ?? 0,
            forksCount: item.forks_count ?? 0,
            openIssuesCount: item.open_issues_count ?? 0,
            updatedAt: item.updated_at || new Date().toISOString(),
            pushedAt: item.pushed_at,
            isRecommended: isRec,
            topics: Array.isArray(item.topics) && item.topics.length > 0 ? item.topics : [],
            bannerImage: bannerAsset,
            isFork: !!item.fork,
            isArchived: !!item.archived,
            account: account.type,
          });
        }
      }
    } catch (err: unknown) {
      console.warn(`Failed to fetch repos for ${account.username}`, err);
      encounteredError = err instanceof Error ? err.message : 'Network error';
    }
  }

  // Merge with initial seed data so the required repos always exist and have priority
  const mergedMap = new Map<string, Repository>();

  // Add initial seed data first
  for (const seed of INITIAL_REPOSITORIES) {
    if (!isRepoExcluded(seed.name)) {
      mergedMap.set(seed.fullName.toLowerCase(), { ...seed });
    }
  }

  // Merge or update with live fetched data
  for (const fetched of fetchedRepos) {
    if (isRepoExcluded(fetched.name)) continue;
    const key = fetched.fullName.toLowerCase();
    const existing = mergedMap.get(key);
    if (existing) {
      mergedMap.set(key, {
        ...existing,
        stargazersCount: fetched.stargazersCount || existing.stargazersCount,
        forksCount: fetched.forksCount || existing.forksCount,
        openIssuesCount: fetched.openIssuesCount ?? existing.openIssuesCount,
        updatedAt: fetched.updatedAt || existing.updatedAt,
        homepage: fetched.homepage || existing.homepage,
        topics: fetched.topics.length ? fetched.topics : existing.topics,
      });
    } else {
      mergedMap.set(key, fetched);
    }
  }

  return {
    repos: Array.from(mergedMap.values()),
    error: encounteredError,
  };
}

export async function loadPortalData(forceLiveSync = false): Promise<SyncResult> {
  const now = new Date().toISOString();

  // Check cache first if not forced
  if (!forceLiveSync) {
    try {
      const cachedRepos = localStorage.getItem(CACHE_KEY_REPOS);
      const cachedSyncTime = localStorage.getItem(CACHE_KEY_LAST_SYNC);

      if (cachedRepos) {
        const parsed: Repository[] = JSON.parse(cachedRepos);
        const filtered = parsed.filter((r) => !isRepoExcluded(r.name));
        return {
          repos: filtered.length > 0 ? filtered : INITIAL_REPOSITORIES,
          lastSyncTime: cachedSyncTime || now,
          source: 'cache',
        };
      }
    } catch {
      // ignore localStorage parse error
    }
  }

  // Fetch live
  const repoResult = await fetchLiveRepositories();
  const finalRepos = repoResult.repos.length > 0 ? repoResult.repos : INITIAL_REPOSITORIES;

  try {
    localStorage.setItem(CACHE_KEY_REPOS, JSON.stringify(finalRepos));
    localStorage.setItem(CACHE_KEY_LAST_SYNC, now);
  } catch {
    // ignore quota errors
  }

  return {
    repos: finalRepos,
    lastSyncTime: now,
    source: repoResult.error ? 'seed' : 'live',
    error: repoResult.error,
  };
}
