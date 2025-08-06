"use client";

import { motion } from "motion/react";
import {
  ExternalLink,
  FileText,
  BookOpen,
  Users,
  Calendar,
  Book,
} from "lucide-react";
import { Button } from "../ui/button";

export interface Publication {
  id: number;
  title: string;
  type: "Research Article" | "Book" | "Book Chapter";
  date: string;
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
      case "Research Article":
        return FileText;
      case "Book":
        return Book;
      case "Book Chapter":
        return BookOpen;
      default:
        return FileText;
    }
  };

  const TypeIcon = getTypeIcon();

  // ***  SOLID BADGE ***
  // const getTypeColor = () => {
  //   switch (publication.type) {
  //     case "Research Article":
  //       return "bg-forest-green-400 text-white";
  //     case "Book":
  //       return "bg-amber-700 text-white";
  //     case "Book Chapter":
  //       return "bg-earth-500 text-white";
  //     default:
  //       return "bg-forest-green-400 text-white";
  //   }
  // };

  const getTypeColor = () => {
    switch (publication.type) {
      case "Research Article":
        return "bg-forest-green-100 text-forest-green-500";
      case "Book":
        return "bg-cream-300 text-cream-800";
      case "Book Chapter":
        return "bg-earth-200 text-earth-600";
      default:
        return "bg-forest-green-100 text-forest-green-500";
    }
  };

  return (
    //  {/* TODO: ** Add Link here around whole card */}
    <motion.div className="bg-white/75 p-6 hover:border-2 hover:border-forest-green-300 hover:bg-white border border-stone-300 rounded-md">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-shrink-0 items-center">
          <TypeIcon className="w-5 h-5 text-stone-600" strokeWidth={1.5} />
        </div>

        <div className="flex-1 space-y-3">
          <h3 className="font-medium text-stone-800 leading-tight transition-colors">
            {publication.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {/* <p className="text-sm font-medium">Authors:</p> */}
            {publication.authors.map((author, index) => {
              const isLast = index === publication.authors.length - 1;
              const isOnlyOne = publication.authors.length === 1;

              return (
                <span
                  key={index}
                  className={`text-sm ${
                    author === "Theresa Giorza"
                      ? "text-forest-green-500"
                      : "text-stone-700"
                  }`}
                >
                  {author}
                  {!isLast && !isOnlyOne && ","}
                </span>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground">
            <span
              // className={`px-3 py-1 ${getTypeColor()} rounded-full text-xs`}
              className={`px-3 py-1 ${getTypeColor()} rounded-full font-medium text-xs`}
            >
              {publication.type}
            </span>
            <div className="flex items-center space-x-2 text-stone-700">
              <Calendar
                className="w-4 h-4 text-forest-green-500"
                strokeWidth={2}
              />
              {/* TODO: ** insert month here too */}
              <span>{publication.date}</span>
            </div>
            <div className="flex items-center space-x-2 text-stone-700">
              <Users
                className="w-4 h-4 text-forest-green-500"
                strokeWidth={2}
              />
              <span>
                {publication.authors.length} author
                {publication.authors.length > 1 ? "s" : ""}
              </span>
            </div>
          </div>
          {/* <p className="text-stone-700">~ {publication.abstract}</p> */}
        </div>

        <div className="flex flex-shrink-0 lg:justify-center lg:flex-col gap-2">
          {/* TODO: ** Add Link here */}
          <Button
            size={"sm"}
            variant={"default"}
            className="bg-earth-500 w-[200] rounded-full text-white hover:bg-earth-400 hover:shadow-lg cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" strokeWidth={2} />
            <span className="text-sm">View {publication.type}</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
