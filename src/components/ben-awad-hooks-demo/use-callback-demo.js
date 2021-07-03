import { useCallback, useState } from "react";
import CounterIncrementer from "./counter-incrementer";
// import CounterView from "./counter-view";
import Square from "./square";

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(
    () => setCount((countVal) => countVal + 1),
    [setCount]
  );
  const incrementByN = useCallback(
    (n) => setCount((countVal) => countVal + n),
    [setCount]
  );

  const favoriteNumbers = [5, 7, 8, 12, 21];
  return (
    <div>
      {/* to prevent CounterIncrementer from rerendering we need useCallback */}
      <CounterIncrementer increment={increment} />
      {/* <CounterView count={count} /> */}
      <span>{count}</span>
      <br />
      {favoriteNumbers.map((num, i) => (
        <Square key={i} value={num} increment={incrementByN} />
        // <Square key={i} value={num} increment={(n) => setCount(count + n)} />
      ))}
    </div>
  );
};

export default UseCallbackDemo;
