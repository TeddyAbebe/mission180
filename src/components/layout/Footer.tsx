// src/components/layout/Footer.tsx
import React from "react";
import Button from "../Button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-rose-500">CharityOrg</h3>
          <p className="text-gray-600 mt-2">
            Together, we can change the world.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-rose-500">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/about" className="text-gray-600 hover:text-rose-500">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="text-gray-600 hover:text-rose-500">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-rose-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-rose-500">Stay Updated</h3>
          <p className="text-gray-600 mt-2">Subscribe to our newsletter.</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none"
            />
            <Button className="rounded-l-none">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-600">
        &copy; 2025 CharityOrg. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
