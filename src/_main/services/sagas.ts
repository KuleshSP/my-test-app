import {all, takeEvery} from 'redux-saga/effects';

import homePageSagas from 'pages/_home/services/sagas';
import {actionTypes} from './actions';

function* mountApp() {
  console.log('APP MOUNTED');
}

function* unmountApp() {
  console.log('APP UNMOUNTED');
}

function* appSagas() {
  yield all([
    takeEvery(actionTypes.MOUNT_APP, mountApp),
    takeEvery(actionTypes.UNMOUNT_APP, unmountApp),
  ]);
}

export default function* rootSaga() {
  yield all([appSagas(), homePageSagas()]);
}
