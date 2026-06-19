import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { CLINIC, WA_URL, TEL_URL, MAPS_URL } from "./SiteData";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[var(--surface)]">
      <div className="container-px mx-auto max-w-7xl py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-white font-bold">A</span>
            <span className="font-semibold">Ayurdha Institute</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{CLINIC.tagline} A trusted center for neurological & pediatric rehabilitation in Hyderabad.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
            <li><Link to="/doctor" className="text-muted-foreground hover:text-primary">Doctor Profile</Link></li>
            <li><Link to="/testimonials" className="text-muted-foreground hover:text-primary">Patient Stories</Link></li>
            <li><Link to="/faqs" className="text-muted-foreground hover:text-primary">FAQs</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            <li><Link to="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Visit</h4>
          <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />{CLINIC.address.line1}, {CLINIC.address.line2}, {CLINIC.address.line3}</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />{CLINIC.hours}</li>
          </ul>
          <a href={MAPS_URL} target="_blank" rel="noopener" className="mt-3 inline-flex text-sm font-medium text-primary hover:underline">Get Directions →</a>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <div className="mt-3 flex flex-col gap-2.5">
            <a href={TEL_URL} className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-accent">
              <Phone className="h-4 w-4 text-primary" /> {CLINIC.phone}
            </a>
            <a href={WA_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
              <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-px mx-auto max-w-7xl py-5 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p>Under the care of {CLINIC.doctor}</p>
        </div>
      </div>
    </footer>
  );
}
