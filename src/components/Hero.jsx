import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import portfolioData from "../data/portfolioData";
import { Link, useNavigate } from "react-router-dom";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();
  const navigate = useNavigate(); // ✅ Moved to the top for clarity

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      className="h-screen flex items-center justify-center bg-[#0f172a] text-white px-6"
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="text-mint-400">{portfolioData.name}</span>
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-gray-300">
          {portfolioData.bio}
        </p>
        <p className="text-base sm:text-lg mb-8 text-gray-300">
          Build stunning portfolios and ecommerce websites with ease.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/builder">
            <button className="px-6 py-3 bg-mint-400 hover:bg-mint-300 text-black font-semibold rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              Get Started
            </button>
          </Link>
          <button
            onClick={() => navigate("/about")} // ✅ Correct usage
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black font-semibold rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.section>
  );
}
