import React, { useState, useEffect } from "react";
import axios from "axios";

function Api() {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:3201/login")
      .then((response) => {
        setUsers(response.data); 
        {console.log(users)}
      })
      .catch((error) => {
        console.error("There was an error fetching data:", error);
      });
  }, []);
  return (
    <div className="App">
      <h1>User</h1>
      
      <ul>
        {users.map((user) => (
          <h1>{user.id},,{user.name},,{user.email}
          </h1>
        ))}
      </ul>

      <h2>Login</h2>
     
    </div>
  );
}

export default Api;
