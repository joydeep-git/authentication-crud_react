import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataStorage } from '../Components/UserDataStorage';

function UserData() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(UserDataStorage);

    const handleDelete = (index) => {
        const newData = [...userData];
        newData.splice(index, 1);
        setUserData(newData);
    };

    const handleEdit = (index) => {
        const user = userData[index];
        navigate(`/EditUser/${index}`, { state: user });
    };

    const handleAdd = () => {
        navigate('/AddUser');
    };

    const handleClick = () => {
        navigate("/Login");
    }

    return (
        <div className='UserData'>
            <h2>User Data</h2>
            <button onClick={handleAdd}>Add User</button>
            <button onClick={handleClick}>Logout</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Career</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.email}</td>
                            <td>{user.career}</td>
                            <td>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserData;