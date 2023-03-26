import React from 'react';
import "../CSS/Registration.css";

function Contact() {
    return (
        <div className="Registration">

            <form action="">

                <h1 className='reg'>Contact Form</h1>

                <div className='data-input'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                </div>

                <div className='data-input'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter your email' required />
                </div>

                <div className='data-input'>
                    <label htmlFor="number">Number</label>
                    <input type="number" name="number" placeholder='Enter your number' id="number" />
                </div>

                <button type='submit' id='register'>Submit</button>
            </form>

        </div>
    )
}

export default Contact;