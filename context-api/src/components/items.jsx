import { Storage } from "../store/todo-items-store";
import { useContext } from "react";
import TodoItem from "./TodoItem";

function Items() {
  // const contexObject = useContext(Storage);
  // const todoItems = contexObject.todoItems;
  const { todoItems } = useContext(Storage);
  return (
    <div className="todo-list">
      {todoItems.map((item) => (
        <TodoItem key={item.task} todoName={item.task} date={item.date} />
      ))}
    </div>
  );
}

export default Items;
