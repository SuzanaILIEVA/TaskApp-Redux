import {applyMiddleware, createStore} from 'redux';
import RouteReducer from './reducers';
import {thunk} from 'redux-thunk';

const store = createStore(RouteReducer, applyMiddleware(thunk));

export default store;
