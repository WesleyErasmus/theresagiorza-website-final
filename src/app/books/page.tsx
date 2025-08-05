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
    isbn: "9789811614200",
    pages: 186,
    coverImage: "/images/book-cover-1.png",
    description:
      "This book offers a close and detailed account of the emergent and creative pedagogies of children learning together in a small, not-for-profit preschool, and the entangled becomings of their carers as well as the researcher–artist–author. The mutually affecting and inseparable realities of the ‘material’ and the ‘discursive’ are made visible through lively and sensual pedagogical invention by a group of five-year olds in the inner-city preschool which is located in Johannesburg, South Africa. These small, local stories are recognized in their emergence with global geopolitical realities. The author makes a valuable contribution to post-qualitative research through the use of visual research methods and non-representational approaches to working with knowledge. \n\nThe book draws on the constantly evolving practices of Philosophy for Children (P4C) and Reggio Emilia both as pedagogical tools and as research methods. Photographs and stills from video footage provide a sense of the relatively modest material environment of the school. The book celebrates the considerable richness of the involvement of the children and the enormous possibilities offered by the world both inside and outside of the classroom when an enquiry-led art-based pedagogy is followed. Drawings and other products created by the children in the study offer valuable insight into the depth and complexity of their engagement with their worlds, both individual and collaborative.",

    purchaseLink: "https://link.springer.com/book/10.1007/978-981-16-1421-7",
  },
  // {
  //   id: 2,
  //   title: "Learning with Damaged Colonial Places",
  //   subtitle: "Posthumanist Pedagogies from a Joburg Preschool",
  //   author: "Dr. Theresa Giorza",
  //   year: 2021,
  //   publisher: "Springer",
  //   isbn: "978-3-030-61236-4",
  //   pages: 324,
  //   coverImage: "/images/book-cover-1.png",
  //   description:
  //     "This book offers a close and detailed account of the emergent and creative pedagogies of children learning together in a small, not-for-profit preschool, and the entangled becomings of their carers as well as the researcher–artist–author. The mutually affecting and inseparable realities of the 'material' and the 'discursive' are made visible through careful attention to the details of everyday life in the preschool.",
  //   purchaseLink: "https://link.springer.com/book/10.1007/978-981-16-1421-7",
  // },
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti, maxime.
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
