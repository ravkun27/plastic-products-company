"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const featuredProducts = [
  {
    name: "High-Performance Sheets",
    image:
      "https://images.unsplash.com/photo-1611488006001-eb993d4d2ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Durable and versatile plastic sheets for various applications",
  },
  {
    name: "Precision Molded Parts",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Custom-designed plastic components for specific industry needs",
  },
  {
    name: "Advanced Polymer Tubing",
    image:
      "https://www.shutterstock.com/shutterstock/photos/557459698/display_1500/stock-photo-bopp-films-manufacturing-557459698.jpg",
    description:
      "High-quality plastic tubing for diverse industrial applications",
  },
];

export default function FeaturedProducts() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section ref={ref} id="products" className="section-padding bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-primary hover:underline"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
