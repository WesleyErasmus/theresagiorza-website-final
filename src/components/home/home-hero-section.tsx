"use client";

import { motion } from "motion/react";

export default function HomeHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-cream-50 to-stone-50">
        <div className="absolute inset-0 overflow-hidden">
          {/* Gray bg shapes */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 1000"
          >
            <motion.path
              d="M200,300 Q400,200 600,300 T1000,300 L1000,1000 L0,1000 Z"
              fill="url(#gradient1)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.1 }}
              transition={{ duration: 3, delay: 1 }}
            />
            <motion.path
              d="M0,600 Q300,500 500,600 T900,600 L900,1000 L0,1000 Z"
              fill="url(#gradient2)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.08 }}
              transition={{ duration: 3, delay: 1.5 }}
            />
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="var(--sage-300)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <linearGradient
                id="gradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="var(--cream-300)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-4-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-stone-800 mb-6 leading-tight"
        >
          Dr. Theresa Giorza
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-xl md:text-2xl text-stone-600 font-light">
            Doctor of Philosophy in Education
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent max-w-md mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-stone-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Exploring posthumanist pedagogies and transformative learning
            practices in early childhood education
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
