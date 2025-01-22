"use client";
import React, { useState } from "react";

const Popup = ({ isOpen, onClose, productName }) => {
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

          <form className="flex flex-wrap gap-6">
            {/* Name Field */}
            <div className="mb-4 w-full md:w-[48%]">
              <label className="block text-[#12121280] text-sm font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
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
                required
                className="border border-[#dee2e6] p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                rows={5}
                placeholder="Enter your message or specific requirements"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-secondary-primary text-white px-6 py-3 rounded-md font-primary text-base hover:bg-secondary-primary/90 transition-colors duration-300 w-full md:w-auto"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Popup;
