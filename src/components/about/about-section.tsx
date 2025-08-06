"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section className="pt-16 min-h-screen bg-gradient-to-br from-sage-50 to-cream-50">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 xm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-sage-200 to-cream-200 rounded-xl blur-2xl opacity-30"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, 0],
                  }}
                  transition={{ duration: 6, repeat: 999999 }}
                />
                <div className="relative border border-stone-300 rounded-xl shadow-2xl">
                  <Image
                    src="/images/theresa-square.jpg"
                    alt="Dr. Theresa Giorza"
                    width={400}
                    height={500}
                    className="w-full max-h-[700px] object-cover h-auto rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="font-serif text-4xl lg:text-5xl font-light text-stone-800 mb-4">
                About Me
              </h1>

              <div className="prose prose-lg text-stone-800 space-y-4">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum dolorum est ipsum? Quod, maiores, a ipsam consectetur
                  esse totam atque, vitae distinctio cum minus dolor inventore
                  amet provident dolorum cupiditate.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                  fuga nisi ipsam tenetur provident harum, dolorum voluptates
                  esse voluptas incidunt quidem reprehenderit dolores iusto
                  corrupti blanditiis exercitationem eligendi at! Error
                  accusantium illum sed. Eaque alias error magnam sunt, quasi
                  consequatur.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio veniam ut natus enim voluptatum labore quos
                  cupiditate sint quas modi pariatur, aut recusandae porro
                  eligendi tenetur optio cum nostrum. Rem?
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
