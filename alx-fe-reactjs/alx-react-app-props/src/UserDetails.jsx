
import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Location:</strong> {userData.location}</p>
    </div>
  );
}

export default UserDetails;
