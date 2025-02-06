"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // Show popup after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log("Form submitted");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 md:p-8 rounded-lg max-w-lg w-full shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Stay Updated on Plastic Innovations
            </h2>
            <p className="mb-4 text-gray-600">
              Subscribe to our newsletter for the latest updates on eco-friendly
              plastic solutions and industry trends.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />
              <input
                type="text"
                placeholder="Company Name (Optional)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                required
              >
                <option value="">Interested In</option>
                <option value="packaging">Plastic Packaging Solutions</option>
                <option value="recycling">Recyclable Plastic Products</option>
                <option value="custom">Custom Plastic Manufacturing</option>
              </select>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
              >
                Subscribe Now
              </button>
            </form>
            <button
              onClick={() => setIsVisible(false)}
              className="mt-4 text-sm text-gray-600 hover:text-gray-800"
            >
              No, thanks
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
