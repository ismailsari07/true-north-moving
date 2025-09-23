"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Calendar,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Hero() {
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
    <motion.header
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      id="header"
      className="flex flex-col items-center gap-6 lg:gap-12 text-center py-8 lg:py-32"
    >
      <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
        <motion.div variants={item} className="md:px-24">
          <Image src={"/logo.jpeg"} alt="logo" width={500} height={500} />
        </motion.div>
        <motion.p variants={item} className="text-center">
          Trusted movers for homes and offices. <br /> Clear pricing, careful
          handling, and friendly help at every step.
        </motion.p>
        <div className="flex flex-col lg:flex-row gap-4">
          <motion.div variants={item}>
            <Link href="/contact">
              <Button size={"lg"}>
                <Calendar size={12} /> Request a Quote
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={item}>
            <Link href="/services">
              <Button size={"lg"}>Our Services</Button>
            </Link>
          </motion.div>
        </div>
        <div className="flex">
          <motion.div variants={item}>
            <Button size="icon" variant="ghost" className="opacity-70">
              <InstagramIcon />
            </Button>
          </motion.div>
          <motion.div variants={item}>
            <Button size="icon" variant="ghost" className="opacity-70">
              <GithubIcon />
            </Button>
          </motion.div>
          <motion.div variants={item}>
            <Button size="icon" variant="ghost" className="opacity-70">
              <TwitterIcon />
            </Button>
          </motion.div>
          <motion.div variants={item}>
            <Button size="icon" variant="ghost" className="opacity-70">
              <YoutubeIcon />
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div variants={item}>
        <Image
          width={1200}
          height={500}
          src={"/hero4.jpg"}
          alt="Hero Image"
          className="w-full h-auto rounded-xl border-2 border-gray-200"
        />
      </motion.div>
    </motion.header>
  );
}
