import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { WA_URL } from "./SiteData";

export function CTASection() {
  return (
    <section className="container-px mx-auto max-w-7xl my-20">
      <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-brand)] p-8 md:p-12 text-white shadow-[var(--shadow-soft)]">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Start your recovery journey today.</h3>
            <p className="mt-2 text-white/85 max-w-xl">Book a one-on-one consultation with Dr. GV Subbarayalu and receive a personalized rehabilitation plan.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary hover:bg-white/90">
              Book Consultation
            </Link>
            <a href={WA_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-black/15 ring-1 ring-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-black/25">
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
