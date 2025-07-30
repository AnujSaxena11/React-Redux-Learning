/* <React.Fragment>
      <h1>Healthy food</h1>
      <ul className="list-group">
        <li className="list-group-item">Dal</li>
        <li className="list-group-item">veggies</li>
        <li className="list-group-item">Milk</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">roti</li>
      </ul>
    </React.Fragment> */

import Item from "./Item";
import { useState } from "react";
function FoodItems(props) {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {props.fooditem.map((item) => (
        <Item
          key={item}
          fooditem={item}
          bought={activeItems.includes(item)}
          handleClick={(event) => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
}

export default FoodItems;
