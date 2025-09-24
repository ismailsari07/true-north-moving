"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";

export default function QuoteForm() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [status, setStatus] = React.useState<{
    ok: boolean;
    msg: string;
  } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    const fd = new FormData(e.currentTarget);

    const payload = {
      fullname: fd.get("fullname"),
      email: fd.get("email"),
      phoneNumber: fd.get("phoneNumber"),
      movingFrom: fd.get("movingFrom"),
      movingTo: fd.get("movingTo"),
      date: fd.get("date"),
      message: fd.get("message"),
      sizeOfMove: fd.get("sizeOfMove"),
    };

    // Check for required fields
    const requiredFields = ['fullname', 'email', 'phoneNumber', 'movingFrom', 'movingTo', 'date', 'sizeOfMove', 'message'];
    for (const field of requiredFields) {
      if (!payload[field as keyof typeof payload]) {
        setStatus({ ok: false, msg: `Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field` });
        return;
      }
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email?.toString() || '')) {
      setStatus({ ok: false, msg: "Please enter a valid email address" });
      return;
    }

    // Validate phone number (at least 10 digits)
    if (!/^\+?\d{10,}$/.test(payload.phoneNumber?.toString() || '')) {
      setStatus({ ok: false, msg: "Please enter a valid phone number" });
      return;
    }

    try {
      // Replace with your actual EmailJS service, template, and public key
      const serviceId = "service_osojcc6";
      const templateId = "template_tx7i73h";
      const publicKey = "jzpQxFz50l4OgTYji";
      emailjs.init({ publicKey });
      await emailjs.send(serviceId, templateId, {
        name: payload.fullname,
        email: payload.email,
        phone: payload.phoneNumber,
        date: payload.date,
        movingFrom: payload.movingFrom,
        movingTo: payload.movingTo,
        note: payload.message,
        sizeOfMove: payload.sizeOfMove,
      });
      setStatus({ ok: true, msg: "Email sent successfully!" });
    } catch (err) {
      setStatus({ ok: false, msg: "Something went wrong." });
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-4">
        {/* Full Name */}
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="full-name">Full Name</Label>
          <Input
            type="text"
            name="fullname"
            id="full-name"
            placeholder="Full Name"
            required
          />
        </div>

        {/* Email Address */}
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        {/* Date */}
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="date">Date</Label>
          <Input type="date" name="date" id="date" />
        </div>
        {/* Phone Number */}
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="phone-number">Phone Number</Label>
          <Input
            type="tel"
            name="phoneNumber"
            id="phone-number"
            placeholder="Phone Number"
          />
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        {/* Moving From */}
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="from">Pickup Adress</Label>
          <Input
            type="text"
            name="movingFrom"
            id="from"
            placeholder="City/Province"
          />
        </div>

        {/* Moving To */}
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="to">Drop-off Adress</Label>
          <Input
            type="text"
            name="movingTo"
            id="to"
            placeholder="City/Province"
          />
        </div>
      </div>

      {/* Size Of Move */}
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="sizeOfMove">Size Of Move</Label>
        <select
          id="sizeOfMove"
          name="sizeOfMove"
          defaultValue=""
          className="border rounded-md p-2"
        >
          <option value="" disabled>
            Select Size...
          </option>
          <option value="1 Bedroom">1 Bedroom</option>
          <option value="2 Bedroom">2 Bedroom</option>
          <option value="3 Bedroom">3 Bedroom</option>
        </select>
      </div>

      {/* Notes */}
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="message">Notes</Label>
        <Textarea
          placeholder="Stairs, elevators, special items..."
          name="message"
          id="message"
        />
      </div>

      {status && (
        <p className={status.ok ? "text-green-600" : "text-red-600"}>
          {status.msg}
        </p>
      )}

      <Button type="submit" variant="default" size="lg" className="mt-6">
        Get My Free Quote
      </Button>
    </form>
  );
}
