import QuoteForm from "@/components/QuoteForm";
import { EarthIcon, LucideMail, PhoneIcon } from "lucide-react";

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Replace with your actual EmailJS service, template, and public key
      const serviceId = "service_q0p8jbm";
      const templateId = "template_a2vubcf";
      const publicKey = "JKNSzCLCB96fNomzP";
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          date: form.date,
          service: form.service,
          note: form.note,
        },
        publicKey,
      );
      // setSent(true);
      // setForm({ name: '', email: '', phone: '', date: '', service: '', note: '' });
    } catch (err) {
      // setError("Failed to send reservation. Please try again later.");
    } finally {
      // setSending(false);
    }
  };

  return (
    <section className="container py-16 md:py-32">
      <p className="text-5xl font-semibold">Contact Us</p>
      <p className="text-lg">
        Tell us about your move and preferred date. We’ll provide a quick, clear
        estimate with no surprises.
      </p>
      <div className="flex flex-col md:flex-row justify-between mt-12 gap-5">
        <div className="md:w-2/3 border-2 border-gray-200 rounded-2xl p-4">
          <QuoteForm />
        </div>
        <div className="md:w-1/3">
          <div className="border-2 border-gray-200 rounded-2xl p-4 flex flex-col gap-3">
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
              href="mailto:lucas@truenorthmoving.com"
              className="font-semibold flex gap-3 "
            >
              <LucideMail /> lucas@truenorthmoving.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
