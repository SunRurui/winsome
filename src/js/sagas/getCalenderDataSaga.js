import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import * as actions from '../actions';
// import * as types from '../constants';
import * as api from '../api';

export default function* getCalenderDataSaga() {
	yield put(actions.getCalenderDataAttempt());

	try {
		const response = yield call(api.getCalenderData);
		yield call(delay, 1000);
		yield put(actions.getCalenderDataSuccess(response));
	} catch (e) {
		yield put(actions.getCalenderDataFail({ message: 'Api Failure' }));
	}
}
