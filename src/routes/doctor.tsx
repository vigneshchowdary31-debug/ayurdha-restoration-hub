import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Wallet, GraduationCap, Award, CreditCard } from "lucide-react";
import { Layout, PageHero } from "../components/site/Layout";
import { CTASection } from "../components/site/CTASection";
import { CLINIC } from "../components/site/SiteData";
import doctorImg from "../assets/doctor.jpg";

export const Route = createFileRoute("/doctor")({
  head: () => ({
    meta: [
      { title: "Dr. GV Subbarayalu — Neuro Rehabilitation Specialist, Hyderabad" },
      { name: "description", content: "Dr. GV Subbarayalu — Physiotherapist and Neuro Rehabilitation Specialist with 16+ years of experience. Consultation ₹400 at Ayurdha Institute, Vanasthalipuram." },
      { property: "og:title", content: "Dr. GV Subbarayalu | Physiotherapist & Neuro Rehab Specialist" },
      { property: "og:description", content: "16+ years of one-on-one rehabilitation expertise in stroke, paralysis and pediatric care." },
      { property: "og:url", content: "/doctor" },
    ],
    links: [{ rel: "canonical", href: "/doctor" }],
  }),
  component: DoctorPage,
});

function DoctorPage() {
  return (
    <Layout>
      <PageHero eyebrow="Meet Our Specialist" title="Dr. GV Subbarayalu" subtitle="Physiotherapist · Neuro Rehabilitation Specialist · 16+ Years Experience" />

      <section className="container-px mx-auto max-w-7xl py-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <div className="relative max-w-md mx-auto lg:mx-0 lg:sticky lg:top-24">
          <div className="absolute inset-4 bg-[image:var(--gradient-brand)] rounded-3xl rotate-3" />
          <img src={doctorImg} alt={CLINIC.doctor} width={896} height={1152} loading="lazy" className="relative rounded-3xl ring-1 ring-border shadow-[var(--shadow-card)] w-full h-auto object-cover" />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold">An individualized approach to recovery.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Dr. GV Subbarayalu brings over 16 years of dedicated rehabilitation experience, with deep specialization in neuro and pediatric rehabilitation. Every consultation begins with a thorough assessment and is followed by a personalized, evidence-based treatment plan delivered through one-on-one sessions.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-white p-5">
              <Wallet className="h-5 w-5 text-primary" />
              <p className="mt-3 text-xs text-muted-foreground">Consultation Fee</p>
              <p className="text-xl font-bold text-primary">{CLINIC.fee}</p>
            </div>
            <div className="rounded-2xl border border-border bg-white p-5">
              <GraduationCap className="h-5 w-5 text-primary" />
              <p className="mt-3 text-xs text-muted-foreground">Specialization</p>
              <p className="text-sm font-semibold">Physiotherapy & Rehabilitation</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-white p-6">
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Accepted Payment Modes</h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Cash", "UPI", "PhonePe", "Paytm", "Net Banking"].map((p) => (
                <span key={p} className="rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-primary">{p}</span>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-white p-6">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Memberships</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-[var(--brand-green)]" /> Rehabilitation Council of India (RCI)</li>
              <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-[var(--brand-green)]" /> Medicine In Action Program (MIAP)</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
