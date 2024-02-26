# Express.js + TypeScript boilerplate
Minimal boilerplate for Express.js and TypeScript Rest API backends. 
It has been created with following approaches: class-less, this-less, function-first composition.
You can use it as a scaffold for your projects. It has been created and tested with Node.js 20 and npm.

I highly recommend to update all dependencies before going live, you can use e.g. ncu: https://www.npmjs.com/package/npm-check-updates.

# Important deps
- express 5.0.0-beta.1
- zod ^3.21.4

# Setup
1. ``npm i``
2. Create ``.env`` file and fill it out with proper environment values (.env.example can be useful).
4. ``npm run start:dev`` or ``npm run build && npm run start:prod`` 

# Tests
- ``npm run test:unit`` is used to run unit tests, files ending with `*.spec.ts`
- ``npm run test:e2e`` is used to run e2e tests, files ending with `*.test.ts`
- ``npm run test`` runs all tests, units and e2e

# License
MIT (check the license file for more details)

Author: [Gabriel Ślawski](https://orbisbit.com)