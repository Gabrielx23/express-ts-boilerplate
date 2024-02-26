import { createApp } from './app';
import { config } from './config';
import { modules } from './modules';

(async (): Promise<void> => {
  const port = config.PORT;

  const app = await createApp(config, modules);

  app.listen(port, () => {
    console.info(`App listens on port: ${port}`);
  });
})();
