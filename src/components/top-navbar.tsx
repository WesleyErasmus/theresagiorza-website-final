"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Publications", href: "/publications" },
  { name: "Books", href: "/books" },
  { name: "Projects & Gallery", href: "/projects" },
  { name: "Contact", href: "/contact" },
];
export default function TopNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end md:justify-center items-center h-16">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-forest-green-500"
                    : "text-stone-700 hover:text-forest-green-500"
                }`}
              >
                {item.name}
                {pathname == item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-forest-green-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
          {/* Mobile menu button */}
          <Button
            size={"icon"}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-stone-600 bg-white hover:text-forest-green-500 hover:bg-forest-green-100 transition-colors border border-stone-200 focus:ring-2 focus:ring-offset-1 focus:ring-forest-green-300"
          >
            {isOpen ? <X className="w.6 h.6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>
      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-forest-green-200"
          >
            <div className="p-4 space-y-2">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      pathname === item.href
                        ? "text-forest-green-500 bg-forest-green-50"
                        : "text-stone-600 hover:text-forest-green-500 hover:bg-forest-green-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
