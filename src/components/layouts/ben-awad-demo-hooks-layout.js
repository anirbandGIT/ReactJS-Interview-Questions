import { useEffect, useState } from "react";
import { Movie, MemoizedMovie } from "../ben-awad-hooks-demo/memoisation.demo";
import UseStateDemo from "../ben-awad-hooks-demo/use-state-demo";
import UseEffectDemo from "../ben-awad-hooks-demo/use-effect-demo";
import UseCallbackDemo from "../ben-awad-hooks-demo/use-callback-demo";
import UseMemoDemo from "../ben-awad-hooks-demo/use-memo-demo";

const BenAwadHooksDemo = () => {
  // * only for memoisation demo
  // const [, setToggle] = useState(true);
  // useEffect(() => {
  //   const toggleInterval = setInterval(() => {
  //     setToggle((toggle) => !toggle);
  //   }, 3000);
  //   return () => clearInterval(toggleInterval);
  // }, []);

  return (
    <div>
      {/* // * MEMOISATION EXAMPLE */}
      {/* <MemoizedMovie title="Heat" releaseDate="December 15, 1995" memo={true} />
      <Movie title="Heat" releaseDate="December 15, 1995" memo={false} /> */}

      {/* // * useState EXAMPLE */}
      {/* <UseStateDemo /> */}
      <UseEffectDemo />
      {/* <UseCallbackDemo /> */}
      {/* <UseMemoDemo /> */}
    </div>
  );
};

export default BenAwadHooksDemo;
