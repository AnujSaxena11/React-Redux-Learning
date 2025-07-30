import { Storage } from "../store/todo-items-store";
import { useContext } from "react";

function Error() {
  const { todoItems } = useContext(Storage);
  return todoItems.length === 0 && <h1>Enjoy your day</h1>;
}

export default Error;
