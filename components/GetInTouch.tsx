import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <section
      id="get-in-touch"
      className="container flex flex-col md:flex-row gap-7 justify-between items-center py-16 lg:py-32"
    >
      <div className="md:w-1/2 space-y-3">
        <p className="text-5xl font-semibold">Get in Touch</p>
        <p className="text-lg">
          Have a question or ready to plan your move? Fill out the form below
          and our TrueNorthMoving team will get back to you promptly with the
          support you need.
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col gap-3 items-end justify-center">
        <Link href={"/contact"}>
          <Button size={"lg"} className="w-2xs">
            Get A Free Quote <ArrowRight />
          </Button>
        </Link>
        <Link href={"/contact"}>
          <Button size={"lg"} className="w-2xs">
            Call Us <ArrowRight />
          </Button>
        </Link>
      </div>
    </section>
  );
}
