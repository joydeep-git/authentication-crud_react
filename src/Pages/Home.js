import React from 'react';
import "../CSS/Home.css";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">

            <div>
                <h1>User Authentication & CRUD operations</h1>
                <p>To know more about this project<Link to="/About" className='link'>CLICK HERE</Link> <br /> or <Link to="Registration" className='link'>REGISTER</Link></p>
            </div>
        </div>
    )
}
export default Home;