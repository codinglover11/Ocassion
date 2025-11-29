import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate();

  const validateInput = () => {
    const regex = {
      length: /.{8,}/,
      upper: /[A-Z]/,
      special: /[!@#$%^&*]/,
    };
    if(!regex.length.test(username)) return "Username must be at least 8 characters";
    if(!regex.upper.test(username)) return "Username must contain uppercase letter";
    if(!regex.special.test(username)) return "Username must contain special character";

    if(!regex.length.test(password)) return "Password must be at least 8 characters";
    if(!regex.upper.test(password)) return "Password must contain uppercase letter";
    if(!regex.special.test(password)) return "Password must contain special character";
    return "";
  };

  const handleSubmit = e => {
    e.preventDefault();
    const msg = validateInput();
    if(msg) setError(msg);
    else {
      setError("");
      alert("Account Created Successfully!");
      setUsername(""); setPassword("");
      navigate("/login");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <input type="text" placeholder="Create Username" value={username} onChange={e=>setUsername(e.target.value)} required/>
        <input type="password" placeholder="Create Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
        <button type="submit">Sign Up</button>
        <p className="switch-form">
         Already have an account? <span onClick={()=>navigate("/Login")}>Login</span> 
        </p>
      </form>
    </div>
  );
};

export default SignIn;
// piyushtewani11_db_user
// piyush11
// mongodb+srv://piyushtewani11_db_user:piyush11@clusterone.zs8zx8w.mongodb.net/