"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const materials = [
  {
    name: "Polyethylene (PE)",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2491491327/display_1500/stock-photo-produced-from-polymer-plastic-pellet-factory-petrochemical-process-for-producing-plastic-pellet-2491491327.jpg",
    description: "Versatile and durable, ideal for packaging and containers.",
  },
  {
    name: "Polypropylene (PP)",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2547525895/display_1500/stock-photo-master-batch-plastic-raw-material-plastic-polymer-2547525895.jpg",
    description: "High chemical resistance, used in automotive and textiles.",
  },
  {
    name: "Polyvinyl Chloride (PVC)",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2570686357/display_1500/stock-photo-pp-plastic-pellets-virgin-polypropylene-polymer-plastic-granules-poured-into-blue-background-for-2570686357.jpg",
    description: "Strong and lightweight, perfect for construction and piping.",
  },
  {
    name: "Acrylic (PMMA)",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2570686357/display_1500/stock-photo-pp-plastic-pellets-virgin-polypropylene-polymer-plastic-granules-poured-into-blue-background-for-2570686357.jpg",
    description:
      "Crystal-clear and weather-resistant, ideal for displays and signage.",
  },
  {
    name: "Polycarbonate (PC)",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2491491327/display_1500/stock-photo-produced-from-polymer-plastic-pellet-factory-petrochemical-process-for-producing-plastic-pellet-2491491327.jpg",
    description:
      "Impact-resistant and transparent, used in electronics and eyewear.",
  },
  {
    name: "Nylon (PA)",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2547525895/display_1500/stock-photo-master-batch-plastic-raw-material-plastic-polymer-2547525895.jpg",
    description:
      "High strength and wear resistance, used in automotive and industrial parts.",
  },
];

export default function Materials() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <section ref={ref} id="materials" className="section-padding bg-gray-100">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Advanced Material Solutions
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileTap={{ scale: 0.97 }}
            >
              <img
                src={material.image}
                alt={material.name}
                className="w-full h-64 object-cover brightness-90 group-hover:brightness-100 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{material.name}</h3>
                <p className="text-sm opacity-90">{material.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
