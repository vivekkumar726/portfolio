import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Smart Healthcare System",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200",
    description:
      "A full-stack healthcare management platform that enables online doctor appointment booking, smart queue management, digital health records, and automated healthcare reminders.",

    technologies: [
      "Java",
    "Spring Boot",
    "React.js",
    "MySQL",
    "REST APIs",
    "Spring Security",
    "JWT",
    ],

    features: [
      "Online doctor appointment booking",
    "Real-time slot availability",
    "Smart queue with waiting time prediction",
    "10-minute appointment reminders",
    "Secure medical report storage",
    "Doctor dashboard for patient management",
    ],

    github:
      "https://github.com/vivekkumar726",

    demo:
      "#",
  },

  {
    title: "House Price Prediction System",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",

    description:
      "An end-to-end machine learning application for predicting house prices using advanced preprocessing and ensemble models.",

    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Flask",
    ],

    features: [
      "Data preprocessing pipeline",
      "Feature engineering",
      "Hyperparameter tuning",
      "Multiple ML models",
      "Model evaluation dashboard",
    ],

    github:
      "https://github.com/vivekkumar726",

    demo:
      "https://vk-house-price-predictor.streamlit.app/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
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
            Featured{" "}
            <span className="text-cyan-400">
              Projects
            </span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Some of the projects I've built to solve
            real-world problems using modern technologies.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="
                bg-slate-800
                rounded-3xl
                overflow-hidden
                shadow-xl
              "
            >
              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1
                    ? "lg:grid-flow-col-dense"
                    : ""
                }`}
              >

                {/* Project Image */}
                <div
                  className={`overflow-hidden ${
                    index % 2 === 1
                      ? "lg:col-start-2"
                      : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      min-h-[300px]
                      hover:scale-105
                      transition
                      duration-500
                    "
                  />
                </div>

                {/* Project Details */}
                <div className="p-8 flex flex-col justify-center">

                  <h3 className="text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map(
                      (tech) => (
                        <span
                          key={tech}
                          className="
                            bg-cyan-500/20
                            text-cyan-400
                            px-3
                            py-1
                            rounded-full
                            text-sm
                          "
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3 text-cyan-400">
                      Key Features
                    </h4>

                    <ul className="space-y-2 text-slate-300">
                      {project.features.map(
                        (feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2"
                          >
                            <span className="text-cyan-400">
                              •
                            </span>

                            {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-2
                        bg-slate-700
                        hover:bg-slate-600
                        px-5 py-3
                        rounded-lg
                        transition
                        duration-300
                      "
                    >
                      <FaGithub />

                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-2
                        bg-cyan-500
                        hover:bg-cyan-600
                        px-5 py-3
                        rounded-lg
                        transition
                        duration-300
                      "
                    >
                      <FaExternalLinkAlt />

                      Live Demo
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;