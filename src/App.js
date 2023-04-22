import React, { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  return (
    <div className="App">{isLoggedIn ? <Profile /> : <Login handleLogin={handleLogin} />}</div>
  );
};

export default App;
