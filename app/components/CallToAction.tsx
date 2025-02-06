"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section ref={ref} className="section-padding bg-primary text-black">
      <div className="container text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Ready to Transform Your Plastic Needs?
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Contact us today for innovative plastic solutions tailored to your
          industry.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button className="bg-blue-600 text-white hover:bg-blue-400">Get in Touch</Button>
        </motion.div>
      </div>
    </section>
  );
}
