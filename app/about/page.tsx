import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";

export default function () {
  return (
      <section id="about" className="container py-16 md:py-32">
        <p className="text-5xl font-semibold mb-8">Who We Are</p>
        <div className="text-xl mb-3">
          <p className="font-semibold text-2xl">Our Foundation</p>
          <p>
            TrueNorthMoving was established with a simple goal: to provide a
            moving service that families and businesses can trust. From our very
            first day, we committed ourselves to handling every move with
            professionalism, reliability, and care.
          </p>
        </div>
        <div className="text-xl mb-3">
          <p className="font-semibold text-2xl">Our Growth</p>
          <p>
            Over the years, we have expanded our services and built a strong
            reputation within the community. What began as a small local team
            has grown into a trusted moving company, known for our dedication to
            customer satisfaction and our ability to make every relocation
            smooth and stress-free.{" "}
          </p>
        </div>
        <div className="text-xl mb-3">
          <p className="font-semibold text-2xl">Our Commitment</p>
          <p>
            Today, TrueNorthMoving continues to serve clients across the region
            with the same values we started with. We are proud to have earned
            the trust of countless families and businesses, and we remain
            committed to delivering dependable, efficient, and respectful moving
            experiences.
          </p>
        </div>
        <div className="bg-blue-400 text-gray-50 rounded-2xl w-full flex flex-col md:flex-row justify-between items-center gap-4 px-3 md:px-40 py-6 md:py-12 mt-16">
          <p className="text-xl text-semibold">
            Plan your next move with confidence. Get your estimate now.
          </p>
          <Link href="/contact">
          <Button variant={"secondary"} size={"lg"}>
           Call Us Now <ArrowBigRight /> 
          </Button>
</Link>
        </div>
      </section>
  );
}
