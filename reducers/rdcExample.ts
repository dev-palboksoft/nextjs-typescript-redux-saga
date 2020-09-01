// import produce from 'immer';
// import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { ExampleState, ActionsExample, actionTypesExample } from '../interfaces';

export const initialState: ExampleState = {
  count: 0,
  error: null,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
};

interface HydratePayload {
  rdcExample: ExampleState;
}

const rdcExample = (
  state = initialState,
  // action: AnyAction,
  action: ActionsExample | { type: typeof HYDRATE; payload: HydratePayload },
): ExampleState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.rdcExample };

    case actionTypesExample.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case actionTypesExample.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      };

    case actionTypesExample.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      };

    case actionTypesExample.RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      };

    case actionTypesExample.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };

    case actionTypesExample.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      };

    default:
      return state;
  }
};

export default rdcExample;
