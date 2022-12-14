import type {ActionPayload} from './types';

export const actionTypes = {
  MOUNT_PAGE: 'HOME_PAGE/MOUNT_PAGE' as const,
  UNMOUNT_PAGE: 'HOME_PAGE/UNMOUNT_PAGE' as const,
  ASYNC_ACTION_REQUESTED: 'ASYNC_ACTION_REQUESTED' as const,
  ASYNC_ACTION_SUCCEED: 'ASYNC_ACTION_SUCCEED' as const,
  ASYNC_ACTION_FAILED: 'ASYNC_ACTION_FAILED' as const,
};

export const actions = {
  mountPage: () => ({
    type: actionTypes.MOUNT_PAGE,
  }),
  unmountPage: () => ({
    type: actionTypes.UNMOUNT_PAGE,
  }),
  asyncActionRequested: (payload: ActionPayload) => ({
    type: actionTypes.ASYNC_ACTION_REQUESTED,
    payload,
  }),
  asyncActionSucceed: (payload: ActionPayload) => ({
    type: actionTypes.ASYNC_ACTION_SUCCEED,
    payload,
  }),
  asyncActionFailed: (error: Error | string) => ({
    type: actionTypes.ASYNC_ACTION_FAILED,
    error,
  }),
};
