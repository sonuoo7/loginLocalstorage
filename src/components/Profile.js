import React, { useState, useEffect } from "react";
import "../App.css";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from API using saved id from local storage
    const id = localStorage.getItem("id");
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile</h2>
      </div>
      {user ? (
        <div className="profile-info">
          <p>ID: {user.id}</p>
          <p>Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Email: {user.email}</p>
          <p>Phone no.: {user.phone}</p>
          <p>D.O.B: {user.birthDate}</p>
          {/* Display other user information here */}
        </div>
      ) : (
        <p className="loading-text">Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
