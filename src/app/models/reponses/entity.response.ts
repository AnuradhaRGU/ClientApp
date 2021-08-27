import { ErrorResponse } from './error.response'

export class EntityResponse<T> {
  status: string;
  entity:T
  error: ErrorResponse;
}
