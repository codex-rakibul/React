import "./App.css";
import Msg from "./Components/Msg";
import React, { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  console.log("App rendering...");

  const handleMsgIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="App">
      <button
        onClick={() => {
          setToggle(!toggle);
        }}>
        {toggle ? "OFF" : "ON"}
      </button>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <Msg handleOffMsg={count} onHandleIncrementMsg={handleMsgIncrement} />
    </div>
  );
}

export default App;
