import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Layout, PageHero } from "../components/site/Layout";
import { CTASection } from "../components/site/CTASection";
import { TESTIMONIALS } from "../components/site/SiteData";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Success Stories | Ayurdha Institute Hyderabad" },
      { name: "description", content: "Read recovery stories from patients treated at Ayurdha Institute of Rehabilitation Sciences — stroke recovery, paralysis rehabilitation and pediatric therapy outcomes." },
      { property: "og:title", content: "Patient Success Stories — Ayurdha Institute" },
      { property: "og:description", content: "Stories of mobility, independence and hope from our patients and their families." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <Layout>
      <PageHero eyebrow="Patient Stories" title="Recoveries that inspire us every day" subtitle="Real experiences from patients and families who have walked the rehabilitation journey with us." />

      <section className="container-px mx-auto max-w-7xl py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)]">
            <div className="flex gap-0.5 text-[var(--brand-green)]">
              {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <blockquote className="mt-4 text-sm text-foreground/85 leading-relaxed">"{t.text}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-white text-sm font-bold">{t.initials}</span>
              <span className="text-sm font-medium">{t.name}</span>
            </figcaption>
          </figure>
        ))}
      </section>

      <CTASection />
    </Layout>
  );
}
