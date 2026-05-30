// src/components/Hero.jsx

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import * as Icons from 'lucide-react';

import profileImg from '../assets/Profile.jpeg';

const roles = [
  'Python Django Developer',
  'Data Analyst',
  'ERP Executive',
  'Full Stack Developer',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayRole, setDisplayRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIndex];

    if (!isDeleting && displayRole !== currentRole) {
      timeout = setTimeout(() => {
        setDisplayRole(
          currentRole.slice(0, displayRole.length + 1)
        );
      }, 100);

    } else if (!isDeleting && displayRole === currentRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);

    } else if (isDeleting && displayRole !== '') {
      timeout = setTimeout(() => {
        setDisplayRole(displayRole.slice(0, -1));
      }, 50);

    } else if (isDeleting && displayRole === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);

  }, [displayRole, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <span className="text-cyan-400 font-semibold tracking-wider text-sm uppercase">
              Welcome
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
              I'm{' '}
              <span className="gradient-text">
                Abhay Shahu
              </span>
            </h1>

            {/* Typing Animation */}
            <div className="mt-4 h-12">
              <p className="text-xl md:text-2xl text-gray-300">

                <span className="font-medium">
                  {displayRole}
                </span>

                <span className="animate-pulse text-cyan-400">
                  |
                </span>

              </p>
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-400 max-w-lg leading-relaxed">
              MCA student and versatile technology professional
              with hands-on experience in Python Django web
              development, MySQL database administration,
              ERP lifecycle management, and scalable web
              application development.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                <Icons.Download size={18} />
                Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-400/50 text-cyan-400 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-cyan-400/10 transition-all"
              >
                Contact Me
                <Icons.ChevronRight size={18} />
              </motion.a>

            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8">

              <motion.a
                href="https://github.com/abhayshahu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Icons.Github size={24} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/abhay-shahu-561a212a1/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
               <Icons.Linkedin size={24} />
              </motion.a>

              <motion.a
                href="mailto:abhayshahu7513@gmail.com"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Icons.Mail size={24} />
              </motion.a>

            </div>

          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >

            <div className="relative group">

              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-75 blur-xl animate-glow-pulse group-hover:opacity-100 transition-opacity"></div>

              {/* Rotating Border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-spin-slow"></div>

              {/* Profile Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 bg-dark-card shadow-2xl animate-float">

                <img
                  src={profileImg}
                  alt="Abhay Shahu"
                  className="w-full h-full object-cover object-center"
                />

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;