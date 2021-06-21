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
    <>
      <h1>A simple useContext() hook demo</h1>
      <p>
        The useContext() hook is one of the basic hooks. It allows sharing of
        data across the component tree.
      </p>
      {/* // * wrapping and sending */}
      {/* <MoodContext.Provider value={moods.happy}> */}
      <MoodContext.Provider value={[mood, modifyMood]}>
        {props.children}
      </MoodContext.Provider>
    </>
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

  return <>I use context, and i am {mood}</>;
};
