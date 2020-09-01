import { User } from '../index';

export enum actionTypesExample {
  FAILURE = 'FAILURE',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  LOAD_DATA = 'LOAD_DATA',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  START_CLOCK = 'START_CLOCK',
  TICK_CLOCK = 'TICK_CLOCK',
}

export type ActionsExample =
  | Failure
  | Increment
  | Decrement
  | Reset
  | LoadData
  | LoadDataSuccess
  | StartClock
  | TickClock;

export interface Failure {
  type: actionTypesExample.FAILURE;
  error: Error;
}

export interface Increment {
  type: actionTypesExample.INCREMENT;
}

export interface Decrement {
  type: actionTypesExample.DECREMENT;
}

export interface Reset {
  type: actionTypesExample.RESET;
}

export interface LoadData {
  type: actionTypesExample.LOAD_DATA;
}

export interface LoadDataSuccess {
  type: actionTypesExample.LOAD_DATA_SUCCESS;
  data: User[];
}

export interface StartClock {
  type: actionTypesExample.START_CLOCK;
}

export interface TickClock {
  type: actionTypesExample.TICK_CLOCK;
  light: boolean;
  ts: number;
}
