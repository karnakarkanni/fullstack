import React, { useState, useEffect } from "react";
import axios from "axios";
import Outdoor from "../eventmana.jsx/outdoor";
import OutdoorTodo from "./outdoortodo";

function Todo() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    id: "",
    venue: "",
    address: "",
    type: "indoor",
    baseprice: "",
  });

  const hello = () => {
    axios
      .get("http://localhost:3203/indoor")
      .then((response) => {
        setUsers(response.data);
        console.log(response);
        console.log(users);
      })
      .catch((error) => {
        console.error("There was an error fetching data:", error);
      });
  };

  useEffect(() => {
    hello();
  }, []);

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sub = async (e) => {
   e.preventDefault();
   try {
     const response = await axios.post("http://localhost:3203/indoor", data, {
       headers: {
         "Content-Type": "application/json",
       },
     });
     if (response.status === 200) {
       console.log("Data successfully posted");
       alert("Register successfully ");
     }
   } catch (error) {
     console.error("Error posting data:", error);
     alert(error);
   }
 };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3203/indoor/${id}`)
      .then((response) => {
        console.log("Deleted successfully");
        alert("Deleted successfully");
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the data:", error);
        alert(error);
      });
  };
  
  const foundUser = users.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.venue}</td>
        <td>{user.address}</td>
        <td>{user.type}</td>
        <td>{user.baseprice}</td>

        <td>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </td>

      </tr>
    );
  });

  return (
    <div id="admin1">
    <div id="admin">
        <h1 style={{margin:0 }}>Indoor Admin Access</h1>
      <form onSubmit={sub}>
        <table border={2} align="center" style={{marginTop:30}} >
          <tr>
            <td> <textarea name="id" placeholder="ID" value={data.id} onChange={handleInputChange}/></td>
            <td><textarea name="venue" placeholder="Venue name" value={data.venue} onChange={handleInputChange}/></td>
            <td><textarea name="address" placeholder="Address" value={data.address} onChange={handleInputChange}/></td>
            <td><select name="type" onChange={handleInputChange} id="textarea">
                 <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option></select> </td>
            <td><textarea name="baseprice" placeholder="Baseprice" value={data.baseprice} onChange={handleInputChange}/></td>
            <td><input type="submit" value="Submit" id="textarea"/></td>
          </tr>
        </table>
      </form>

      <div className="App">
        <table border={2 } align="center">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Venue</th>
              <th>Address</th>
              <th>Type</th>
              <th>Baseprice</th>
              <th>Delete</th>
             
            </tr>
          </thead>
          <tbody>{foundUser}</tbody>
        </table>
      </div>

      
    </div>
    <OutdoorTodo/>
    </div>
  );
}
export default Todo;
