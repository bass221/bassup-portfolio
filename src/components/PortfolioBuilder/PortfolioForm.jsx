export default function PortfolioForm({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-6">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full p-3 rounded-xl bg-[#1e293b] text-white"
      />

      <input
        name="role"
        value={formData.role}
        onChange={handleChange}
        placeholder="Your Role (e.g., Frontend Developer)"
        className="w-full p-3 rounded-xl bg-[#1e293b] text-white"
      />

      <textarea
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        placeholder="Short Bio"
        rows={4}
        className="w-full p-3 rounded-xl bg-[#1e293b] text-white"
      />

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-3 rounded-xl bg-[#1e293b] text-white"
      />
    </form>
  );
}
