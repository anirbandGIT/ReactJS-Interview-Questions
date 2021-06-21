import { useState } from "react";

const UseStateDemo = (props) => {
  // call hooks at the top
  const [counterValue, setCounterVal] = useState(0);
  return (
    <>
      <h1>A simple useState() hook demo</h1>
      <p>The useState() hook is one of the basic hooks.</p>
      <h2>Counter</h2>
      <div>{counterValue}</div>
      <div>
        <button
          type="button"
          disabled={counterValue === 10}
          onClick={(event) => {
            if (counterValue < 10) {
              setCounterVal(counterValue + 1);
            }
          }}
        >
          +
        </button>
        <button
          type="button"
          disabled={counterValue === 0}
          onClick={(event) => {
            if (counterValue > 0) {
              setCounterVal(counterValue - 1);
            }
          }}
        >
          -
        </button>
      </div>
    </>
  );
};

export default UseStateDemo;
