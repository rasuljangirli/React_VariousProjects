import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../App.css";
import { FaCheck } from "react-icons/fa";

function Todo({ todo, removeTodo, onUpdateTodo }) {
  const { id, content } = todo;

  const [editTable, seteditTable] = useState(false);
  const [newTodo, setnewTodo] = useState(content);

  const editTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateTodo(request);
    seteditTable(false);
  };

  const todoRemove = () => {
    removeTodo(id);
  };
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      {editTable ? (
        <input
          value={newTodo}
          onChange={(e) => {
            setnewTodo(e.target.value);
          }}
          style={{
            width: "83%",
            height: "20px",
            backgroundColor: "rgb(30, 33, 33",
          }}
        />
      ) : (
        <div>{content}</div>
      )}

      <div>
        <IoIosRemoveCircle onClick={todoRemove} className="todo-icons" />

        {editTable ? (
          <FaCheck className="todo-icons" onClick={editTodo} />
        ) : (
          <FaEdit className="todo-icons" onClick={() => seteditTable(true)} />
        )}
      </div>
    </div>
  );
}
export default Todo;
