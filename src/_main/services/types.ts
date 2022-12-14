import {HomePageState} from 'pages/_home/services/types';
import type {AsyncStateTypes} from 'services/async-state-reducer/types';

import {actions} from './actions';

export type ActionTypes = ReturnType<typeof actions[keyof typeof actions]>;

export interface RootState {
  homePage_state: {
    mainState: HomePageState;
    tableAsyncState: AsyncStateTypes;
  };
}
