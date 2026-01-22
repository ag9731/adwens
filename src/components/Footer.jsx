import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white py-16">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold">
            ADWENS DIGITAL PRIVATE LIMITED,
          </h2>
          <p className="mt-4 text-gray-300 max-w-sm">
            We design thoughtful initiatives that empower people to think with
            clarity and purpose about their work, finances, personal growth, and
            life choices helping them make conscious decisions and act with
            intention in every step of their journey.
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
                Our Initiatives
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789012!2d77.6187!3d12.9354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159f1234567%3A0x123456789abcdef!2sADWENS%20DIGITAL%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1234567890123"
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="mt-4 text-gray-300 space-y-1 text-sm">
            <p>
              No. 52, SPD Plaza, Jyothi Nivas College Road, Koramangala,
              Bangalore South, Near Jyoti Nivas College, Bengaluru – 560034,
              Karnataka, India
            </p>
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
