import { all, fork } from 'redux-saga/effects';

import sagaExample from './sagaExample';
import sagaApiExample from './sagaApiExample';

export default function* rootSaga() {
  yield all([fork(sagaExample), fork(sagaApiExample)]);
}
