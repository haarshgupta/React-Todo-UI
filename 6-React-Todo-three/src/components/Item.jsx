import { useContext } from "react";
import styles from "../App.module.css";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "./store/todo-items-store";

function Item({ todoEvents, todoDate }) {
  const { deleteItems } = useContext(TodoItemsContext);

  return (
    <div className="row itemsContainer">
      <div className="col-5">{todoEvents}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className={`btn btn-danger ${styles.TDButton}`}
          onClick={() => {
            deleteItems(todoEvents);
          }}
        >
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
}

export default Item;
