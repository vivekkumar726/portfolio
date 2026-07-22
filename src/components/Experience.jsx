import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    title: "AICTE Virtual Internship – Java Full Stack Development",
    company: "AICTE",
    duration: "2026",
    location: "Remote",
    description: [
      "Developed full-stack web applications using Java, Spring Boot, React.js, and MySQL.",
      "Built RESTful APIs, integrated frontend and backend components, and implemented CRUD operations.",
      "Gained hands-on experience with Spring Boot, database management, and responsive web application development.",
      "Applied industry-standard development practices including version control, debugging, and API testing.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "REST APIs",
      "Git",
      "Postman",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            Work{" "}
            <span className="text-cyan-400">
              Experience
            </span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Practical exposure through internships and collaborative learning experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div
            className="
              absolute
              left-5
              top-0
              bottom-0
              w-1
              bg-cyan-500
              hidden
              md:block
            "
          />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="
                relative
                md:pl-20
                mb-12
              "
            >

              {/* Timeline Icon */}
              <div
                className="
                  hidden
                  md:flex
                  absolute
                  left-0
                  top-2
                  w-10
                  h-10
                  rounded-full
                  bg-cyan-500
                  items-center
                  justify-center
                  text-slate-950
                  font-bold
                "
              >
                <FaBriefcase />
              </div>

              {/* Experience Card */}
              <div
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
                <div
                  className="
                    flex
                    flex-col
                    md:flex-row
                    md:justify-between
                    md:items-center
                    gap-4
                    mb-6
                  "
                >
                  <div>
                    <h3 className="text-2xl font-bold">
                      {experience.title}
                    </h3>

                    <p className="text-cyan-400 mt-2">
                      {experience.company} • {experience.location}
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-slate-400
                    "
                  >
                    <FaCalendarAlt />

                    {experience.duration}
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-8">
                  {experience.description.map((item) => (
                    <li
                      key={item}
                      className="
                        flex
                        items-start
                        gap-3
                        text-slate-300
                      "
                    >
                      <span className="text-cyan-400 mt-1">
                        •
                      </span>

                      <span>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        bg-cyan-500/20
                        text-cyan-400
                        px-4
                        py-2
                        rounded-full
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;