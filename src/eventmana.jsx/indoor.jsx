import { useState,useEffect} from "react";
import axios from "axios";
function Indoor(){

    const [users, setUsers] = useState([]);
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

      const foundUser = users.map((user) => {
        return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.venue}</td>
            <td>{user.address}</td>
            <td>{user.type}</td>
            <td>{user.baseprice}</td>
            <td><button>Book now</button></td>
    
          </tr>
        );
      });


    return(<>
     <div id="admin">
        <table border={2 } align="center">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Venue</th>
              <th>Address</th>
              <th>Type</th>
              <th>Baseprice</th>
              <th>Book</th>
              
             
            </tr>
          </thead>
          <tbody>{foundUser}</tbody>
        </table>
      </div>
    
    </>)
}
export default Indoor;