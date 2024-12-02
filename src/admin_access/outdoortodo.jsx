import React, { useState, useEffect } from "react";
import axios from "axios";

function OutdoorTodo() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    id: "",
    venue: "",
    address: "",
    type: "outdoor",
    baseprice: "",
  });

  // Fetch data from the backend
  const hello = () => {
    axios
      .get("http://localhost:3204/outdoor")
      .then((response) => {
        setUsers(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error fetching data:", error);
      });
  };

  useEffect(() => {
    hello();
  }, []); // Empty dependency array to call only once on mount

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const sub = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3204/outdoor", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log("Data successfully posted");
        alert("Registered successfully");
        hello(); // Refresh the user list after successful registration
      }
    } catch (error) {
      console.error("Error posting data:", error);
      alert("There was an error posting data: " + error.message);
    }
  };

  // Handle deleting a user
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3204/outdoor/${id}`)
      .then((response) => {
        console.log("Deleted successfully");
        alert("Deleted successfully");
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the data:", error);
        alert("Error deleting data: " + error.message);
      });
  };

  // Display the fetched users
  const foundUser = users.map((user, index) => {
    return (
      <tr key={user.id || index}>
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
        <h1 style={{ margin: 0 }}>Outdoor Admin Access</h1>
        <form onSubmit={sub}>
          <table border={2} align="center" style={{ marginTop: 30 }}>
            <tbody id="textarea">
              <tr>
                <td><input type="text" name="id" placeholder="ID" value={data.id} onChange={handleInputChange} id="textarea" /></td>
                <td><input type="text" name="venue" placeholder="Venue name" value={data.venue} onChange={handleInputChange} id="textarea" /> </td>
                <td><input type="text" name="address" placeholder="Address" value={data.address} onChange={handleInputChange} id="textarea"/></td>
                <td><select name="type" id="textarea" value={data.type} onChange={handleInputChange}> <option value="indoor">Indoor</option> <option value="outdoor" >Outdoor</option>
                  </select></td>
                <td> <input type="text" name="baseprice" placeholder="Baseprice" value={data.baseprice} onChange={handleInputChange} id="textarea"/></td>
                <td><input type="submit" value="Submit" id="textarea" /></td>
              </tr>
            </tbody>
          </table>
        </form>

        <div className="App">
          <table border={2} align="center">
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
    </div>
  );
}

export default OutdoorTodo;
