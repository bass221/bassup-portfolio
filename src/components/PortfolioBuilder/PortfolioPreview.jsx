export default function PortfolioPreview({ formData }) {
  const { name, role, bio, email } = formData;

  return (
    <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-mint-400 mb-2">{name || "Your Name"}</h2>
      <p className="text-lg mb-4 text-gray-300">{role || "Your Role"}</p>
      <p className="text-gray-400 mb-4">{bio || "Your short bio will appear here..."}</p>
      <p className="text-sm text-gray-500">{email || "your@email.com"}</p>
    </div>
  );
}
