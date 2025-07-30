import { MdOutlineDelete } from "react-icons/md";
import { useContext } from "react";
import { Storage } from "../store/todo-items-store";

function TodoItem({ todoName, date }) {
  const { deleteItem } = useContext(Storage);
  return (
    <div className="container">
      <div className="row custom-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteItem(todoName)}
          >
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
