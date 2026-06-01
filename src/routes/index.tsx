import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  ArrowRight, CalendarCheck, ShieldCheck, HeartPulse, Stethoscope,
  Star, Quote, Phone, MessageCircle, Clock, Award, Users, Smile,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";
import { CLINIC, telLink, whatsappLink } from "@/lib/clinic";
import heroImg from "@/assets/hero-clinic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarogya Clinic — Compassionate care, modern medicine" },
      { name: "description", content: "Trusted family healthcare in Bengaluru. Book appointments online with experienced doctors across cardiology, pediatrics, dermatology, and more." },
      { property: "og:title", content: "Aarogya Clinic — Compassionate care, modern medicine" },
      { property: "og:description", content: "Trusted family healthcare in Bengaluru. Book appointments online with experienced doctors." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyUs />
      <DoctorsPreview />
      <TestimonialsSection />
      <CTASection />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto grid gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:py-32">
        <div className="flex flex-col justify-center animate-fade-in-up">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-success" /> Now accepting new patients
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Care you can trust.{" "}
            <span className="text-gradient">Medicine you can feel.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            {CLINIC.name} brings together experienced specialists, modern diagnostics, and warm,
            unhurried consultations — for the whole family.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-gradient-primary shadow-soft hover:opacity-95">
              <Link to="/appointment"><CalendarCheck className="mr-2 h-5 w-5" />Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />Chat on WhatsApp
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal" />Certified clinicians</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-teal" />Same-day reports</span>
            <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-teal" />24×7 emergency line</span>
          </div>
        </div>

        <div className="relative animate-slide-in-right">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-card">
            <img
              src={heroImg}
              alt="Friendly doctor consulting a patient at Aarogya Clinic"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-teal text-teal-foreground">
              <HeartPulse className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">25k+</div>
              <div className="text-xs text-muted-foreground">Happy patients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function useCount(target: number, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return n;
}

function StatCard({ icon: Icon, value, suffix = "+", label }: { icon: React.ComponentType<{ className?: string }>; value: number; suffix?: string; label: string }) {
  const n = useCount(value);
  return (
    <div className="rounded-2xl border border-border bg-card p-6 text-center hover-lift">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-4 font-display text-3xl font-bold md:text-4xl">{n.toLocaleString()}{suffix}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="container mx-auto -mt-10 px-4 md:px-6">
      <div className="grid gap-4 rounded-3xl border border-border bg-background p-6 shadow-soft sm:grid-cols-2 md:grid-cols-4">
        <StatCard icon={Smile} value={25000} label="Patients served" />
        <StatCard icon={Users} value={20} label="Specialist doctors" />
        <StatCard icon={Award} value={25} label="Years of care" />
        <StatCard icon={HeartPulse} value={50} label="Health services" />
      </div>
    </section>
  );
}

function ServicesPreview() {
  const { data = [] } = useQuery({
    queryKey: ["services-preview"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("services").select("*").order("display_order").limit(6);
      if (error) throw error;
      return data;
    },
  });
  return (
    <section className="container mx-auto px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Our Services</span>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Care across every stage of life</h2>
        <p className="mt-3 text-muted-foreground">From routine check-ups to specialist consultations, our team delivers personalized, evidence-based care.</p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((s, i) => (
          <article key={s.id}
                   style={{ animationDelay: `${i * 80}ms` }}
                   className="group animate-fade-in-up rounded-2xl border border-border bg-card p-6 hover-lift">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground transition-transform group-hover:scale-110">
              <Stethoscope className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal hover:gap-2 transition-all">
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: ShieldCheck, title: "Patient-first ethics", body: "Honest advice, transparent pricing, and absolutely no overtreatment." },
    { icon: Award, title: "Experienced specialists", body: "Senior consultants with decades of clinical and surgical experience." },
    { icon: Clock, title: "On-time appointments", body: "Booked slots run on schedule. Your time matters as much as your health." },
    { icon: HeartPulse, title: "Modern diagnostics", body: "Same-day lab reports and digital imaging, reviewed by your doctor." },
  ];
  return (
    <section className="bg-cream/60">
      <div className="container mx-auto grid gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Why {CLINIC.name}</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">A clinic that feels like family</h2>
          <p className="mt-4 text-muted-foreground">We blend the warmth of a neighborhood practice with the rigor of modern medicine — built around what patients actually need.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-gradient-primary"><Link to="/about">About us</Link></Button>
            <Button asChild variant="outline"><Link to="/doctors">Meet the doctors</Link></Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-5 hover-lift">
              <Icon className="h-6 w-6 text-teal" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorsPreview() {
  const { data = [] } = useQuery({
    queryKey: ["doctors-preview"],
    queryFn: async () => {
      const { data, error } = await supabase.from("doctors").select("*").order("display_order").limit(3);
      if (error) throw error;
      return data;
    },
  });
  return (
    <section className="container mx-auto px-4 py-20 md:px-6 md:py-28">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Our Doctors</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Trusted by thousands of families</h2>
        </div>
        <Button asChild variant="outline"><Link to="/doctors">View all doctors <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {data.map((d) => (
          <article key={d.id} className="overflow-hidden rounded-2xl border border-border bg-card hover-lift">
            <div className="aspect-[4/5] overflow-hidden bg-secondary">
              {d.image_url && (
                <img src={d.image_url} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              )}
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold">{d.name}</h3>
              <p className="text-sm text-teal">{d.specialization}</p>
              <p className="mt-2 text-xs text-muted-foreground">{d.experience_years}+ years experience</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { data = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials").select("*").eq("is_approved", true).limit(6);
      if (error) throw error;
      return data;
    },
  });
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Patient Stories</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Real care, in real words</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.map((t) => (
            <figure key={t.id} className="rounded-2xl bg-primary-foreground/5 p-6 border border-primary-foreground/10 backdrop-blur">
              <Quote className="h-6 w-6 text-accent" />
              <blockquote className="mt-3 text-sm leading-relaxed text-primary-foreground/90">"{t.message}"</blockquote>
              <figcaption className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold">{t.patient_name}</span>
                <span className="flex">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="container mx-auto px-4 py-20 md:px-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-primary px-6 py-14 text-center text-primary-foreground shadow-card md:px-12">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl">Ready for an appointment?</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">Book in under a minute. Confirmation arrives within a few hours, often sooner.</p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-95">
            <Link to="/appointment"><CalendarCheck className="mr-2 h-5 w-5" />Book online</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
            <a href={telLink}><Phone className="mr-2 h-5 w-5" />Call clinic</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
