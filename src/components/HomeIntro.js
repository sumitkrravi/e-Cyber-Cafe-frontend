import React from "react";
import { motion } from "framer-motion";

export default function HomeIntro() {
  return (
    <section className="bg-[#f5f7fa] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md text-center font-bold text-gray-900 leading-tight mb-6">
            Simplify Your <br />
            <h2 className="text-blue-600">Digital Services</h2>
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl">
            A single platform for all your document needs — from PAN cards to digital service applications.
            Verified. Secure. 100% Online.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button className="btn btn-outline-primary me-2">
              Get Started →
            </button>
            <button className="btn btn-outline me-2">
              Learn More
            </button>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-8 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-lg">🛡</span>
              Secure & Verified
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500 text-lg">🌐</span>
              100% Online Process
            </div>
          </div>
        </motion.div>

        {/* Right Icons Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >            
        </motion.div>
      </div>
    </section>
  );
}
