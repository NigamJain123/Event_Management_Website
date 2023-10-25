import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill out all fields.");
            return;
        }

        const userData = {
            email: email,
            password: password,
        };

        axios.post("http://localhost:8000/login", userData)
            .then((res) => {
                console.log(res.data);
                navigate("/");
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
            <span className="login-title">Log In</span>
            <span className="login-subtitle">Log in with your email.</span>
            <div className="login-form-container">
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
            <button>Log In</button>
          </form>
          <div className="login-form-section">
            <span>Create an account?</span>
            <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
    );
}

export default Login;