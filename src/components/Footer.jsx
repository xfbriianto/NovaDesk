// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-10 max-w-[1440px] mx-auto">
        {/* Brand */}
        <div className="col-span-2">
          <Link to="/" className="font-headline-lg text-headline-lg font-bold text-primary mb-6 inline-block">
            NovaDesk
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
            Elevating your digital workflow with precision and intelligence.
          </p>
        </div>

        {/* Product Links */}
        <div className="flex flex-col gap-4">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
            Product
          </span>
          <Link to="/features" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/features" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
            Integrations
          </Link>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-4">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
            Company
          </span>
          <Link to="/" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
            Careers
          </Link>
          <Link to="/" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
            Legal
          </Link>
        </div>

        {/* Support Links */}
        <div className="flex flex-col gap-4">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
            Support
          </span>
          <Link to="/faq" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
            Help Center
          </Link>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
            API Status
          </a>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-4">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
            Social
          </span>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
            Twitter
          </a>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
            GitHub
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto px-10 mt-16 pt-8 border-t border-white/5">
        <p className="font-body-md text-body-md text-on-surface-variant/50 text-center">
          © 2026 NovaDesk. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;