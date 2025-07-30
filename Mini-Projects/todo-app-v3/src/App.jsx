import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import Items from "./components/items";
import Error from "./components/ErrorMessage";
import { useState } from "react";
function App() {
  let [todoItems, setTodoItems] = useState([]);

  function handlebuttonClick(itemName, intemDueDate) {
    setTodoItems((currentValue) => {
      const newTodoItems = [
        ...currentValue,
        { task: itemName, date: intemDueDate },
      ];
      return newTodoItems;
    });
  }

  // .filter adds element to new array when condition is true else, it will drop the element
  function handleDeleteItem(todoItemName) {
    let newItems = todoItems.filter((item) => item.task !== todoItemName);
    setTodoItems(newItems);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo addNew={handlebuttonClick} />
      <Error todoItems={todoItems} />
      <Items todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}
export default App;
