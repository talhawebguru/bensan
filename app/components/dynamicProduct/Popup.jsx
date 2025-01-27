"use client";
import React, { useState } from "react";
import { inquirySendEmail } from "@/app/services/api";

const Popup = ({ isOpen, onClose, productName }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    address: "",
    phone: "",
    quantity: "",
    message: "",
    productName: productName,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await inquirySendEmail(formData);
      setSubmitStatus({
        type: "success",
        message: "Thank you for your enquiry! We'll get back to you soon.",
      });
      setTimeout(() => {
        onClose();
        setFormData({
          name: "",
          company: "",
          email: "",
          address: "",
          phone: "",
          quantity: "",
          message: "",
          productName: "",
        });
        setSubmitStatus(null);
      }, 4000);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or contact support.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg xl:w-[1000px] lg:w-[850px] w-[90%] max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-medium font-primary text-black leading-9">
              <span className="text-[#12121280]">Send Enquiry for</span>{" "}
              {productName}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          {submitStatus && (
            <div
              className={`mb-4 p-4 rounded-md ${
                submitStatus.type === "success"
                  ? "bg-[#f0fdf4] text-[#15803d] font-primary font-semibold border border-[#bbf7d0]"
                  : "bg-[#fef2f2] text-red-color border border-red-color"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form className="flex flex-wrap gap-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4 w-full md:w-[48%]">
              <label className="block text-[#12121280] text-sm font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-[#dee2e6] p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            {/* Company Field */}
            <div className="mb-4 w-full md:w-[48%]">
              <label className="block text-[#12121280] text-sm font-medium mb-2">
                Company / Organisation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="border border-[#dee2e6] p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter company name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4 w-full md:w-[48%]">
              <label className="block text-[#12121280] text-sm font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-[#dee2e6] p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>

            {/* Address Field */}
            <div className="mb-4 w-full md:w-[48%]">
              <label className="block text-[#12121280] text-sm font-medium mb-2">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="border border-[#dee2e6] p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your complete address"
              />
            </div>

            {/* Phone Field */}
            <div className="mb-4 w-full md:w-[48%]">
              <label className="block text-[#12121280] text-sm font-medium mb-2">
                Phone Number <span className="text-red-color">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border outline-none border-[#dee2e6] p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter phone number"
              />
            </div>

            {/* Quantity Field */}
            <div className="mb-4 w-full md:w-[48%]">
              <label className="block text-[#12121280] text-sm font-medium mb-2">
                Quantity Required <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                min="1"
                className="border border-[#dee2e6] p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter quantity needed"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6 w-full">
              <label className="block text-[#12121280] text-sm font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-[#dee2e6] p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                rows={5}
                placeholder="Enter your message or specific requirements"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-secondary-primary text-white px-6 py-3 rounded-md font-primary text-base hover:bg-secondary-primary/90 transition-colors duration-300 w-full md:w-auto disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Enquiry"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Popup;
