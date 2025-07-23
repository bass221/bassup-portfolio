// src/data/portfolioData.js
const portfolioData = {
  name: "Bassirou Sagna",
  role: "Full-Stack Developer",
  bio: "I build modern, fast, and elegant web experiences.",
  location: "Kuala Lumpur, Malaysia",
  email: "youremail@example.com",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  projects: [
    {
      title: "Beatwave",
      description: "A modern platform to buy and sell beats with Stripe integration.",
      image: "/images/beatwave.png",
      url: "https://beatwave.vercel.app",
    },
    {
      title: "BassUp",
      description: "Sell customizable portfolio and ecommerce templates.",
      image: "/images/bassup.png",
      url: "https://bassup.vercel.app",
    },
  ],
};

export default portfolioData;
