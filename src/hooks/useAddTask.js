import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  addTasks,
  completeTask,
  deleteTask,
} from "../store/modules/task/actions";

export default function useAddTask() {
  const dispath = useDispatch();

  const handleAddTask = useCallback(
    (value) => {
      if (value.trim() !== '') {
        dispath(addTasks(value));
      }else {
        alert("campo vazio")
      }
    },
    [dispath]
  );

  const handleCompleteTask = useCallback(
    (id) => {
      dispath(completeTask(id));
    },
    [dispath]
  );

  const handleDeleteTask = useCallback(
    (id) => {
      dispath(deleteTask(id));
    },
    [dispath]
  );

  return { handleAddTask, handleCompleteTask, handleDeleteTask };
}
