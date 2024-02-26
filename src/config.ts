import { z } from 'zod';

import { AppStage, appStage } from './app';

const Config = z.object({
  PORT: z.coerce.number(),
  ENDPOINT_PREFIX: z.string().optional(),
  STAGE: z
    .string()
    .refine((value: unknown) =>
      Object.values(appStage).includes(value as AppStage)
    ),
  CORS_WHITELIST: z.string().refine(
    (value) => {
      const parts = value.split(',');

      return parts.every((part) => part.trim().length > 0);
    },
    {
      message: 'Invalid comma-separated string format',
    }
  ),
});

export type Config = z.infer<typeof Config>;
export const config = Config.parse(process.env);
