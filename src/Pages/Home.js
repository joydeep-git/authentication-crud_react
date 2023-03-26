import React from 'react';
import "../CSS/Home.css";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">

            <div>
                <h1>User Authentication & CRUD operations</h1>
                <p>To know more go to<Link to="/About" className='link'>About page</Link> or do <Link to="Registration" className='link'>Register</Link></p>
            </div>
        </div>
    )
}
export default Home;