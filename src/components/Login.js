import React, { useState } from "react";
import { login } from "../utils/auth";
import "../styles/styles.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      try {
        login(username, password);
        window.location.href = "/dashboard"; // Redirect to Dashboard
      } catch (err) {
        setError(err.message);
      }
    };
  
    return (
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="login-title">Login</h2>
          {error && <p className="login-error">{error}</p>}
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    );
  }
  
  export default Login;