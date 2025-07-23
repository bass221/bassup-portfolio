import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import PortfolioBuilder from "./pages/Builder"; // ✅ Correct import
import AdminPage from "./pages/AdminPage";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/scrollToTop";

// Handles animated route transitions
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/builder" element={<PortfolioBuilder />} /> {/* ✅ Corrected */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-builder" element={<PortfolioBuilder />} /> {/* Optional alias */}
        <Route path="/admin" element={<AdminPage />} />  {/* ✅ New admin route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

// Main App layout with Navbar, Footer, and Routes
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
