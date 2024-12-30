function AddTodo() {
  return (
    <div class="container AddTodoContainer">
      <div class="row Td-row">
        <div class="col-5">
          <input type="text" placeholder="Enter ToDoHere!!"></input>
        </div>
        <div class="col-4">
          <input type="date"></input>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success TD-button">
            Success
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
