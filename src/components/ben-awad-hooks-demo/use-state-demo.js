import { useState } from "react";
import useForm from "./useForm";
function expensiveInitialComputation() {
  return 10000;
}

const UseStateDemo = () => {
  //   useState(10);
  //   const arr = useState(() => expensiveInitialComputation()); // equivalent to useState(() => 10000);
  //   const [count, setCount] = useState(() => expensiveInitialComputation());
  //   const [count, setCount] = useState(10000);

  // * say count is a object instead
  //   const [{ count1, count2 }, setCount] = useState({ count1: 0, count2: 10000 });

  // * best approach is
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(10000);

  return (
    <>
      COUNT1={count1}
      <br />
      COUNT2={count2}
      {/* <button type="button" onClick={() => setCount(count + 1)}> */}
      {/* <button
        type="button"
        // onClick={() => setCount((currentCount) => currentCount + 1)} // we can use setCount with a callback as well
        // * say count is a object instead
        // onClick={() => setCount({ count1: count1 + 1 })} // this will only increment count1 unlike setState()
        // onClick={() => setCount({ count1: count1 + 1 })} // this will only increment count1 unlike setState()
        // onClick={() => setCount({ count1: count1 + 1, count2: count2 + 1 })} // instead do like this
        onClick={() =>
          setCount((currentCount) => ({
            ...currentCount,
            count1: currentCount.count1 + 1,
          }))
        } // or like this
      > */}
      <button
        type="button"
        onClick={() => {
          setCount1(count1 + 1);
          setCount2(count2 + 1);
        }}
      >
        +1
      </button>
    </>
  );
};

const UseStateDemoForm = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [formValues, handleFormValueChange] = useForm({
    email: "",
    password: "",
  });
  return (
    <>
      <form>
        <label htmlFor="email1" id="email1">
          EMAIL
        </label>
        <input
          type="email"
          id="email1"
          name="email"
          //   value={email}
          //   onChange={(event) => setEmail(event.target.value)}
          value={formValues.email}
          onChange={handleFormValueChange}
        />
        <label htmlFor="password1">PASSWORD</label>
        <input
          type="password"
          id="password1"
          name="password"
          //   value={password}
          //   onChange={(event) => setPassword(event.target.value)}
          value={formValues.password}
          onChange={(event) => handleFormValueChange(event)}
        />
      </form>
    </>
  );
};

export default UseStateDemoForm;
