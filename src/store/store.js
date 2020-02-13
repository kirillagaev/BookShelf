import { createStore, compose, applyMiddleware } from 'redux';

import mainReducer from '../reducers/reducer';
import initialState from '../constants/initialState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    mainReducer,
    initialState,
    composeEnhancers()
);

export default store;