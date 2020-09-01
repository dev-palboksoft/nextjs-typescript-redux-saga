import { combineReducers, Reducer, AnyAction } from 'redux';
import { RootStateInterface } from '../interfaces/ifRootState';
import rdcExample from './rdcExample';
import rdcApiExample from './rdcApiExample';

const rootReducer: Reducer<RootStateInterface, AnyAction> = combineReducers<RootStateInterface>({
  rdcExample,
  rdcApiExample,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
