"use client";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing React icons

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([
    {
      url: "https://www.shutterstock.com/image-vector/school-building-front-view-entrance-260nw-2494026401.jpg",
      heading: "Welcome to Our School",
      description:
        "Dedicated to nurturing students with knowledge and integrity for a brighter future.",
    },
    {
      url: "https://img.freepik.com/premium-vector/curriculum-learning-education-student-academic-study-new-knowledge-scholarship_1092808-31229.jpg?semt=ais_hybrid",
      heading: "A Place of Learning and Growth",
      description:
        "Building the future leaders through quality education and values.",
    },
    {
      url: "https://cdn.pixabay.com/photo/2023/10/12/05/46/ai-generated-8309926_640.jpg",
      heading: "Join Us in Our Journey",
      description:
        "Empowering students to achieve their dreams and make a difference.",
    },
  ]);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="relative ">
      <Toaster />
      <div>
        <div
          className="h-[600px] lg:h-[600px] bg-cover bg-center transition-all duration-700 ease-in-out object-cover bg-clip-content rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url(${images[currentImageIndex]?.url})`,
          }}
        ></div>

        <div className="h-[600px] absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
          <div className="container mx-auto grid lg:grid-cols-1 items-center px-5 lg:px-10 text-white text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              {images[currentImageIndex]?.heading}
            </h1>
            <p className="mb-6 text-sm lg:text-base max-w-2xl mx-auto">
              {images[currentImageIndex]?.description}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute  bottom-14 right-5 flex space-x-2">
          <button
            onClick={handlePrevious}
            className="bg-transparent text-white border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition flex items-center"
          >
            <FaChevronLeft className="mr-2" /> {/* Previous icon */}
          </button>
          <button
            onClick={handleNext}
            className="bg-transparent text-white border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition flex items-center"
          >
            <FaChevronRight className="ml-2" /> {/* Next icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
