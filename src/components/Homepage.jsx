import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  const [roomID, setRoomID] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    if (!roomID || !userName) {
      alert("Please enter both Room ID and Name");
      return;
    }
    localStorage.setItem("username", userName);
    navigate(`/room/${roomID}`);
  };

  return (
    <div className="homepage-container">
      <div className="homepage-card">
        
        {/* Logo Section */}
        <div className="homepage-logo">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/7269/7269995.png" 
            alt="Video Logo" 
          />
          <h1>QuickMeet</h1>
        </div>

        {/* Tagline */}
        <p className="homepage-tagline">
          Connect Instantly. Anywhere. Anytime.
        </p>

        {/* Title */}
        <h2 className="homepage-title">🔗 Join a Video Call</h2>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomID}
          onChange={(e) => setRoomID(e.target.value)}
          className="homepage-input"
        />

        <input
          type="text"
          placeholder="Enter Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="homepage-input"
        />

        {/* Button */}
        <button onClick={handleJoin} className="homepage-button">
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Homepage;

