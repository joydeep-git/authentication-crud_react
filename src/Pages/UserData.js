import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataStorage } from '../Data/UserDataStorage';
import "../CSS/UserData.css";

import { FaUser } from "react-icons/fa";

function UserData() {
    const redirect = useNavigate();

    const handleLogout = () => {
        redirect("/Login");
    }

    const currentUserEmail = localStorage.getItem("currentUserEmail");

    const registeredData = localStorage.getItem("ACCOUNTS");
    const userRegData = JSON.parse(registeredData);
    const currentUser = userRegData.find(user => user.email === currentUserEmail);
    const currentUserName = currentUser.name;

    const handleEdit = (Id, Name, Number, Email, Age) => {

        localStorage.setItem("Id", Id);
        localStorage.setItem("Name", Name);
        localStorage.setItem("Number", Number);
        localStorage.setItem("Email", Email);
        localStorage.setItem("Age", Age);

        redirect("/EditUserData");
    }

    const handleDelete = (Id) => {

        let index = UserDataStorage.map(
            function (user) {
                return user.Id
            }
        ).indexOf(Id)

        UserDataStorage.splice(index, 1);

        redirect("/UserData");
    }

    return (
        <div className='UserData'>
            <div className='acc'>
                <div className='accDetail'>
                    <span><FaUser /></span>
                    <h1>{currentUserName}</h1>
                </div>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className='addbtn'>
                <Link to="/AddUser">
                    <button>Add Contact</button>
                </Link>
            </div>
            <div className='table'>
                {UserDataStorage.length === 0 ? (
                    <div className="no-data-message">Add user details</div>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Number</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {UserDataStorage.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.Name}</td>
                                    <td>{user.Number}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Age}</td>
                                    <td className='actions'>
                                        <button onClick={() => handleEdit(user.Id, user.Name, user.Number, user.Email, user.Age)}>Edit</button>
                                        <button onClick={() => handleDelete(user.Id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}


export default UserData;