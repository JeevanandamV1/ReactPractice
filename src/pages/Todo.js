import React, { useState } from "react";
import "../styles/pages/todo.css";
import InputField from "../components/InputField";
import Delete from "../components/DeleteTodoItem";
import Complete from "../components/Complete";
import BackButton from "../components/BackButton";

function Todo() {
  const [Value, setValue] = useState();
  const [Todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...Todos, { id: Date.now(), text: Value, completed: false }]);
    setValue("");
    console.log(Value);
  }

  function handleDelete(id) {
    setTodos(Todos.filter((deleteTodo) => deleteTodo.id !== id));
  }

  function handleComplete(id) {
    setTodos((prevTodos) =>
      prevTodos.map((completeId) =>
        completeId.id === id
          ? { ...completeId, completed: !completeId.completed }
          : completeId
      )
    );
  }

  return (
    <>
      <div className="TodoListHeader">
        <BackButton />
        <h1>Todo List</h1>
      </div>
      <div className="Menuitems">
        <InputField
          value={Value}
          onChange={(e) => setValue(e.target.value)}
          onSubmit={handleSubmit}
        />
        <div className={Todos === 0 ? "Add Task" : "TodoItemContainer"}>
          <ul>
            {Todos.length === 0 ? (
              <h1>Add Tasks</h1>
            ) : (
              Todos.map((todo) => (
                <li key={todo.id}>
                  {todo.text}
                  <div>
                    <Complete
                      completed={todo.completed}
                      onClick={() => handleComplete(todo.id)}
                    />
                    <Delete onClick={() => handleDelete(todo.id)} />
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo;
