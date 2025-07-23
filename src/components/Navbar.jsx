import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const { pathname, search } = location;

  // Make sure both conditions work:
  const isAdminVisible = pathname === "/admin" || search.includes("admin=true");

  const navLink = (to, label) => (
    <Link
      to={to}
      className={`transition hover:text-mint-400 ${
        pathname === to ? "text-mint-400 font-semibold" : ""
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] text-white px-6 py-4 shadow-md flex items-center justify-between">
      {/* Branding */}
      <Link to="/" className="text-2xl font-bold tracking-wide">
        <span className="text-mint-400">B</span>assUp
      </Link>

      {/* Nav Links */}
      <div className="flex gap-6">
        {navLink("/", "Home")}
        {navLink("/about", "About")}
        {navLink("/portfolio", "Portfolio")}
        {navLink("/contact", "Contact")}
        {navLink("/builder", "Builder")}
        {isAdminVisible && navLink("/admin", "Admin")}
      </div>
    </nav>
  );
}
