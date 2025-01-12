// import todoItems from "./App.jsx";
import { createContext, useContext } from "react";
import Item from "./Item.jsx";
import { TodoItemsContext } from "./store/todo-items-store.jsx";

const Items = () => {
  let id = 1;

  const todoItemsObj = useContext(TodoItemsContext);
  const todoItems = todoItemsObj.todoItems;

  return (
    <div className="itemsContainer">
      {todoItems.map((item) => (
        <Item
          todoDate={item.date}
          todoEvents={item.name}
          key={id++}
          
        ></Item>
      ))}
    </div>
  );
};

export default Items;
