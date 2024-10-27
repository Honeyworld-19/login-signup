import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/React mini project/person.png';
import email_icon from '../Assets/React mini project/email (2).png';
import password_icon from '../Assets/React mini project/password (2).png';
const LoginSignup = () => {
    const [action, setAction] = useState("LOGIN");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "LOGIN" ? <div></div> : (
                    <div className="input">
                        <img src={user_icon} alt="User Icon" />
                        <input type="text" placeholder="Username" />
                    </div>
                )}
                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "SIGNUP" ? <div></div> : (
                <div className="forgot-password">
                    Lost Password? <span>Click Here!</span>
                </div>
            )}
            <div className="submit-container">
                <div
                    className={action === "LOGIN" ? "submit gray" : "submit"}
                    onClick={() => setAction("SIGNUP")}
                >
                    Sign Up
                </div>
                <div
                    className={action === "SIGNUP" ? "submit gray" : "submit"}
                    onClick={() => setAction("LOGIN")}
                >
                    Login
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;