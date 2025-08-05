"use client";
import { motion } from "motion/react";
import { Label } from "../ui/label";
import { Send } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-3xl mx-auto bg-white/75 rounded-3xl p-8 border border-stone-300"
    >
      <h2 className="text-2xl font-semibold text-stone-800 mb-6">
        Send a Message
      </h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-stone-700 mb-2"
            >
              Your Name
            </Label>
            <div className="relative flex-1">
              <Input
                type="text"
                id="name"
                name="name"
                // value={formData.name}
                // onChange={handleChange}
                required
                className="w-full py-6 bg-white border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-green-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
          </div>

          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-stone-700 mb-2"
            >
              Email Address
            </Label>
            <div className="relative flex-1">
              <Input
                type="email"
                id="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                required
                className="w-full py-6 bg-white border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-green-500 focus:border-transparent"
                placeholder="email@example.com"
              />
            </div>
          </div>
        </div>
        <div>
          <Label
            htmlFor="message"
            className="block text-sm font-medium text-stone-700 mb-2"
          >
            Message
          </Label>
          <div className="relative">
            <Textarea
              id="message"
              name="message"
              //   value={formData.message}
              //   onChange={handleChange}
              required
              className="min-h-[120px] border-stone-300 focus:outline-none focus:ring-2 focus:ring-forest-green-500 focus:border-transparent"
              placeholder="Type your message here."
            />
          </div>
        </div>

        <motion.button
          type="submit"
          //   disabled={isSubmitting}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center space-x-2  bg-forest-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-forest-green-400 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {/* {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )} */}
          <Send className="w-5 h-5" />
          {/* <span>{isSubmitting ? "Sending..." : "Send Message"}</span> */}
          <span>Send Message</span>
        </motion.button>
      </form>
    </motion.div>
  );
}
