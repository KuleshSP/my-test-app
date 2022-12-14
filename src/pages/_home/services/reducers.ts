import {combineReducers} from 'redux';

import {makeAsyncStateReducer} from 'services/async-state-reducer';

import {actionTypes} from './actions';
import type {ActionTypes, HomePageState} from './types';

const initialState: HomePageState = {
  someState: 'template',
};

const reducer = (state = initialState, action: ActionTypes): HomePageState => {
  switch (action.type) {
    case actionTypes.UNMOUNT_PAGE:
      return initialState;

    default:
      return state;
  }
};

export default combineReducers({
  mainState: reducer,
  tableAsyncState: makeAsyncStateReducer(
      actionTypes.ASYNC_ACTION_REQUESTED,
      actionTypes.ASYNC_ACTION_SUCCEED,
      actionTypes.ASYNC_ACTION_FAILED,
  ),
});
