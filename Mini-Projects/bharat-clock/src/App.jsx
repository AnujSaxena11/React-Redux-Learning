import AppName from "./components/AppName";
import Desc from "./components/desc";
import Time from "./components/Time";
function App() {
  return (
    <center className="clock-container">
      <AppName />
      <Desc />
      <Time />
    </center>
  );
}

export default App;
