import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const imgMap: Record<string, string> = {
  "/src/assets/doctor-1.jpg": doctor1,
  "/src/assets/doctor-2.jpg": doctor2,
  "/src/assets/doctor-3.jpg": doctor3,
};

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — Aarogya Clinic" },
      { name: "description", content: "Meet our team of experienced specialists across general medicine, cardiology, pediatrics and more." },
      { property: "og:title", content: "Meet Our Doctors" },
      { property: "og:description", content: "Experienced, compassionate specialists trusted by thousands of families." },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  const { data = [] } = useQuery({
    queryKey: ["doctors-all"],
    queryFn: async () => {
      const { data, error } = await supabase.from("doctors").select("*").order("display_order");
      if (error) throw error;
      return data;
    },
  });

  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-20 text-center animate-fade-in-up">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Our Doctors</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Specialists who actually listen</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">Senior consultants with deep expertise — and the unhurried bedside manner of a family physician.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((d, i) => {
            const src = d.image_url ? (imgMap[d.image_url] ?? d.image_url) : undefined;
            return (
              <article key={d.id}
                       style={{ animationDelay: `${i * 80}ms` }}
                       className="animate-fade-in-up overflow-hidden rounded-2xl border border-border bg-card hover-lift">
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  {src && <img src={src} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />}
                </div>
                <div className="p-6">
                  <h2 className="font-display text-xl font-semibold">{d.name}</h2>
                  <p className="text-sm font-medium text-teal">{d.specialization}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{d.bio}</p>
                  <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                    <p className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-teal" /><span>{(d.available_days || []).join(" · ")}</span></p>
                    <p className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-teal" /><span>{d.available_time}</span></p>
                  </div>
                  <Button asChild className="mt-5 w-full bg-gradient-primary">
                    <Link to="/appointment">Book with {d.name.split(" ")[1] ?? d.name}</Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
