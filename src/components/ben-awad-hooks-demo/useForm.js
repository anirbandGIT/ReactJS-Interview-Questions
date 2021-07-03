import { useState } from "react";

const useForm = (initialValues) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState(initialValues);
  //   console.log(values, setValues);

  return [
    values,
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
  ];
};

export default useForm;
