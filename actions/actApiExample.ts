import { ApiResult } from '../interfaces/ifApiExample/ifApiExample.interfaces';
import {
  actionTypesApiExample,
  IfActApiInit,
  IfActApiRequest,
  IfActApiSuccess,
  IfActApiFail,
} from '../interfaces/ifApiExample/ifApiExampleAct.interfaces';

export function actApiInit(): IfActApiInit {
  return {
    type: actionTypesApiExample.API_INIT,
  };
}

export function actApiRequest(id: number): IfActApiRequest {
  return {
    type: actionTypesApiExample.API_REQUEST,
    id,
  };
}

export function actApiSuccess(data: ApiResult): IfActApiSuccess {
  return {
    type: actionTypesApiExample.API_SUCCESS,
    data,
  };
}

export function actApiFail(error: Error): IfActApiFail {
  return {
    type: actionTypesApiExample.API_FAIL,
    error,
  };
}
