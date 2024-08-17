export type PaginationResponse<T = {}> = {
  total: number;
  skip: number;
  limit: number;
} & T;

export type PaginationParams<T = {}> = {
  limit?: number;
  skip?: number;
} & T;
