import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };

  const updateTodo = (newTodo) => {
    const newArr = todos.map((todo) => {
      if (todo.id == newTodo.id) {
        return newTodo;
      }
      return todo;
    });

    setTodos([...newArr]);
  };
  
  return (
    
    <div className="App">
      <div className="main">
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          onUpdateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
