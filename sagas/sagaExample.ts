import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { failure, loadDataSuccess, tickClock } from '../actions/actExample';
import { EActionTypesExample } from '../interfaces/iExample/iExampleAct.interfaces';
import { IUser } from '../interfaces/iExample/iExample.interfaces';

function* runClockSaga() {
  yield take(EActionTypesExample.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

function* loadDataSaga() {
  try {
    const { status, data }: AxiosResponse<IUser[]> = yield call(
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
  yield all([call(runClockSaga), takeLatest(EActionTypesExample.LOAD_DATA, loadDataSaga)]);
}

export default sagaExample;
