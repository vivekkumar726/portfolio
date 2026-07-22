import { motion } from "framer-motion";
import {
  FaCode,
  FaGraduationCap,
  FaTrophy,
  FaMedal,
  FaStar,
  FaAward,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaCode />,
    title: "350+ DSA Problems",
    description:
      "Solved more than 350 problems on LeetCode and other coding platforms, strengthening problem-solving and algorithmic thinking.",
  },

  {
    icon: <FaTrophy />,
    title: "Qualified NDA Examination",
    description:
      "Successfully qualified the National Defence Academy (NDA) Examination, demonstrating dedication and discipline.",
  },

  {
    icon: <FaMedal />,
    title: "Qualified Sainik School Entrance",
    description:
      "Cleared the Sainik School Entrance Examination at an early stage of academics.",
  },

  {
    icon: <FaGraduationCap />,
    title: "8.98 CGPA",
    description:
      "Maintained consistent academic excellence in B.Tech Computer Science and Engineering.",
  },

  {
    icon: <FaStar />,
    title: "98.6% in Intermediate",
    description:
      "Achieved outstanding performance in Senior Secondary Education.",
  },

  {
    icon: <FaAward />,
    title: "100% in Class X",
    description:
      "Secured a perfect score in Secondary Education examinations.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
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
            My{" "}
            <span className="text-cyan-400">
              Achievements
            </span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Milestones that reflect my dedication to academics,
            competitive programming, and continuous learning.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
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
                {achievement.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievements;