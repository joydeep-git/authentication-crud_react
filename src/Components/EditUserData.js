import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Registration.css";

function EditUserData() {

    const redirect = useNavigate();

    const userDataNavigate = () => {
        redirect("/UserData")
    }

    return (
            <div className="Registration">
            <form >

                <h1 id='alert' className='reg'>Edit</h1>

                <div className='data-input'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' placeholder='Enter Name' required  />
                </div>

                <div className='data-input'>
                    <label htmlFor="number">Number</label>
                    <input type="number" name='number' id='number' placeholder='Enter number' required  />
                </div>

                <div className='data-input'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' placeholder='Enter email' required  />
                </div>

                <div className='data-input'>
                    <label htmlFor="age">age</label>
                    <input type="number" name='age' id='age' placeholder='Enter age' required  />
                </div>

                <button >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default EditUserData;

// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';

// import { UserDataStorage } from '../Data/UserDataStorage';

// function AddUser() {

//     const redirect = useNavigate();
//     const UUID = uuidv4();

//     const [userData, setUserData] = useState({
//         name: "",
//         number: "",
//         email: "",
//         age: "",
//     })

//     let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     const handleChange = (e) => {

//         const { name, value } = e.target;

//         setUserData(() => {
//             return {
//                 ...userData,
//                 [name]: value
//             }
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const { name, number, email, age } = userData;
//         const alert = document.getElementById("alert");

//         if (name === "") {
//             alert.className = "alert";
//             alert.innerText = "Please enter your name";
//             return;
//         } else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name)) {
//             alert.className = "alert";
//             alert.innerText = "Please enter a valid name";
//             return;
//         } else if (number === "") {
//             alert.className = "alert";
//             alert.innerText = "Please enter your number";
//             return;
//         } else if (number.length !== 10) {
//             alert.className = "alert";
//             alert.innerText = "Please enter valid number";
//             return;
//         } else if (email === "") {
//             alert.className = "alert";
//             alert.innerText = "Please enter your email";
//             return;
//         } else if (!re.test(email)) {
//             alert.className = "alert";
//             alert.innerText = "Please enter a valid email";
//             return;
//         } else if (age === "") {
//             alert.classList = "alert";
//             alert.innerText = "Please enter age"
//         } else if (age < 18 || age > 60) {
//             alert.classList = "alert";
//             alert.innerText = "Please enter a valid age"
//         } else {
//             alert.classList.remove("alert");
//             alert.className = "reg";
//             alert.innerText = "Add User";

//             let uniqueId = UUID;

//             UserDataStorage.push({
//                 id: uniqueId,
//                 name: userData.name,
//                 number: userData.number,
//                 email: userData.email,
//                 age: userData.age,
//             })
//             redirect("/UserData");
//         }};

//     return (

        
//     )
// }
// export default AddUser;