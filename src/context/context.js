/* eslint-disable react-hooks/rules-of-hooks */
import { createContext } from "react";
// import {
//   handleAddTask,
//   handleCompleteTask,
//   handleDeleteTask,
// } from "../hooks/useAddTask";
import useAddTask from "../hooks/useAddTask";
export const Contexto = createContext();

export default function ContextProvider({ children }) {
  const { handleAddTask, handleCompleteTask, handleDeleteTask } = useAddTask();

  return (
    <Contexto.Provider
      value={{ handleAddTask, handleCompleteTask, handleDeleteTask }}
    >
      {children}
    </Contexto.Provider>
  );
}
