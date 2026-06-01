import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Stethoscope, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aarogya Clinic" },
      { name: "description", content: "Comprehensive medical services including general consultation, cardiology, pediatrics, dermatology, orthopedics, and diagnostics." },
      { property: "og:title", content: "Our Medical Services" },
      { property: "og:description", content: "Comprehensive medical services for the whole family." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["services-all"],
    queryFn: async () => {
      const { data, error } = await supabase.from("services").select("*").order("display_order");
      if (error) throw error;
      return data;
    },
  });

  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-20 text-center animate-fade-in-up">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Services</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Complete care, under one roof</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">Specialist consultations, diagnostics, and preventive care — all designed around patient comfort and clinical excellence.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-6">
        {isLoading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-56 rounded-2xl border border-border bg-card animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((s, i) => (
              <article key={s.id}
                       style={{ animationDelay: `${i * 60}ms` }}
                       className="group animate-fade-in-up rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground transition-transform group-hover:scale-110">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                <Button asChild variant="ghost" size="sm" className="mt-4 -ml-3 text-teal hover:text-teal">
                  <Link to="/appointment">Book this service <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </article>
            ))}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
