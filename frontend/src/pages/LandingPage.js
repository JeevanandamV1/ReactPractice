import React from "react";
import { useNavigate } from "react-router-dom";
import { Code, Cpu, MessageCircle, Notebook, CheckSquare } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import "../styles/pages/LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  const projects = [
    {
      icon: CheckSquare,
      title: "Todo App",
      description: "Manage your tasks efficiently",
      onClick: () => navigate("/todoApp"),
    },
    {
      icon: Cpu,
      title: "Weather App",
      description: "Real-time weather forecasts",
      onClick: () => navigate("/weather"),
    },
    {
      icon: Code,
      title: "Expense Tracker",
      description: "Track your expenses with ease",
      onClick: () => navigate("/expensiveTracker"),
    },
    {
      icon: Notebook,
      title: "Multi Step Form",
      description: "Step-by-step form handling",
      onClick: () => navigate("/multiStepForm"),
    },
    {
      icon: MessageCircle,
      title: "Ecommerce Product list",
      description: "Browse and shop products",
      onClick: () => navigate("/Ecommerce"),
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
