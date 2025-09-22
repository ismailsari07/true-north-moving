import Image from "next/image";
import { Button } from "./ui/button";
import { CheckCheckIcon, Ticket } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="flex flex-col gap-3 items-center text-center py-16 lg:py-32"
    >
      <h3 className="text-4xl md:text-6xl font-semibold mb-7">About Us</h3>
      <p className="md:w-3/5 text-lg font-medium mb-4 text-gray-600">
        At TrueNorthMoving, we are committed to delivering stress-free moving
        experiences with professionalism and care. Our team treats every move as
        if it were our own, ensuring safety, efficiency, and peace of mind from
        start to finish.
      </p>

      <div className="flex flex-col md:flex-row gap-7 justify-center items-center mb-7">
        <Button variant={"secondary"} disabled size={"lg"}>
          <CheckCheckIcon />
          Affordable Pricing
        </Button>
        <p className="flex gap-1 justify-center items-center">
          <CheckCheckIcon /> Friendly Team
        </p>
        <p className="flex gap-1 justify-center items-center">
          <CheckCheckIcon />
          Safe Handling
        </p>
        <p className="flex gap-1 justify-center items-center">
          <CheckCheckIcon />
          Flexible Scheduling
        </p>
      </div>

      <div className="w-full">
        <Image
          width={1200}
          height={500}
          src={"/hero2.jpg"}
          alt="About Us Image"
          className="w-full h-auto rounded-xl border-2 border-gray-200"
        />
      </div>
    </section>
  );
}
