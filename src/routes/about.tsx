import { createFileRoute } from "@tanstack/react-router";
import { Heart, Star, Shield, Users, Sparkles, BookOpen } from "lucide-react";
import { Layout, PageHero } from "../components/site/Layout";
import { CTASection } from "../components/site/CTASection";
import { CLINIC } from "../components/site/SiteData";
import clinicImg from "../assets/clinic.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ayurdha Institute | Rehabilitation Center in Hyderabad" },
      { name: "description", content: "Learn about Ayurdha Institute of Rehabilitation Sciences — our mission, vision and values in providing neuro rehabilitation and physiotherapy care in Hyderabad." },
      { property: "og:title", content: "About Ayurdha Institute of Rehabilitation Sciences" },
      { property: "og:description", content: "Evidence-based rehabilitation rooted in compassion and patient-centered care." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Heart, t: "Compassion", d: "We treat every patient with empathy and dignity." },
  { icon: Star, t: "Excellence", d: "Clinical rigor and continuous learning drive our care." },
  { icon: Users, t: "Individualized Care", d: "Plans built around your goals, condition and lifestyle." },
  { icon: BookOpen, t: "Evidence-Based Practice", d: "Modern techniques supported by clinical research." },
  { icon: Shield, t: "Patient Empowerment", d: "Education and tools to take ownership of recovery." },
  { icon: Sparkles, t: "Holistic Approach", d: "Physical, emotional and functional rehabilitation together." },
];

function AboutPage() {
  return (
    <Layout>
      <PageHero eyebrow="About Us" title="About Ayurdha Institute of Rehabilitation Sciences" subtitle={CLINIC.tagline} />

      <section className="container-px mx-auto max-w-7xl py-16 grid lg:grid-cols-2 gap-12 items-center">
        <img src={clinicImg} alt="Ayurdha rehabilitation clinic" width={1280} height={896} loading="lazy" className="rounded-3xl ring-1 ring-border shadow-[var(--shadow-card)] w-full h-auto object-cover" />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">A center built around recovery.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ayurdha Institute of Rehabilitation Sciences is a leading rehabilitation center in Hyderabad specializing in neurological rehabilitation, pediatric therapy, stroke recovery, paralysis rehabilitation, and individualized physiotherapy programs. Under the guidance of {CLINIC.doctor}, the clinic focuses on evidence-based treatments and patient-centered care.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every program at Ayurdha is built one-on-one — combining detailed assessment, measurable goals and continuous family support so that recovery becomes a shared journey.
          </p>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-16">
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white border border-border p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Mission</p>
            <h3 className="mt-2 text-2xl font-bold">Helping people regain their independence.</h3>
            <p className="mt-3 text-muted-foreground">To help individuals regain independence, mobility and quality of life through personalized rehabilitation programs.</p>
          </div>
          <div className="rounded-3xl bg-[image:var(--gradient-brand)] text-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Vision</p>
            <h3 className="mt-2 text-2xl font-bold">A trusted name in Indian rehabilitation.</h3>
            <p className="mt-3 text-white/85">To become one of India's most trusted rehabilitation centers for neurological and pediatric care.</p>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Values</p>
        <h2 className="mt-3 text-3xl font-bold max-w-2xl">Principles that guide every session.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-white p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{v.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
