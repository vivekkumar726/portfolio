import { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Achievements",
  "Certifications",
  "CodingProfiles",
  "Contact",
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
          Vivek<span className="text-cyan-400">.dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg transition duration-300"
          >
            <FaDownload />
            Resume
          </a>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 px-6 pb-6">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block cursor-pointer hover:text-cyan-400 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}

            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-4 py-3 rounded-lg transition duration-300"
            >
              <FaDownload />
              Download Resume
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;