import { useRef } from "react";

const UseRefDemo = (props) => {
  // * create a init reference
  let inputRef = useRef(null);
  let formRef = useRef(null);

  return (
    <>
      <div>
        <form ref={formRef}>
          <label htmlFor="emailInput">Email</label>
          {/* // * bind the reference as needed */}
          <input id="emailInput" type="email" ref={inputRef} />
          <label htmlFor="passwordInput">Password</label>
          <input id="passwordInput" type="password" />
          <button type="submit" disabled={true}>
            LOGIN
          </button>
        </form>

        {/* // * use the reference */}
        <button
          type="button"
          onClick={(event) => {
            formRef.current.reset();
            inputRef.current.focus();
          }}
        >
          RESET
        </button>
      </div>
    </>
  );
};

export default UseRefDemo;
