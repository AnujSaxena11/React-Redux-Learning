import styles from "./screen.module.css";

function Display({ displayValue }) {
  return (
    <div>
      <input
        className={styles.display}
        type="text"
        value={displayValue}
        readOnly
      />
    </div>
  );
}

export default Display;
