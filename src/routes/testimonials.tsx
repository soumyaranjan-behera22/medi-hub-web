import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Quote, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Testimonials — Aarogya Clinic" },
      { name: "description", content: "Read what our patients say about their care experience at Aarogya Clinic." },
      { property: "og:title", content: "Patient Testimonials" },
      { property: "og:description", content: "Real stories from patients across Bengaluru." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const { data = [] } = useQuery({
    queryKey: ["all-testimonials"],
    queryFn: async () => (await supabase.from("testimonials").select("*").eq("is_approved", true).order("created_at", { ascending: false })).data ?? [],
  });

  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-20 text-center animate-fade-in-up">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Patient stories</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">In their own words</h1>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.map((t) => (
            <figure key={t.id} className="rounded-2xl border border-border bg-card p-6 hover-lift">
              <Quote className="h-6 w-6 text-teal" />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">"{t.message}"</blockquote>
              <figcaption className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold">{t.patient_name}</span>
                <span className="flex">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-teal text-teal" />)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
