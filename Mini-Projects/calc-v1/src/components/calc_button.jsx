import styles from "./calc_button.module.css";

function CalcButton() {
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
    <>
      {value.map((value) => {
        return (
          <button className={styles.buttons} type="button">
            {value}
          </button>
        );
      })}
    </>
  );
}

export default CalcButton;
