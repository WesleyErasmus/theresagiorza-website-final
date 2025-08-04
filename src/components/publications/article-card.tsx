"use client";

import { motion } from "motion/react";
import { ExternalLink, FileText, Book, Users, Calendar } from "lucide-react";

export interface Publication {
  id: number;
  title: string;
  type: "Article" | "Book" | "Chapter";
  year: number;
  authors: string[];
  journal?: string;
  book?: string;
  publisher?: string;
  abstract: string;
  isFullText: boolean;
}

interface ArticleCardProps {
  publication: Publication;
}

export default function ArticleCard({ publication }: ArticleCardProps) {
  const getTypeIcon = () => {
    switch (publication.type) {
      case "Article":
        return FileText;
      case "Book":
        return Book;
      case "Chapter":
        return FileText;
      default:
        return FileText;
    }
  };

  const getTypeColor = () => {
    switch (publication.type) {
      case "Article":
        return "bg-sage-100 text-sage-700 border-sage-200";
      case "Book":
        return "bg-cream-100 text-cream-700 border-cream-200";
      case "Chapter":
        return "bg-earth-100 text-earth-700 border-earth-200";
      default:
        return "bg-stone-100 text-stone-700 border-stone-200";
    }
  };

  const TypeIcon = getTypeIcon();

  return (
    <motion.div
      // whileHover={{ y: -2 }}
      className="group bg-white p-6 hover:shadow-lg transition-all duration-300 border border-sage-200"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-shrink-0">
          <div
            className={`inline-flex items-center space-x-2 px-3 py-2 rounded-xl border ${getTypeColor()}`}
          >
            <TypeIcon className="w-4 h-4" />
            <span className="text-xs font-medium">{publication.type}</span>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          {/* TODO: ** Add Link here */}
          <h3 className="text-lg font-semibold text-stone-800 leading-tight group-hover:text-blue-700 group-hover:underline transition-colors  cursor-pointer">
            {publication.title}
          </h3>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 " strokeWidth={1.5} />
              {/* TODO: ** insert month here too */}
              <span>{publication.year}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" strokeWidth={1.5} />
              <span>
                {publication.authors.length} author
                {publication.authors.length > 1 ? "s" : ""}
              </span>
            </div>
            {publication.isFullText && (
              <span className="px-2 py-1 bg-cream-100 text-cream-700 rounded-full text-xs font-medium">
                Full-text available
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {publication.authors.map((author, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm ${
                  author === "Theresa Giorza"
                    ? "bg-sage-100 text-sage-700 font-medium"
                    : "bg-stone-100 text-stone-600"
                }`}
              >
                {author}
              </span>
            ))}
          </div>

          {/* {(publication.journal ||
            publication.book ||
            publication.publisher) && (
            <p className="text-stone-600 italic">
              {publication.journal && `Published in ${publication.journal}`}
              {publication.book && `Chapter in "${publication.book}"`}
              {publication.publisher && ` • ${publication.publisher}`}
            </p>
          )} */}

          <p className="text-stone-700">~ {publication.abstract}</p>
        </div>

        <div className="flex-shrink-0 flex lg:flex-col gap-2">
          {/* TODO: ** Add Link here */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-sage-100 text-sage-700 group-hover:text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm font-medium">View</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
