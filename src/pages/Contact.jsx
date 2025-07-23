import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted (form not connected yet)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      className="pt-20 min-h-screen flex items-center justify-center bg-[#0f172a] px-6 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-[#1e293b] p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-3xl font-bold text-mint-400 text-center">Contact Me</h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-mint-400"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-mint-400"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-mint-400"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-mint-400 text-black font-semibold rounded-xl hover:bg-mint-300 transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
}
