import {Alert} from 'react-native';
import {ADDTASK, DELETETASK, UPDATETASK} from '../types/taskTypes';

export const addNewTask = task => {
  return async dispatch => {
    dispatch({
      type: ADDTASK,
      payload: task,
    });
    Alert.alert('Successfully', 'Task Successfully Added');
  };
};

export const deleteTask = taskId => {
  return async dispatch => {
    dispatch({
      type: DELETETASK,
      payload: taskId,
    });
    Alert.alert('Successfully', 'Task Successfully Deleted');
  };
};

export const updateTask = task => {
  return async dispatch => {
    dispatch({
      type: UPDATETASK,
      payload: task,
    });
    Alert.alert('Successfully', 'Task Successfully Updated');
  };
};
