import React from "react";
import useCountRenders from "./useCountRenders";

const Square = React.memo(({ value, increment }) => {
  useCountRenders();
  return (
    <button type="button" onClick={() => increment(value)}>
      {value}
    </button>
  );
});

export default Square;
