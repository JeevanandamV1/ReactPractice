import React from "react";

export default function Complete({ completed, onClick }) {
  return (
    <button
      className={completed ? "Complete" : "notComplete"}
      type="submit"
      onClick={onClick}
    >
      {completed ? "Completed" : "In Complete"}
    </button>
  );
}
