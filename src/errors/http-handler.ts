import {
  ErrorRequestHandler,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';
import { ZodError, ZodIssue } from 'zod';

import { NotFoundError } from './errors';

export type HttpError = {
  code: number;
  name: string;
  message?: string;
};

const isHttpError = (error: Error | HttpError): error is HttpError =>
  (<HttpError>error).code !== undefined;
const isZodError = (error: Error | ZodError): error is ZodError =>
  (<ZodError>error).issues !== undefined;

export const routeDoesNotExistHandler: RequestHandler = (): void => {
  throw new NotFoundError('Route does not exist.');
};

export const httpErrorHandler: ErrorRequestHandler = (
  error: Error | HttpError,
  _request: Request,
  response: Response,
  _next: NextFunction
): void => {
  if (isHttpError(error)) {
    response.status(error.code).json({ errors: [error.message] });

    return;
  }

  if (isZodError(error)) {
    response
      .status(422)
      .json({ errors: error.issues.map((issue: ZodIssue) => issue.message) });

    return;
  }

  response.status(500).json();
};
