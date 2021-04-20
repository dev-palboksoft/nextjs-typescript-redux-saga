import { IApiExampleState } from './iApiExample/iApiExample.interfaces';
import { IExampleState } from './iExample/iExample.interfaces';

export interface RootStateInterface {
  rdcExample: IExampleState;
  rdcApiExample: IApiExampleState;
}
