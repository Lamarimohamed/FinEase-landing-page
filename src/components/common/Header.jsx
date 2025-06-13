import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/img_logo_frame.png" alt="FinEase Logo" className="h-[42px] w-[42px]" />
          <img src="/images/img_name.svg" alt="FinEase" className="h-6 ml-2" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/finease-payment-app-homepage" className="text-secondary font-medium text-base">
            Features
          </Link>
          <Link to="/finease-payment-app-homepage" className="text-secondary font-medium text-base">
            Pricing
          </Link>
          <Link to="/finease-payment-app-homepage" className="text-secondary font-medium text-base">
            About
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/finease-payment-app-homepage" className="text-primary font-semibold text-[17px]">
            Log in
          </Link>
          <Button variant="primary" size="md">
            Get started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white p-4 rounded-lg shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/finease-payment-app-homepage" className="text-secondary font-medium text-base">
              Features
            </Link>
            <Link to="/finease-payment-app-homepage" className="text-secondary font-medium text-base">
              Pricing
            </Link>
            <Link to="/finease-payment-app-homepage" className="text-secondary font-medium text-base">
              About
            </Link>
            <Link to="/finease-payment-app-homepage" className="text-primary font-semibold text-[17px]">
              Log in
            </Link>
            <Button variant="primary" size="md" fullWidth>
              Get started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;