import { ErrorResponse } from './error.response'

export class ListResponse<T> {
  status: string;
  entities:[T]
  error: ErrorResponse;
  
}
