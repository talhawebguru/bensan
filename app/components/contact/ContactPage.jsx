"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMailSharp } from "react-icons/io5";
import SocialMedia from "@/app/components/common/SocialMedia";
import ContactInfo from "@/app/components/common/ContactInfo";
import { sendEmail } from "@/app/services/api";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setSubmitStatus(null);

    try {
      const response = await sendEmail(formData);
      if (response.success) {
        setStatus("Thank you for Contacting Us! We'll get back to you soon.");
        setSubmitStatus({
          type: "success",
          message: "Thank you for Contacting Us! We'll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
      } else {
        setStatus('Failed to send email. Please try again.');
        setSubmitStatus({
          type: "error",
          message: "Failed to send email. Please try again.",
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send email. Please try again.');
      setSubmitStatus({
        type: "error",
        message: "Failed to send email. Please try again.",
      });
    }
  };

  return (
    <>
      <div className="relative overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pt-24 py-80 bg-secondary-secondary"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center text-light-black text-4xl font-semibold font-primary capitalize"
          >
            Get In Touch With Us
          </motion.h1>
        </motion.div>
        <div className="xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white relative -top-52 grid grid-cols-12 rounded-xl shadow xl:p-16 lg:p-10 p-5"
          >
            <div className="lg:col-span-3 col-span-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="relative bg-contact-card rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-secondary-primary bg-opacity-50"></div>
                <div className="relative p-8 py-11">
                  <h3 className="text-white text-lg font-semibold font-primary capitalize">
                    Contact Information
                  </h3>
                  <p className="text-white text-sm font-normal font-primary">
                    Your questions and feedback are important to us.
                  </p>
                  <div className="flex flex-col gap-[24px] mt-9 ">
                    <ContactInfo
                      icon={<FaLocationDot />}
                      info="Safecare Medical Industries KHIA-8-18 Abu Dhabi UAE"
                      className={"text-white"}
                    />
                    <ContactInfo
                      icon={<IoCall />}
                      info="+97125067333 "
                      className={"text-white"}
                    />
                    <ContactInfo
                      icon={<IoMailSharp />}
                      info="info@bensano.com"
                      className={"text-white"}
                    />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-8"
              >
                <h3 className="text-light-black text-lg font-semibold font-primary capitalize">
                  Follow us on social media
                </h3>
                <div className="flex gap-4 mt-4">
                  <SocialMedia icon={<AiFillInstagram size={24} />} />
                  <SocialMedia icon={<IoLogoFacebook size={24} />} />
                  <SocialMedia icon={<FaTwitter size={24} />} />
                  <SocialMedia icon={<FaLinkedin size={24} />} />
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="lg:col-span-9 col-span-12 xl:ml-20"
            >
            <div>
            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-center text-[#222823] text-2xl font-semibold font-primary capitalize"
              >
                Send us your query anytime!
              </motion.h2>
              {submitStatus && (
                <div
                  className={`mb-4 p-4 rounded-md text-center xl:mx-20 lg:mx-10 sm:mx-5 mt-4 ${
                    submitStatus.type === "success"
                      ? "bg-[#f0fdf4] text-[#15803d] font-primary font-semibold border border-[#bbf7d0]"
                      : "bg-[#fef2f2] text-red-color border border-red-color"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </div>
             
              <motion.form
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 xl:px-20 lg:px-10 sm:px-5 gap-6 mt-10"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-[54px] p-4 rounded-xl border border-[#dee2e6] justify-start items-center gap-2.5 inline-flex outline-none text-[#6c757d] text-base font-normal font-primary capitalize"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[54px] p-4 rounded-xl border border-[#dee2e6] justify-start items-center gap-2.5 inline-flex outline-none text-[#6c757d] text-base font-normal font-primary capitalize"
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-[54px] p-4 rounded-xl border border-[#dee2e6] justify-start items-center gap-2.5 inline-flex outline-none text-[#6c757d] text-base font-normal font-primary capitalize"
                  placeholder="Phone no."
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full h-[54px] p-4 rounded-xl border border-[#dee2e6] justify-start items-center gap-2.5 inline-flex outline-none text-[#6c757d] text-base font-normal font-primary capitalize"
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  cols="30"
                  rows="4"
                  className="w-full sm:col-span-2  p-4 rounded-xl border border-[#dee2e6] justify-start items-center gap-2.5 inline-flex outline-none text-[#6c757d] text-base font-normal font-primary capitalize"
                  placeholder="Message"
                  required
                ></textarea>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[184px] sm:col-span-2 h-12 px-4 py-2.5 bg-[#a8366f] rounded-xl justify-center items-center gap-3 inline-flex cursor-pointer"
                >
                  <div className="text-white text-lg font-semibold font-primary capitalize">
                    Submit
                  </div>
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;