import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { IToDo } from "./IToDo";
interface IProps {
  addTodo: (todo: IToDo | null) => void;
}
//Contains form element and maintains todo entry state
const AddToDo: FC<IProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState<IToDo | null>(null);//Union type required as the state needs to be set to null for clearing task entry field.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(todo);
    setTodo(null);//This is required to clear the value after submission.
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { //Change even of HTMLInput element provides access to value field in event target.
    const todo: IToDo = {
      id: 0,//Just a random default value. This will be overwritten in App.tsx anyways.
      content: e.currentTarget.value,
    };
    setTodo(todo);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Task:</label>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter a todo task"
        value={todo==null?"":todo.content} //This is required to clear the text after submit/task entry in to the list.
      />
    </form>
  );
};

export default AddToDo;
