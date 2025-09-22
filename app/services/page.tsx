"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Services() {
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
      className="container flex flex-col gap-4 py-16 md:py-32"
    >
      <motion.p variants={item} className="mb-6 text-5xl font-bold">
        Our Services
      </motion.p>
      <motion.p variants={item} className="mb-6 text-xl font-semibold">
        At TrueNorthMoving, we provide reliable moving solutions tailored to
        your needs. From residential and office relocations to expert packing
        support, our team ensures every move is smooth, efficient, and
        stress-free.
      </motion.p>

      <motion.div variants={container} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <motion.div variants={item} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src="/hero3.jpg"
              alt="Residential Moves"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <motion.p variants={item} className="text-xl font-semibold text-slate-900">
              Residential Moves
            </motion.p>
            <motion.p variants={item} className="mt-2 text-slate-600">
              From studios to family homes, we make moving day smooth and
              stress-free.
            </motion.p>

            <motion.div variants={item} className="mt-5 flex items-center gap-3">
              <Link href="/contact">
                <Button>Request Service</Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={item} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src="/hero4.jpg"
              alt="Office Relocations"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <motion.p variants={item} className="text-xl font-semibold text-slate-900">
              Office Relocations
            </motion.p>
            <motion.p variants={item} className="mt-2 text-slate-600">
              Keep business running with organized, efficient office moves.
            </motion.p>

            <motion.div variants={item} className="mt-5 flex items-center gap-3">
              <Link href="/contact">
                <Button>Request Service</Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={item} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src="/packing.jpg"
              alt="Office Relocations"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <motion.p variants={item} className="text-xl font-semibold text-slate-900">
              Packing Support
            </motion.p>
            <motion.p variants={item} className="mt-2 text-slate-600">
              Careful packing supplies and help to protect what matters most.
            </motion.p>

            <motion.div variants={item} className="mt-5 flex items-center gap-3">
              <Link href="/contact">
                <Button>Request Service</Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={item} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-48 w-full overflow-hidden">
          
            <Image
              src="/long-distance.jpg"
              alt="Office Relocations"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
            <div className="h-full w-full bg-gradient-to-b from-slate-200 to-slate-100" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Long Distance Options
            </h3>
            <p className="mt-2 text-slate-600">
              We offer trusted long-distance moving services, ensuring safe,
              timely, and stress-free relocations across provinces.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Link href="/contact">
                <Button>Request Service</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
