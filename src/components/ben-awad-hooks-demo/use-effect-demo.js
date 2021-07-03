import { useEffect, useState } from "react";
import useForm from "./useForm";
import MountUnmountCheck from "./mount-unmount-check";
import useFetch from "./useFetch";

const UseEffectDemo = () => {
  const [formValues, handleFormValueChange] = useForm({
    email: "",
    password: "",
  });
  //   const [showComponent, setComponentCisibility] = useState(false);

  // * one or more useEffect() can be present that will fire in sequence
  //   useEffect(() => {
  //     console.log("useEffect is called");
  //   });

  //   useEffect(() => {
  //     console.log("UseEffectDemo component is mounted");
  //     return () => console.log("UseEffectDemo component is unmounted");
  //   }, []);

  //   useEffect(() => {
  //     const onMouseMove = (mouseMoveEvent) => {
  //       console.log(mouseMoveEvent);
  //     };
  //     window.addEventListener("mousemove", onMouseMove);

  //     return () => window.removeEventListener("mousemove", onMouseMove);
  //   }, []);

  //   useEffect(() => {
  //     console.log("useEffect is called");
  //   }, [formValues]); // does shallow comparison and checks for changes

  const [numberAPIId, setNumberAPIId] = useState(
    localStorage.hasOwnProperty("__APIID__")
      ? JSON.parse(localStorage.getItem("__APIID__"))
      : 43
  );
  const { data, loading } = useFetch(
    `http://numbersapi.com/${numberAPIId}/trivia`
  );

  useEffect(() => {
    localStorage.setItem("__APIID__", JSON.stringify(numberAPIId));
  }, [numberAPIId]);

  return (
    <>
      {/* // * MOUNT UNMOUNT CHECK */}
      {/* <button
        type="text"
        onClick={() => setComponentCisibility((flag) => !flag)}
      >
        {showComponent ? "HIDE" : "SHOW"}
      </button>
      {showComponent && <MountUnmountCheck />} */}

      {/* // * API FETCH CHECK */}
      <button type="button" onClick={() => setNumberAPIId((num) => num + 1)}>
        FETCH NEXT TRIVIA
      </button>
      <div>{loading ? "LOADING ..." : data}</div>

      {/* // * SIMPLE FORM CHECK */}
      {/* <form>
        <label htmlFor="email1" id="email1">
          EMAIL
        </label>
        <input
          type="email"
          id="email1"
          name="email"
          value={formValues.email}
          onChange={handleFormValueChange}
        />
        <label htmlFor="password1">PASSWORD</label>
        <input
          type="password"
          id="password1"
          name="password"
          value={formValues.password}
          onChange={(event) => handleFormValueChange(event)}
        />
      </form> */}
    </>
  );
};

export default UseEffectDemo;
