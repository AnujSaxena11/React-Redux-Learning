function TodoItem1() {
  let todoName = "Buy Milk";
  let date = "15/7/2025";

  return (
    <div className="container">
      <div className="row custom-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
