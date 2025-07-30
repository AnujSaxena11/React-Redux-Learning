// fragment is used to wrap all the elements without using extra div
// otherwise we have to use extra div to wrap all the tag because return should have only one tag, child tags doesn't count
// preferable to <> </> instead of <React.Fragment> </React.Fragment>

//MAP also covered in this, key is used to provide unique id to each element of the list
// it is alternate of looping

// conditional rendering is also covered in this

import React from "react";
import FoodItems from "./components/foodItems";
import Error from "./components/ErrorMsg";
import Container from "./components/container";
import InputFood from "./components/InputFood";
import "./app.css";
import { useState } from "react";

function App() {
  //let foodItems = [];
  //let foodItems = ["dal", "roti", "veggies", "milk", "salad"];

  // let textStateArray = useState("Food item enterd by user"); // useState returns an array [value, method to change its value]
  // let textToShow = textStateArray[0];
  // let setTextState = textStateArray[1];

  //let [textToShow, setTextState] = useState();

  let [foodItems, setFoodItems] = useState([]);

  function onKeyDown(event) {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      event.target.value = "";
    }
  }
  return (
    <Container>
      <h1>Healthy food</h1>
      <InputFood handleKeyDown={onKeyDown} />
      <Error fooditem={foodItems} />
      <FoodItems fooditem={foodItems} />
    </Container>
  );
}

export default App;
