// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import TestimonialPage from './pages/TestimonialPage';
import FAQPage from "./pages/FAQPage";

function App() {
  return (
    <Router>
      <div className="dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/faq" element={<FAQPage />} />
          {/* Bisa tambahkan route lain nanti */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;