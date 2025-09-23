"use client";
import QuoteForm from "@/components/QuoteForm";
import { EarthIcon, LucideMail, PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Contact() {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="container py-16 md:py-32"
    >
      <motion.p variants={item} className="text-5xl font-semibold">
        Contact Us
      </motion.p>
      <motion.p variants={item} className="text-lg">
        Tell us about your move and preferred date. We'll provide a quick, clear
        estimate with no surprises.
      </motion.p>
      <motion.div
        variants={item}
        className="flex flex-col md:flex-row justify-between mt-12 gap-5"
      >
        <motion.div
          variants={item}
          className="md:w-2/3 border-2 border-gray-200 rounded-2xl p-4"
        >
          <QuoteForm />
        </motion.div>
        <motion.div variants={item} className="md:w-1/3">
          <motion.div
            variants={item}
            className="border-2 border-gray-200 rounded-2xl p-4 flex flex-col gap-3"
          >
            <motion.p variants={item} className="font-semibold text-xl">
              Company
            </motion.p>
            <motion.a
              variants={item}
              href="tel:+18778684404"
              className="font-semibold flex gap-3 hover:text-blue-600 transition-colors"
            >
              <EarthIcon /> 877 868 4404
              <span className="bg-green-400 p-1 rounded-md text-xs">
                TOOL-FREE
              </span>
            </motion.a>
            <motion.a
              variants={item}
              href="tel:+16476008515"
              className="font-semibold flex gap-3 hover:text-blue-600 transition-colors"
            >
              <PhoneIcon /> 647 600 8515
              <span className="bg-gray-200 p-1 rounded-md text-xs">LOCAL</span>
            </motion.a>
            <motion.a
              variants={item}
              href="mailto:info@truenorthmoving.com"
              className="font-semibold flex gap-3 hover:text-blue-600 transition-colors"
            >
              <LucideMail /> info@truenorthmoving.com
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
