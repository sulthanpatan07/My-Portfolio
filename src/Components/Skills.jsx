import React, { useState } from "react";
import { Code, Server, Database, Wrench, Zap } from "lucide-react";

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-blue-400 via-cyan-400 to-indigo-400",
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-400 via-emerald-400 to-lime-400",
      skills: ["Spring","Spring Boot", "REST APIs"],
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-400 via-pink-400 to-red-400",
      skills: ["PostgreSQL", "MySQL"],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      color: "from-orange-400 via-pink-400 to-red-400",
      skills: ["Git", "GitHub",  "VS Code","STS","Maven", "Postman"],
    },
  ];

  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 15;
    const y = (e.clientY / innerHeight - 0.5) * 15;
    setTilt({ x, y });
  };

  return (
    <section
      id="skills"
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 px-6 py-20 relative overflow-hidden"
    >
      {/* Floating Particles Background (subtle for light theme) */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/60 backdrop-blur-md border border-blue-200/50 text-blue-600 rounded-full text-sm font-medium mb-6">
          <Zap className="w-4 h-4 animate-pulse" />
          My Expertise
        </div>

        <h2 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-gradient">
          Technical Skills
        </h2>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          A balanced stack of modern frontend, scalable backend, and reliable tools.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto relative z-10">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.title}
              className="relative group rounded-3xl p-8 bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl hover:shadow-2xl transition-transform duration-700"
              style={{
                transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                animation: `fadeInUp 0.8s ease forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0,
              }}
            >
              {/* Subtle Glow Ring */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${cat.color} opacity-10 group-hover:opacity-30 blur-2xl transition-all`}
              />

              {/* Icon with Ring */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-tr ${cat.color} blur-lg opacity-50 animate-pulse`}
                ></div>
                <div
                  className={`relative w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-tr ${cat.color} text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon className="w-10 h-10" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                {cat.title}
              </h3>

              {/* Skills List */}
              <ul className="flex flex-wrap justify-center gap-2">
                {cat.skills.map((skill, i) => (
                  <li
                    key={i}
                    className={`px-4 py-2 text-sm rounded-full bg-gradient-to-r ${cat.color} text-white shadow-md hover:scale-110 transition-transform duration-300 animate-pop`}
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes pop {
          0% {
            transform: scale(0.6);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-pop {
          animation: pop 0.4s ease forwards;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
