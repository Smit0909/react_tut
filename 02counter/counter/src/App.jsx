import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  function incValue() {
    setCounter(++counter);
  }

  function decValue() {
    if (counter > 0) {
      setCounter(--counter);
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button onClick={incValue}>Inc</button>
      &nbsp;&nbsp;
      <button onClick={decValue}>Dec</button>
    </>
  );
}

export default App;
