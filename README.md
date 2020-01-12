# svelte-minimal

![Build Status](https://github.com/briangershon/svelte-minimal/workflows/Continuous%20Integration/badge.svg)

Compiles [Svelte](https://svelte.dev/) components into ES5 and bundles as an ECMAScript Module.

* Includes a development environment with:
  * Support for ECMAScript Modules and hot reloading (via Rollup bundler). Moved from Parcel to Rollout to support compiling Svelte components to ES5, which I wasn't able to get to work with Parcel and Svelte.
  * Compile to es5 to run across a wide range of browsers (via Babel)
  * Unit tests (via Jest)
  * Lint (via ESLint with their recommended settings)
  * Continuous Integration workflow with Github Actions

* Styling with default fonts that look great across operating systems.

## Run Local Dev Server

    npm install

    # in one terminal window
    # bundle library and watch for changes
    npm start   # or `npm run build`

    # in second terminal window
    # serve sample index.html page that uses library
    npm install http-server
    http-server

    # open up sample file
    # http://127.0.0.1:8080

## Run Tests

    npm test

## Package project up in dist folder for release to server

    npm run build

## Run lint

    npm run lint
