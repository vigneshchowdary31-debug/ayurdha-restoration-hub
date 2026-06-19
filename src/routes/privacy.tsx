import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "../components/site/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Ayurdha Institute of Rehabilitation Sciences" },
      { name: "description", content: "How Ayurdha Institute collects, uses and safeguards your personal and health information." },
      { property: "og:title", content: "Privacy Policy — Ayurdha Institute" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Layout>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Your trust is essential to us. This policy explains how we handle the information you share." />
      <section className="container-px mx-auto max-w-3xl py-16 space-y-6 text-sm text-muted-foreground leading-relaxed">
        <p>Ayurdha Institute of Rehabilitation Sciences ("we", "us") is committed to protecting the privacy of patients and visitors. This page outlines how we collect, use and safeguard your personal information.</p>
        <h2 className="text-lg font-semibold text-foreground">Information We Collect</h2>
        <p>We may collect your name, contact details, medical history and clinical information shared during consultations or via our inquiry form. Information is collected only for the purpose of providing care.</p>
        <h2 className="text-lg font-semibold text-foreground">How We Use Your Information</h2>
        <p>Your information is used to plan and deliver rehabilitation services, communicate appointment details, and improve the quality of our care. We do not sell or share your personal data with third parties for marketing.</p>
        <h2 className="text-lg font-semibold text-foreground">Data Security</h2>
        <p>We take reasonable administrative and technical measures to protect patient information. Clinical records are accessed only by authorized personnel.</p>
        <h2 className="text-lg font-semibold text-foreground">Your Rights</h2>
        <p>You may request access to or correction of your personal information at any time by contacting us at +91 98669 66866.</p>
        <h2 className="text-lg font-semibold text-foreground">Updates</h2>
        <p>This policy may be updated periodically. The latest version will always be available on this page.</p>
      </section>
    </Layout>
  );
}
