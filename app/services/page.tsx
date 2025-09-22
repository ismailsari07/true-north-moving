import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <section className="container flex flex-col gap-4 py-16 md:py-32">
      <p className="mb-6 text-5xl font-bold">Our Services</p>
      <p className="mb-6 text-xl font-semibold">
        At TrueNorthMoving, we provide reliable moving solutions tailored to
        your needs. From residential and office relocations to expert packing
        support, our team ensures every move is smooth, efficient, and
        stress-free.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
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
            <h3 className="text-xl font-semibold text-slate-900">
              Residential Moves
            </h3>
            <p className="mt-2 text-slate-600">
              From studios to family homes, we make moving day smooth and
              stress-free.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Link href="/contact">
                <Button>Request Service</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
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
            <h3 className="text-xl font-semibold text-slate-900">
              Office Relocations
            </h3>
            <p className="mt-2 text-slate-600">
              Keep business running with organized, efficient office moves.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Link href="/contact">
                <Button>Request Service</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-48 w-full overflow-hidden">
            {/* Gölge geçişli boş görsel alanı (placeholding gradient) */}
            <div className="h-full w-full bg-gradient-to-b from-slate-200 to-slate-100" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              Packing Support
            </h3>
            <p className="mt-2 text-slate-600">
              Careful packing supplies and help to protect what matters most.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Link href="/contact">
                <Button>Request Service</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-48 w-full overflow-hidden">
            {/* Gölge geçişli boş görsel alanı (placeholding gradient) */}
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
        </div>
      </div>
    </section>
  );
}
