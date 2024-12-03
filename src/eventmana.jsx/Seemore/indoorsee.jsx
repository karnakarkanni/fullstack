import { useState, useEffect } from "react";

function Indoorsee() {

  const [data, setData] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem("data"));
    if (a) {
      setData(a);
      setTotalPrice(a.baseprice); 
    }
  }, []);

  const handleServiceClick = (serviceName, servicePrice, e) => {
    const isServiceSelected = selectedServices.includes(serviceName);
    
    if (isServiceSelected) {
      setSelectedServices(prevServices => prevServices.filter(service => service !== serviceName));
      setTotalPrice(prevPrice => prevPrice - servicePrice); 
    } else {
      setSelectedServices(prevServices => [...prevServices, serviceName]);
      setTotalPrice(prevPrice => prevPrice + servicePrice); 
    }
    e.target.style.backgroundColor = isServiceSelected ? "" : "red";
  };
  var clk=()=>{
    alert("booking is Successfully")
  }

  return (
    <>
      <div align="center">
        <h1>Services</h1>
        <table border={2} style={{ marginBottom: 20 }}>
          <thead>
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}><strong>Services</strong></td>
            </tr>
            <tr>
              <th>s.no</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Photography</td>
              <th>₹95000</th>
              <td>
                <button
                  onClick={(e) => handleServiceClick('Photography', 95000, e)}
                >
                  Add
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Decor</td>
              <th>₹80000</th>
              <td>
                <button
                  onClick={(e) => handleServiceClick('Decor', 80000, e)}
                >
                  Add
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Entertainment</td>
              <th>₹35000</th>
              <td>
                <button
                  onClick={(e) => handleServiceClick('Entertainment', 35000, e)}
                >
                  Add
                </button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Artist Management</td>
              <th>₹25000</th>
              <td>
                <button
                  onClick={(e) => handleServiceClick('Artist Management', 25000, e)}
                >
                  Add
                </button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Manpower</td>
              <th>₹15000</th>
              <td>
                <button
                  onClick={(e) => handleServiceClick('Manpower', 15000, e)}
                >
                  Add
                </button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Audio Visual Management</td>
              <th>₹20000</th>
              <td>
                <button
                  onClick={(e) => handleServiceClick('Audio Visual Management', 20000, e)}
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <h1>Booking Details</h1>

        <p>
          <h4 style={{ display: "inline" }}>Venue name:</h4>{data.venue}
        </p>
        <p>
          <h4 style={{ display: "inline" }}>Venue price:</h4> ₹{data.baseprice}
        </p>
        <p>
          <h4 style={{ display: "inline" }}>Venue address:</h4>{data.address}
        </p>
        <p>
          <h4 style={{ display: "inline" }}>Venue type:</h4>{data.type}
        </p>

        <form action="">
          <label htmlFor="">
            <h4 style={{ display: "inline" }}>Date:</h4>
          </label>
          <input type="datetime-local" name="" id="" />
          <br /><br />

          <label htmlFor="">
            <h4 style={{ display: "inline" }}>Day/Night</h4>
          </label>
          <select name="" id="">
            <option value="day">Day</option>
            <option value="Night">Night</option>
          </select>
      

          <label htmlFor="">
            <h4 style={{ display: "inline" }}>Phone Number:</h4>
            <input type="number" required minLength={10} />
          </label>
      
          
          <label htmlFor="">
            <h4 style={{ display: "inline" }}>Email id:</h4>
            <input type="email" required />
          </label>
        </form>

        <h1>Total Price: ₹{totalPrice}</h1>

        <input type="submit" value="Book Now"  onClick={clk}/>
      </div>
    </>
  );
}

export default Indoorsee;
