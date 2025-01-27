import React from "react";
import "../styles/pages/LandingPage.css";

function ProjectCard({ icon: Icon, title, onClick, description }) {
  return (
    <div onClick={onClick} className="project-card">
      <Icon className="project-icon" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
