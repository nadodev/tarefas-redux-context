const initalState = {
  task: [],
};

const cart = (state = initalState, action) => {
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
    case "CLEAR_TASKS": { // Adicionando um novo case para limpar as tarefas
      return {
        ...state,
        task: [], 
      };
    }
    default: {
      return state;
    }
  }
};

export default cart;
