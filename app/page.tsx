import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Features />
      <AboutUs />
      <Testimonials />
      <GetInTouch />
    </main>
  );
}
