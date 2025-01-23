import React from "react";
import { Code, Cpu, MessageCircle, Notebook, CheckSquare } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import "../styles/components/pages/LandingPage.css";

function LandingPage() {
  const projects = [
    {
      icon: CheckSquare,
      title: "Todo App",
      description: "Manage your tasks efficiently",
      onClick: () => (window.location.href = "/"),
    },
    {
      icon: Cpu,
      title: "Weather App",
      description: "Real-time weather forecasts",
      onClick: () => (window.location.href = "/weather-app"),
    },
    {
      icon: Code,
      title: "Expense Tracker",
      description: "Powerful computational tool",
      onClick: () => (window.location.href = "/calculator-app"),
    },
    {
      icon: Notebook,
      title: "Multi Step Form",
      description: "Capture and organize your thoughts",
      onClick: () => (window.location.href = "/notes-app"),
    },
    {
      icon: MessageCircle,
      title: "Ecommerce Product list",
      description: "Connect and communicate",
      onClick: () => (window.location.href = "/chat-app"),
    },
  ];
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to My Multi-Project App</h1>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
