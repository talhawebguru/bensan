import React from "react";
import * as motion from "framer-motion/client";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Privacy Policy
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm text-gray-600 mb-8 text-center"
      >
        Last updated January 20, 2025
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="prose prose-lg max-w-none"
      >
        <p className="mb-6">
          This privacy notice for Safecare industry ('Company', 'we', 'us', or
          'our'), describes how and why we might collect, store, use, and/or
          share ('process') your information when you use our services
          ('Services'), such as when you:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>
            Visit our website at https://bensano.com, or any website of ours
            that links to this privacy notice
          </li>
          <li>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </li>
        </ul>

        <p className="mb-6">
          Questions or concerns? Reading this privacy notice will help you
          understand your privacy rights and choices. If you do not agree with
          our policies and practices, please do not use our Services. If you
          still have any questions or concerns, please contact us at
          info@bensano.com.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">SUMMARY OF KEY POINTS</h2>

        <p className="mb-6">
          This summary provides key points from our privacy notice, but you can
          find out more details about any of these topics by clicking the link
          following each key point or by using our table of contents below to
          find the section you are looking for.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Quick Links:</h3>
          <ul className="space-y-2">
            <li>• What personal information do we process?</li>
            <li>• Do we process any sensitive personal information?</li>
            <li>• Do we receive any information from third parties?</li>
            <li>• How do we process your information?</li>
            <li>
              • In what situations and with which parties do we share personal
              information?
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">TABLE OF CONTENTS</h2>

        <ol className="list-decimal pl-6 space-y-2 mb-12">
          <li>WHAT INFORMATION DO WE COLLECT?</li>
          <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
          <li>
            WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
          </li>
          <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
          <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
          <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
          <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
          <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
          <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
          <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
          <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
          <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
          <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
        </ol>

        <h2 className="text-2xl font-bold mt-12 mb-6">
          1. WHAT INFORMATION DO WE COLLECT?
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mt-8 mb-4">
            Personal information you disclose to us
          </h3>
          <p className="mb-4">
            <strong>In Short:</strong> We collect personal information that you
            provide to us.
          </p>
          <p className="mb-4">
            We collect personal information that you voluntarily provide to us
            when you express an interest in obtaining information about us or
            our products and Services, when you participate in activities on the
            Services, or otherwise when you contact us.
          </p>
          <h4 className="text-lg font-medium mt-6 mb-3">
            Personal Information Provided by You
          </h4>
          <p className="mb-4">
            The personal information that we collect depends on the context of
            your interactions with us and the Services, the choices you make,
            and the products and features you use. The personal information we
            collect may include the following:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Names</li>
            <li>Phone numbers</li>
            <li>Email addresses</li>
            <li>Mailing addresses</li>
          </ul>
          <p className="mb-4">
            <strong>Sensitive Information:</strong> We do not process sensitive
            information.
          </p>
          <p className="mb-4">
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mt-8 mb-4">
            Information automatically collected
          </h3>
          <p className="mb-4">
            <strong>In Short:</strong> Some information — such as your Internet
            Protocol (IP) address and/or browser and device characteristics — is
            collected automatically when you visit our Services.
          </p>
          <p className="mb-4">
            We automatically collect certain information when you visit, use, or
            navigate the Services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location,
            information about how and when you use our Services, and other
            technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our
            internal analytics and reporting purposes.
          </p>
          <p className="mb-4">
            Like many businesses, we also collect information through cookies
            and similar technologies.
          </p>
          <h4 className="text-lg font-medium mt-6 mb-3">
            The information we collect includes:
          </h4>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Device Data:</strong> We collect device data such as
              information about your computer, phone, tablet, or other device
              you use to access the Services. Depending on the device used, this
              device data may include information such as your IP address (or
              proxy server), device and application identification numbers,
              location, browser type, hardware model, Internet service provider
              and/or mobile carrier, operating system, and system configuration
              information.
            </li>
            <li>
              <strong>Location Data:</strong> We collect location data such as
              information about your device's location, which can be either
              precise or imprecise. How much information we collect depends on
              the type and settings of the device you use to access the
              Services. For example, we may use GPS and other technologies to
              collect geolocation data that tells us your current location
              (based on your IP address). You can opt out of allowing us to
              collect this information either by refusing access to the
              information or by disabling your Location setting on your device.
              However, if you choose to opt out, you may not be able to use
              certain aspects of the Services.
            </li>
          </ul>
        </motion.div>
        <section id="how-we-process-information">
  <h2 className="text-2xl font-bold mt-12 mb-6">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
  <p><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
  
  <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
  <ul className="list-disc pl-6 mb-6 space-y-2 mt-5">
    <li><strong>To deliver and facilitate delivery of services to the user:</strong> We may process your information to provide you with the requested service.</li>
    <li><strong>To respond to user inquiries/offer support to users:</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
    <li><strong>To send administrative information to you:</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
    <li><strong>To fulfil and manage your orders:</strong> We may process your information to fulfil and manage your orders, payments, returns, and exchanges made through the Services.</li>
    <li><strong>To enable user-to-user communications:</strong> We may process your information if you choose to use any of our offerings that allow for communication with another user.</li>
    <li><strong>To request feedback:</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.</li>
    <li><strong>To send you marketing and promotional communications:</strong> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see 'WHAT ARE YOUR PRIVACY RIGHTS?' below).</li>
    <li><strong>To deliver targeted advertising to you:</strong> We may process your information to develop and display personalised content and advertising tailored to your interests, location, and more.</li>
    <li><strong>To protect our Services:</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</li>
    <li><strong>To identify usage trends:</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
    <li><strong>To determine the effectiveness of our marketing and promotional campaigns:</strong> We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.</li>
    <li><strong>To save or protect an individual's vital interest:</strong> We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.</li>
  </ul>
</section>
      </motion.div>
    </motion.div>
  );
};

export default page;
