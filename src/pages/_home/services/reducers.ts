import {combineReducers} from 'redux';
import {makeAsyncStateReducer} from 'services/async-state-reducer';
import {actionTypes} from './actions';
import type {ActionTypes, HomePageMainState} from './types';
import {addTotalColumn, mergeById} from './utils';

const initialState: HomePageMainState = {
  table: {
    items: [],
  },
};

const reducer = (state = initialState, action: ActionTypes): HomePageMainState => {
  switch (action.type) {
    case actionTypes.DOCUMENTS_SUCCEED:
      const {documents1, documents2} = action.payload;

      const mergedDocuments = mergeById(documents1.items, documents2.items);

      return {
        ...state,
        table: {
          items: addTotalColumn(mergedDocuments),
        },
      };

    case actionTypes.CANCEL_DOCUMENTS_SUCCEED:
      const idsToCancel = action.payload;
      const items = state.table.items;

      return {
        ...state,
        table: {
          items: items.filter(
              (item) => !idsToCancel.some((cancelledId) => item.id === cancelledId),
          ),
        },
      };

    case actionTypes.UNMOUNT_PAGE:
      return initialState;

    default:
      return state;
  }
};

export default combineReducers({
  mainState: reducer,
  tableAsyncState: makeAsyncStateReducer(
      actionTypes.DOCUMENTS_REQUESTED,
      actionTypes.DOCUMENTS_SUCCEED,
      actionTypes.DOCUMENTS_FAILED,
  ),
});
