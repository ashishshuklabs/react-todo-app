import React from "react";
import { IToDo } from "./IToDo";
interface IProps {
  todos: IToDo[];
  deleteToDo: (id: number) => void;
}
//Pure functional component, no state here.
const Todos: React.FC<IProps> = ({ todos, deleteToDo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteToDo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">Nothing to do, Yay!!!</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
