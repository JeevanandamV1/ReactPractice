import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")} className="backButton">
        Back to Menu
      </button>
    </div>
  );
}

export default BackButton;
