import React from "react";
import { isAuthenticated, logout } from "../utils/auth";

function Dashboard() {
  if (!isAuthenticated()) {
    window.location.href = "/";
    return null;
  }

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Welcome to the amplifyhosting</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;