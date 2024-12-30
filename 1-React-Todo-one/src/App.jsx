import "bootstrap/dist/css/bootstrap.min.css";
import AddName from "./components/AddName";
import AddTodo from "./components/AddTodo";
import Item1 from "./components/Item1";
import Item2 from "./components/Item2";
import "./App.css"
function App() {
  return (
    <center className="todo-container">
      <AddName></AddName>
      <AddTodo></AddTodo>
      <div className="items-container">
      <Item1></Item1>
      <Item2></Item2>
      </div>
    </center>
  );
}

export default App;
