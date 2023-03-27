import React from 'react';
import "../CSS/About.css";

function About() {
    return (
        <div className='About'>

            <h1>::: About :::</h1>

            <p>Skill : <b>React.js</b>, <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b></p>

            <h4>Page Functions</h4>

            <ol>
                <li>User need to Register first.</li>
                <li>Full Form validation & Password Password Strength checker features are added on this page.</li>
                <li>All data, collected from Registration page, will be saved in Local Storage & user will get redirected to LOGIN page</li>
                <li>After user submits information on LOGIN page, those informations will get checked to the Local Storage logins</li>
                <li>User will get redirected to User information page only if both email and password matches.</li>
                <li>CRUD Operations are added in User Information page.</li>
                <li>User can Add a new information or can edit & Delete the existing User informations.</li>
                <li>Form validation is added in both ADD USER & EDIT USER components</li>
            </ol>
        </div>
    )
}
export default About;