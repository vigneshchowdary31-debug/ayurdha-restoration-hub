import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { Layout } from "../components/site/Layout";
import { CTASection } from "../components/site/CTASection";
import { CLINIC, WA_URL, STATS, SERVICES, WHY_US, TESTIMONIALS, FAQS } from "../components/site/SiteData";
import heroImg from "../assets/hero.jpg";
import doctorImg from "../assets/doctor.jpg";
import clinicImg from "../assets/clinic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayurdha Institute | Neuro Rehab & Physiotherapy in Hyderabad" },
      { name: "description", content: "Neuro rehabilitation and physiotherapy experts in Vanasthalipuram, Hyderabad. Stroke recovery, pediatric therapy, paralysis & spinal injury rehabilitation. Consultation ₹400." },
      { property: "og:title", content: "Ayurdha Institute | Neuro Rehab & Physiotherapy" },
      { property: "og:description", content: "Restoring Movement. Rebuilding Lives. One-on-one rehabilitation programs by Dr. GV Subbarayalu." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function Icon({ name, className }: { name: string; className?: string }) {
  const C = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name] ?? Icons.Sparkles;
  return <C className={className} />;
}

function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />
        <div className="container-px mx-auto max-w-7xl py-12 md:py-20 lg:py-24 grid gap-10 lg:grid-cols-[1.05fr_1fr] items-center">
          <div className="fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur">
              <Icons.ShieldCheck className="h-3.5 w-3.5" /> Trusted Rehabilitation Care · Hyderabad
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
              Neuro Rehabilitation & <span className="text-primary">Physiotherapy</span> Experts
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
              Helping patients recover from stroke, paralysis, spinal cord injuries, developmental disorders and neurological conditions through personalized rehabilitation programs.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-[var(--brand-teal-dark)] transition">
                Book Consultation <Icons.ArrowRight className="h-4 w-4" />
              </Link>
              <a href={WA_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent transition">
                <Icons.MessageCircle className="h-4 w-4 text-[var(--brand-green)]" /> WhatsApp Inquiry
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2"><Icons.BadgeCheck className="h-4 w-4 text-primary" /> 16+ Years Experience</div>
              <div className="flex items-center gap-2"><Icons.UserCheck className="h-4 w-4 text-primary" /> One-on-One Therapy</div>
              <div className="flex items-center gap-2"><Icons.Wallet className="h-4 w-4 text-primary" /> Consultation {CLINIC.fee}</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-card)] ring-1 ring-border">
              <img src={heroImg} alt="Physiotherapist supporting an elderly patient with rehabilitation exercises" width={1536} height={1024} className="w-full h-auto object-cover" loading="eager" />
            </div>
            <div className="absolute -bottom-6 -left-4 md:-left-8 rounded-2xl bg-white shadow-[var(--shadow-card)] ring-1 ring-border p-4 flex items-center gap-3 max-w-[240px]">
              <img src={doctorImg} alt="Dr. GV Subbarayalu" width={56} height={56} className="h-14 w-14 rounded-xl object-cover" loading="lazy" />
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight">{CLINIC.doctor}</p>
                <p className="text-xs text-muted-foreground">Neuro Rehab Specialist</p>
              </div>
            </div>
            <div className="hidden md:flex absolute -top-4 -right-4 rounded-2xl bg-white shadow-[var(--shadow-card)] ring-1 ring-border px-4 py-3 items-center gap-2">
              <Icons.HeartPulse className="h-5 w-5 text-[var(--brand-green)]" />
              <div>
                <p className="text-xs text-muted-foreground">1000+</p>
                <p className="text-sm font-semibold leading-tight">Patients Recovered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container-px mx-auto max-w-7xl pb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-card)]">
                <p className="text-2xl md:text-3xl font-bold text-primary">{s.value}</p>
                <p className="mt-1 text-xs md:text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={clinicImg} alt="Interior of Ayurdha rehabilitation clinic" width={1280} height={896} loading="lazy" className="rounded-3xl shadow-[var(--shadow-card)] ring-1 ring-border w-full h-auto object-cover" />
          <div className="absolute -bottom-5 right-5 rounded-2xl bg-primary text-primary-foreground px-5 py-4 shadow-[var(--shadow-soft)]">
            <p className="text-xs uppercase tracking-wider opacity-80">Established Care</p>
            <p className="text-xl font-bold">16+ Years</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">About the Clinic</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Personalized rehabilitation, rooted in evidence.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ayurdha Institute of Rehabilitation Sciences is a leading rehabilitation center in Hyderabad specializing in neurological rehabilitation, pediatric therapy, stroke recovery, paralysis rehabilitation and individualized physiotherapy programs. Under the guidance of {CLINIC.doctor}, we focus on evidence-based treatments and patient-centered care.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              { icon: "Target", title: "Our Mission", desc: "Help individuals regain independence, mobility and quality of life through personalized programs." },
              { icon: "Eye", title: "Our Vision", desc: "Become one of India's most trusted centers for neurological and pediatric rehabilitation." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-white p-5">
                <Icon name={c.icon} className="h-5 w-5 text-primary" />
                <p className="mt-3 font-semibold">{c.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            Learn more about us <Icons.ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[var(--surface)] py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Services</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground max-w-2xl">Specialized rehabilitation programs</h2>
            </div>
            <Link to="/services" className="text-sm font-semibold text-primary hover:underline">View all services →</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.slug} className="group rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-primary/30 transition-all">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-20 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
        <div className="relative max-w-md mx-auto lg:mx-0">
          <div className="absolute inset-4 bg-[image:var(--gradient-brand)] rounded-3xl rotate-3" />
          <img src={doctorImg} alt={CLINIC.doctor} width={896} height={1152} loading="lazy" className="relative rounded-3xl ring-1 ring-border shadow-[var(--shadow-card)] w-full h-auto object-cover" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Meet Our Specialist</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">{CLINIC.doctor}</h2>
          <p className="mt-2 text-primary font-medium">Physiotherapist · Neuro Rehabilitation Specialist</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            With 16+ years of clinical experience, Dr. Subbarayalu brings a deeply individualized approach to every patient — combining evidence-based physiotherapy with compassionate, family-centered care.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            <div className="rounded-2xl border border-border bg-white p-4">
              <p className="text-xs text-muted-foreground">Consultation Fee</p>
              <p className="text-lg font-bold text-primary">{CLINIC.fee}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-4">
              <p className="text-xs text-muted-foreground">Specialization</p>
              <p className="text-sm font-semibold">Physiotherapy & Rehab</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Rehabilitation Council of India (RCI)", "Medicine In Action Program (MIAP)"].map((m) => (
              <span key={m} className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-primary">
                <Icons.BadgeCheck className="h-3.5 w-3.5" />{m}
              </span>
            ))}
          </div>
          <Link to="/doctor" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            View full profile <Icons.ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-[var(--surface)] py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Why Choose Us</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold max-w-2xl">Care that puts your recovery first.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w) => (
              <div key={w.title} className="rounded-2xl border border-border bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--brand-green)]/15 text-[var(--brand-green)]">
                  <Icon name={w.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{w.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Patient Stories</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold max-w-2xl">Recoveries that inspire us every day.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]">
              <div className="flex gap-0.5 text-[var(--brand-green)]">
                {Array.from({ length: t.rating }).map((_, i) => <Icons.Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-sm text-foreground/85 leading-relaxed">"{t.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-white text-xs font-bold">{t.initials}</span>
                <span className="text-sm font-medium">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-[var(--surface)] py-16 md:py-20">
        <div className="container-px mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary text-center">FAQs</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-center">Common questions about our care</h2>
          <div className="mt-10 space-y-3">
            {FAQS.slice(0, 5).map((f, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-white p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="font-medium">{f.q}</span>
                  <Icons.Plus className="h-5 w-5 text-primary shrink-0 group-open:rotate-45 transition-transform" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/faqs" className="text-sm font-semibold text-primary hover:underline">See all FAQs →</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
