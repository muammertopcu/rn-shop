export type PaginationResponse<T = {}> = {
  total: number;
  skip: number;
  limit: number;
} & T;

export type PaginationParams = {
  limit?: number;
  skip?: number;
};
