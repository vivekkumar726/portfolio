import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const profiles = [
  {
    title: "GitHub",
    username: "@vivekkumar726",
    icon: <FaGithub />,
    description:
      "Explore my repositories, projects, and contributions on GitHub.",
    stats: "MERN • ML • Open Source",
    link: "https://github.com/vivekkumar726",
  },

  {
    title: "LeetCode",
    username: "vivek-kumar-7",
    icon: <SiLeetcode />,
    description:
      "Solved 320+ DSA problems to strengthen problem-solving skills.",
    stats: "320+ Problems Solved",
    link: "https://leetcode.com/u/vivek_kumar_7/",
  },

  {
    title: "LinkedIn",
    username: "Connect With Me",
    icon: <FaLinkedin />,
    description:
      "Let's connect professionally and explore opportunities together.",
    stats: "Professional Network",
    link: "https://www.linkedin.com/in/vivek-kumar-chevvuri/",
  },

  {
    title: "Email",
    username: "vivekkumarchevvuri@gmail.com",
    icon: <FaEnvelope />,
    description:
      "Feel free to reach out regarding internships, projects, or collaborations.",
    stats: "Open to Opportunities",
    link: "mailto:vivekkumarchevvuri@gmail.com",
  },
];

function CodingProfiles() {
  return (
    <section
      id="codingprofiles"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            Coding{" "}
            <span className="text-cyan-400">
              Profiles
            </span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Platforms where I showcase my coding journey,
            projects, and professional presence.
          </p>
        </motion.div>

        {/* Profile Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
              }}
              className="
                bg-slate-800
                rounded-2xl
                p-8
                shadow-xl
                hover:shadow-2xl
                transition
                duration-300
              "
            >
              {/* Icon */}
              <div
                className="
                  w-16
                  h-16
                  rounded-full
                  bg-cyan-500/20
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  text-3xl
                  mb-6
                "
              >
                {profile.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-2">
                {profile.title}
              </h3>

              <p className="text-cyan-400 mb-4">
                {profile.username}
              </p>

              <p className="text-slate-300 leading-relaxed mb-6">
                {profile.description}
              </p>

              {/* Stats */}
              <div
                className="
                  inline-block
                  bg-cyan-500/20
                  text-cyan-400
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  mb-6
                "
              >
                {profile.stats}
              </div>

              {/* Button */}
              <div>
                <a
                  href={profile.link}
                  target={
                    profile.link.startsWith("mailto")
                      ? "_self"
                      : "_blank"
                  }
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-cyan-500
                    hover:bg-cyan-600
                    px-5
                    py-3
                    rounded-lg
                    transition
                    duration-300
                  "
                >
                  Visit

                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CodingProfiles;