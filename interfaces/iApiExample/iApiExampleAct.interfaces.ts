import { IApiResult } from './iApiExample.interfaces';

export enum EActionTypesApiExample {
  API_INIT = 'API_INIT',
  API_REQUEST = 'API_REQUEST',
  API_SUCCESS = 'API_SUCCESS',
  API_FAIL = 'API_FAIL',
}

export type IActionsApiExample = IActApiInit | IActApiRequest | IActApiSuccess | IActApiFail;

export interface IActApiInit {
  type: EActionTypesApiExample.API_INIT;
}

export interface IActApiRequest {
  type: EActionTypesApiExample.API_REQUEST;
  id: number;
}

export interface IActApiSuccess {
  type: EActionTypesApiExample.API_SUCCESS;
  data: IApiResult;
}

export interface IActApiFail {
  type: EActionTypesApiExample.API_FAIL;
  error: Error;
}
