import { IUser } from '../interfaces/iExample/iExample.interfaces';
import {
  EActionTypesExample,
  IFailure,
  IIncrement,
  IDecrement,
  IReset,
  ILoadData,
  ILoadDataSuccess,
  IStartClock,
  ITickClock,
} from '../interfaces/iExample/iExampleAct.interfaces';

export function failure(error: Error): IFailure {
  return {
    type: EActionTypesExample.FAILURE,
    error,
  };
}

export function increment(): IIncrement {
  return { type: EActionTypesExample.INCREMENT };
}

export function decrement(): IDecrement {
  return { type: EActionTypesExample.DECREMENT };
}

export function reset(): IReset {
  return { type: EActionTypesExample.RESET };
}

export function loadData(): ILoadData {
  return { type: EActionTypesExample.LOAD_DATA };
}

export function loadDataSuccess(data: IUser[]): ILoadDataSuccess {
  return {
    type: EActionTypesExample.LOAD_DATA_SUCCESS,
    data,
  };
}

export function startClock(): IStartClock {
  return { type: EActionTypesExample.START_CLOCK };
}

export function tickClock(isServer: boolean): ITickClock {
  return {
    type: EActionTypesExample.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  };
}
