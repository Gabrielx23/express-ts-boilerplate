type ResultPayload<T> = {
  message?: string;
  data?: T;
};

export type Success<T> = {
  success: true;
} & ResultPayload<T>;

export type Fail<T> = {
  success: false;
} & ResultPayload<T>;

export type Result<T> = Fail<T> | Success<T>;
