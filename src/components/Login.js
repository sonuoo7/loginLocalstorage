import React, { useState} from 'react';

// Login component
const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    // Send login request
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("Invalid username or password");
        }
      })
      .then((data) => {
        // Save token and id to local storage
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data.id);
        // Call parent handleLogin function with true to indicate successful login
        handleLogin(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Login</h2>
      </div>
      <div className="login-form">
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;