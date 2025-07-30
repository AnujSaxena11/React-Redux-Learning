import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { useContext } from "react";
import { Storage } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(Storage);
  let todoNameElement = useRef();
  let dueDateElement = useRef();

  function handleAddButtonClicked() {
    event.preventDefault();
    let todoName = todoNameElement.current.value;
    let dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  }

  return (
    <div className="container text-center">
      <form className="row custom-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter todo here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success">
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
