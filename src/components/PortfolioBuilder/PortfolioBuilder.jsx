import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PortfolioForm from "./PortfolioForm";
import PortfolioPreview from "./PortfolioPreview";
import PayAndDownloadButton from "./PayAndDownloadButton";

export default function PortfolioBuilder() {
  const location = useLocation();
  const [hasPaid, setHasPaid] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    projects: [],
    skills: [],
    contact: {
      email: "",
      phone: "",
    },
    profileImage: "",
  });

  // Load saved form data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("portfolioForm");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // Save form data to localStorage
  useEffect(() => {
    localStorage.setItem("portfolioForm", JSON.stringify(formData));
  }, [formData]);

  // Stripe redirect — if paid=true, download automatically
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paid = params.get("paid");
    if (paid === "true") {
      setHasPaid(true);
      setTimeout(() => {
        handleDownload();
        // Clean up URL (remove ?paid=true)
        window.history.replaceState({}, "", window.location.pathname);
      }, 500);
    }
  }, [location.search]);

  const handleDownload = () => {
    const html = `
      <html>
        <head>
          <title>${formData.name}'s Portfolio</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              max-width: 800px;
              margin: auto;
              padding: 40px;
              background: #f4f4f4;
              color: #222;
            }
            h1, h2 {
              color: #1f2937;
            }
            img {
              max-width: 200px;
              border-radius: 50%;
              margin-bottom: 20px;
            }
            ul {
              padding-left: 20px;
            }
          </style>
        </head>
        <body>
          <h1>${formData.name}</h1>
          ${formData.profileImage ? `<img src="${formData.profileImage}" alt="Profile" />` : ""}
          <p><strong>Bio:</strong> ${formData.bio}</p>

          <h2>Projects</h2>
          <ul>
            ${
              Array.isArray(formData.projects)
                ? formData.projects.map(p => `<li>${p}</li>`).join("")
                : formData.projects.split("\n").map(p => `<li>${p}</li>`).join("")
            }
          </ul>

          <h2>Skills</h2>
          <p>
            ${
              Array.isArray(formData.skills)
                ? formData.skills.join(", ")
                : formData.skills
            }
          </p>

          <h2>Contact</h2>
          <p>
            Email: ${formData.contact.email}<br/>
            Phone: ${formData.contact.phone}
          </p>
        </body>
      </html>
    `;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${formData.name.toLowerCase().replace(/\s+/g, "_")}_portfolio.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-900 text-white">
      {/* Left – Form */}
      <div className="w-full lg:w-1/2 p-6 overflow-auto border-r border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-mint-400">Edit Portfolio</h2>
        <PortfolioForm formData={formData} setFormData={setFormData} />

        {!hasPaid ? (
          <PayAndDownloadButton onSuccess={() => setHasPaid(true)} />
        ) : (
          <button
            onClick={handleDownload}
            className="mt-6 px-6 py-3 bg-mint-400 hover:bg-mint-300 text-black font-semibold rounded-lg shadow-md"
          >
            ⬇️ Download Portfolio
          </button>
        )}
      </div>

      {/* Right – Live Preview */}
      <div className="w-full lg:w-1/2 p-6 overflow-auto">
        <h2 className="text-2xl font-bold mb-4 text-mint-400">Live Preview</h2>
        <PortfolioPreview data={formData} />
      </div>
    </div>
  );
}
