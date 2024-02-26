import { appStage } from '../app';
import { Config } from '../config';

export const configStub: Config = {
  PORT: 3000,
  ENDPOINT_PREFIX: '',
  STAGE: appStage.TESTING,
  CORS_WHITELIST: '*',
};
