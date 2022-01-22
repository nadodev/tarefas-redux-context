export function addTasks(value) {
  return {
    type: "ADD_TASKS",
    payload: {
      id: Math.random(),
      text: value,
      status: false,
    },
  };
}
export function completeTask(id) {
  return {
    type: "COMPLETE_TASK",
    payload: {
      id: id,
    },
  };
}
export function deleteTask(id) {
  return {
    type: "DELETE_TASK",
    payload: {
      id: id,
    },
  };
}
