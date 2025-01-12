import "bootstrap/dist/css/bootstrap.min.css";
import AddName from "./components/AddName";
import AddTodo from "./components/AddTodo";
import Items from "./components/Items";
import styles from "./App.module.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./components/store/todo-items-store";

function App() {
  // const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState([]);

  // const handleTodoInput = (enteredName, enteredDate) => {
  //   setTodoItems((currentValue) => {
  //     let handelNewtodoItems = [
  //       ...currentValue,
  //       { name: enteredName, date: enteredDate },
  //     ];
  //     return handelNewtodoItems;
  //   });
  // };

  const addNewItems = (enteredName, enteredDate) => {
    setTodoItems((currentValue) => [
      ...currentValue,
      { name: enteredName, date: enteredDate },
    ]);
  };

  const deleteItems = (todoNames) => {
    const newTodoItems = todoItems.filter((items) => items.name !== todoNames);
    setTodoItems(newTodoItems);
    // console.log(`Item to be deleted is ${todoNames}`);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: [],
        addNewItems: () => {},
        deleteItems: () => {},
      }}
    >
      <center className={styles.Container}>
        <AddName></AddName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <Items className={styles.itemsContainer}></Items>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
