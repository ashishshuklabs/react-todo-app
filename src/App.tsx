import React, { useState } from "react";
import AddToDo from "./AddTodo";
import { IToDo } from "./IToDo";
import Todos from "./Todos";
function App() {
  const [todos, setTodos] = useState<IToDo[]>([]);
  const deleteToDo = (id: number) => {
    const newTodos = todos.filter((todo) =>{
      return todo.id !== id;
    })
    setTodos(newTodos);
  };

  const addTodo = (todo:IToDo|null) =>{
    if(todo === null){
      return;
    }
    todo.id = Math.random();
    let newTodos = [...todos, todo];
    setTodos(newTodos);
  }
  return (
    <div className="Todo-App container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={todos} deleteToDo={deleteToDo} />
      <AddToDo addTodo={addTodo}/>
    </div>
  );
}

export default App;
