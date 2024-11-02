import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xnnqpgly", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Show success alert
      Swal.fire({
        title: "Success!",
        text: "Thank you for your message! We will get back to you soon.",
        icon: "success",
        confirmButtonText: "OK",
      });
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    } else {
      setFormError(
        "There was a problem submitting your form. Please try again."
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Mirkamary Adarsha High School
        </h2>
        <p className="text-gray-700 mb-2">Mirkamary-Ishwardi,</p>
        <p className="text-gray-700 mb-2">Post Code: 6620</p>
        <h3 className="text-xl font-semibold mb-4">Contact Numbers:</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>01309125513</li>
          <li>01714503412</li>
          <li>01709844486</li>
        </ul>
        <h3 className="text-xl font-semibold mb-4">Email:</h3>
        <p className="text-gray-700">125513hs@gmail.com</p>
      </div>

      {/* Support Form with Image */}
      <div className="flex flex-col-reverse md:flex-row   p-6">
        <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
          <h2 className="text-2xl font-semibold mb-4">Support Form</h2>
          {formError && <p className="text-red-500 mb-4">{formError}</p>}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 shadow-lg p-4 rounded-md"
            style={{ height: "400px", width: "100%", maxWidth: "500px" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 border rounded-md"
            />
            <button
              type="submit"
              className="bg-[#32cd32] text-white px-4 py-2 rounded-md hover:bg-[#28a745] transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src="https://eticks.io/assets/images/gif/contact-us-main.gif" // Replace with your image URL
            alt="Contact Us"
            className="rounded-lg shadow-lg" // Apply shadow to the image
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
