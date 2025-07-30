import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import Items from "./components/items";
import Error from "./components/ErrorMessage";
import TodoItemContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Error />
        <Items />
      </center>
    </TodoItemContextProvider>
  );
}
export default App;
