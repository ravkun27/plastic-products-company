"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const industries = [
  {
    name: "Automotive",
    icon: "🚗",
    description:
      "Lightweight and durable plastic components for modern vehicles, enhancing fuel efficiency and performance.",
  },
  {
    name: "Medical",
    icon: "🏥",
    description:
      "High-quality, sterile, and biocompatible plastic materials for healthcare applications, ensuring patient safety and comfort.",
  },
  {
    name: "Construction",
    icon: "🏗️",
    description:
      "Robust and weather-resistant plastic materials for construction, offering durability and sustainability.",
  },
  {
    name: "Electronics",
    icon: "🖥️",
    description:
      "Precision-engineered plastic parts for electronic devices, ensuring reliability and innovation.",
  },
  {
    name: "Packaging",
    icon: "📦",
    description:
      "Eco-friendly and protective plastic packaging solutions, reducing environmental impact while maintaining product integrity.",
  },
  {
    name: "Aerospace",
    icon: "✈️",
    description:
      "Advanced plastic materials for aerospace applications, providing high performance and weight reduction.",
  },
];

export default function Industries() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section ref={ref} id="industries" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4 text-blue-500">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {industry.name}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
