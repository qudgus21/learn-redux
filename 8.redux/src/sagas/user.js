import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { LOG_IN, LOG_IN_SUCCESS } from "../reducers/user";

function loginAPI() {
  //서버요청
}

function* login() {
  try {
    yield call(loginAPI);
    yield put({
      //put은 dispatch와 동일
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    //실패
    console.log(e);
  }
}

function* waatchLogin() {
  yield takeLatest(LOG_IN, login);
}

export default function* userSaga() {
  yield all([fork(waatchLogin)]);
}
