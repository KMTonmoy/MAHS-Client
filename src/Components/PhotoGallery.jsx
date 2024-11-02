import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch("/photo.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const openModal = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeModal = () => {
    setSelectedPhotoIndex(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 6, 6));
  };

  const handleNext = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-6">Photo Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.slice(0, visibleCount).map((photo, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal(index)}
            />
            <h3 className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white text-center py-2 bg-opacity-75">
              {photo.title}
            </h3>
          </div>
        ))}
      </div>

      {photos.length > 6 && (
        <div className="text-center mt-4">
          {visibleCount < photos.length ? (
            <button
              onClick={handleShowMore}
              className="bg-[#1d52e4] text-white px-4 py-2 rounded hover:bg-[#103088] transition"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="bg-[#1d52e4] text-white px-4 py-2 rounded hover:bg-[#103088] transition"
            >
              Show Less
            </button>
          )}
        </div>
      )}

      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative h-[80%] w-[90%] md:w-[80%]">
              <motion.img
                key={selectedPhotoIndex}
                src={photos[selectedPhotoIndex].url}
                alt={photos[selectedPhotoIndex].title}
                className="w-full h-full rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-3xl bg-transparent border-none cursor-pointer"
              >
                &times;
              </button>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-xl bg-black rounded-full p-2 hover:bg-gray-800 transition"
              >
                &#10094;
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-xl bg-black rounded-full p-2 hover:bg-gray-800 transition"
              >
                &#10095;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;
