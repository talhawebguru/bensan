"use client";

import { useState } from "react";

const PostComment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <div className="bg-[#EAE9E8] p-10 rounded-lg shadow-md mx-auto mt-10">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <input
              type="text"
              name="name"
              placeholder="NAME*"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A8366F]"
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL*"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#A8366F]"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded h-32 md:h-64 resize-none focus:outline-none focus:ring-2 focus:ring-[#A8366F]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#A8366F] text-white font-semibold py-3 rounded hover:bg- transition"
          >
            POST COMMENT
          </button>
        </form>
      </div>
    </>
  );
};

export default PostComment;
