"use client";

import ContactForm from "@/components/contact/contact-form";
import { motion } from "motion/react";

export default function ContactPage() {
  return (
    <main className="pt-16 min-h-screen bg-gradient-to-br from-cream-50 to-sage-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl lg:text-5xl font-light text-stone-800 mb-4">
              Contact Me
            </h1>
            <p className="text-stone-600 text-lg max-w-3xl mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti, maxime.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
