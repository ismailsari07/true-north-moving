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

export default function Hero() {
  return (
    <header
      id="header"
      className="flex flex-col items-center gap-6 lg:gap-12 text-center py-8 lg:py-32"
    >
      <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
        <h1 className="text-5xl md:text-8xl md:px-24">
          Reliable Moving <br /> Made Simple
        </h1>
        <p className="text-center">
          Trusted movers for homes and offices. <br /> Clear pricing, careful
          handling, and friendly help at every step.
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <div>
            <Link href="/contact">
              <Button size={"lg"}>
                <Calendar size={12} /> Request a Quote
              </Button>
            </Link>
          </div>
          <div>
            <a href="/contact">
              <Button size={"lg"}>Call Us Today</Button>
            </a>
          </div>
        </div>
        <div className="flex">
          <div>
            <Button size="icon" variant="ghost" className="opacity-70">
              <InstagramIcon />
            </Button>
          </div>
          <div>
            <Button size="icon" variant="ghost" className="opacity-70">
              <GithubIcon />
            </Button>
          </div>
          <div>
            <Button size="icon" variant="ghost" className="opacity-70">
              <TwitterIcon />
            </Button>
          </div>
          <div>
            <Button size="icon" variant="ghost" className="opacity-70">
              <YoutubeIcon />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Image
          width={1200}
          height={500}
          src={"/hero4.jpg"}
          alt="Hero Image"
          className="w-full h-auto rounded-xl border-2 border-gray-200"
        />
      </div>
    </header>
  );
}
