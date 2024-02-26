import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

export type IdGenerator = () => string;
export const uuidGenerator: IdGenerator = uuidv4;
export const Uuid = z.string().uuid();
