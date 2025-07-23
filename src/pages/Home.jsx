import Hero from "../components/Hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      className="min-h-screen bg-[#0f172a] text-white px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Hero />
    </motion.section>
  );
}
