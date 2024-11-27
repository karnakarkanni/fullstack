import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:3201/login", formData, {
                headers: {
                    "Content-Type": "application/json", 
                },
            });

            if (response.status === 200) {
                console.log("Data successfully posted");
                alert("Data successfully posted!");
            }
        } catch (error) {
            console.error("Error posting data:", error);
            alert("Error posting data!");
        }
    };
    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input type="text" id="id" name="id" value={formData.id} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="address">email</label>
                    <input type="email" id="address" name="address" value={formData.address} onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default LoginForm;

