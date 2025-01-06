import styles from "../App.module.css";

const CalButtons = [
  "c",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "/",
  "7",
  "8",
  "*",
  "=",
  "9",
  "0",
  ".",
];

const CalButton = () => {
  return (
    <div className={styles.buttonsContainer}>
      {CalButtons.map((items) => (
        <button className={styles.button} key={items}>{items}</button>
      ))}
    </div>
  );
};

export default CalButton;
