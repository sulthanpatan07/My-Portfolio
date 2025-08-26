import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar style change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Skills", "Projects"];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-extrabold tracking-wide cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          Sulthan
        </motion.h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700 items-center">
          {links.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group transition text-gray-700 hover:text-blue-600"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}

          {/* Desktop Resume Button */}
          <motion.li>
            <a
              href="/patan_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 rounded-full font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 transition-all shadow-md"
            >
              Resume
            </a>
          </motion.li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex gap-5 text-2xl text-gray-600">
          <motion.a
            whileHover={{ scale: 1.3, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/sulthanpatan07"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.3, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/sulthan-patan-baba5b2b9/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-2xl text-gray-700">
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white shadow-lg py-8 px-6"
          >
            <ul className="flex flex-col gap-6 font-medium text-gray-700">
              {links.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-blue-600 transition"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}

              {/* Mobile Resume Button */}
              <motion.li>
                <a
                  href="/patan_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 px-5 py-2 rounded-full font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 transition-all text-center shadow-md"
                >
                  Resume
                </a>
              </motion.li>
            </ul>

            {/* Mobile Social Icons */}
            <div className="flex gap-6 mt-6 text-2xl text-gray-600 justify-center">
              <motion.a
                whileHover={{ scale: 1.3, rotate: 10 }}
                href="https://github.com/sulthanpatan07"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.3, rotate: -10 }}
                href="https://www.linkedin.com/in/sulthan-patan-baba5b2b9/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
