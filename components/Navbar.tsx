import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, PanelLeft } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="flex justify-between md:justify-evenly items-center p-6 text-lg">
      <Link href={"/"}>
        <Image src={"/logo.jpeg"} alt="Logo" width={60} height={60} />
      </Link>
      <div className="hidden md:flex items-center gap-4">
        <Link href={"/about"}>About</Link>
        <Link href={"/services"}>Services</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"ghost"}>
              <PanelLeft size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Quick Access</SheetTitle>
              <SheetDescription>
                Use the menu to easily access all our pages.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col items-center gap-4">
              <SheetClose asChild>
                <Link href={"/about"}>About</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/services"}>Services</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/contact"}>Contact</Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:block">
        <Button size={"lg"}>
          <Link href={"/contact"} className="flex items-center gap-2">
            Call Us <ArrowRight size={12} />
          </Link>
        </Button>
      </div>
    </nav>
  );
}
