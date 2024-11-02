import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 relative">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Our School
      </motion.h1>

      {/* Glowing Stars Animation */}
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <motion.div
          className="w-32 h-32 rounded-full bg-[#FFD700] opacity-50 animate-pulse"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-20 h-20 rounded-full bg-[#FFD700] opacity-50 animate-pulse"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="flex mb-6 relative z-10">
        {/* Right Side - Text Content */}
        <div className="w-full pl-8">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to provide a safe and nurturing environment that
              fosters academic excellence and personal growth. We aim to inspire
              students to become lifelong learners and responsible citizens.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">History</h2>
            <p className="text-gray-700">
              Founded in 1970, our school has a rich history of educational
              excellence. Over the years, we have evolved and expanded our
              programs to meet the needs of our diverse student body.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Respect: We respect ourselves, others, and our environment.
              </li>
              <li>
                Integrity: We act with honesty and integrity in everything we
                do.
              </li>
              <li>Community: We foster a sense of community and belonging.</li>
              <li>
                Excellence: We strive for excellence in academics and personal
                development.
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Meet Our Staff</h2>
            <p className="text-gray-700">
              Our dedicated staff members are passionate about education and
              committed to our students' success. We work collaboratively to
              provide the best learning experience.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 relative z-10">
        <h2 className="text-2xl font-semibold mb-4">Join Us!</h2>
        <p className="text-gray-700 mb-4">
          If you're interested in learning more about our school or enrolling
          your child, please contact us.
        </p>
        <a
          href="/contact"
          className="bg-[#32cd32] text-white px-4 py-2 rounded-md hover:bg-[#28a745] transition duration-200"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
