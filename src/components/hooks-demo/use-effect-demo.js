import { useState, useEffect } from "react";

const UseEffectDemo = (props) => {
  // call hooks at the top
  const [counterValue, setCounterVal] = useState(1);
  const [pictureData, setPicture] = useState({});

  // * alert that the counter is available for use
  // * this will only run once as there are no dependencies
  // * like componentDidMount
  useEffect(() => {
    alert("The counter component is available. It has a range of [1,10]");
  }, []);

  // * everytime counterValue changes a photo is fetched
  // * just like componentDidUpdate
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${counterValue}`)
      .then((res) => res.json()) // return the response as JSON from first then
      .then((JSONRes) => {
        setPicture(JSONRes);
      });
  }, [counterValue]);

  // * like componentWillUnmount
  // TODO: CHECK WHY CALLED MULTIPLE TIMES
  // useEffect(() => {
  //   return () => alert("GOODBYE FROM COMPONENT");
  // });

  return (
    <div style={{ backgroundColor: "#e0d3bc" }}>
      <h1>2. useEffect() hook demo w/ same counter</h1>
      <p>
        The useEffect() hook is one of the basic hooks. It can be used to handle
        the componentDidMount (initialisation/ mounting), componentDidUpdate
        (state update/ data changes) and componentWillUnmount (destroy)
        lifecycle that is available for Class based components.
      </p>
      <h2>Counter w/ fetching</h2>
      <div className="counter">
        <span style={{ fontSize: "25px" }}>{counterValue}</span>
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
            disabled={counterValue === 1}
            onClick={(event) => {
              if (counterValue > 1) {
                setCounterVal(counterValue - 1);
              }
            }}
          >
            -
          </button>
          <div>
            <p style={{ fontSize: "8px" }}>{pictureData?.title}</p>
            <img src={pictureData?.thumbnailUrl} alt={pictureData?.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseEffectDemo;
