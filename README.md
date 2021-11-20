<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pchmn/vite-react-ts-ghactions-template/blob/main/license)
[![ci](https://github.com/pchmn/vite-react-ts-ghactions-template/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/pchmn/vite-react-ts-ghactions-template/actions)
[![codecov.io](https://codecov.io/gh/pchmn/vite-react-ts-ghactions-template/coverage.svg?branch=main)](https://codecov.io/gh/pchmn/vite-react-ts-ghactions-template?branch=master)
<!-- [![Codacy Badge](https://app.codacy.com/project/badge/Grade/4c695ce061c34c1bb1698acc19278f0e)](https://www.codacy.com/gh/pchmn/vite-react-ts-ghactions-template/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pchmn/vite-react-ts-ghactions-template&amp;utm_campaign=Badge_Grade) -->

# React - TypeScript and Github Actions Template with Vite

This a React + TypeScript + Github Actions starter template built with Vite.

</div>

## Features
### Overview

- Vite
- React - TypeScript
- pnpm
- Gihtub Actions
### Editor Config

- vscode settings & extension recommendations
- `.editorconfig` file

### Git Hooks

- Husky
- Runs commitlint @ commit-msg
- Runs eslint @ precommit

### Lint and Formatting

- Eslint & Prettier Configured (with `eslint-plugin-prettier`)

### Testing

- Jest + React Testing Library

### Github Actions

- Build, Test and coverage analysis (with Codecov) at each commit
- Deploy to github pages on main branch (see deploy of this repo [here](https://pchmn.github.io/vite-react-ts-ghactions-template/))


## Getting Started

### Copy template

```
npx degit pchmn/vite-react-ts-ghactions-template app_name
```

### Configuration for Github Actions

If you want to use Github Actions in your repo, you'll need to make little configuration.

Actual [workflow](https://github.com/pchmn/vite-react-ts-ghactions-template/blob/main/.github/workflows/ci.yml) is:

![image](https://user-images.githubusercontent.com/12658241/142628675-1f9e9617-e5da-4dff-aa79-abc0883cf037.png)

#### Build & Test job

> Build and test application on all commits

Create a [Github personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) (with `repo` and `workflow` permissions) and add it as a `PERSONAL_ACCESS_TOKEN` secret in your repo

#### Coverage job

> Run Codecov analysis on all commits

Create a [Codecov](https://about.codecov.io/) token for your repo and add it as a `CODECOV_TOKEN` secret in your repo

#### **Deploy** job

> Manual deploy to Github Pages (only main branch)

- Replace `base` config in `vite.config.ts` to match your repo name
- Create `GIT_AUTHOR_NAME` and `GIT_AUTHOR_EMAIL` secrets in your repo (it will be the author of commits to `gh-pages` branch)
- If you want to keep manual deployments, you need to create a [new environment with manual approve](https://devblogs.microsoft.com/devops/i-need-manual-approvers-for-github-actions-and-i-got-them-now/) in your repo, and then replace `environment` config in the `deploy` job in `.github/workflows/ci.yml`:
  - `environment.name` = name of the environment created in your repo
  - `environment.url` = link to your github pages


