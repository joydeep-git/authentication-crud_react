import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import UserData from "./Pages/UserData";

import Header from "./Components/Header";
import EditUserData from "./Components/EditUserData";
import AddUser from "./Components/AddUser";

function App() {
  return (
    <Routers>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserData" element={<UserData />} />
        <Route path="/EditUserData" element={<EditUserData />}/>
        <Route path="/AddUser" element={<AddUser />}/>
      </Routes>
    </Routers>
  )
}
export default App;