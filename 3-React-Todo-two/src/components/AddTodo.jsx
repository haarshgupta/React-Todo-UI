import styles from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className="container AddTodoContainer">
      <div className="row itemsContainer">
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter ToDoHere!!"
            className={styles.addInput}
          ></input>
        </div>
        <div className="col-4">
          <input type="date" className={styles.addInput}></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success TD-button">
            Success
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
