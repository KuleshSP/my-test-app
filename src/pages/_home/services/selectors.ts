import type {RootState} from '_main/services/types';
import type {AsyncStateTypes} from 'services/async-state-reducer/types';

import type {HomePageState} from './types';

export const getHomePageState = (state: RootState): HomePageState => state.homePage_state.mainState;

export const getTableAsyncState = (state: RootState): AsyncStateTypes =>
  state.homePage_state.tableAsyncState;
