import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Registration.css";

function Login() {

    const redirect = useNavigate();

    const [userLoginData, setUserLoginData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserLoginData(() => {
            return {
                ...userLoginData,
                [name]: value
            }
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = userLoginData;

        const alert = document.getElementById("alert");

        const registeredData = localStorage.getItem("ACCOUNTS");

        if (userLoginData.email === "") {
            alert.innerText = "enter email";
            alert.className = "alert"
        } else if (userLoginData.password === "") {
            alert.innerText = "enter password";
            alert.className = "alert";
        } else {
            alert.innerText = "Login";
            alert.className = "reg";

            const userRegData = JSON.parse(registeredData);

            const userData = userRegData.filter((element, indexNum) => {
                return element.email === email && element.password === password
            });

            ////Storing email id in localStorage
            const userEmail = document.getElementById("email").value;
            localStorage.setItem("currentUserEmail", userEmail);

            if (userData.length === 0) {
                alert.innerText = "INVALID DETAILS";
                alert.className = "alert";
            } else {
                redirect("/UserData")
            }
        }

    }

    return (
        <div className="Registration">

            <form onSubmit={handleSubmit}>

                <h1 className="reg" id='alert'>Login</h1>

                <div className='data-input'>
                    <label htmlFor="username">E-mail</label>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        id='email'
                        className='email'
                        name='email'
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className='data-input'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder='Enter password'
                        id='password'
                        className='password'
                        name='password'
                        required
                        onChange={handleChange}
                    />
                </div>

                <button type='submit' onClick={handleSubmit} id="register">Login</button>

                <h5>Don't have an account?
                    <br />
                    <Link to="/registration"> Register here</Link>
                </h5>

            </form>
        </div>
    )
}

export default Login;