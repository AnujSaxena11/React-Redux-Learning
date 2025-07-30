import styles from "./button_container.module.css";
function ButtonContainer({ onButtonClick }) {
  let value = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {value.map((value) => (
        <button className={styles.buttons} onClick={() => onButtonClick(value)}>
          {value}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;
