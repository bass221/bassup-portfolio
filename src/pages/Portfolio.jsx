import { useEffect, useState } from "react";

export default function Portfolio() {
  const [form, setForm] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("portfolioForm");
    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  if (!form) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
        <p className="text-gray-400">No portfolio data found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-mint-400">{form.name}</h1>
          <p className="text-gray-300 mt-2">{form.bio}</p>
        </header>

        <section>
          <h2 className="text-2xl text-mint-300 font-semibold mb-2">Projects</h2>
          <pre className="text-gray-400 whitespace-pre-wrap">{form.projects}</pre>
        </section>

        <section>
          <h2 className="text-2xl text-mint-300 font-semibold mb-2">Skills</h2>
          <p className="text-gray-400">{form.skills}</p>
        </section>

        <section>
          <h2 className="text-2xl text-mint-300 font-semibold mb-2">Contact</h2>
          <p className="text-gray-400">{form.contact}</p>
        </section>
      </div>
    </div>
  );
}
