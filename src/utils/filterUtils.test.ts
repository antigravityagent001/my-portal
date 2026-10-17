import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterRepositories,
  sortRepositories,
  getAvailableLanguages,
  calculateAccountStats,
} from './filterUtils.ts';
import type { Repository, GistItem } from '../types/index.ts';

const mockRepos: Repository[] = [
  {
    id: 1,
    name: 'VAVR Robot SE',
    fullName: 'bacondev123/VAVR-Robot-SE',
    owner: { login: 'bacondev123', avatarUrl: '', htmlUrl: '' },
    description: 'Virtual AVR Robot Simulation Environment.',
    htmlUrl: 'https://github.com/bacondev123/VAVR-Robot-SE',
    language: 'C++',
    stargazersCount: 28,
    forksCount: 4,
    updatedAt: '2026-04-12T10:14:00Z',
    isRecommended: true,
    topics: ['robotics', 'avr'],
    account: 'main',
  },
  {
    id: 2,
    name: 'Project Isla',
    fullName: 'bacondev123/Project-Isla',
    owner: { login: 'bacondev123', avatarUrl: '', htmlUrl: '' },
    description: 'First Open-Source Thai AI VTuber.',
    htmlUrl: 'https://github.com/bacondev123/Project-Isla',
    language: 'Python',
    stargazersCount: 45,
    forksCount: 9,
    updatedAt: '2026-05-18T14:32:00Z',
    isRecommended: true,
    topics: ['ai', 'vtuber'],
    account: 'main',
  },
  {
    id: 3,
    name: 'antigravity-toolkit',
    fullName: 'antigravityagent001/antigravity-toolkit',
    owner: { login: 'antigravityagent001', avatarUrl: '', htmlUrl: '' },
    description: 'Autonomous workflows and chaining',
    htmlUrl: 'https://github.com/antigravityagent001/antigravity-toolkit',
    language: 'Python',
    stargazersCount: 15,
    forksCount: 1,
    updatedAt: '2026-06-01T12:00:00Z',
    isRecommended: false,
    topics: ['agentic-ai'],
    account: 'alt',
  },
];

const mockGists: GistItem[] = [
  {
    id: 'g1',
    description: 'Timer test',
    htmlUrl: '',
    owner: { login: 'bacondev123', avatarUrl: '' },
    filesCount: 1,
    primaryLanguage: 'C++',
    updatedAt: '2026-05-14T08:21:00Z',
    files: [],
    account: 'main',
  },
];

test('filterRepositories filters by account correctly', () => {
  const mainOnly = filterRepositories(mockRepos, { account: 'main' });
  assert.equal(mainOnly.length, 2);
  assert.equal(mainOnly.every((r) => r.account === 'main'), true);

  const altOnly = filterRepositories(mockRepos, { account: 'alt' });
  assert.equal(altOnly.length, 1);
  assert.equal(altOnly[0].name, 'antigravity-toolkit');
});

test('filterRepositories filters by search keyword', () => {
  const result = filterRepositories(mockRepos, { search: 'vtuber' });
  assert.equal(result.length, 1);
  assert.equal(result[0].name, 'Project Isla');

  const emptyResult = filterRepositories(mockRepos, { search: 'nonexistent123' });
  assert.equal(emptyResult.length, 0);
});

test('filterRepositories filters by language', () => {
  const pyRepos = filterRepositories(mockRepos, { language: 'Python' });
  assert.equal(pyRepos.length, 2);
  assert.equal(pyRepos.every((r) => r.language === 'Python'), true);
});

test('sortRepositories sorts by stars and name', () => {
  const byStars = sortRepositories(mockRepos, 'stars');
  assert.equal(byStars[0].name, 'Project Isla');
  assert.equal(byStars[1].name, 'VAVR Robot SE');
  assert.equal(byStars[2].name, 'antigravity-toolkit');

  const byName = sortRepositories(mockRepos, 'name');
  assert.equal(byName[0].name, 'antigravity-toolkit');
  assert.equal(byName[1].name, 'Project Isla');
  assert.equal(byName[2].name, 'VAVR Robot SE');
});

test('getAvailableLanguages extracts unique sorted languages', () => {
  const langs = getAvailableLanguages(mockRepos);
  assert.deepEqual(langs, ['C++', 'Python']);
});

test('calculateAccountStats sums counts and stars correctly', () => {
  const stats = calculateAccountStats(mockRepos, mockGists);
  assert.equal(stats.totalRepos, 3);
  assert.equal(stats.mainRepos, 2);
  assert.equal(stats.altRepos, 1);
  assert.equal(stats.totalGists, 1);
  assert.equal(stats.totalStars, 88);
  assert.equal(stats.totalForks, 14);
});
