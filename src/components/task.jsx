import { useState, useContext, useRef } from "react";
import { format } from "date-fns";
import { useSelector } from "react-redux";

// componentes /
import { Contexto } from "../context/context";

// CSS
import "./style.css";

export default function Task() {
  const { reducers } = useSelector((state) => state);
  const [inputValue, setVInputValue] = useState("");
  const input = useRef(null);
  const { handleAddTask, handleCompleteTask, handleDeleteTask } =
    useContext(Contexto);

  const handleSubmit = (e) => {
    e.preventDefault();
    input.current.value = "";
  };

  var date = new Date();
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setVInputValue(newValue);
    input.current.value = "";
  };
  return (
    <>
      <div className="container">
        <h1>Tarefas do Dia</h1>
        <p>DIA: {format(date, "dd-MM-yyyy' -  hás 'HH:mm:ss")}</p>
        <ul id="task">
          {reducers.task.length > 0 ? (
            reducers.task.map((item) => (
              <li
                key={item.id}
                id={item.id}
                className={item.status ? "active" : ""}
              >
                <input
                  type="checkbox"
                  checked={item.status}
                  onChange={() => handleCompleteTask(item.id)}
                />
                <span>{item.status ? <del>{item.text}</del> : item.text}</span>

                <button
                  className="btn"
                  onClick={() => handleDeleteTask(item.id)}
                >
                  x
                </button>
              </li>
            ))
          ) : (
            <li>Não há tarefas para ser exibidas</li>
          )}
        </ul>

        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            ref={input}
            name="task"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={() => handleAddTask(inputValue)}>Add Tasks</button>
        </form>
      </div>
    </>
  );
}
