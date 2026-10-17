import type { Repository, GistItem, AccountFilter, SortOption } from '../types/index.ts';

export interface FilterOptions {
  search?: string;
  account?: AccountFilter;
  language?: string;
  topic?: string;
  onlyRecommended?: boolean;
}

export function filterRepositories(
  repos: Repository[],
  options: FilterOptions = {}
): Repository[] {
  const {
    search = '',
    account = 'all',
    language = 'all',
    topic = 'all',
    onlyRecommended = false,
  } = options;

  const normalizedSearch = search.trim().toLowerCase();

  return repos.filter((repo) => {
    // Account filter
    if (account !== 'all' && repo.account !== account) {
      return false;
    }

    // Recommended only filter
    if (onlyRecommended && !repo.isRecommended) {
      return false;
    }

    // Language filter
    if (language !== 'all') {
      if (!repo.language || repo.language.toLowerCase() !== language.toLowerCase()) {
        return false;
      }
    }

    // Topic filter
    if (topic !== 'all') {
      const hasTopic = repo.topics.some(
        (t) => t.toLowerCase() === topic.toLowerCase()
      );
      if (!hasTopic) {
        return false;
      }
    }

    // Text search filter (matches name, description, topics, owner)
    if (normalizedSearch) {
      const matchName = repo.name.toLowerCase().includes(normalizedSearch);
      const matchDesc = (repo.description || '').toLowerCase().includes(normalizedSearch);
      const matchOwner = repo.owner.login.toLowerCase().includes(normalizedSearch);
      const matchTopics = repo.topics.some((t) => t.toLowerCase().includes(normalizedSearch));
      const matchLang = (repo.language || '').toLowerCase().includes(normalizedSearch);

      if (!matchName && !matchDesc && !matchOwner && !matchTopics && !matchLang) {
        return false;
      }
    }

    return true;
  });
}

export function sortRepositories(
  repos: Repository[],
  sortBy: SortOption = 'recommended'
): Repository[] {
  const copy = [...repos];

  switch (sortBy) {
    case 'recommended':
      return copy.sort((a, b) => {
        if (a.isRecommended && !b.isRecommended) return -1;
        if (!a.isRecommended && b.isRecommended) return 1;
        return (b.stargazersCount || 0) - (a.stargazersCount || 0);
      });
    case 'stars':
      return copy.sort((a, b) => (b.stargazersCount || 0) - (a.stargazersCount || 0));
    case 'updated':
      return copy.sort(
        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
    case 'name':
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    case 'forks':
      return copy.sort((a, b) => (b.forksCount || 0) - (a.forksCount || 0));
    default:
      return copy;
  }
}

export function getAvailableLanguages(repos: Repository[]): string[] {
  const set = new Set<string>();
  for (const repo of repos) {
    if (repo.language) {
      set.add(repo.language);
    }
  }
  return Array.from(set).sort();
}

export function getAvailableTopics(repos: Repository[]): string[] {
  const set = new Set<string>();
  for (const repo of repos) {
    for (const topic of repo.topics) {
      set.add(topic);
    }
  }
  return Array.from(set).sort();
}

export function calculateAccountStats(repos: Repository[], gists: GistItem[] = []) {
  const totalStars = repos.reduce((sum, r) => sum + (r.stargazersCount || 0), 0);
  const totalForks = repos.reduce((sum, r) => sum + (r.forksCount || 0), 0);
  const mainRepos = repos.filter((r) => r.account === 'main').length;
  const altRepos = repos.filter((r) => r.account === 'alt').length;

  return {
    totalRepos: repos.length,
    mainRepos,
    altRepos,
    totalGists: gists.length,
    totalStars,
    totalForks,
  };
}
