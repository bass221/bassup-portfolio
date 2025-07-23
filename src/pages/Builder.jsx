import { useState, useEffect } from "react";
import PayAndDownloadButton from "../components/PayAndDownloadButton";

export default function Builder() {
  const [form, setForm] = useState({
    name: "",
    bio: "",
    projects: "",
    skills: "",
    contact: "",
    profileImage: "",
  });

  const [ready, setReady] = useState(false);

  // Load saved form on mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolioForm");
    if (saved) setForm(JSON.parse(saved));
    setReady(true);
  }, []);

  // Save on change
  useEffect(() => {
    if (ready) {
      localStorage.setItem("portfolioForm", JSON.stringify(form));
    }
  }, [form, ready]);

  // Auto-download after payment
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paid = params.get("paid");
    if (paid === "true" && ready) {
      setTimeout(() => {
        handleDownload();
        window.history.replaceState({}, "", window.location.pathname);
      }, 500);
    }
  }, [ready]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, profileImage: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${form.name}'s Portfolio</title>
        <style>
          body {
            background-color: #0f172a;
            color: white;
            font-family: sans-serif;
            padding: 2rem;
            max-width: 800px;
            margin: auto;
          }
          img {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 50%;
            border: 4px solid #2dd4bf;
            display: block;
            margin: 0 auto 1rem;
          }
          h1, h2, h3 {
            color: #2dd4bf;
          }
        </style>
      </head>
      <body>
        ${form.profileImage ? `<img src="${form.profileImage}" alt="Profile Picture" />` : ""}
        <h1>${form.name}</h1>
        <p>${form.bio}</p>

        <h2>Projects</h2>
        <p>${form.projects.replace(/\n/g, "<br>")}</p>

        <h2>Skills</h2>
        <p>${form.skills}</p>

        <h2>Contact</h2>
        <p>${form.contact}</p>
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "portfolio.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    localStorage.removeItem("portfolioForm");
    setForm({
      name: "",
      bio: "",
      projects: "",
      skills: "",
      contact: "",
      profileImage: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-16 px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-mint-400 mb-2">Portfolio Builder</h1>
          <p className="text-gray-400">Create your personalized portfolio below.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-10">
          {/* 🧾 Form Section */}
          <div className="space-y-6">
            <FormInput label="Name" name="name" value={form.name} onChange={setForm} />
            <FormTextarea label="Bio" name="bio" value={form.bio} onChange={setForm} />
            <FormTextarea label="Projects (title + description)" name="projects" value={form.projects} onChange={setForm} />
            <FormInput label="Skills (comma-separated)" name="skills" value={form.skills} onChange={setForm} />
            <FormInput label="Contact Info (email / phone)" name="contact" value={form.contact} onChange={setForm} />

            {/* 🖼 Profile Image */}
            <label className="block">
              <span className="text-mint-300">Profile Image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full mt-1 text-white"
              />
            </label>

            <PayAndDownloadButton />

            {/* 🔴 Reset Button */}
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={handleReset}
            >
              Reset Form
            </button>
          </div>

          {/* 📌 Live Preview Section */}
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg space-y-6 text-center">
            {form.profileImage && (
              <img
                src={form.profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-mint-400"
              />
            )}
            <h2 className="text-2xl font-bold text-mint-400">{form.name || "Your Name"}</h2>
            <p className="text-gray-300">{form.bio || "Your short bio will appear here..."}</p>

            <div className="text-left space-y-3">
              <div>
                <h3 className="text-xl font-semibold text-mint-300 mb-1">Projects</h3>
                <p className="text-gray-400 whitespace-pre-line">
                  {form.projects || "Add your project descriptions here."}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-mint-300 mb-1">Skills</h3>
                <p className="text-gray-400">{form.skills || "List your skills here..."}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-mint-300 mb-1">Contact</h3>
                <p className="text-gray-400">{form.contact || "Your contact info..."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable components
function FormInput({ label, name, value, onChange }) {
  return (
    <label className="block">
      <span className="text-mint-300">{label}</span>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(prev => ({ ...prev, [name]: e.target.value }))}
        className="w-full mt-1 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-mint-400"
      />
    </label>
  );
}

function FormTextarea({ label, name, value, onChange }) {
  return (
    <label className="block">
      <span className="text-mint-300">{label}</span>
      <textarea
        name={name}
        rows={4}
        value={value}
        onChange={(e) => onChange(prev => ({ ...prev, [name]: e.target.value }))}
        className="w-full mt-1 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-mint-400"
      />
    </label>
  );
}
