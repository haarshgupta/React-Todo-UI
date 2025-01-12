import { useRef,useContext } from "react";
import styles from "./AddTodo.module.css";
import { IoIosAddCircle } from "react-icons/io";
import { TodoItemsContext } from "./store/todo-items-store";


function AddTodo() {

const todoItemsObj = useContext(TodoItemsContext);
  const onHandleTodoInput = todoItemsObj.addNewItems;

  const todoInputRef = useRef();
  const todoDateRef = useRef();

  const handleAddButton = (events) => {
    events.preventDefault();
    const todoName = todoInputRef.current.value;
    const dueDate = todoDateRef.current.value;
    todoInputRef.current.value = "";
    todoDateRef.current.value = "";
    onHandleTodoInput(todoName, dueDate);
  };

  return (
    <div className="container AddTodoContainer">
      <form className="row itemsContainer" onSubmit={handleAddButton}>
        <div className="col-5">
          <input
            type="text"
            ref={todoInputRef}
            placeholder="Enter ToDoHere!!"
            className={styles.addInput}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDateRef}
            className={styles.addInput}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="submit"
            className={`btn btn-success ${styles.TDButton}`}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
