import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden border border-gray-200"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-44 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between text-sm">
          <a
            href={project.link}
            target="_blank"
            className="text-indigo-600 font-medium hover:underline"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            className="text-gray-500 hover:text-gray-700 hover:underline"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
