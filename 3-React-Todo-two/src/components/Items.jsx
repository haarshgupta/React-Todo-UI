// import todoItems from "./App.jsx";
import Item from "./Item.jsx";

const Items = ({ todoItems }) => {
 let id = 1;
  return (
    <div className="itemsContainer">
      {todoItems.map((item) => (
        <Item todoDate={item.date} todoEvents={item.name} key={id++}></Item>
      ))}
    </div>
  );
};

export default Items;
