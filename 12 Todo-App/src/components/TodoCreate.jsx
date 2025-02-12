import React, { useState } from "react";
import "../App.css";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setnewTodo] = useState("");

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 9999999),
      content: newTodo,
    };

    onCreateTodo(request);
    setnewTodo("");
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => setnewTodo(e.target.value)}
        className="todo-input"
        placeholder="Enter Todo"
      />
      <button onClick={createTodo} className="todo-create-button">
        Todo Create
      </button>
    </div>
  );
}

export default TodoCreate;
