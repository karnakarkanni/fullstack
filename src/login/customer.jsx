import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


function Customer() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]); 
    const adminLogin = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        if (email === "karnakarmaratikanni@gmail.com" && password === "123") {
            navigate("/admin");
            
            
        } else {
            alert("Invalid Admin details");
        }
    };
    useEffect(() => {
        axios.get("http://localhost:3202/register")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((error) => {
                console.error("Error fetching users data:", error);
            });
    }, []);
    const userLogin = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const foundUser = users.find(user => user.email === email && user.password === password);
        if (foundUser) {
            navigate("/home");
        } else {
            alert("Invalid email or password");
        }
    };
    return (
        <>
            <div id="Customer">
                <div id="l">
                    <h1>Customer Login</h1>
                    <form onSubmit={userLogin}>
                        <input type="email" placeholder="Email" id="k1" className="input" required /><br /><br />
                        <input type="password" placeholder="Password" id="k2" className="input" required /><br /><br />
                        <input type="submit" id="k3" value="Login" className="input"/><br /><br />
                        <span>Not a member? <Link to="/Registration">Register here</Link></span><br /><br />
                        <span> <Link to="/home">Login as a Guest</Link> </span><br /><br />
                    </form>
                </div>
                <div id="l">
                    <h1>Admin Login</h1>
                    <form onSubmit={adminLogin}>
                        <input type="email" placeholder="Email" id="k1"className="input" required /><br /><br />
                        <input type="password" placeholder="Password" className="input" id="k2" required /><br /><br />
                        <input type="submit" id="k3" value="Login" className="input" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Customer;
