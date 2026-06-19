import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Clock, MessageCircle, Send, Check } from "lucide-react";
import { Layout, PageHero } from "../components/site/Layout";
import { CLINIC, WA_URL, TEL_URL, MAPS_URL } from "../components/site/SiteData";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ayurdha Institute | Book Consultation in Hyderabad" },
      { name: "description", content: "Visit Ayurdha Institute of Rehabilitation Sciences at Vanasthalipuram, Hyderabad. Call +91 98669 66866 or request a consultation online. Mon-Sat 9 AM - 9 PM." },
      { property: "og:title", content: "Contact Ayurdha Institute of Rehabilitation Sciences" },
      { property: "og:description", content: "Book a consultation with Dr. GV Subbarayalu in Vanasthalipuram, Hyderabad." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <Layout>
      <PageHero eyebrow="Contact" title="Book your consultation" subtitle="We respond to inquiries within working hours. For urgent requests, please call or message us on WhatsApp." />

      <section className="container-px mx-auto max-w-7xl py-16 grid lg:grid-cols-[1.1fr_1fr] gap-10">
        {/* Form */}
        <div className="rounded-3xl border border-border bg-white p-7 md:p-9 shadow-[var(--shadow-card)]">
          <h2 className="text-2xl font-bold">Inquiry Form</h2>
          <p className="mt-1 text-sm text-muted-foreground">Tell us a little about your condition and we'll be in touch.</p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" required />
              <Field label="Phone Number" name="phone" type="tel" required />
            </div>
            <Field label="Email" name="email" type="email" />
            <Field label="Condition / Concern" name="condition" placeholder="e.g. Stroke recovery, pediatric therapy" />
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground/70" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </div>
            <button type="submit" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-[var(--brand-teal-dark)] transition">
              {sent ? <><Check className="h-4 w-4" /> Request sent</> : <>Request Consultation <Send className="h-4 w-4" /></>}
            </button>
            {sent && <p className="text-xs text-[var(--brand-green)] text-center">Thanks! We'll get back to you shortly.</p>}
          </form>
        </div>

        {/* Info */}
        <div className="space-y-5">
          <div className="rounded-3xl border border-border bg-white p-7">
            <h3 className="font-semibold">Clinic Address</h3>
            <p className="mt-3 flex gap-3 text-sm text-muted-foreground">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <span>{CLINIC.address.line1},<br />{CLINIC.address.line2},<br />{CLINIC.address.line3}</span>
            </p>
            <a href={MAPS_URL} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              Get Directions →
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <a href={TEL_URL} className="rounded-2xl border border-border bg-white p-5 hover:border-primary/30 transition">
              <Phone className="h-5 w-5 text-primary" />
              <p className="mt-3 text-xs text-muted-foreground">Call us</p>
              <p className="text-sm font-semibold">{CLINIC.phone}</p>
            </a>
            <a href={WA_URL} target="_blank" rel="noopener" className="rounded-2xl border border-border bg-white p-5 hover:border-primary/30 transition">
              <MessageCircle className="h-5 w-5 text-[var(--brand-green)]" />
              <p className="mt-3 text-xs text-muted-foreground">WhatsApp</p>
              <p className="text-sm font-semibold">Chat now</p>
            </a>
          </div>

          <div className="rounded-3xl border border-border bg-white p-7">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Working Hours</h3>
            </div>
            <ul className="mt-3 text-sm space-y-1.5 text-muted-foreground">
              <li className="flex justify-between"><span>Monday – Saturday</span><span className="font-medium text-foreground">9:00 AM – 9:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="font-medium">Closed</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
          <iframe
            title="Ayurdha Institute location map"
            src="https://www.google.com/maps?q=Vanasthalipuram,+Hyderabad,+Telangana+500070&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}{required && " *"}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}
