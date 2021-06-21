import { useEffect, useState } from "react";

// * CUSTOM HOOK
const useDisplayName = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((JSONRes) => setUsers(JSONRes));
  });

  return users;
};

const SimpleCustomHook = (props) => {
  const users = useDisplayName();
  return (
    <div style={{ backgroundColor: "#d0e3cc" }}>
      <h1>6. very simple custom hook demo</h1>
      <p>This is a custom hook that uses useState() as well as useEffect().</p>
      <h2>User Details</h2>
      <div className="container">
        <ul>
          {users.map((user, index) => (
            <li
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                marginBottom: "5px",
                paddingLeft: "5px",
                fontSize: "8px",
                borderLeft: "5px solid #1e8e3e",
              }}
              key={index}
            >
              <span>{user?.name}</span>
              <span>{user?.email}</span>
              <span>{user?.phone}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SimpleCustomHook;
