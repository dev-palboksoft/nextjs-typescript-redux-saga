import { IApiResult } from '../interfaces/iApiExample/iApiExample.interfaces';
import {
  EActionTypesApiExample,
  IActApiInit,
  IActApiRequest,
  IActApiSuccess,
  IActApiFail,
} from '../interfaces/iApiExample/iApiExampleAct.interfaces';

export function actApiInit(): IActApiInit {
  return {
    type: EActionTypesApiExample.API_INIT,
  };
}

export function actApiRequest(id: number): IActApiRequest {
  return {
    type: EActionTypesApiExample.API_REQUEST,
    id,
  };
}

export function actApiSuccess(data: IApiResult): IActApiSuccess {
  return {
    type: EActionTypesApiExample.API_SUCCESS,
    data,
  };
}

export function actApiFail(error: Error): IActApiFail {
  return {
    type: EActionTypesApiExample.API_FAIL,
    error,
  };
}
