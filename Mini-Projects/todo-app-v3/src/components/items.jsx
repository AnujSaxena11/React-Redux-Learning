import TodoItem from "./TodoItem";

function Items({ todoItems, onDeleteClick }) {
  return (
    <div className="todo-list">
      {todoItems.map((item) => (
        <TodoItem
          key={item.task}
          todoName={item.task}
          date={item.date}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}

export default Items;
