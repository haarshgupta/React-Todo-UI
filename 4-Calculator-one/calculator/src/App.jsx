import CalInput from "./Components/CalInput";
import CalButton from "./Components/CalButton";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <CalInput></CalInput>
      <CalButton></CalButton>
    </div>
  );
}

export default App;
