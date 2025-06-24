import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-2">A+ Marketing</h2>
          <p className="text-gray-400 text-sm">
            Your trusted real estate partner in Jinnah Garden and surrounding areas. We sell plots, deliver value, and build trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link title='Home' to="/" className="hover:text-red-400">Home</Link></li>
            <li><Link title='Properties' to="/properties" className="hover:text-red-400">Properties</Link></li>
            <li><Link title='About' to="/about" className="hover:text-red-400">About</Link></li>
            <li><Link title='Contact' to="/contact" className="hover:text-red-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-red-400" /> +92 335 5500590</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-red-400" /> aqibkhan3578@gmail.com</li>
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="text-red-400 mt-1" /> Main Commercial Area, Jinnah Garden, Islamabad</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl text-gray-300">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            {/* Add more icons if needed */}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} A+ Marketing. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
