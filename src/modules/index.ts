import { createHealthModule } from './health/health.module';
import { Application } from '../app';
import { Config } from '../config';

export type ModuleInitDeps = {
  app: Application;
  config: Config;
};

export interface Module {
  name: string;
  init(dependencies: ModuleInitDeps): Promise<void>;
}

export const modules: Module[] = [createHealthModule()];
