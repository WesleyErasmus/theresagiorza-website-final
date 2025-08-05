"use client";

import ArticleCard, {
  Publication,
} from "@/components/publications/article-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const publications: Publication[] = [
  {
    id: 1,
    title:
      "An ecological perspective on children's play with digital technologies in South Africa and the United Kingdom",
    type: "Research Article",
    date: "Jan 2023",
    authors: ["Fiona Scott", "J. Marsh", "Karin Murris", "E. Scholey"],
    journal: "Digital Education Review",
    abstract:
      "This paper reports on the South African findings from an international mixed methods study examining young children's learning with digital technology.",
    isFullText: true,
  },
  {
    id: 2,
    title:
      "Meandering as learning: Co-creating care with Camissa Oceans in higher education",
    type: "Research Article",
    date: "Feb 2023",
    authors: ["Aaniyah Martin", "Joanne Peers", "Theresa Giorza"],
    journal: "Educational Philosophy and Theory",
    abstract:
      "This paper explores Slow scholarship and research-creation frameworks that disrupt colonial, anthropocentric and patriarchal systems.",
    isFullText: true,
  },
  {
    id: 3,
    title:
      "'Draw yourself and write your name': Material-discursive agency of names and drawings in early childhood",
    type: "Research Article",
    date: "Mar 2022",
    authors: ["Theresa Giorza"],
    journal: "Contemporary Issues in Early Childhood",
    abstract:
      "A turning over of data from doctoral research exploring intra-active learning makes visible the agency of names and drawings.",
    isFullText: true,
  },
  {
    id: 4,
    title:
      "Researching digital inequalities in children's play with technology in South Africa",
    type: "Research Article",
    date: "Apr 2022",
    authors: [
      "Karin Murris",
      "Fiona Scott",
      "Bo Stjerne Thomsen",
      "Chanique Lawrence",
    ],
    journal: "Learning, Media and Technology",
    abstract:
      "First study of its kind in South Africa showing qualitative differences in children's access to digital technologies.",
    isFullText: true,
  },
  {
    id: 5,
    title: "The Art of Learning with Trees",
    type: "Book Chapter",
    date: "May 2021",
    authors: ["Theresa Giorza"],
    book: "Learning with Damaged Colonial Places",
    abstract:
      "Explores relationships of mutual care and custodianship in more-than-human intra-actions.",
    isFullText: false,
  },
  {
    id: 6,
    title: "Owning Up",
    type: "Book Chapter",
    date: "Jun 2021",
    authors: ["Theresa Giorza"],
    book: "Learning with Damaged Colonial Places",
    abstract:
      "Examines post-apartheid educational realities and ongoing inequalities.",
    isFullText: false,
  },
  {
    id: 7,
    title: "Writing with the Park",
    type: "Book Chapter",
    date: "Jul 2021",
    authors: ["Theresa Giorza"],
    book: "Learning with Damaged Colonial Places",
    abstract:
      "Stories of learning experiences in public park spaces through assemblage of image and text.",
    isFullText: false,
  },
  {
    id: 8,
    title: "Public Places as Learning Spaces",
    type: "Book Chapter",
    date: "Aug 2021",
    authors: ["Theresa Giorza"],
    book: "Learning with Damaged Colonial Places",
    abstract:
      "Finding collaborative ways to care about urban corners offers hope for pedagogical practice.",
    isFullText: false,
  },
  {
    id: 9,
    title: "B(e)aring Wit(h)ness",
    type: "Book Chapter",
    date: "Sep 2021",
    authors: ["Theresa Giorza"],
    book: "Learning with Damaged Colonial Places",
    abstract:
      "Pedagogical documentations entangled with complexities of equitable early childhood education.",
    isFullText: false,
  },
  {
    id: 10,
    title: "Windfall",
    type: "Book Chapter",
    date: "Nov 2021",
    authors: ["Theresa Giorza"],
    book: "Learning with Damaged Colonial Places",
    abstract:
      "Early dates learning spaces as evolving art installations centered on children's thinking work.",
    isFullText: false,
  },
  {
    id: 11,
    title: "Diffractive Encounters with Names",
    type: "Book Chapter",
    date: "Dec 2021",
    authors: ["Theresa Giorza"],
    book: "Learning with Damaged Colonial Places",
    abstract:
      "Engagement with visual and affective intra-actions in reading and writing development.",
    isFullText: false,
  },
  {
    id: 12,
    title: "Setting off",
    type: "Book Chapter",
    date: "Jan 2021",
    authors: ["Theresa Giorza"],
    book: "Learning with Damaged Colonial Places",
    abstract:
      "Educational research with five-date-olds in inner-city Johannesburg preschool context.",
    isFullText: false,
  },
  {
    id: 13,
    title: "Fantasy Beyond the Corner",
    type: "Book Chapter",
    date: "Feb 2021",
    authors: ["Theresa Giorza"],
    book: "Learning with Damaged Colonial Places",
    abstract:
      "Taking learning beyond language metaphor to one of desire and affective entanglement.",
    isFullText: false,
  },
  {
    id: 14,
    title: "'seeing' with/in the world: becoming-little",
    type: "Research Article",
    date: "Mar 2021",
    authors: ["Theresa Giorza", "Karin Murris"],
    journal: "Childhood",
    abstract:
      "Critical posthumanism as invitation to think differently about educational relationality.",
    isFullText: true,
  },
  {
    id: 15,
    title:
      "Learning with Damaged Colonial Places: Posthumanist Pedagogies from a Joburg Preschool",
    type: "Book",
    date: "Apr 2021",
    authors: ["Theresa Giorza"],
    publisher: "Palgrave Macmillan",
    abstract:
      "Close account of emergent pedagogies and entangled becomings in preschool education.",
    isFullText: false,
  },
  {
    id: 16,
    title:
      "Anti-Colonial Orientations to Place: Unsettling Encounters with South African Educational Landscapes",
    type: "Research Article",
    date: "May 2020",
    authors: [
      "Karin Murris",
      "Sieraaj Francis",
      "Sumaya Babamia",
      "Theresa Giorza",
    ],
    journal: "Decolonisation of Education",
    abstract:
      "Decolonial, place attuned, and critical posthumanist orientations to educational landscapes.",
    isFullText: true,
  },
  {
    id: 17,
    title: "Videography as Refrain",
    type: "Research Article",
    date: "Jun 2019",
    authors: ["Theresa Giorza"],
    journal: "Visual Studies",
    abstract:
      "Public park encounters inviting new relationships with world, literacy and self.",
    isFullText: true,
  },
  {
    id: 18,
    title: "Beyond words",
    type: "Book Chapter",
    date: "Jul 2018",
    authors: ["Theresa Giorza", "Joanna Haynes"],
    book: "Philosophy with Children",
    abstract:
      "Exploring philosophical inquiry beyond traditional linguistic boundaries.",
    isFullText: false,
  },
  {
    id: 19,
    title:
      "Thinking together through pictures: The community of philosophical enquiry and visual analysis as a transformative pedagogy",
    type: "Research Article",
    date: "Aug 2016",
    authors: ["Theresa Giorza"],
    journal: "Educational Research for Social Change",
    abstract:
      "Community of enquiry pedagogy combined with social semiotic visual analysis in teacher education.",
    isFullText: true,
  },
  {
    id: 20,
    title: "Playing with Learning: Childhood Pedagogies for Higher Education",
    type: "Book Chapter",
    date: "Sep 2016",
    authors: ["Theresa Giorza"],
    book: "Citizen Scholar Pedagogies",
    abstract:
      "Post-humanist position on educating through innovative, more-than-human pedagogies.",
    isFullText: false,
  },
  {
    id: 21,
    title: "Visual Methodologies in Educational Research",
    type: "Research Article",
    date: "Oct 2015",
    authors: ["Theresa Giorza"],
    journal: "South African Journal of Education",
    abstract:
      "Exploring visual approaches to understanding educational phenomena and practices.",
    isFullText: true,
  },
];

const publicationTypes = ["All", "Article", "Book", "Book Chapter"];

export default function PublicationsPage() {
  const [selectedType, setSelectedType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPublications = publications.filter((pub) => {
    const matchesType = selectedType === "All" || pub.type === selectedType;
    const matchesSearch =
      searchTerm === "" ||
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.some((author) =>
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesType && matchesSearch;
  });
  return (
    <main className="pt-16 min-h-screen bg-gradient-to-br from-sage-50 to-cream-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl lg:text-5xl font-light text-stone-800 mb-4">
              Publications
            </h1>
            <p className="text-stone-600 text-lg max-w-3xl mx-auto">
              Research contributions to early childhood education, posthumanist
              pedagogies, and decolonial educational practices
            </p>
          </motion.div>
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                <Input
                  type="text"
                  placeholder="Search publications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-6 bg-white border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-green-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Select
                  value={selectedType}
                  onValueChange={(val) => setSelectedType(val)}
                >
                  <SelectTrigger className="px-4 py-6 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-green-500 focus:border-transparent bg-white">
                    <Filter className="w-5 h-5 text-stone-400" />
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    {publicationTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {filteredPublications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ArticleCard publication={publication} />
              </motion.div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-stone-500 text-lg">
                No publications found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
