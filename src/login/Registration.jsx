import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
function Registration(){
    var [register,setregister]=useState({
        name:"",
        email:"",
        password:"",
        confirm_password:""
    })
    var ch=(e)=>{
        var { name, value } = e.target;
        setregister((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    var sub= async (event) => {
        event.preventDefault();
        if (register.password !== register.confirm_password) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const response = await axios.post("http://localhost:3202/register", register, {
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



    return (<>
    <div id="Customer">
    <div id="l">
        <h1>Registration Page</h1>
        <form action="" onSubmit={sub} >
            <input type="text" placeholder="Name" id="k1" className="input" name="name" value={register.name} onChange={ch} /><br /><br />
        <input type="text" placeholder="Email" id="k2" className="input" name="email" value={register.email} onChange={ch}/><br /><br />
        <input type="password" placeholder="Password" className="input" name="password" id="k3" value={register.password} onChange={ch}/><br /><br />
        <input type="password" placeholder="confirm password" className="input" name="confirm_password" id="k4" value={register.confirm_password} onChange={ch}/><br /><br />
        <input type="submit" value="submit" className="input" id="k5"/><br /><br />
        <span>Already have an account? <Link to={"/login"} >Sign in here</Link></span>
        </form>
    </div>
    </div>
    </>)
}
export default Registration;