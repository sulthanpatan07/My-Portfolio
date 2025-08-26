import React, { useState } from "react";
import { Github, ExternalLink, Zap } from "lucide-react";

// Projects Data
const projects = [
  {
    title: "Skill2Earn",
    subtitle: "Women Empowerment Platform",
    desc: "A community-focused platform empowering women to showcase and monetize skills like tailoring, tuition, cooking, and beauty services. Features admin moderation, image uploads, email & in-app notifications, and local search functionality.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "JWT", "Multer"],
    github: "https://github.com/Bikshu19/Skill2Earn-project",
    demo: "https://skill2earn-project-1.onrender.com",
    color: "from-purple-600 to-pink-600",
    bgColor: "from-purple-50 to-pink-50",
    icon: "⭐",
    highlight: true, // 👈 special property
  },
  {
    title: "Startup Application",
    subtitle: "Modern Business Solution",
    desc: "A startup app built with React + Tailwind featuring a modern UI, smooth interactions, and a clean design system with responsive layouts.",
    tech: ["React", "Tailwind", "JavaScript", "Framer Motion"],
    github: "https://github.com/Bikshu19/startup-Application",
    demo: "#",
    color: "from-blue-600 to-cyan-600",
    bgColor: "from-blue-50 to-cyan-50",
    icon: "🚀",
  },
  {
    title: "Movie Catalog API",
    subtitle: "Entertainment Database",
    desc: "Spring Boot REST API with frontend integration to manage and display movie data. Features full CRUD operations and deployed for production testing.",
    tech: ["Spring Boot", "REST API", "MySQL", "HTML", "CSS", "JS"],
    github: "https://github.com/sulthanpatan07/MovieCatalog",
    demo: "https://frontend-li2tsm22p-sulthanpatans-projects.vercel.app",
    color: "from-green-600 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50",
    icon: "🎬",
  },
  {
    title: "Conference Portal",
    subtitle: "Academic Event Platform",
    desc: "Responsive conference website built with React + Tailwind CSS. Includes committee details, schedule management, and registration system.",
    tech: ["React", "Tailwind", "Bootstrap", "Node.js"],
    github: "https://github.com/Bikshu19/conference",
    demo: "#",
    color: "from-orange-600 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    icon: "🎓",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  // Custom filtering logic
  const filteredProjects = (() => {
    switch (filter) {
      case "Full Stack":
        return projects.filter(p =>
          ["Skill2Earn", "Movie Catalog API"].includes(p.title)
        );
      case "Frontend":
        return projects.filter(p =>
          ["Startup Application", "Conference Portal"].includes(p.title)
        );
      case "Backend":
        return projects.filter(p => p.title === "Movie Catalog API");
      default:
        return projects; // All
    }
  })();

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 px-6 py-20 overflow-hidden relative"
    >
      {/* Section Heading */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-cyan-600 rounded-full text-sm font-medium mb-6 animate-bounce">
          <Zap className="w-4 h-4" />
          Portfolio Showcase
        </div>
        
        <h2 className="text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          Projects
        </h2>
        
        <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences with cutting-edge technologies and innovative solutions
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-12 relative z-10">
        <div className="flex gap-2 p-2 bg-gray-100/70 backdrop-blur-md rounded-2xl border border-gray-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-500 ${
                filter === category
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg transform scale-105"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-200/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={project.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group relative bg-gradient-to-br ${project.bgColor} border border-gray-200 rounded-3xl p-8 hover:border-gray-300 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
              project.highlight ? "lg:col-span-2" : "" // 👈 Skill2Earn full width
            } ${hoveredIndex === index ? "z-20" : "z-10"}`}
            style={{
              animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
            }}
          >
            {/* Project Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">{project.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 font-medium">{project.subtitle}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed">{project.desc}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={tech}
                  className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white text-sm rounded-full font-medium shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110`}
                  style={{
                    animation: `slideIn 0.5s ease-out ${techIndex * 0.05}s both`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-500 font-semibold"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
              
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${project.color} text-white rounded-2xl hover:opacity-90 transition-all duration-500 font-semibold`}
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
