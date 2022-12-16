import {takeEvery, all, call, put} from 'redux-saga/effects';
import Api from 'api/documents';
import type {SagaTypes} from 'types/sagas';
import type {GetDocumentResponse} from 'api/documents/types';
import {actions as homePageActions, actionTypes} from './actions';

function* mountPage(): SagaTypes<any> {
  console.log('HOME PAGE MOUNTED');

  yield put(homePageActions.documentsRequested());
}

function* unmountPage() {
  console.log('HOME PAGE UNMOUNTED');
}

function* requestDocuments(): SagaTypes<[GetDocumentResponse, GetDocumentResponse]> {
  try {
    const [documents1, documents2] = yield all([call(Api.getDocuments1), call(Api.getDocuments2)]);

    yield put(homePageActions.documentsSucceed({documents1, documents2}));
  } catch (error) {
    console.error(error);

    yield put(homePageActions.documentsFailed(String(error)));
  }
}

function* cancelDocuments(
    action: ReturnType<typeof homePageActions.cancelDocumentsRequested>,
): SagaTypes<any> {
  const ids = action.payload;

  try {
    const response = yield call(Api.cancelDocuments, ids);

    console.log(response);

    yield put(homePageActions.cancelDocumentsSucceed(ids));
  } catch (error) {
    console.error(error);

    yield put(homePageActions.cancelDocumentsFailed(String(error)));
  }
}

function* sagas() {
  yield all([takeEvery(actionTypes.MOUNT_PAGE, mountPage)]);
  yield all([takeEvery(actionTypes.UNMOUNT_PAGE, unmountPage)]);
  yield all([takeEvery(actionTypes.DOCUMENTS_REQUESTED, requestDocuments)]);
  yield all([takeEvery(actionTypes.CANCEL_DOCUMENTS_REQUESTED, cancelDocuments)]);
}

export default sagas;
