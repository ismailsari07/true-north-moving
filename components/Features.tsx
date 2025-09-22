import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="flex flex-col gap-3 py-16 lg:py-32">
      <h3 className="text-4xl md:text-6xl font-semibold">
        Excellence at Its Best
      </h3>
      <p className="md:w-1/2 font-medium">
        TrueNorthMoving is the best choice when it comes to reliable moving
        services. We combine professionalism, care, and efficiency to make every
        move stress-free. Our focus is on helping you transition smoothly, so
        you can settle into your new space without worry.
      </p>
      <div className="flex flex-col md:flex-row gap-5 justify-between items-start">
        <div className="md:w-1/3 md:flex flex-col gap-2 items-start">
          <div>
            <p className="text-2xl font-semibold">
              Local & Long-Distance Services
            </p>
            <p className="font-medium">
              TrueNorthMoving covers both local moves across the city and
              long-distance relocations. Wherever life takes you, we’re here to
              make the journey easier, safer, and faster.
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold">Packing & Protection</p>
            <p className="font-medium">
              We offer expert packing and use high-quality materials to protect
              your items. From fragile valuables to bulky furniture, everything
              is handled with care and precision.
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold">
              Residential & Commercial Moves
            </p>
            <p className="font-medium">
              Whether you’re moving into a new home or relocating your business,
              TrueNorthMoving provides tailored solutions that fit your schedule
              and budget. Our team ensures your belongings arrive safely and on
              time.
            </p>
          </div>
        </div>

        <div className="w-full md:w-3/5">
          <Image
            src={"/hero.jpg"}
            height={900}
            width={900}
            alt="hero"
            className="w-full h-auto rounded-2xl border-3 border-gray-300"
          />
        </div>
      </div>
    </section>
  );
}
