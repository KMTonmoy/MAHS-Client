import React from "react";
import { motion } from "framer-motion";

const Bangladesh = () => {
  const bulletPoints = [
    "Established in 1970",
    "Offers a wide range of subjects",
    "Experienced and dedicated teachers",
    "Focus on student development",
    "Modern facilities and resources",
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-white shadow-lg rounded-lg">
      <motion.div
        className="md:w-1/2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <img
          src="https://mauv.edu.bd/core_media/themes/responsive_npf/img/sadhin2.jpeg"
          alt="Bangladesh School"
          className="w-full rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
        />
      </motion.div>
      <motion.div
        className="md:w-1/2 mt-5 md:mt-0 md:ml-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-4xl font-extrabold mb-6 text-blue-700 border-b-4 border-blue-300 pb-2">
          About Our School
        </h2>
        <ul className="list-disc list-inside space-y-4">
          {bulletPoints.map((point, index) => (
            <motion.li
              key={index}
              className="text-lg font-medium transition-transform duration-300 hover:scale-105 rounded-md p-3 bg-gray-50 shadow-sm"
              whileHover={{ scale: 1.05, backgroundColor: "#e6f7ff" }} // Hover effect
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Bangladesh;
