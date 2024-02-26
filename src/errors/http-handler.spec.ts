import assert from 'assert';
import { Request, Response } from 'express';
import { httpErrorHandler } from './http-handler';
import { ForbiddenError } from './errors';
import { ZodError, ZodIssue } from 'zod';

describe('httpErrorHandler', () => {
  let status: number | null;
  let json: object | null;
  let response: Response;

  beforeEach(() => {
    status = null;
    json = null;
    response = {
      status: (statusToSet: number) => {
        status = statusToSet;

        return {
          json: (data?: object) => {
            json = data ?? null;
          },
        };
      },
    } as unknown as Response;
  });

  it('properly handles http error', () => {
    const message = 'some message';

    httpErrorHandler(
      new ForbiddenError(message),
      {} as Request,
      response,
      () => null
    );

    assert.equal(status, 403);
    assert.deepStrictEqual(json, { errors: [message] });
  });

  it('properly handles zod error', () => {
    const message = 'some message';

    httpErrorHandler(
      new ZodError([{ message } as ZodIssue]),
      {} as Request,
      response,
      () => null
    );

    assert.equal(status, 422);
    assert.deepStrictEqual(json, { errors: [message] });
  });

  it('properly handles unsupported error type', () => {
    const message = 'some message';

    httpErrorHandler(new Error(message), {} as Request, response, () => null);

    assert.equal(status, 500);
    assert.equal(json, null);
  });
});
