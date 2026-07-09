import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-scroll";

const quickLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Branding */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Vivek
              <span className="text-cyan-400">
                .dev
              </span>
            </h2>

            <p className="text-slate-400 leading-relaxed">
              MERN Stack Developer and Machine Learning Enthusiast
              passionate about building scalable applications and
              solving real-world problems through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="
                      cursor-pointer
                      text-slate-400
                      hover:text-cyan-400
                      transition
                      duration-300
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Connect With Me
            </h3>

            <div className="flex gap-5 text-2xl">

              {/* GitHub */}
              <a
                href="https://github.com/vivekkumar726"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-slate-800
                  flex
                  items-center
                  justify-center
                  hover:bg-cyan-500
                  transition
                  duration-300
                "
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vivek-kumar-chevvuri/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-slate-800
                  flex
                  items-center
                  justify-center
                  hover:bg-cyan-500
                  transition
                  duration-300
                "
              >
                <FaLinkedin />
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/vivek_kumar_7/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-slate-800
                  flex
                  items-center
                  justify-center
                  hover:bg-cyan-500
                  transition
                  duration-300
                "
              >
                <SiLeetcode />
              </a>

              {/* Email */}
              <a
                href="mailto:vivekkumarchevvuri@gmail.com"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-slate-800
                  flex
                  items-center
                  justify-center
                  hover:bg-cyan-500
                  transition
                  duration-300
                "
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Copyright */}
            <p className="text-slate-400 text-center md:text-left">
              © {new Date().getFullYear()} Chevvuri Vivek Kumar.
              All rights reserved.
            </p>

            {/* Back To Top */}
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className="
                cursor-pointer
                w-12
                h-12
                rounded-full
                bg-cyan-500
                hover:bg-cyan-600
                flex
                items-center
                justify-center
                transition
                duration-300
              "
            >
              <FaArrowUp />
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;