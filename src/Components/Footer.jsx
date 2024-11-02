import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* School Info */}
        <div>
          <h2 className="text-xl font-semibold">
            MIRKAMARY ADARSHA HIGH SCHOOL
          </h2>
          <p className="mt-2 text-sm">MIRKAMARY-ISHWARDI, POST CODE-6620</p>
          <p className="text-sm">
            Phone: 01309125513, 01714503412, 01709844486
          </p>
          <p className="text-sm">Email: 125513hs@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="text-sm">
            {["Home", "History", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-[#ff4b4b] transition duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Developed By */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Developed By</h2>
          <p className="text-sm">
            Turjo Khondokar, a student of Mirkamary Adarsha High School.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#ffffff66] mt-8 pt-4 text-center text-sm">
        <p>
          &copy; 2015-{new Date().getFullYear()}, All Rights Reserved, MIRKAMARY
          ADARSHA HIGH SCHOOL
        </p>
      </div>
    </footer>
  );
};

export default Footer;
