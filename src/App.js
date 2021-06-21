import "./App.css";
import UseStateDemo from "./components/use-state-demo";
import UseEffectDemo from "./components/use-effect-demo";
import { UseContextDemo, MoodyComponent } from "./components/use-context-demo";
import UseReducerDemo from "./components/use-reducer-demo";
import UseRefDemo from "./components/use-ref-demo";
import SimpleCustomHook from "./components/simple-custom-hook-demo";

function App() {
  return (
    <div className="App">
      {/* // * useState DEMO */}
      {/* <UseStateDemo /> */}

      {/* // * useEffect DEMO */}
      {/* <UseEffectDemo /> */}

      {/* // * useContext DEMO */}
      {/* <UseContextDemo>
        <MoodyComponent />
      </UseContextDemo> */}

      {/* // * useReducer DEMO */}
      <UseReducerDemo />

      {/* <UseRefDemo /> */}

      <SimpleCustomHook />
    </div>
  );
}

export default App;
