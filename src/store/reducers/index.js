import {combineReducers} from 'redux';
import taskReducer from './taskReducer';

const RouteReducer = combineReducers({
  tasks: taskReducer,
});

export default RouteReducer;
