import { IUser } from './iExample.interfaces';

export enum EActionTypesExample {
  FAILURE = 'FAILURE',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  LOAD_DATA = 'LOAD_DATA',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  START_CLOCK = 'START_CLOCK',
  TICK_CLOCK = 'TICK_CLOCK',
}

export type IActionsExample =
  | IFailure
  | IIncrement
  | IDecrement
  | IReset
  | ILoadData
  | ILoadDataSuccess
  | IStartClock
  | ITickClock;

export interface IFailure {
  type: EActionTypesExample.FAILURE;
  error: Error;
}

export interface IIncrement {
  type: EActionTypesExample.INCREMENT;
}

export interface IDecrement {
  type: EActionTypesExample.DECREMENT;
}

export interface IReset {
  type: EActionTypesExample.RESET;
}

export interface ILoadData {
  type: EActionTypesExample.LOAD_DATA;
}

export interface ILoadDataSuccess {
  type: EActionTypesExample.LOAD_DATA_SUCCESS;
  data: IUser[];
}

export interface IStartClock {
  type: EActionTypesExample.START_CLOCK;
}

export interface ITickClock {
  type: EActionTypesExample.TICK_CLOCK;
  light: boolean;
  ts: number;
}
