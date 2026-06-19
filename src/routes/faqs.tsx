import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { Layout, PageHero } from "../components/site/Layout";
import { CTASection } from "../components/site/CTASection";
import { FAQS } from "../components/site/SiteData";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | Treatment, Booking & Consultation — Ayurdha Institute" },
      { name: "description", content: "Answers about conditions treated, consultation process, session frequency, fees and booking at Ayurdha Institute of Rehabilitation Sciences, Hyderabad." },
      { property: "og:title", content: "Rehabilitation FAQs — Ayurdha Institute" },
      { property: "og:description", content: "Everything you need to know about treatment, booking and consultations." },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <Layout>
      <PageHero eyebrow="FAQs" title="Treatment FAQs" subtitle="Common questions about our rehabilitation programs, sessions and bookings." />

      <section className="container-px mx-auto max-w-4xl py-16 space-y-3">
        {FAQS.map((f, i) => (
          <details key={i} className="group rounded-2xl border border-border bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
              <span className="font-medium">{f.q}</span>
              <Plus className="h-5 w-5 text-primary shrink-0 group-open:rotate-45 transition-transform" />
            </summary>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </section>

      <CTASection />
    </Layout>
  );
}
