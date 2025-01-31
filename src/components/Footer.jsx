import React from "react";
import { FaGithubSquare, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 px-4">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        
        {/* Branding and Social Icons */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">M.Junior</h3>
          <div className="flex justify-center md:justify-start gap-4 text-3xl">
            <a
              href="https://github.com/sm-junior0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaGithubSquare />
            </a>
            <a
              href="https://www.instagram.com/sm_juni01/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="space-y-2">
          <h4 className="text-lg font-medium">Contact Me</h4>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope className="text-xl" />
            <a
              href="mailto:juniormanene@gmail.com"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              juniormanene@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <FaPhone className="text-xl" />
            <a
              href="tel:+250795555477"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              +250795555477
            </a>
          </div>
        </div>
      </div>

      {/* Footer Note with Underline */}
      <div className="mt-8 border-t border-gray-400 pt-4 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>@ 2025 Manene Junior. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
