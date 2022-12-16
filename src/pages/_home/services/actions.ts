import type {CancelDocumentsRequestedPayload, DocumentsSucceedPayload} from './types';

export const actionTypes = {
  MOUNT_PAGE: 'HOME_PAGE/MOUNT_PAGE' as const,
  UNMOUNT_PAGE: 'HOME_PAGE/UNMOUNT_PAGE' as const,

  DOCUMENTS_REQUESTED: 'HOME_PAGE/DOCUMENTS_REQUESTED' as const,
  DOCUMENTS_SUCCEED: 'HOME_PAGE/DOCUMENTS_SUCCEED' as const,
  DOCUMENTS_FAILED: 'HOME_PAGE/DOCUMENTS_FAILED' as const,

  CANCEL_DOCUMENTS_REQUESTED: 'HOME_PAGE/CANCEL_DOCUMENTS_REQUESTED' as const,
  CANCEL_DOCUMENTS_SUCCEED: 'HOME_PAGE/CANCEL_DOCUMENTS_SUCCEED' as const,
  CANCEL_DOCUMENTS_FAILED: 'HOME_PAGE/CANCEL_DOCUMENTS_FAILED' as const,
};

export const actions = {
  mountPage: () => ({
    type: actionTypes.MOUNT_PAGE,
  }),
  unmountPage: () => ({
    type: actionTypes.UNMOUNT_PAGE,
  }),

  documentsRequested: () => ({
    type: actionTypes.DOCUMENTS_REQUESTED,
  }),
  documentsSucceed: (payload: DocumentsSucceedPayload) => ({
    type: actionTypes.DOCUMENTS_SUCCEED,
    payload,
  }),
  documentsFailed: (error: Error | string) => ({
    type: actionTypes.DOCUMENTS_FAILED,
    error,
  }),

  cancelDocumentsRequested: (payload: CancelDocumentsRequestedPayload) => ({
    type: actionTypes.CANCEL_DOCUMENTS_REQUESTED,
    payload,
  }),
  cancelDocumentsSucceed: (payload: CancelDocumentsRequestedPayload) => ({
    type: actionTypes.CANCEL_DOCUMENTS_SUCCEED,
    payload,
  }),
  cancelDocumentsFailed: (error: Error | string) => ({
    type: actionTypes.CANCEL_DOCUMENTS_FAILED,
    error,
  }),
};
