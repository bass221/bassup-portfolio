import { useState } from "react";
import axios from "axios";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [portfolios, setPortfolios] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPortfolios = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE}/api/admin/portfolios`,
        {
          headers: {
            "x-admin-password": password, // ✅ Correct header for your backend
          },
        }
      );
      setPortfolios(res.data);
    } catch (err) {
      console.error(err);
      setError("Unauthorized or Server Error");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">BassUp Admin Panel</h1>

      <div className="mb-6">
        <input
          type="password"
          placeholder="Enter admin password"
          className="px-4 py-2 rounded bg-gray-800 border border-gray-600 w-full mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={fetchPortfolios}
          className="bg-mint-500 hover:bg-mint-600 text-black px-4 py-2 rounded"
        >
          View Portfolios
        </button>
        {error && <p className="text-red-400 mt-2">{error}</p>}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : portfolios.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 px-4 py-2">Name</th>
                <th className="border border-gray-600 px-4 py-2">Email</th>
                <th className="border border-gray-600 px-4 py-2">Created</th>
                <th className="border border-gray-600 px-4 py-2">Download</th>
              </tr>
            </thead>
            <tbody>
              {portfolios.map((p, idx) => (
                <tr key={p._id || idx}>
                  <td className="border border-gray-700 px-4 py-2">{p.name}</td>
                  <td className="border border-gray-700 px-4 py-2">{p.email}</td>
                  <td className="border border-gray-700 px-4 py-2">
                    {new Date(p.createdAt).toLocaleString()}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    <a
                      href={p.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mint-400 underline"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
