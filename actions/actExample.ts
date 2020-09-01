import { User } from '../interfaces/ifExample/ifExample.interfaces';
import {
  actionTypesExample,
  Failure,
  Increment,
  Decrement,
  Reset,
  LoadData,
  LoadDataSuccess,
  StartClock,
  TickClock,
} from '../interfaces/ifExample/ifExampleAct.interfaces';

export function failure(error: Error): Failure {
  return {
    type: actionTypesExample.FAILURE,
    error,
  };
}

export function increment(): Increment {
  return { type: actionTypesExample.INCREMENT };
}

export function decrement(): Decrement {
  return { type: actionTypesExample.DECREMENT };
}

export function reset(): Reset {
  return { type: actionTypesExample.RESET };
}

export function loadData(): LoadData {
  return { type: actionTypesExample.LOAD_DATA };
}

export function loadDataSuccess(data: User[]): LoadDataSuccess {
  return {
    type: actionTypesExample.LOAD_DATA_SUCCESS,
    data,
  };
}

export function startClock(): StartClock {
  return { type: actionTypesExample.START_CLOCK };
}

export function tickClock(isServer: boolean): TickClock {
  return {
    type: actionTypesExample.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  };
}
