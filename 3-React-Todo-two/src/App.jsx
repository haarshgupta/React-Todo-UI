import "bootstrap/dist/css/bootstrap.min.css";
import AddName from "./components/AddName";
import AddTodo from "./components/AddTodo";
import Items from "./components/Items";
import "./App.css"


function App() {

  const todoItems = [{
    name:"By movie tickets",
    date:"31-12-2024"
  },{
     name:"Vist Candies",
    date:"31-12-2024"
  },
  {
    name:"OOOG lit song",
   date:"13-12-2024"
 }
];

  return (
    <center className="itemsContainer">
      <AddName></AddName>
      <AddTodo></AddTodo>

      <Items todoItems={todoItems}></Items>
    </center>
  );
}

export default App;
