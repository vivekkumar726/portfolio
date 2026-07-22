import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

const certifications = [
  
  {
    title: "Cloud Practitioner CLF-C02",
    organization: "AWS",
    year: "2026",
    link: "https://drive.google.com/file/d/169LItqX798pMMjrtQGAUjplbuRBjgN-A/view?usp=drive_link",
    description:
    "Validated foundational knowledge of AWS Cloud, including core services, security, networking, pricing, and architectural best practices.",
  },
  
  {
    title: "Certified System Administrator (CSA)",
    organization: "ServiceNow",
    year: "2026",
    link: "https://drive.google.com/file/d/1NpcnuSw0Ay-rSQTZSxQ0rGs-nG83_0xm/view?usp=drive_link",
    description:
    "Demonstrated proficiency in ServiceNow platform administration, user management, workflows, incident management, and system configuration.",
  },
  
  {
    title: "Java Full Stack Developer",
    organization: "AICTE",
    year: "2026",
    link: "https://drive.google.com/file/d/1zprys1N5NRSHZnNLRiVHzQgaNzkcOp6e/view?usp=drive_link",
    description:
    "Completed an 8-week Java Full Stack internship covering Spring Boot, Hibernate, MySQL, REST APIs, Git, and enterprise web application development.",
  },
  {
    title: "Joy of Computing Using Python",
    organization: "NPTEL",
    year: "2025",
    link: "https://drive.google.com/file/d/1KHENg9T_U39RGVATnlHMY8TNWYmTOjgW/view",
    description:
      "Learned Python programming, computational thinking, problem-solving techniques, and algorithmic concepts through practical programming exercises.",
  },

];

function Certifications() {
  return (
    <section
      id="certifications"
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
            My{" "}
            <span className="text-cyan-400">
              Certifications
            </span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Certifications that demonstrate my commitment to
            continuous learning and professional growth.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.title}
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
                scale: 1.02,
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
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-cyan-500/20
                    flex
                    items-center
                    justify-center
                    text-cyan-400
                    text-2xl
                  "
                >
                  <FaCertificate />
                </div>

                <span
                  className="
                    bg-cyan-500/20
                    text-cyan-400
                    px-4
                    py-2
                    rounded-full
                    text-sm
                  "
                >
                  {certificate.year}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-2">
                {certificate.title}
              </h3>

              <p className="text-cyan-400 mb-4">
                {certificate.organization}
              </p>

              <p className="text-slate-300 leading-relaxed mb-6">
                {certificate.description}
              </p>

              {/* Certificate Link */}
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-cyan-400
                  hover:text-cyan-300
                  transition
                  duration-300
                "
              >
                View Certificate

                <FaExternalLinkAlt className="text-sm" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;