import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiGooglemaps,
  SiGithub,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
    ],
  },

  {
    title: "MERN Stack",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },

  {
    title: "Machine Learning",
    skills: [
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
    ],
  },

  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Google Maps API", icon: <SiGooglemaps /> },
      { name: "REST APIs", icon: "🔗" },
      { name: "JWT", icon: "🔐" },
    ],
  },

  {
    title: "Core CS Subjects",
    skills: [
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "DBMS" },
      { name: "Operating Systems" },
      { name: "Computer Networks" },
      { name: "Software Engineering" },
      { name: "Artificial Intelligence" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24"
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
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Technologies and concepts I use to build scalable
            applications and solve real-world problems.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                {category.title}
              </h3>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="
                      bg-slate-800
                      rounded-2xl
                      p-6
                      text-center
                      shadow-lg
                      cursor-pointer
                      transition
                      duration-300
                    "
                  >
                    <div className="text-4xl mb-4 flex justify-center text-cyan-400">
                      {skill.icon}
                    </div>

                    <h4 className="font-medium text-slate-200">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;