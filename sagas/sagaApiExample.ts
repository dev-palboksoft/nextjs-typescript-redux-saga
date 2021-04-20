import { all, call, delay, put, take, takeLatest, fork, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { actApiSuccess, actApiFail } from '../actions/actApiExample';
import {
  EActionTypesApiExample,
  IActApiRequest,
} from '../interfaces/iApiExample/iApiExampleAct.interfaces';
import { IApiResult } from '../interfaces/iApiExample/iApiExample.interfaces';

function* apiRequest(action: IActApiRequest) {
  try {
    const headers = { headers: { Authorization: 'bearer ' } };
    const id = action.id;
    // const formData = new FormData();
    // formData.append('id', id);
    const params = { id: id };

    const { status, data }: AxiosResponse<IApiResult> = yield call(
      axios.post,
      '/api/animal',
      params,
      headers,
    );

    if (status === 200) {
      yield put(actApiSuccess(data));
    }
  } catch (err) {
    yield put(actApiFail(err));
  }
}

function* watchApiRequest() {
  yield takeEvery(EActionTypesApiExample.API_REQUEST, apiRequest);
}

function* sagaApiExample(): Generator {
  yield all([fork(watchApiRequest)]);
}

export default sagaApiExample;
