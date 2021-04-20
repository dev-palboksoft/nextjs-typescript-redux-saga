import { HYDRATE } from 'next-redux-wrapper';
import { IApiExampleState } from '../interfaces/iApiExample/iApiExample.interfaces';
import {
  EActionTypesApiExample,
  IActionsApiExample,
} from '../interfaces/iApiExample/iApiExampleAct.interfaces';

export const initialState: IApiExampleState = {
  apiResult: null,
  error: null,
};

interface HydratePayload {
  rdcApiExample: IApiExampleState;
}

const rdcApiExample = (
  state = initialState,
  // action: AnyAction,
  action: IActionsApiExample | { type: typeof HYDRATE; payload: HydratePayload },
): IApiExampleState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.rdcApiExample };
    case EActionTypesApiExample.API_SUCCESS:
      return {
        ...state,
        ...{ apiResult: action.data },
      };
    case EActionTypesApiExample.API_FAIL:
      return {
        ...state,
        ...{ error: action.error },
      };
    case EActionTypesApiExample.API_INIT:
      return {
        ...state,
        ...{ error: initialState.error, apiResult: initialState.apiResult },
      };
    default:
      return state;
  }
};

export default rdcApiExample;
