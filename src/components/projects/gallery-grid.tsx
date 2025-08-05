"use client";

import { Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
}

interface GalleryGridProps {
  galleryItems: GalleryItem[];
}

export default function GalleryGrid({ galleryItems }: GalleryGridProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    setCurrentIndex(galleryItems.findIndex((i) => i.id === item.id));
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + galleryItems.length) % galleryItems.length
        : (currentIndex + 1) % galleryItems.length;

    setCurrentIndex(newIndex);
    setSelectedItem(galleryItems[newIndex]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-64 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer"
            onClick={() => openLightbox(item)}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-stone-800/80 via-transparent to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm opacity-90 mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      {/* Modal lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 "
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-screen bg-white rounded-lg overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200">
                <h3 className="text-xl font-semibold text-foreground">
                  {selectedItem.title}
                </h3>
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  onClick={() => setSelectedItem(null)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X size={20} />
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="w-full">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-sage-100 text-stone-700 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedItem.year}
                    </span>
                  </div>
                  <p className="text-stone-700 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>
              </div>
              {/* Navigation */}
              {/* TODO: ** Fix nav bg colors to make it more visible */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute rounded-full left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={() => navigateLightbox("prev")}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute rounded-full right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={() => navigateLightbox("next")}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
