import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <img
        src="https://webcoder.co.in/wp-content/uploads/2021/04/website.gif" // Replace with your image URL
        alt="Under Development"
        className="mb-4 rounded-lg shadow-md"
      />
      <h1 className="text-3xl font-bold mb-2">Page Under Development</h1>
      <p className="text-lg text-gray-600">
        We are working hard to get this page ready. Please check back later!
      </p>
    </div>
  );
};

export default Error;
