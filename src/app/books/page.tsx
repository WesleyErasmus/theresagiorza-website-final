"use client";

import BookProductCard, { Book } from "@/components/books/book-product-card";
import { motion } from "motion/react";

const books: Book[] = [
  {
    id: 1,
    title: "Learning with Damaged Colonial Places",
    subtitle: "Posthumanist Pedagogies from a Joburg Preschool",
    author: "Dr. Theresa Giorza",
    year: 2021,
    publisher: "Springer",
    isbn: "978-3-030-61236-4",
    pages: 324,
    coverImage: "/images/book-cover-1.png",
    description:
      "This book offers a close and detailed account of the emergent and creative pedagogies of children learning together in a small, not-for-profit preschool, and the entangled becomings of their carers as well as the researcher–artist–author. The mutually affecting and inseparable realities of the 'material' and the 'discursive' are made visible through careful attention to the details of everyday life in the preschool.",
    purchaseLink: "https://books.google.com/books?id=example",
  },
  {
    id: 2,
    title: "Learning with Damaged Colonial Places",
    subtitle: "Posthumanist Pedagogies from a Joburg Preschool",
    author: "Dr. Theresa Giorza",
    year: 2021,
    publisher: "Springer",
    isbn: "978-3-030-61236-4",
    pages: 324,
    coverImage: "/images/book-cover-1.png",
    description:
      "This book offers a close and detailed account of the emergent and creative pedagogies of children learning together in a small, not-for-profit preschool, and the entangled becomings of their carers as well as the researcher–artist–author. The mutually affecting and inseparable realities of the 'material' and the 'discursive' are made visible through careful attention to the details of everyday life in the preschool.",
    purchaseLink: "https://books.google.com/books?id=example",
  },
];

export default function BooksPage() {
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
              Books
            </h1>
            <p className="text-stone-600 text-lg max-w-3xl mx-auto">
              Groundbreaking research publications exploring posthumanist
              pedagogies and transformative educational practices
            </p>
          </motion.div>

          <div className="space-y-16">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <BookProductCard book={book} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
