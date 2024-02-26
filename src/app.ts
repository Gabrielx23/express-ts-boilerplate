import cors from 'cors';
import express, { Application as ExpressApplication } from 'express';

import { Config } from './config';
import { ForbiddenError } from './errors/errors';
import {
  httpErrorHandler,
  routeDoesNotExistHandler,
} from './errors/http-handler';
import { Module } from './modules';

export const appStage = {
  PRODUCTION: 'PRODUCTION',
  DEVELOPMENT: 'DEVELOPMENT',
  TESTING_ISOLATED: 'TESTING_ISOLATED',
  TESTING: 'TESTING',
} as const;

export type AppStage = keyof typeof appStage;

export interface Application extends ExpressApplication {}

export const createApp = async (
  config: Config,
  modules: Module[]
): Promise<Application> => {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: (origin, callback) => {
        const whiteList = config.CORS_WHITELIST.split(',');

        if (whiteList[0] !== '*' && (!origin || !whiteList.includes(origin))) {
          return callback(new ForbiddenError('Not allowed by CORS'));
        }

        callback(null, true);
      },
    })
  );

  await Promise.all(
    modules.map((module: Module) => module.init({ app, config }))
  );

  app.use(routeDoesNotExistHandler);
  app.use(httpErrorHandler);

  return app;
};
