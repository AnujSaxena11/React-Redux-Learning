import { createContext, useReducer } from "react";

export const Storage = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

function todoItemsReducer(currTodoItems, action) {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { task: action.payload.task, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.task !== action.payload.task
    );
  }
  return newTodoItems;
}

const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  function addNewItem(itemName, intemDueDate) {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { task: itemName, date: intemDueDate },
    };
    dispatchTodoItems(newItemAction);
  }

  function deleteItem(todoItemName) {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { task: todoItemName },
    };
    dispatchTodoItems(deleteItemAction);
  }

  return (
    <Storage.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </Storage.Provider>
  );
};

export default TodoItemContextProvider;
