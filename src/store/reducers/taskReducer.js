import {ADDTASK, DELETETASK, UPDATETASK} from '../types/taskTypes';
import {themeColors} from '../../theme/colors';

initialState = {
  tasks: [],

  taskStatus: [
    {
      id: 1,
      status: 'In Progress',
      value: 0,
      color: themeColors.darkblue,
    },
    {
      id: 2,
      status: 'In Review',
      value: 0,
      color: themeColors.lightBlue,
    },
    {
      id: 3,
      status: 'On Hold',
      value: 0,
      color: themeColors.yellow,
    },
    {
      id: 4,
      status: 'Completed',
      value: 0,
      color: themeColors.green,
    },
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case DELETETASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };

    case UPDATETASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task,
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;
