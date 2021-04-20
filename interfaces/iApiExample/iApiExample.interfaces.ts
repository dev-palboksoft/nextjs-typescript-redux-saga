export interface IApiResult {
  id: number;
  name: string;
}

export interface IApiExampleState {
  apiResult: IApiResult | null;
  error: null | Error;
}
