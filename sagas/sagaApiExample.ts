import { all, call, delay, put, take, takeLatest, fork, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { actApiSuccess, actApiFail } from '../actions/actApiExample';
import {
  actionTypesApiExample,
  IfActApiRequest,
} from '../interfaces/ifApiExample/ifApiExampleAct.interfaces';
import { ApiResult } from '../interfaces/ifApiExample/ifApiExample.interfaces';

function* apiRequest(action: IfActApiRequest) {
  try {
    const headers = { headers: { Authorization: 'bearer ' } };
    const id = action.id;
    // const formData = new FormData();
    // formData.append('id', id);
    const params = { id: id };

    const { status, data }: AxiosResponse<ApiResult> = yield call(
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
  yield takeEvery(actionTypesApiExample.API_REQUEST, apiRequest);
}

function* sagaApiExample(): Generator {
  yield all([fork(watchApiRequest)]);
}

export default sagaApiExample;
