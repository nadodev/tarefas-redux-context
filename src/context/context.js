import { createContext } from "react";

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
