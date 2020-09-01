import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { failure, loadDataSuccess, tickClock } from '../actions/actExample';
import { User, actionTypesExample } from '../interfaces';

function* runClockSaga() {
  yield take(actionTypesExample.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

function* loadDataSaga() {
  try {
    const { status, data }: AxiosResponse<User[]> = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users',
    );

    if (status === 200) {
      yield put(loadDataSuccess(data));
    }
  } catch (err) {
    yield put(failure(err));
  }
}

function* sagaExample(): Generator {
  yield all([call(runClockSaga), takeLatest(actionTypesExample.LOAD_DATA, loadDataSaga)]);
}

export default sagaExample;
