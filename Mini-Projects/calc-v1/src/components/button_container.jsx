import CalcButton from "./calc_button";
import styles from "./button_container.module.css";
function ButtonContainer() {
  return (
    <div className={styles.buttonContainer}>
      <CalcButton />
    </div>
  );
}

export default ButtonContainer;
