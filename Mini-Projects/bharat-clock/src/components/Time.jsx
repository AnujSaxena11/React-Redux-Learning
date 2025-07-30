function Time() {
  let time = new Date();
  return (
    <h2>
      this is the current time : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </h2>
  );
}

export default Time;
