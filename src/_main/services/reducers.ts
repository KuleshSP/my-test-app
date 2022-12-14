import {combineReducers} from 'redux';
import homePageReducer from 'pages/_home/services/reducers';

export const rootReducer = combineReducers({
  homePage_state: homePageReducer,
});
