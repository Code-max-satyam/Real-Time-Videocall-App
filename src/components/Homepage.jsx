import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    if (input.trim() !== "") {
      navigate(`/room/${input}`);
    }
  };

  return (
    <div className="homepage-container">
      <div className="card animate">
        <h1>🎥 Real-Time Video Call</h1>
        <p>Enter your name to join the meeting</p>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter your name..."
        />
        <button onClick={submitHandler}>Join Now</button>
      </div>
    </div>
  );
};

export default Homepage;


