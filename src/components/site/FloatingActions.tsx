import { Phone, MessageCircle } from "lucide-react";
import { WA_URL, TEL_URL } from "./SiteData";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-[#25D366]/20 transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">WhatsApp</span>
      </a>
      <a
        href={TEL_URL}
        aria-label="Call clinic"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-4 ring-primary/15 transition-transform hover:scale-105"
      >
        <Phone className="h-5 w-5" />
        <span className="sr-only">Call</span>
      </a>
    </div>
  );
}
