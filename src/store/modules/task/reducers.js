/* eslint-disable no-undef */
const initalState = {
  task: [],
};

const cart = (state = initalState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TASKS": {
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    }
    case "COMPLETE_TASK": {
      return {
        ...state,
        task: state.task.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, status: !item.status };
          }
          return item;
        }),
      };
    }
    case "DELETE_TASK": {
      return {
        ...state,
        task: state.task.filter((item) => item.id !== action.payload.id),
      };
    }
    default: {
      return state;
    }
  }
};

export default cart;
