import {connect} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';

import App from '../components/App';

import {rootReducer} from './reducers';
import rootSaga from './sagas';
import type {RootState} from './types';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, undefined, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export const ConnectedApp = connect<RootState, null, {}, RootState>((state) => state)(App);

export default store;
