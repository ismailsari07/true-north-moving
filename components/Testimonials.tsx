"use client";
import React from "react";
type Testimonial = { initials: string; name: string; quote: string };
const TESTIMONIALS: Testimonial[] = [
  {
    initials: "AR",
    name: "Amelia R.",
    quote:
      "Flawless from start to finish. The team was on time and so careful with our furniture.",
  },
  {
    initials: "DL",
    name: "Devon L.",
    quote:
      "Booked on short notice and they made it work. Clear rates and great communication.",
  },
  {
    initials: "PK",
    name: "Priya K.",
    quote:
      "Super friendly crew. They packed everything neatly and set us up in our new place.",
  },
  {
    initials: "MS",
    name: "Miguel S.",
    quote:
      "Professional, efficient, and respectful. I would absolutely use them again.",
  },
];

export default function Testimonials() {
  return (
    <section className="container py-16 lg:py-32">
      <p className="mb-8 text-5xl font-semibold ">What Clients Say</p>

      <div className="flex flex-wrap gap-6">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="flex-1 min-w-[260px] max-w-sm rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-700">
                {t.initials}
              </div>
              <div className="font-semibold text-slate-900">{t.name}</div>
            </div>

            <p className="relative pl-4 text-slate-600 leading-relaxed before:absolute before:left-0 before:top-2 before:content-['•'] before:text-slate-400">
              {t.quote}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
