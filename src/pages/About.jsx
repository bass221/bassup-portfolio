import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="pt-20 min-h-screen flex items-center justify-center bg-[#0f172a] px-6 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-mint-400">
          About <span className="text-white">BassUp</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          BassUp is your launchpad for building sleek, professional portfolios
          and ecommerce websites. Whether you're a creative, freelancer, or
          small business, we've got the tools you need to shine online. <br/> <br /><hr /><br />
          WE'VE GOT YOU COVERED 🏴‍☠️😎
        </p>
      </div>
    </motion.section>
  );
}


