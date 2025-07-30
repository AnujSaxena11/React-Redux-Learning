import styles from "./App.module.css";
import Display from "./components/screen";
import ButtonContainer from "./components/button_container";
function App() {
  return (
    <div className={styles.calc}>
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default App;
