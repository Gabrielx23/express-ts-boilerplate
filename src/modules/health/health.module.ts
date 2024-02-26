import { createHealthRouter } from './health.router';
import { Module, ModuleInitDeps } from '..';

export const createHealthModule = (): Module => {
  const name = 'health';

  const init = async ({ app }: ModuleInitDeps): Promise<void> => {
    app.use(createHealthRouter());
  };

  return {
    name,
    init,
  };
};
