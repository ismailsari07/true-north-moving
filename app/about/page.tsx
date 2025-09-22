"use client";
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function About() {
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
        id="about"
        className="container py-16 md:py-32"
      >
        <motion.p variants={item} className="text-5xl font-semibold mb-8">
          Who We Are
        </motion.p>
        <motion.div variants={item} className="text-xl mb-3">
          <motion.p variants={item} className="font-semibold text-2xl">
            Our Foundation
          </motion.p>
          <motion.p variants={item}>
            TrueNorthMoving was established with a simple goal: to provide a
            moving service that families and businesses can trust. From our very
            first day, we committed ourselves to handling every move with
            professionalism, reliability, and care.
          </motion.p>
        </motion.div>
        <motion.div variants={item} className="text-xl mb-3">
          <motion.p variants={item} className="font-semibold text-2xl">
            Our Growth
          </motion.p>
          <motion.p variants={item}>
            Over the years, we have expanded our services and built a strong
            reputation within the community. What began as a small local team
            has grown into a trusted moving company, known for our dedication to
            customer satisfaction and our ability to make every relocation
            smooth and stress-free.
          </motion.p>
        </motion.div>
        <motion.div variants={item} className="text-xl mb-3">
          <motion.p variants={item} className="font-semibold text-2xl">
            Our Commitment
          </motion.p>
          <motion.p variants={item}>
            Today, TrueNorthMoving continues to serve clients across the region
            with the same values we started with. We are proud to have earned
            the trust of countless families and businesses, and we remain
            committed to delivering dependable, efficient, and respectful moving
            experiences.
          </motion.p>
        </motion.div>
        <motion.div
          variants={item}
          className="bg-blue-400 text-gray-50 rounded-2xl w-full flex flex-col md:flex-row justify-between items-center gap-4 px-3 md:px-40 py-6 md:py-12 mt-16"
        >
          <motion.p variants={item} className="text-xl text-semibold">
            Plan your next move with confidence. Get your estimate now.
          </motion.p>
          <motion.div variants={item}>
            <Link href="/contact">
              <Button variant={"secondary"} size={"lg"}>
                Call Us Now <ArrowBigRight />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
  );
}
