import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation
    if (!username || !password) {
      setError("⚠ Please fill all fields");
      return;
    }

    // Demo login logic (replace with API/backend)
    if (username === "Admin@123" && password === "Admin@123") {
      setError("");
      navigate("/Home");
    } else {
      setError("⚠ Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login to Your Account</h2>
        {error && <p className="error">{error}</p>}

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p className="switch-form">
          Don't have an account?{" "}
          <span onClick={() => navigate("/")}>Sign Up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
