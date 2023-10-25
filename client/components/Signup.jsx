import React, { useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled out
        if (!name || !email || !password) {
            alert("Please fill out all fields.");
            return;
        }

        const userData = {
            name: name,
            email: email,
            password: password,
        };

        axios.post("http://localhost:8000/register", userData)
            .then((res) => {
               navigate("/login");
            })
            .catch((err) => {
                console.log("Error:", err);
                alert("An error occurred during registration. Please try again.");
            });
    }

    return (
      <div className="login-container">
        <div className="login-form-box">
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="login-title">Sign up</span>
            <span className="login-subtitle">
              Create a free account with your email.
            </span>
            <div className="login-form-container">
              <input
                type="text"
                className="login-form-input"
                placeholder="Full Name"
                autoComplete="off"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="login-form-input"
                placeholder="Email"
                autoComplete="off"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="login-form-input"
                placeholder="Password"
                autoComplete="off"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Sign up</button>
          </form>
          <div className="login-form-section">
            <span>Have an account?</span>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    );
}

export default Signup;
