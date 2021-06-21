import { useReducer } from "react";
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENT_MULTI":
      return state + action.payload;
    case "DECREMENT_MULTI":
      return state - action.payload;
    default:
      return state;
  }
};
const UseReducerDemo = (props) => {
  // * first we need to define a redux state and a dispatcher tha will modify it
  // * this is just like useState, but in useReducer we pass the reducer as first arg
  // * and init state value as second agrument
  const [counterState, dispatchCounterAction] = useReducer(counterReducer, 0);

  return (
    <div style={{ backgroundColor: "#dae0d7" }}>
      <h1>4. useReducer() hook demo w/ a counter</h1>
      <p>The useReducer() hook is a advanced hook.</p>
      <h2>Redux State Counter</h2>
      <div className="counter">
        <span style={{ fontSize: "25px" }}>{counterState}</span>
        <div>
          <button
            type="button"
            onClick={(event) => {
              dispatchCounterAction({ type: "INCREMENT" });
            }}
          >
            +
          </button>
          <button
            type="button"
            onClick={(event) => {
              dispatchCounterAction({ type: "DECREMENT" });
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={(event) => {
              dispatchCounterAction({ type: "INCREMENT_MULTI", payload: 2 });
            }}
          >
            +2
          </button>
          <button
            type="button"
            onClick={(event) => {
              dispatchCounterAction({ type: "DECREMENT_MULTI", payload: 2 });
            }}
          >
            -2
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducerDemo;
