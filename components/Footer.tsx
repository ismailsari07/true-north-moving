import Image from "next/image";
import Link from "next/link";
import { EarthIcon, LucideMail, PhoneIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300">
      <div className="container py-12">
        <div className="md:w-2/4 flex flex-col items-center md:items-start mb-5">
          <Image src={"/logo.jpeg"} alt="logo" width={150} height={150} />
          <p className="text-lg font-semibold text-center md:text-left">
            Reliable, friendly moving for homes and offices.{" "}
            <br className="max-md:hidden" /> Clear pricing, careful handling,
            and on-time crews.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:items-end">
          <div className="md:w-1/4 text-lg text-center md:text-left">
            <p className="font-semibold">Company</p>
            <Link href="/">
              <p className="hover:text-gray-600 cursor-pointer">Home</p>
            </Link>
            <Link href="/about">
              <p className="hover:text-gray-600 cursor-pointer">About</p>
            </Link>
            <Link href="/services">
              <p className="hover:text-gray-600 cursor-pointer">Services</p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-gray-600 cursor-pointer">Contact</p>
            </Link>
          </div>
          <div className="md:w-1/4 text-lg text-center md:text-left">
            <p className="font-semibold">Services</p>
            <Link href="/services">
              <p className="hover:text-gray-600 cursor-pointer">
                Packing & Supplies
              </p>
            </Link>
            <Link href="/services">
              <p className="hover:text-gray-600 cursor-pointer">
                Business & Office
              </p>
            </Link>
            <Link href="/services">
              <p className="hover:text-gray-600 cursor-pointer">
                Local & Residential
              </p>
            </Link>
            <Link href="/services">
              <p className="hover:text-gray-600 cursor-pointer">
                Long-Distance Options
              </p>
            </Link>
          </div>

          <div className="p-4 flex flex-col gap-3 justify-center items-center md:items-right">
            <p className="font-semibold text-xl">Company</p>
            <a href="tel:+18778684404" className="font-semibold flex gap-3">
              <EarthIcon /> 877 868 4404
              <span className="bg-green-400 p-1 rounded-md text-xs">
                TOOL-FREE
              </span>
            </a>
            <a href="tel:+16476008515" className="font-semibold flex gap-3">
              <PhoneIcon /> 647 600 8515
              <span className="bg-gray-200 p-1 rounded-md text-xs">LOCAL</span>
            </a>
            <a
              href="mailto:info@truenorthmoving.com"
              className="font-semibold flex gap-3 "
            >
              <LucideMail /> info@truenorthmoving.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 py-4">
        <p className="text-center text-muted-foreground text-lg">
          © 2025 True North Moving Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
