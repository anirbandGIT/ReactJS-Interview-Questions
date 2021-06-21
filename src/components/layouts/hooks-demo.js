import UseStateDemo from "../hooks-demo/use-state-demo";
import UseEffectDemo from "../hooks-demo/use-effect-demo";
import {
  UseContextDemo,
  MoodyComponent,
  MoodyFriendComponent,
} from "../hooks-demo/use-context-demo";
import UseReducerDemo from "../hooks-demo/use-reducer-demo";
import UseRefDemo from "../hooks-demo/use-ref-demo";
import SimpleCustomHook from "../hooks-demo/simple-custom-hook-demo";

function HooksDemo() {
  return (
    <div className="App">
      {/* // * useState DEMO */}
      <UseStateDemo />

      {/* // * useEffect DEMO */}
      <UseEffectDemo />

      {/* // * useContext DEMO */}
      <UseContextDemo>
        <MoodyComponent />
        <MoodyFriendComponent />
      </UseContextDemo>

      {/* // * useReducer DEMO */}
      <UseReducerDemo />

      <UseRefDemo />

      <SimpleCustomHook />
    </div>
  );
}

export default HooksDemo;
