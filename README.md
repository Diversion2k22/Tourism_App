# TravelR - A travel planning application

## Description

## Tech stack

- Everything typed with [Typescript](https://www.typescriptlang.org/)
- [ES6](http://babeljs.io/learn-es2015/) features/modules
- ES7 [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) / [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- Run with [Nodemon](https://nodemon.io/) for automatic reload & watch
- [ESLint](http://eslint.org/) for code linting
- Code formatting using [Prettier](https://www.npmjs.com/package/prettier)
- Configuration management using [dotenv](https://www.npmjs.com/package/dotenv)
- Improved commits with [Husky](https://typicode.github.io/husky)
- Manage production app process with [PM2](https://pm2.keymetrics.io/)

---

## Prerequisites

- [Node.js](https://nodejs.org) (`>= 14.0.0`)
- [Yarn](https://yarnpkg.com/en/docs/install) or [NPM](https://docs.npmjs.com/getting-started/installing-node)

## Install

- Fork or Use [this](https://github.com/Diversion2k22/TravelR/generate) template repository.
- [Clone](https://github.com/git-guides/git-clone) the forked repository.
- Install the dependencies with [yarn](https://yarnpkg.com/getting-started/usage) or [npm](https://docs.npmjs.com/cli/v7/commands/npm-install).

> Make sure you already have [`node.js`](https://github.com/Diversion2k22/TravelR#prerequisites) and [`npm`](https://github.com/Diversion2k22/TravelR#prerequisites) or [`yarn`](https://github.com/Diversion2k22/TravelR#prerequisites) installed in your system.

- Set your `git remote add origin` path

```bash
 git remote add origin ${forked-and-cloned-path}
```

> [Update the url](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url) if you already have an `origin`

## Config

- Add or modify specific variables and update `.env` according to your need.

> Check the `config` folder to customize your settings (`/src/config`)

## Alias @

To make paths clean and ease to access `@` is setup up for `/src` path

```javascript
// BEFORE
import config from './config';
import routes from './routes';

// NOW
import config from '@/config';
import routes from '@/routes';
```

> You can customize this setup:
> `/tsconfig.json` > compilerOptions.paths
> `/eslintrc.yml` > rules.settings.alias.map

## Local Development

Run the server locally. It will be run with Nodemon and ready to serve on port `8080` (unless you specify it on your `.env`)

```bash
 yarn start # or npm start
```

> Check [`package.json`](https://github.com/Diversion2k22/TravelR/blob/main/package.json) to see more "scripts"

## Production

First, build the application.

```bash
 yarn build # or npm run build
```

Then, use [`pm2`](https://github.com/Unitech/pm2) to start the application as a service.

```bash
 yarn service:start # or npm run service:start
```

## Author

<a src="https://github.com/subho57">
<img width="60px" style="border-radius: 50%;" src="https://avatars.githubusercontent.com/subho57">
</a>
<a src="https://github.com/Prerona-Mazumder">
<img width="60px" style="border-radius: 50%;" src="https://avatars.githubusercontent.com/Prerona-Mazumder">
</a>
<a src="https://github.com/Rijurik">
<img width="60px" style="border-radius: 50%;" src="https://avatars.githubusercontent.com/Rijurik">
</a>

## Testing

- Make sure you have `redis-server` running on your localhost with port 6379
- Test the server by using curl to send a post request to <http://localhost:8080/api/render>
