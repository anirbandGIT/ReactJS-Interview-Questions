import { useRef } from "react";

const UseRefDemo = (props) => {
  // * create a init reference
  let inputRef = useRef(null);
  let formRef = useRef(null);

  return (
    <div style={{ backgroundColor: "#e0d2d1" }}>
      <h1>5. useRef() hook demo w/ a form</h1>
      <p>The useRef() hook is a advanced hook.</p>
      <h2>Sample login form</h2>
      <div className="container">
        <form ref={formRef}>
          <label htmlFor="emailInput">Email</label>
          {/* // * bind the reference as needed */}
          <input id="emailInput" type="email" ref={inputRef} />
          <br />
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
    </div>
  );
};

export default UseRefDemo;
