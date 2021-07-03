import React from "react";
import useCountRenders from "./useCountRenders";

// const CounterView = React.memo(({ count }) => {
//   useCountRenders();
//   return <>{count}</>;
// });

const CounterView = ({ count }) => {
  useCountRenders();
  return <>{count}</>;
};

export default CounterView;
