import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaJava } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-20 left-10 text-6xl text-blue-500"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <FaReact />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-6xl text-green-600"
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <SiSpringboot />
      </motion.div>

      <motion.div
        className="absolute bottom-28 left-16 text-6xl text-yellow-500"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <FaJava />
      </motion.div>

      <motion.div
        className="absolute top-32 right-20 text-6xl text-sky-500"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      >
        <SiTailwindcss />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl font-extrabold mb-6"
      >
        Hi, I'm <span className="text-blue-600">Sulthan Patan</span>
      </motion.h1>

      {/* Typing Effect */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-2xl sm:text-3xl font-medium text-gray-700 mb-6"
      >
        <Typewriter
          words={[
            "Full-Stack Developer 🚀",
            "React & Spring Boot Enthusiast ⚡",
            "Open Source Learner 🌍",
            "Problem Solver 💡",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </motion.h2>

      {/* Sub Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-lg sm:text-xl text-gray-600 max-w-2xl"
      >
        I craft modern, scalable, and user-friendly web applications using{" "}
        <span className="text-blue-600 font-semibold">React</span>,{" "}
        <span className="text-green-600 font-semibold">Spring Boot</span>, and{" "}
        <span className="text-sky-500 font-semibold">Tailwind CSS</span>.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex gap-6 mt-10"
      >
        <a
          href="#projects"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition text-lg font-medium"
        >
          View My Work
        </a>
        
      </motion.div>
    </section>
  );
};

export default Hero;
