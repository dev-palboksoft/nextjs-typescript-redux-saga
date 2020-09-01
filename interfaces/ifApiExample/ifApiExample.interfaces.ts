export interface ApiResult {
  id: number;
  name: string;
}

export interface ApiExampleState {
  apiResult: ApiResult | null;
  error: null | Error;
}
