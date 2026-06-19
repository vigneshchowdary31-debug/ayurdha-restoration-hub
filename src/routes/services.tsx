import { createFileRoute } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { Layout, PageHero } from "../components/site/Layout";
import { CTASection } from "../components/site/CTASection";
import { SERVICES } from "../components/site/SiteData";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Neuro, Stroke & Pediatric Rehabilitation — Ayurdha" },
      { name: "description", content: "Neurological rehabilitation, stroke recovery, paralysis rehabilitation, spinal cord injury rehab, pediatric therapy, muscular dystrophy management and physiotherapy in Hyderabad." },
      { property: "og:title", content: "Rehabilitation Services at Ayurdha Institute" },
      { property: "og:description", content: "Specialized one-on-one rehabilitation programs under Dr. GV Subbarayalu." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function Icon({ name, className }: { name: string; className?: string }) {
  const C = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name] ?? Icons.Sparkles;
  return <C className={className} />;
}

function ServicesPage() {
  return (
    <Layout>
      <PageHero eyebrow="Our Services" title="Specialized rehabilitation programs" subtitle="Every service is delivered through personalized one-on-one sessions led by Dr. GV Subbarayalu." />

      <section className="container-px mx-auto max-w-7xl py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <article key={s.slug} className="rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-primary/30 transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
              <Icon name={s.icon} className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </section>

      <CTASection />
    </Layout>
  );
}
