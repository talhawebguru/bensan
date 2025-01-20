import React from 'react'
import * as motion from "framer-motion/client"

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
        Cookie Policy
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
          This Cookie Policy explains how Safecare industry ("Company," "we," "us," and "our") uses cookies and similar technologies to recognize you when you visit our website at https://bensano.com ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>

        <p className="mb-6">
          In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mt-12 mb-6">What are cookies?</h2>
          <p className="mb-6">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p className="mb-6">
            Cookies set by the website owner (in this case, Safecare industry) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mt-12 mb-6">Why do we use cookies?</h2>
          <p className="mb-6">
            We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mt-12 mb-6">How can I control cookies?</h2>
          <p className="mb-6">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
          </p>
          <p className="mb-6">
            The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mt-12 mb-6">How can I control cookies on my browser?</h2>
          <p className="mb-6">
            As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information. The following is information about how to manage cookies on the most popular browsers:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Chrome</li>
            <li>Internet Explorer</li>
            <li>Firefox</li>
            <li>Safari</li>
            <li>Edge</li>
            <li>Opera</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 p-6 rounded-lg my-8"
        >
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4">If you have any questions about our use of cookies or other technologies, please email us at:</p>
          <p className="text-blue-600">info@bensano.com</p>
          <p className="mt-4">Or contact us at:</p>
          <address className="mt-2 not-italic">
            Safecare industry<br />
            Safecare Medical Industries KHI-8-18<br />
            Abu Dhabi, United Arab Emirates<br />
            Phone: +97125067333
          </address>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}

export default page