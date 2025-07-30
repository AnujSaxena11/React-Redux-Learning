import TodoItem from "./TodoItem";

function Items({ todoItems }) {
  return (
    <div className="todo-list">
      {todoItems.map((item) => (
        <TodoItem todoName={item.task} date={item.date} />
      ))}
    </div>
  );
}

export default Items;
