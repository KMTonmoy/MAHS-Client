import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const BannerInfo = () => {
  const totalStudents = 500;
  const totalTeachers = 30;
  const totalSuccessStudents = 450;

  const cardData = [
    {
      title: "Total Students",
      count: totalStudents,
      icon: <FaUserGraduate className="text-6xl mb-2 text-blue-500" />,
    },
    {
      title: "Total Teachers",
      count: totalTeachers,
      icon: <FaChalkboardTeacher className="text-6xl mb-2 text-green-500" />,
    },
    {
      title: "Total Successful Students",
      count: totalSuccessStudents,
      icon: <FaTrophy className="text-6xl mb-2 text-yellow-500" />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="flex md:-mt-[100px] z-40 flex-col md:flex-row md:flex-wrap justify-center md:justify-around gap-5 md:p-4">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className="flex bg-white w-full sm:w-[300px] md:w-[400px] justify-evenly shadow-lg rounded-lg p-6 text-center items-center gap-5"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {card.icon}
          <div>
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="text-4xl font-bold">
              <CountUp end={card.count} duration={2.5} />
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BannerInfo;
