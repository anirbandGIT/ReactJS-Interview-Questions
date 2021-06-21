import { createContext, useState, useContext, useEffect } from "react";

const moods = {
  happy: "😄",
  angry: "😡",
  sad: "😭",
};

// *  CONTEXT INIT
// * 1. we neet to initialise a context and this must be exported
// * if the user component is in not here in same file
const MoodContext = createContext(moods);
// export const MoodContext = createContext(moods);

// * STATE AND WRAPPER INIT
// * 2. next we need a component that will act as wrapper returning its children wrapped
// * in a context provider
export const UseContextDemo = (props) => {
  // call hooks at the top

  // * instead of just sending a value we can send a modifier as well
  const [mood, modifyMood] = useState("😄");
  return (
    <div style={{ backgroundColor: "#dfe0c5" }}>
      <h1>3. useContext() hook demo with mood setter</h1>
      <p>
        The useContext() hook is one of the basic hooks. It allows sharing of
        data across the component tree.
      </p>
      {/* // * wrapping and sending */}
      {/* <MoodContext.Provider value={moods.happy}> */}
      <MoodContext.Provider value={[mood, modifyMood]}>
        {props.children}
      </MoodContext.Provider>
    </div>
  );
};

// * CONTEXT USE
// * 3. a component that will actually implement the context
export const MoodyComponent = (props) => {
  // const mood = useContext(MoodContext);
  // * instead of only fetching the context value we can fetch the context modifier as well
  // * and use as needed
  const [mood, setMood] = useContext(MoodContext);

  useEffect(() => {
    setMood("😡");
  }, []);

  return (
    <div className="container">
      I use context, and i am {mood}
      <div>
        <button
          type="button"
          onClick={(event) => setMood(event.target.innerHTML)}
        >
          😄
        </button>
        <button
          type="button"
          onClick={(event) => setMood(event.target.innerHTML)}
        >
          😭
        </button>
      </div>
    </div>
  );
};

export const MoodyFriendComponent = (props) => {
  const [mood, setMood] = useContext(MoodContext);
  return (
    <div className="container">
      I also use context, i am a friend and i am {mood}
      <div>
        <button
          type="button"
          onClick={(event) => setMood(event.target.innerHTML)}
        >
          🤭
        </button>
        <button
          type="button"
          onClick={(event) => setMood(event.target.innerHTML)}
        >
          😈
        </button>
      </div>
    </div>
  );
};
