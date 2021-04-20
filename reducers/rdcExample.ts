// import produce from 'immer';
// import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { IExampleState } from '../interfaces/iExample/iExample.interfaces';
import {
  EActionTypesExample,
  IActionsExample,
} from '../interfaces/iExample/iExampleAct.interfaces';

export const initialState: IExampleState = {
  count: 0,
  error: null,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
};

interface HydratePayload {
  rdcExample: IExampleState;
}

const rdcExample = (
  state = initialState,
  // action: AnyAction,
  action: IActionsExample | { type: typeof HYDRATE; payload: HydratePayload },
): IExampleState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.rdcExample };

    case EActionTypesExample.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case EActionTypesExample.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      };

    case EActionTypesExample.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      };

    case EActionTypesExample.RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      };

    case EActionTypesExample.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };

    case EActionTypesExample.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      };

    default:
      return state;
  }
};

export default rdcExample;
