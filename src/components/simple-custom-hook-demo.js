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
    <>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <span>{user?.name}</span>
            <span>{user?.email}</span>
            <span>{user?.phone}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SimpleCustomHook;
