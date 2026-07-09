import { motion } from "framer-motion";

const stats = [
  {
    value: "8.98",
    label: "CGPA",
  },
  {
    value: "320+",
    label: "LeetCode Problems",
  },
  {
    value: "2+",
    label: "Major Projects",
  },
  {
    value: "5+",
    label: "Certifications",
  },
];

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Computer Science Undergraduate
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              I'm Chevvuri Vivek Kumar, a passionate Computer Science student
              at Gayatri Vidya Parishad College of Engineering with a strong
              interest in Full Stack Development, Machine Learning, and
              Problem Solving.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              I enjoy building scalable applications using the MERN stack,
              integrating APIs, and developing AI-powered solutions that solve
              real-world problems.
            </p>

            <p className="text-slate-300 leading-relaxed">
              I continuously strive to improve my skills through projects,
              competitive programming, and hands-on learning experiences.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Education
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="text-cyan-400 font-semibold">
                  B.Tech – Computer Science and Engineering
                </h4>

                <p className="text-slate-300">
                  Gayatri Vidya Parishad College of Engineering
                </p>

                <p className="text-slate-400">
                  2023 – 2027 | CGPA: 8.98
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">
                  Intermediate (Class XII)
                </h4>

                <p className="text-slate-300">
                  Sri Viswa Junior College
                </p>

                <p className="text-slate-400">
                  98.6%
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold">
                  Secondary Education (Class X)
                </h4>

                <p className="text-slate-300">
                  Vivekananda High School
                </p>

                <p className="text-slate-400">
                  100%
                </p>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="bg-slate-800 p-8 rounded-2xl text-center shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-4xl font-bold text-cyan-400 mb-3">
                {stat.value}
              </h3>

              <p className="text-slate-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;