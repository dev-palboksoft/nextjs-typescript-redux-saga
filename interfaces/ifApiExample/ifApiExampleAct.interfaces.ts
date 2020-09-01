import { ApiResult } from './ifApiExample.interfaces';

export enum actionTypesApiExample {
  API_INIT = 'API_INIT',
  API_REQUEST = 'API_REQUEST',
  API_SUCCESS = 'API_SUCCESS',
  API_FAIL = 'API_FAIL',
}

export type ActionsApiExample = IfActApiInit | IfActApiRequest | IfActApiSuccess | IfActApiFail;

export interface IfActApiInit {
  type: actionTypesApiExample.API_INIT;
}

export interface IfActApiRequest {
  type: actionTypesApiExample.API_REQUEST;
  id: number;
}

export interface IfActApiSuccess {
  type: actionTypesApiExample.API_SUCCESS;
  data: ApiResult;
}

export interface IfActApiFail {
  type: actionTypesApiExample.API_FAIL;
  error: Error;
}
