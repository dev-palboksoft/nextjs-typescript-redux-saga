import { HYDRATE } from 'next-redux-wrapper';
import { ApiExampleState, ActionsApiExample, actionTypesApiExample } from '../interfaces';

export const initialState: ApiExampleState = {
  apiResult: null,
  error: null,
};

interface HydratePayload {
  rdcApiExample: ApiExampleState;
}

const rdcApiExample = (
  state = initialState,
  // action: AnyAction,
  action: ActionsApiExample | { type: typeof HYDRATE; payload: HydratePayload },
): ApiExampleState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.rdcApiExample };
    case actionTypesApiExample.API_SUCCESS:
      return {
        ...state,
        ...{ apiResult: action.data },
      };
    case actionTypesApiExample.API_FAIL:
      return {
        ...state,
        ...{ error: action.error },
      };
    case actionTypesApiExample.API_INIT:
      return {
        ...state,
        ...{ error: initialState.error, apiResult: initialState.apiResult },
      };
    default:
      return state;
  }
};

export default rdcApiExample;
