"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            PlastiCorp
          </Link>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("materials")}
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              Materials
            </button>
            <button
              onClick={() => scrollToSection("industries")}
              className="text-gray-800 hover:text-primary transition duration-300"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-[#0056b3] text-white font-semibold rounded-lg hover:bg-[#0056b3]/90 transition-colors"
            >
              Contact Us
            </button>
          </div>
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left text-gray-800 hover:text-primary py-2"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("materials")}
              className="block w-full text-left text-gray-800 hover:text-primary py-2"
            >
              Materials
            </button>
            <button
              onClick={() => scrollToSection("industries")}
              className="block w-full text-left text-gray-800 hover:text-primary py-2"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-gray-800 hover:text-primary py-2"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
