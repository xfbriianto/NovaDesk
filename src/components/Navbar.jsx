// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-primary/10">
      <nav className="flex justify-between items-center px-10 h-20 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link to="/" className="font-headline-lg text-headline-lg font-bold text-primary tracking-tight">
          NovaDesk
        </Link>

        {/* Menu Navigasi */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`font-body-md text-body-md transition-colors ${
              isActive('/') 
                ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Home
          </Link>
          <Link
            to="/features"
            className={`font-body-md text-body-md transition-colors ${
              isActive('/features') 
                ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className={`font-body-md text-body-md transition-colors ${
              isActive('/pricing') 
                ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Pricing
          </Link>
          <Link
            to="/testimonial"
            className={`font-body-md text-body-md transition-colors ${
              isActive('/testimonial') 
                ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Testimonials
          </Link>
          <Link
            to="/faq"
            className={`font-body-md text-body-md transition-colors ${
              isActive('/faq') 
                ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            FAQ
          </Link>
        </div>

        {/* Tombol CTA */}
       <button className="bg-gradient-to-b from-[#7C3AED] to-[#8B5CF6] text-white px-6 py-2.5 rounded-full font-body-md text-body-md font-semibold hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300 ease-in-out">
  Get Started
</button>
      </nav>
    </header>
  );
};

export default Navbar;