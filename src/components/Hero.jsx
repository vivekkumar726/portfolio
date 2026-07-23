import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profile from "../assets/profile.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 text-lg mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              Chevvuri Vivek Kumar
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
              Java Full Stack Developer & Machine Learning Enthusiast
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Computer Science undergraduate passionate about building
              scalable web applications, AI-powered solutions, and solving
              real-world problems through technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                View Projects
              </Link>

              <a
                href="/resume.pdf"
                download
                className="border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-3xl">
              <a
                href="https://github.com/vivekkumar726"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/vivek-kumar-chevvuri/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:vivekkumarchevvuri@gmail.com"
                className="hover:text-cyan-400 transition duration-300"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://leetcode.com/u/vivek_kumar_7/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition duration-300"
              >
                <SiLeetcode />
              </a>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

              {/* Profile Image */}
              <img
                src={profile}
                alt="Vivek Kumar"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-500 shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;