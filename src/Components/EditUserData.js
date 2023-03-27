import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "../CSS/Registration.css";
import { UserDataStorage } from '../Data/UserDataStorage';

function EditUserData() {
    let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const redirect = useNavigate();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    useEffect(() => {
        setId(localStorage.getItem("Id"));
        setName(localStorage.getItem("Name"));
        setNumber(localStorage.getItem("Number"));
        setEmail(localStorage.getItem("Email"));
        setAge(localStorage.getItem("Age"));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const alert = document.getElementById("alert");

        if (name === "") {
            alert.className = "alert";
            alert.innerText = "Please enter your name";
            return;
        } else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name)) {
            alert.className = "alert";
            alert.innerText = "Please enter a valid name";
            return;
        } else if (number === "") {
            alert.className = "alert";
            alert.innerText = "Please enter your number";
            return;
        } else if (number.length !== 10) {
            alert.className = "alert";
            alert.innerText = "Please enter valid number";
            return;
        } else if (email === "") {
            alert.className = "alert";
            alert.innerText = "Please enter your email";
            return;
        } else if (!re.test(email)) {
            alert.className = "alert";
            alert.innerText = "Please enter a valid email";
            return;
        } else if (age === "") {
            alert.classList = "alert";
            alert.innerText = "Please enter age"
        } else if (age < 18 || age > 60) {
            alert.classList = "alert";
            alert.innerText = "Please enter a valid age"
        } else {
            alert.classList.remove("alert");
            alert.className = "reg";
            alert.innerText = "Edit";

            const index = UserDataStorage.findIndex(function (e) {
                return e.Id === id;
            });

            let data = UserDataStorage[index];

            data.Name = name;
            data.Number = number;
            data.Email = email;
            data.Age = age;

            redirect("/UserData");
        };}

        return (
            <div className="Registration">
                <form >

                    <h1 id='alert' className='reg'>Edit</h1>

                    <div className='data-input'>
                        <label htmlFor="name">Name</label>
                        <input type="text" value={name} name='name' id='name' placeholder='Enter Name' required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='data-input'>

                        <label htmlFor="number">Number</label>
                        <input type="number" value={number} name='number' id='number' placeholder='Enter number' required onChange={(e) => setNumber(e.target.value)} />
                    </div>

                    <div className='data-input'>
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} name='email' id='email' placeholder='Enter email' required onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='data-input'>
                        <label htmlFor="age">age</label>
                        <input type="number" value={age} name='age' id='age' placeholder='Enter age' required onChange={(e) => setAge(e.target.value)} />
                    </div>

                    <button onClick={handleSubmit}>
                        Update
                    </button>
                </form>
            </div>
        )
    }
    export default EditUserData;

