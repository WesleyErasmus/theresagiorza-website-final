import Image from "next/image";
import { ShoppingCart, Calendar, Hash, FileText } from "lucide-react";
import { motion } from "motion/react";

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
  return (
    <div className="group border border-sage-200 hover:shadow-lg hover:scale-101 duration-300 transition-all">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative">
            <Image
              src={book.coverImage}
              alt={`${book.title} book cover`}
              width={300}
              height={400}
              className="max-h-[500px] mx-auto w-auto rounded-xl shadow-lg"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-5"
        >
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-stone-800 mb-3 leading-tight">
              {book.title}
            </h2>
            <p className="text-lg text-stone-600 mb-2 font-medium">
              {book.subtitle}
            </p>
            <p className="text-sm text-sage-700 font-medium">
              Author: {book.author}
            </p>
          </div>
          <p className="text-stone-700 leading-relaxed">{book.description}</p>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space--x-2">
              <div>
                <span className="text-stone-500">Publisher</span>
                <p className="font-semibold text-sage-700">{book.publisher}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div>
                <span className="text-stone-500">Pages</span>
                <p className="font-semibold text-sage-700">{book.pages}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div>
                <span className="text-stone-500">ISBN</span>
                <p className="font-semibold text-sage-700 text-xs">
                  {book.isbn}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div>
                <span className="text-stone-500">Date Published</span>
                <p className="font-semibold text-sage-700">{book.year}</p>
              </div>
            </div>
          </div>
          <div>
            <motion.a
              href={book.purchaseLink}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 bg-sage-400 text-white py-2 px-6 rounded-lg font-semibold hover:border-transparent hover:bg-sage-500 hover:text-white hover:shadow-lg transition-all duration-300 w-full"
            >
              <ShoppingCart className="w-5 h-5" />
              Purchase Book
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
