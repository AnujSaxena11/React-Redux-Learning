import styles from "./InputFood.module.css";

function InputFood({ handleKeyDown }) {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.InputFoodCustom}
      onKeyDown={handleKeyDown}
    />
  );
}

export default InputFood;
