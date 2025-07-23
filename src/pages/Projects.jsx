import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Modern Portfolio",
    description: "A sleek personal portfolio built with React and Tailwind CSS.",
    image: "https://source.unsplash.com/600x400/?portfolio,website",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    github: "#",
  },
  {
    title: "Ecommerce Template",
    description: "Clean and responsive template for digital product shops.",
    image: "https://source.unsplash.com/600x400/?ecommerce,shop",
    tech: ["React", "Stripe", "Node.js"],
    link: "#",
    github: "#",
  },
];


export default function Projects() {
  return (
    <section className="py-16 bg-[#f8fafc]"> {/* Light gray-blue tone */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
