import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Customer({ setIsLoggedIn }) {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
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
        const foundUser1 = users.find(user => user.email === email);

        if (foundUser) {
            localStorage.setItem('isLoggedIn', 'true');
            setIsLoggedIn(true);
            navigate("/home");
        } 
        else if (email === "karnakarmaratikanni@gmail.com" && password === "123") {
            navigate("/admin");
        } 
        else if(foundUser1){
            alert("password is incorrect")

        }
        else if(!foundUser) {
            alert("please register");
        }
    };

    return (
        <>
            <div id="Customer">
                <div id="l">
                    <h1>Login</h1>
                    <form onSubmit={userLogin}>
                        <input type="email" placeholder="Email" id="k1" className="input" required /><br /><br />
                        <input type="password" placeholder="Password" id="k2" className="input" required /><br /><br />
                        <input type="submit" id="k3" value="Login" className="input"/><br /><br />
                        <span>Not a member? <Link to="/Registration">Register here</Link></span><br /><br />
                        <span> <Link to="/home">Login as a Guest</Link> </span><br /><br />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Customer;

