import React, { useMemo } from "react";
import useCountRenders from "./useCountRenders";

// const CounterIncrementer = ({ increment }) => {
//   return (
//     <>
//       <button type="button" onClick={increment}>
//         INCREMENT
//       </button>
//     </>
//   );
// };

const CounterIncrementer = React.memo(({ increment }) => {
  // useCountRenders(); // referencing the current component and logging everytime the component renders
  return (
    <>
      <button type="button" onClick={increment}>
        INCREMENT
      </button>
    </>
  );
});

export default CounterIncrementer;
