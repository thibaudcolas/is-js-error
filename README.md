is-js-error [![npm](https://img.shields.io/npm/v/is-js-error.svg?style=flat-square)](https://www.npmjs.com/package/is-js-error) [![Build Status](https://img.shields.io/travis/ThibWeb/is-js-error.svg?style=flat-square)](https://travis-ci.org/ThibWeb/is-js-error) [![dependency Status](https://img.shields.io/david/ThibWeb/is-js-error.svg?style=flat-square)](https://david-dm.org/ThibWeb/is-js-error) [![devDependency Status](https://img.shields.io/david/dev/ThibWeb/is-js-error.svg?style=flat-square)](https://david-dm.org/ThibWeb/is-js-error)
==========

> Check if a page contains a JavaScript error

## Installation

`npm install -g is-js-error`

## Usage

From the command line,

```
$ is-js-error example.com
✔ OK
```

The exit status is 1 for a page that fails to load and 2 for a JS error.

## Contributing

> You first need to clone the project on your computer, and to install [Node](https://nodejs.org). This project uses [nvm](https://github.com/creationix/nvm) to execute a specific node version.

Install the project with:

```sh
git clone git@github.com:ThibWeb/is-js-error.git
cd is-js-error
nvm install
npm install
npm install -g eslint babel-eslint eslint-config-airbnb
./.githooks/deploy
```

To run the tests:

```sh
npm run test
```

Test pages:

- https://rawgit.com/ThibWeb/is-js-error/master/test/no-error.html
- https://rawgit.com/ThibWeb/is-js-error/master/test/error.html
- https://rawgit.com/ThibWeb/is-js-error/master/test/notfound.html

To release a new version:

```sh
npm version minor -m "Release %s"
git push origin master
git push --tags
npm publish
```
