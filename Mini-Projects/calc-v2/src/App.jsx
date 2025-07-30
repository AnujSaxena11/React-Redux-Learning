import styles from "./App.module.css";
import Display from "./components/screen";
import ButtonContainer from "./components/button_container";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState("");

  function onButtonClick(value) {
    if (value === "C") {
      setCalVal("");
    } else if (value === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newVal = calVal + value;
      setCalVal(newVal);
    }
  }

  return (
    <div className={styles.calc}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
