// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-8 text-center border-t border-gray-800">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} BassUp. All rights reserved.
      </p>
      <p className="text-xs mt-2">
        Built with 💙 by <span className="text-white font-medium">Bassirou</span>
      </p>
    </footer>
  );
}
