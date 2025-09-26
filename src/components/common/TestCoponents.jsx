import { useState } from "react";
function TestCoponents() {
  const [user, setUser] = useState({});

  const getUser = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1" //this is randomlly
    );
    const data = await response.json();
    setUser({
      user_id: data.id,
      user_name: data.name,
    });
    return (
      <>
        <p>{user.user_id}</p>
        <p>{user.user_name}</p>
      </>
    );
  };
  getUser();
}
export default TestCoponents;
