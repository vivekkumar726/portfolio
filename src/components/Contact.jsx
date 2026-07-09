import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS integration will be added later
    console.log(formData);

    setStatus("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <section
      id="contact"
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
            Get In{" "}
            <span className="text-cyan-400">
              Touch
            </span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Have an opportunity, project idea, or just want to connect?
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="bg-slate-800 p-6 rounded-2xl flex items-center gap-5">
              <div className="text-cyan-400 text-2xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-semibold">
                  Email
                </h3>

                <p className="text-slate-300">
                  vivekkumarchevvuri@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl flex items-center gap-5">
              <div className="text-cyan-400 text-2xl">
                <FaPhone />
              </div>

              <div>
                <h3 className="font-semibold">
                  Phone
                </h3>

                <p className="text-slate-300">
                  +91 8919143805
                </p>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl flex items-center gap-5">
              <div className="text-cyan-400 text-2xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-semibold">
                  Location
                </h3>

                <p className="text-slate-300">
                  Andhra Pradesh, India
                </p>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="
              bg-slate-800
              p-8
              rounded-2xl
              shadow-xl
              space-y-6
            "
          >

            <div>
              <label className="block mb-2 text-slate-300">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  bg-slate-700
                  border
                  border-slate-600
                  focus:outline-none
                  focus:border-cyan-400
                "
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  bg-slate-700
                  border
                  border-slate-600
                  focus:outline-none
                  focus:border-cyan-400
                "
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Message
              </label>

              <textarea
                rows="6"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="
                  w-full
                  px-4
                  py-3
                  rounded-lg
                  bg-slate-700
                  border
                  border-slate-600
                  focus:outline-none
                  focus:border-cyan-400
                  resize-none
                "
              />
            </div>

            {status && (
              <p className="text-green-400">
                {status}
              </p>
            )}

            <button
              type="submit"
              className="
                w-full
                bg-cyan-500
                hover:bg-cyan-600
                py-3
                rounded-lg
                font-semibold
                flex
                justify-center
                items-center
                gap-3
                transition
                duration-300
              "
            >
              <FaPaperPlane />

              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;