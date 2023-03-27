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

    const handleDelete = (id) => {

        let index = UserDataStorage.map(
            function (user) {
                return user.id
            }
        ).indexOf(id)

        UserDataStorage.splice(index, 1)

        redirect("/UserData")
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
                    <button>Add User</button>
                </Link>
            </div>

            <div className='table'>
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
                                <td>{user.name}</td>
                                <td>{user.number}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>

                                <td className='actions'>
                                    <Link to="/EditUserData">
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={handleDelete}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserData;