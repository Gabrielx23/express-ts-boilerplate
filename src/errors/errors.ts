export class NotFoundError extends Error {
  code = 404;
  name = 'NotFoundError';
}
export class ForbiddenError extends Error {
  code = 403;
  name = 'ForbiddenError';
}
export class UnauthorizedError extends Error {
  code = 401;
  name = 'UnauthorizedError';
}
export class UnprocessableEntityError extends Error {
  code = 422;
  name = 'UnprocessableEntityError';
}
