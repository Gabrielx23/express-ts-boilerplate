import { Request, Response, Router } from 'express';

import { Status } from './status';

export const createHealthRouter = (): Router => {
  const router = Router();
  router.get(
    '/',
    async (_request: Request, response: Response): Promise<void> => {
      const status: Status = {
        http: true,
      };

      response.json(status).status(200);
    }
  );

  return router;
};
