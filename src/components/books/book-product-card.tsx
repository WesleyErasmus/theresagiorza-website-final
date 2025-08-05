"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";

export interface Book {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  year: number;
  publisher: string;
  isbn: string;
  pages: number;
  coverImage: string;
  description: string;
  purchaseLink: string;
}

interface BookProductCardProps {
  book: Book;
}

export default function BookProductCard({ book }: BookProductCardProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleImageClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group w-full max-w-4xl mx-auto"
      >
        <div className="rounded-lg overflow-hidden p-4 md:p-6">
          <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <Image
                width={400}
                height={600}
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                className="w-40 h-60 sm:w-48 sm:h-72 md:w-66 md:h-94 object-cover rounded-md shadow-md group-hover:scale-102 transition-transform duration-300"
                onClick={() => handleImageClick(book)}
              />
            </div>

            <div className="flex-1 space-y-3 md:space-y-4">
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground leading-tight mb-2">
                  {book.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Author:{" "}
                  <span className="font-medium text-stone-600">
                    Dr. Theresa Giorza
                  </span>
                </p>
              </div>

              {/* ‼️ NOTE: KEEP THE COMMENTED OUT CODE BELOW - IT IS TEMPORARY TO DISPLAY PARAGRAPH BREAKS UNTIL BACKEND INTEGRATION 👇🏻 */}
              {/* <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {book.description}
              </p> */}
              {book.description.split("\n\n").map((para, index) => (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed text-sm md:text-base"
                >
                  {para}
                </p>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-sm md:text-base">
                <div className="space-y-1">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Publisher:
                    </span>{" "}
                    {book.publisher}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Pages:</span>{" "}
                    {book.pages}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">ISBN:</span>{" "}
                    {book.isbn}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Date Published:
                    </span>{" "}
                    {book.year}
                  </p>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full sm:w-fit bg-forest-green-500 text-white hover:bg-forest-green-400/90 shadow-elegant hover:shadow-glow"
              >
                <a
                  href={book.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Purchase Book
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <Dialog open={!!selectedBook} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-[95vw] max-h-[95vh]  p-0 border-0 bg-transparent shadow-none">
          <div className="relative bg-white rounded-lg px-2 sm:px-4 lg:px-6 py-12 max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {selectedBook && (
              <div className="flex flex-col items-center">
                <DialogTitle className="hidden">
                  {selectedBook.title}
                </DialogTitle>
                <Image
                  width={600}
                  height={900}
                  src={selectedBook.coverImage}
                  alt={`Cover of ${selectedBook.title}`}
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-md shadow-lg"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
