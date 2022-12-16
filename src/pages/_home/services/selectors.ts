import type {RootState} from '_main/services/types';
import type {HomePageMainState, HomePageTableAsyncState} from './types';

export const getHomePageState = (state: RootState): HomePageMainState =>
  state.homePage_state.mainState;

export const getTableAsyncState = (state: RootState): HomePageTableAsyncState =>
  state.homePage_state.tableAsyncState;
