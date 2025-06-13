import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Social Links */}
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <img src="/images/img_logo_frame.png" alt="FinEase Logo" className="h-[42px] w-[42px]" />
              <img src="/images/img_name.svg" alt="FinEase" className="h-6 ml-2" />
            </div>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h3 className="text-[17px] font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#f6f6f6] text-[15px]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#f6f6f6] text-[15px]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#f6f6f6] text-[15px]">
                  Legal agreements
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#f6f6f6] text-[15px]">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-[17px] font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#f6f6f6] text-[15px]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#f6f6f6] text-[15px]">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#f6f6f6] text-[15px]">
                  Plans
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#f6f6f6] text-[15px]">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-1">
            <h3 className="text-[17px] font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#f6f6f6] text-[15px]">
                  Essentials
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#f6f6f6] text-[15px]">
                  Saving accounts
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#f6f6f6] text-[15px]">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[#f6f6f6] text-[15px]">
                  Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1 lg:col-span-4">
            <h3 className="text-[17px] font-semibold mb-4">Contact Information</h3>
            <p className="text-[15px] mb-2">
              Email: <a href="mailto:support@finease.com" className="underline">support@finease.com</a>
            </p>
            <p className="text-[15px]">Phone: +123-456-7890</p>
          </div>
        </div>

        {/* Copyright and Social Icons */}
        <div className="mt-16 pt-8 border-t border-[#e7ebeb] flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-[15px] text-[#f6f6f6]">© 2024 FinEase. All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white w-8 h-8 flex items-center justify-center rounded">
              <img src="/images/img_vector_gray_900.png" alt="Facebook" className="w-3" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/img_vector_white_a700_32x32.svg" alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/img_vector_32x32.svg" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/img_x.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;