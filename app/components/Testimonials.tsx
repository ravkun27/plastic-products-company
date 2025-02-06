"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

const testimonials = [
  {
    name: "John Doe",
    company: "Acme Industries",
    quote:
      "PlastiCorp has consistently delivered high-quality plastic components that have significantly improved our manufacturing process.",
  },
  {
    name: "Jane Smith",
    company: "MediTech Solutions",
    quote:
      "The biocompatible materials provided by PlastiCorp have been crucial in developing our latest medical devices.",
  },
  {
    name: "Mike Johnson",
    company: "EcoBuilders",
    quote:
      "PlastiCorp's sustainable plastic solutions have helped us create more environmentally friendly construction materials.",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isVisible = useIntersectionObserver(ref)

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.company}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

