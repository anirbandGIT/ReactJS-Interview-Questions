import { useCallback, useState } from "react";
import useCountRenders from "./useCountRenders";

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  useCountRenders();
  return (
    <div>
      <span>{count}</span>
      <button type="button" onClick={() => setCount(count + 1)}>
        INCREMENT
      </button>
    </div>
  );
};

export default UseMemoDemo;
