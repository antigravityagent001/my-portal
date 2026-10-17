export interface Repository {
  id: string | number;
  name: string;
  fullName: string;
  owner: {
    login: string;
    avatarUrl: string;
    htmlUrl: string;
  };
  description: string;
  htmlUrl: string;
  homepage?: string | null;
  language: string | null;
  stargazersCount: number;
  forksCount: number;
  openIssuesCount?: number;
  updatedAt: string;
  pushedAt?: string;
  isRecommended?: boolean;
  topics: string[];
  bannerImage?: string;
  isFork?: boolean;
  isArchived?: boolean;
  account: 'main' | 'alt';
}

export interface GistItem {
  id: string;
  description: string;
  htmlUrl: string;
  owner: {
    login: string;
    avatarUrl: string;
  };
  filesCount: number;
  primaryLanguage: string;
  updatedAt: string;
  files: {
    name: string;
    language?: string;
    size?: number;
  }[];
  account: 'main' | 'alt';
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  status: 'coming_soon' | 'verified' | 'in_progress';
  credentialUrl?: string;
  skills: string[];
  iconName?: string;
}

export type TabType = 'certificates' | 'repositories';

export type AccountFilter = 'all' | 'main' | 'alt';

export type SortOption = 'recommended' | 'stars' | 'updated' | 'name' | 'forks';
