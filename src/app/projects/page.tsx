"use client";

import GalleryGrid, { GalleryItem } from "@/components/projects/gallery-grid";
import { motion } from "motion/react";

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Chasing Paper",
    image: "/figures/chasing-paper.png",
    project: "Videography as Refrain",
    // description:
    //   "Young learners exploring mark-making and creative expression in preschool environments",
    year: 2019,
  },
  {
    id: 2,
    title: "Colonial Erasures",
    image: "/figures/Colonial-erasures.png",
    project:
      "Anti-Colonial Orientations to Place: Unsettling Encounters with South African Educational Landscapes",
    // description:
    //   "Students engaging with marine environments and molluscan wisdom at Cape Town coastline",
    year: 2020,
  },
  {
    id: 3,
    title: "Dancing with the Park",
    image: "/figures/Dancing-with-the-park-1.png",
    project: "Videography as Refrain",
    // description:
    //   "Visual representation of how materials and meanings co-emerge in educational spaces",
    year: 2019,
  },
  {
    id: 4,
    title: "Drawing a Girl",
    image: "/figures/Drawing-a-girl.png",
    project:
      "Draw yourself and write your name’: Material-discursive agency of names and drawings in early childhood",
    // description:
    //   "Documenting the transformation of learning spaces through children's agency",
    year: 2022,
  },
  {
    id: 5,
    title: "Duck Duck Goose Matters Less",
    image: "/figures/Duck-duck-goose-matters-less.png",
    project: "Videography as Refrain",
    // description:
    //   "Young learners exploring mark-making and creative expression in preschool environments",
    year: 2019,
  },
  {
    id: 6,
    title: "Handstand with Froggy Shadow",
    image: "/figures/Handstand-with-froggy-shadow.png",
    project: "Videography as Refrain",
    // description:
    //   "Students engaging with marine environments and molluscan wisdom at Cape Town coastline",
    year: 2019,
  },
  {
    id: 7,
    title: "Park Table Holding Hands",
    image: "/figures/Park-table-holding-hands.png",
    project: "Videography as Refrain",
    // description:
    //   "Visual representation of how materials and meanings co-emerge in educational spaces",
    year: 2019,
  },
  {
    id: 8,
    title: "Spring Clothes",
    image: "/figures/Spring-clothes.png",
    project:
      "Draw yourself and write your name’: Material-discursive agency of names and drawings in early childhood",
    // description:
    //   "Documenting the transformation of learning spaces through children's agency",
    year: 2022,
  },
  {
    id: 9,
    title: "Table as Writing Surface",
    image: "/figures/Table-as-writing-surface.png",
    project: "Videography as Refrain",
    // description:
    //   "Young learners exploring mark-making and creative expression in preschool environments",
    year: 2019,
  },
  {
    id: 10,
    title: "This is Thulani's Page",
    image: "/figures/This-is-Thulanis-page.png",
    project:
      "Draw yourself and write your name’: Material-discursive agency of names and drawings in early childhood",
    // description:
    //   "Students engaging with marine environments and molluscan wisdom at Cape Town coastline",
    year: 2022,
  },
  {
    id: 11,
    title: "Three Children Sort Through Their Peers Work",
    image:
      "/figures/Three-children-sort-through-a-pile-of-their-peers-work.png",
    project:
      "Draw yourself and write your name’: Material-discursive agency of names and drawings in early childhood",
    // description:
    //   "Visual representation of how materials and meanings co-emerge in educational spaces",
    year: 2022,
  },
  {
    id: 12,
    title: "Thulani Dips In and Out of the Sorting Game",
    image: "/figures/Thulani-dips-in-and-out-of-the-sorting-game.png",
    project:
      "Draw yourself and write your name’: Material-discursive agency of names and drawings in early childhood",
    // description:
    //   "Documenting the transformation of learning spaces through children's agency",
    year: 2022,
  },
  {
    id: 13,
    title: "Writing In the Sand",
    image: "/figures/Writing-in-the-sand.png",
    project: "Videography as Refrain",
    // description:
    //   "Documenting the transformation of learning spaces through children's agency",
    year: 2019,
  },
  {
    id: 14,
    title: "A Trace of Possibility",
    image: "/figures/A-trace-of-possibility.png",
    project:
      "Draw yourself and write your name’: Material-discursive agency of names and drawings in early childhood",
    // description:
    //   "Documenting the transformation of learning spaces through children's agency",
    year: 2022,
  },
  {
    id: 15,
    title: "Bottlebrush Mermaid",
    image: "/figures/Bottlebrush-mermaid.png",
    project:
      "Draw yourself and write your name’: Material-discursive agency of names and drawings in early childhood",
    // description:
    //   "Documenting the transformation of learning spaces through children's agency",
    year: 2022,
  },
  {
    id: 16,
    title: "Multiplicity and Difference",
    image: "/figures/Multiplicity-and-difference.png",
    project:
      "Draw yourself and write your name’: Material-discursive agency of names and drawings in early childhood",
    // description:
    //   "Documenting the transformation of learning spaces through children's agency",
    year: 2022,
  },
  {
    id: 17,
    title: "Trace and Presence",
    image: "/figures/Trace-and-presence.png",
    project:
      "Draw yourself and write your name’: Material-discursive agency of names and drawings in early childhood",
    // description:
    //   "Documenting the transformation of learning spaces through children's agency",
    year: 2022,
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
