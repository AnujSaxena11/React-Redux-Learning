import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import Items from "./components/items";
function App() {
  let todoItems = [
    {
      task: "Buy milk",
      date: "4/7/2025",
    },
    {
      task: "Play",
      date: "5/7/2025",
    },
    {
      task: "Sleep",
      date: "6/7/2025",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <Items todoItems={todoItems} />
    </center>
  );
}
export default App;
