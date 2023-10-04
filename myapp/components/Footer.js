'use client'
import React from 'react';
import { FaYoutube, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/4 p-4">
            <h2 className="text-md font-semibold mb-4">Company Name</h2>
            <p className="text-sm">1234 Main Street</p>
            <p className="text-sm">City, Country</p>
            <p className="text-sm">Email: info@example.com</p>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <h2 className="text-md font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li classNam="mb-1"><a href="#">Home</a></li>
              <li className="mb-1"><a href="#">About Us</a></li>
              <li className="mb-1"><a href="#">Products</a></li>
              <li className="mb-1 font-light"><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <h2 className="text-md font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-1 text-md">
              <a href="#" className="text-primary hover:text-gray-200">
                <FaYoutube />
              </a>
              <a href="#" className="text-primary hover:text-gray-200">
                <FaInstagram />
              </a>
              <a href="#" className="text-primary hover:text-gray-200">
                <FaTiktok />
              </a>
              <a href="#" className="text-primary hover:text-gray-200">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-4">
            <h2 className="text-md font-semibold mb-4">Newsletter</h2>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates.</p>
            <div className="flex items-center border border-white py-2">
              <input type="email" className="w-full py-2 px-3 bg-transparent text-white focus:outline-none" placeholder="Your Email Address" />
              <button className="bg-primary hover:bg-gray-800 text-white py-2 px-3 mr-1  hover:bg-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
