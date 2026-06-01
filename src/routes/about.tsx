import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HeartPulse, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CLINIC } from "@/lib/clinic";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aarogya Clinic" },
      { name: "description", content: "Learn about Aarogya Clinic's mission, values, and team of dedicated medical specialists serving Bengaluru since 2000." },
      { property: "og:title", content: "About Aarogya Clinic" },
      { property: "og:description", content: "Our mission, values, and team of dedicated medical specialists." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { icon: ShieldCheck, title: "Integrity", body: "Transparent advice and pricing — always." },
    { icon: HeartPulse, title: "Compassion", body: "Empathy guides every conversation." },
    { icon: Award, title: "Excellence", body: "Continuous learning and rigorous standards." },
    { icon: Users, title: "Family-first", body: "Care designed for every member of the household." },
  ];
  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">About us</span>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">A clinic built around the patient.</h1>
            <p className="mt-5 text-lg text-muted-foreground">{CLINIC.name} has been part of Bengaluru's healthcare fabric for over two decades — combining experienced specialists, modern diagnostics, and the warmth of a neighborhood practice.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
        <div className="rounded-2xl border border-border bg-card p-8 hover-lift">
          <Target className="h-7 w-7 text-teal" />
          <h2 className="mt-4 text-2xl font-bold">Our mission</h2>
          <p className="mt-3 text-muted-foreground">To make high-quality, ethical medical care accessible and unhurried — so every patient leaves informed, heard, and well looked after.</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 hover-lift">
          <Sparkles className="h-7 w-7 text-teal" />
          <h2 className="mt-4 text-2xl font-bold">Our vision</h2>
          <p className="mt-3 text-muted-foreground">To be the most trusted family clinic in our community — known for clinical excellence, kindness, and continuity of care across generations.</p>
        </div>
      </section>

      <section className="bg-cream/60">
        <div className="container mx-auto px-4 py-20 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our values</h2>
            <p className="mt-3 text-muted-foreground">The principles that shape every consultation, every prescription, every interaction.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 text-center hover-lift">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Visit us</h2>
        <p className="mt-3 text-muted-foreground">We're open six days a week. Walk in or book ahead.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-gradient-primary"><Link to="/appointment">Book Appointment</Link></Button>
          <Button asChild variant="outline"><Link to="/contact">Get directions</Link></Button>
        </div>
      </section>
    </SiteLayout>
  );
}
