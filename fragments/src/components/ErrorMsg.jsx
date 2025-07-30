function Error(props) {
  return (
    <>
      {/* {foodItems.length === 0 ? <h3>I am Still hungry</h3> : null}  can also use ternary operator */}
      {props.fooditem.length === 0 && <h3>I am Still hungry</h3>}
    </>
  );
}

export default Error;
