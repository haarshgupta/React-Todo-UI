import { TodoItemsContext } from "./store/todo-items-store";
import { useContext } from "react";

const WelcomeMessage=()=>{
  
  const todoItemsObj = useContext(TodoItemsContext);
  const todoItems = todoItemsObj.todoItems;

  return todoItems.length === 0 && <p>Enjoy your day!</p>
}


export default WelcomeMessage;