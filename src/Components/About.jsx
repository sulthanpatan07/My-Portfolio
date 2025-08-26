import React, { useState, useEffect } from "react";
import { Award, Code, GraduationCap, Sparkles, Star, Target, Zap, ArrowRight, Heart, Coffee, Rocket } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const achievements = [
    {
      icon: GraduationCap,
      title: "8.9 GPA",
      subtitle: "Academic Excellence",
      description: "Consistent high performance in Computer Science Engineering",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      shadowColor: "shadow-blue-500/25",
      stats: "Top 5%"
    },
    {
      icon: Award,
      title: "1st Prize Winner",
      subtitle: "Project Expo Champion",
      description: "Recognition for innovative solutions and technical excellence",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      shadowColor: "shadow-green-500/25",
      stats: "Competition"
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      subtitle: "Modern Web Technologies",
      description: "Expertise in React.js, Spring Boot, and scalable architectures",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      shadowColor: "shadow-purple-500/25",
      stats: "4 Projects"
    }
  ];

  const skills = ["React.js", "Spring Boot", "Spring","MYSQL", "JavaScript", "Java"];
  const interests = [
    { icon: Coffee, label: "Problem Solving" },
    { icon: Rocket, label: "Innovation" },
    { icon: Heart, label: "User Experience" },
    { icon: Target, label: "Performance" }
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-20 overflow-hidden relative"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'moveGrid 20s linear infinite'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          {/* Subtitle with icon */}
          <div 
            className={`inline-flex items-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full text-blue-600 font-semibold mb-8 border border-blue-200/50 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}
          >
            <Sparkles className="w-5 h-5 animate-spin" />
            Get to know me
            <Star className="w-4 h-4 animate-pulse" />
          </div>

          {/* Main heading with enhanced animation */}
          <h2 
            className={`text-7xl font-black mb-8 transform transition-all duration-1200 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-shift">
              About Me
            </span>
          </h2>

          {/* Animated decorative line */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className={`h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-1500 delay-400 ${
              isVisible ? 'w-32 opacity-100' : 'w-0 opacity-0'
            }`} />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping" />
            <div className={`h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-all duration-1500 delay-600 ${
              isVisible ? 'w-32 opacity-100' : 'w-0 opacity-0'
            }`} />
          </div>
        </div>

        {/* Enhanced Description */}
        <div className="max-w-4xl mx-auto mb-20">
          <div 
            className={`text-xl text-gray-700 leading-relaxed text-center transform transition-all duration-1000 delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <p className="mb-6">
              Hi there! 👋 I'm{" "}
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sulthan Khan Patan
              </span>
              , a passionate{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                  Computer Science Engineering student
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </span>{" "}
              with a stellar{" "}
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full font-bold text-lg animate-pulse">
                8.9 GPA
              </span>
            </p>
            
            <p className="mb-8">
              I specialize in crafting{" "}
              <span className="font-semibold text-blue-600">modern web experiences</span> using{" "}
              <span className="font-semibold text-cyan-600">React.js</span>,{" "}
              <span className="font-semibold text-green-600">Spring Boot</span>, and cutting-edge technologies.
              My mission is to{" "}
              <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                solve real-world problems
              </span>{" "}
              through innovative digital solutions! 🚀
            </p>
          </div>

          {/* Skills Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-full text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-500 hover:scale-110 hover:shadow-lg cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative bg-gradient-to-br ${achievement.bgColor} backdrop-blur-xl border border-white/20 rounded-3xl p-8 transform transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl ${achievement.shadowColor} cursor-pointer overflow-hidden`}
                style={{
                  animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Floating particles on hover */}
                {activeCard === index && (
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-float opacity-60"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: `${2 + Math.random()}s`
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Icon with enhanced animation */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white group-hover:animate-bounce" />
                  </div>
                  
                  {/* Stats badge */}
                  <div className="absolute -top-2 -right-2 px-2 py-1 bg-white/90 text-xs font-bold text-gray-700 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {achievement.stats}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 font-semibold mb-3">
                    {achievement.subtitle}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interests Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">What Drives Me</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <div
                  key={interest.label}
                  className="flex items-center gap-3 px-6 py-4 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-500 hover:scale-110 hover:shadow-lg group cursor-pointer"
                  style={{
                    animation: `bounceIn 0.8s ease-out ${index * 0.1}s both`
                  }}
                >
                  <Icon className="w-6 h-6 group-hover:animate-spin transition-transform duration-300" />
                  <span className="font-semibold">{interest.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-500 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-3 mx-auto group">
            <span>Let's Build Something Amazing</span>
            <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes moveGrid {
          0% { transform: translateX(0); }
          100% { transform: translateX(50px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;