import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  DEFAULT_CONFIG,
  normalizeConfig,
  isRepoExcluded,
  mergeRepositories,
  getAvailableLanguages,
  applyFiltersAndSort,
  buildCloneCommands,
} from './script.js';

test('config.json is valid JSON and normalizes cleanly', () => {
  const raw = JSON.parse(fs.readFileSync(new URL('./config.json', import.meta.url), 'utf8'));
  const normalized = normalizeConfig(raw);

  assert.equal(normalized.site.title, 'bacondev123 Portal');
  assert.equal(normalized.profile.name, 'bacondev123');
  assert.equal(normalized.profile.accounts.length, 2);
  assert.equal(normalized.repositories.length, 5);

  const recommended = normalized.repositories.filter((r) => r.isRecommended).map((r) => r.name);
  assert.deepEqual(recommended, ['MathAnimations']);
});

test('excluded repositories (robotics, bacondev123.github.io) are filtered out', () => {
  assert.equal(isRepoExcluded('robotics'), true);
  assert.equal(isRepoExcluded('bacondev123.github.io'), true);
  assert.equal(isRepoExcluded('Project-Isla'), true);
  assert.equal(isRepoExcluded('MathAnimations'), false);
  assert.equal(isRepoExcluded('meteor-dodge'), false);
});

test('mergeRepositories preserves existing isRecommended=false and excludes legacy repos', () => {
  const base = DEFAULT_CONFIG.repositories;
  const fetched = [
    { name: 'robotics', fullName: 'bacondev123/robotics', stargazersCount: 99 },
    { name: 'bacondev123.github.io', fullName: 'bacondev123/bacondev123.github.io', stargazersCount: 10 },
    { name: 'meteor-dodge', fullName: 'bacondev123/meteor-dodge', stargazersCount: 50, account: 'main' },
    { name: 'MathAnimations', fullName: 'bacondev123/MathAnimations', stargazersCount: 80, account: 'main' },
    { name: 'new-experimental-repo', fullName: 'bacondev123/new-experimental-repo', stargazersCount: 3, account: 'main' },
  ];

  const merged = mergeRepositories(base, fetched, DEFAULT_CONFIG.githubSync.excludedRepos, ['MathAnimations']);
  const names = merged.map((r) => r.name);
  assert.equal(names.includes('robotics'), false);
  assert.equal(names.includes('bacondev123.github.io'), false);
  assert.equal(names.includes('new-experimental-repo'), true);

  const meteor = merged.find((r) => r.name === 'meteor-dodge');
  assert.equal(meteor.isRecommended, false);
  assert.equal(meteor.stargazersCount, 50);

  const math = merged.find((r) => r.name === 'MathAnimations');
  assert.equal(math.isRecommended, true);
  assert.equal(math.stargazersCount, 80);
});

test('applyFiltersAndSort filters by search, account, language, recommended and sorts accurately', () => {
  const repos = DEFAULT_CONFIG.repositories;

  assert.deepEqual(getAvailableLanguages(repos), ['C#', 'JavaScript', 'Markdown', 'Python']);

  const recOnly = applyFiltersAndSort(repos, { onlyRecommended: true });
  assert.deepEqual(recOnly.map((r) => r.name), ['MathAnimations']);

  const altOnly = applyFiltersAndSort(repos, { accountFilter: 'alt', sortBy: 'name' });
  assert.deepEqual(altOnly.map((r) => r.name), ['Chinese-game-project', 'profile']);

  const searchManim = applyFiltersAndSort(repos, { search: 'manim' });
  assert.deepEqual(searchManim.map((r) => r.name), ['MathAnimations']);

  const byStars = applyFiltersAndSort(repos, { sortBy: 'stars' });
  assert.equal(byStars[0].name, 'MathAnimations');
  assert.equal(byStars[byStars.length - 1].name, 'profile');
});

test('buildCloneCommands builds HTTPS, SSH, and GitHub CLI strings', () => {
  const cmds = buildCloneCommands({
    htmlUrl: 'https://github.com/bacondev123/MathAnimations',
    fullName: 'bacondev123/MathAnimations',
  });
  assert.equal(cmds.https, 'git clone https://github.com/bacondev123/MathAnimations.git');
  assert.equal(cmds.ssh, 'git clone git@github.com:bacondev123/MathAnimations.git');
  assert.equal(cmds.cli, 'gh repo clone bacondev123/MathAnimations');
});
