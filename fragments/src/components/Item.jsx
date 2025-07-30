import styles from "./Item.module.css";
function Item({ fooditem, bought, handleClick }) {
  return (
    <li className={`list-group-item ${bought && "active"}`}>
      {fooditem}
      <button className={styles.customButton} onClick={handleClick}>
        buy
      </button>
    </li>
  );
}

export default Item;
