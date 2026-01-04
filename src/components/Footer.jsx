import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white py-16">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold">ADWENS</h2>
          <p className="mt-4 text-gray-300 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold">Locate Us</h3>

          {/* Google Map Embed */}
          <div className="mt-4">
            <iframe
              className="w-full h-32 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!..."
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="mt-4 text-gray-300 space-y-1 text-sm">
            <p>123 Main Street, Bengaluru, India</p>
            <p>Phone: +91 98765 43210</p>
            <p>Email: info@adwens.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ADWENS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
