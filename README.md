<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pchmn/vite-react-ts-ghactions-template/blob/main/license)
[![ci](https://github.com/pchmn/vite-react-ts-ghactions-template/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/pchmn/vite-react-ts-ghactions-template/actions)
[![codecov.io](https://codecov.io/gh/pchmn/vite-react-ts-ghactions-template/coverage.svg?branch=main)](https://codecov.io/gh/pchmn/vite-react-ts-ghactions-template?branch=master)
<!-- [![Codacy Badge](https://app.codacy.com/project/badge/Grade/4c695ce061c34c1bb1698acc19278f0e)](https://www.codacy.com/gh/pchmn/vite-react-ts-ghactions-template/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pchmn/vite-react-ts-ghactions-template&amp;utm_campaign=Badge_Grade) -->

<!-- # React - TypeScript and Github Actions Template with Vite -->
# Vite, React and Github Actions

This a React v18 + TypeScript + Vitest and React Testing Library + Github Actions starter template built with Vite.

[Demo](https://pchmn.github.io/vite-react-ts-ghactions-template/)

</div>

## Features
### Overview

- ⚡️&nbsp; [Vite](https://vitejs.dev/)
- ⚛️&nbsp; [React v18](https://beta.reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- 🧪&nbsp; [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- 🚀&nbsp; [Github Actions](https://docs.github.com/en/actions) with deployment on [Github Pages](https://pages.github.com/)

### Coding Style

- VSCode settings & extensions recommendations
- [EditorConfig](https://editorconfig.org/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) configured (with [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier))

### Git Hooks

- [Husky](https://typicode.github.io/husky/#/)
  - [`commitlint`](https://commitlint.js.org/) @ `commit-msg`
  - [`lint-staged`](https://github.com/okonet/lint-staged) @ `precommit`

### Github Actions

- **Build**, **Test** and **Coverage Analysis** (with [Codecov](https://about.codecov.io/)) at each commit
- **Deploy** to [Github Pages](https://pages.github.com/) on main branch (see deployment of this repo [here](https://pchmn.github.io/vite-react-ts-ghactions-template/))


<br>

## Getting Started

### Copy template

```
npx degit pchmn/vite-react-ts-ghactions-template app_name
```

### Usage

> Project was built using [`pnpm`](https://pnpm.io/installation#using-npm). If you want to use `npm` or `yarn`, just don't forget to update Github Actions workflow (`.github/workflows/ci.yml`).

#### Install

```sh
pnpm i
```

#### Dev

```sh
pnpm dev
```

#### Build


```sh
# normal build
pnpm build

# build with 404.html file added for Github Pages included
pnpm build:ci
```
> See explanation of `404.html` file [here](#github-pages)
#### Test

```sh
# without coverage
pnpm test

# with coverage
pnpm test:ci
```
#### Serve

```sh
pnpm serve
```

<br>

## Configuration for Github Actions

If you want to use Github Actions in your repo, you'll need to make little configuration.

Actual [workflow](https://github.com/pchmn/vite-react-ts-ghactions-template/blob/main/.github/workflows/ci.yml) is:

![image](https://user-images.githubusercontent.com/12658241/142628675-1f9e9617-e5da-4dff-aa79-abc0883cf037.png)

### Build & Test job

> Build and test application on all commits

Create a [Github personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) (with `repo` and `workflow` permissions) and add it as a `PERSONAL_ACCESS_TOKEN` secret in your repo

### Coverage job

> Run Codecov analysis on all commits

Create a [Codecov](https://about.codecov.io/) token for your repo and add it as a `CODECOV_TOKEN` secret in your repo

### **Deploy** job

> Manual deploy to Github Pages (only main branch)

- Replace `base` config in `vite.config.ts` to match your repo name
- Create `GIT_AUTHOR_NAME` and `GIT_AUTHOR_EMAIL` secrets in your repo (it will be the author of commits to `gh-pages` branch)
- If you want to keep manual deployments, you need to create a [new environment with manual approve](https://devblogs.microsoft.com/devops/i-need-manual-approvers-for-github-actions-and-i-got-them-now/) in your repo, and then replace `environment` config in the `deploy` job in `.github/workflows/ci.yml`:
  - `environment.name` = name of the environment created in your repo
  - `environment.url` = link to your github pages

## Github Pages

There are modifications on `index.html`, and a new `404.html` file in the project to make it work well with Github Pages.

> See https://github.com/rafgraph/spa-github-pages for more info.
