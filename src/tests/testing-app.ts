import { configStub } from './config.stub';
import { Application, createApp } from '../app';
import { Config } from '../config';
import { modules } from '../modules';

export const createTestingApp = (
  config: Config = configStub
): Promise<Application> => {
  return createApp(config, modules);
};
