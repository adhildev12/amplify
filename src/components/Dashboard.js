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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Amplify Hosting</h1>
      <h2 className="text-xl mb-8">Arigatou Gozaimasu</h2>
      <button
        onClick={handleLogout}
        className="px-6 py-3 bg-red-500 font-semibold rounded-lg shadow-lg hover:bg-red-600 focus:outline-none"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;