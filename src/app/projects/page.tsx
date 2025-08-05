"use client";

import GalleryGrid, { GalleryItem } from "@/components/projects/gallery-grid";
import { motion } from "motion/react";

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Children's Creative Expressions",
    image: "/images/gallery-1.jpg",
    description:
      "Young learners exploring mark-making and creative expression in preschool environments",
    year: 2021,
  },
  {
    id: 2,
    title: "Oceanic Learning Encounters",
    image: "/images/gallery-2.jpg",
    description:
      "Students engaging with marine environments and molluscan wisdom at Cape Town coastline",
    year: 2023,
  },
  {
    id: 3,
    title: "Material-Discursive Assemblages",
    image: "/images/gallery-3.jpg",
    description:
      "Visual representation of how materials and meanings co-emerge in educational spaces",
    year: 2022,
  },
  {
    id: 4,
    title: "Preschool Learning Environments",
    image: "/images/creative-collage.jpg",
    description:
      "Documenting the transformation of learning spaces through children's agency",
    year: 2020,
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-16 min-h-screen bg-gradient-to-br from-cream-50 to-earth-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl lg:text-5xl font-light text-stone-800 mb-4">
              Images & Project Gallery
            </h1>
            <p className="text-stone-600 text-lg max-w-3xl mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti, maxime.
            </p>
          </motion.div>
          <GalleryGrid galleryItems={galleryItems} />
        </div>
      </section>
    </main>
  );
}
