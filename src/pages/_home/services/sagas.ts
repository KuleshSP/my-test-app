import {takeEvery, all} from 'redux-saga/effects';
import {actionTypes} from './actions';

function* mountPage() {
  console.log('HOME PAGE MOUNTED');
}

function* unmountPage() {
  console.log('HOME PAGE UNMOUNTED');
}

function* sagas() {
  yield all([takeEvery(actionTypes.MOUNT_PAGE, mountPage)]);
  yield all([takeEvery(actionTypes.UNMOUNT_PAGE, unmountPage)]);
}

export default sagas;
