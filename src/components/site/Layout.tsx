import { type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--surface)]">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>}
        <h1 className="mt-3 text-3xl md:text-5xl font-bold text-foreground max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
