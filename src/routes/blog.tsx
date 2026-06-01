import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Calendar, User } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Health Tips & Blog — Aarogya Clinic" },
      { name: "description", content: "Practical health tips, wellness guides, and articles from the doctors at Aarogya Clinic." },
      { property: "og:title", content: "Health Tips & Blog" },
      { property: "og:description", content: "Practical health tips, wellness guides, and articles from our doctors." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { data = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => (await supabase.from("blogs").select("*").eq("is_published", true).order("created_at", { ascending: false })).data ?? [],
  });

  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-20 text-center animate-fade-in-up">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Health Tips</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">From our doctors to you</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Practical, evidence-based guidance to help you stay well between visits.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((b, i) => (
            <article key={b.id}
                     style={{ animationDelay: `${i * 60}ms` }}
                     className="animate-fade-in-up flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover-lift">
              <div className="aspect-[16/10] bg-gradient-primary" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{new Date(b.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                  {b.author && <span className="inline-flex items-center gap-1"><User className="h-3.5 w-3.5" />{b.author}</span>}
                </div>
                <h2 className="mt-3 font-display text-lg font-semibold leading-snug">{b.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{b.excerpt}</p>
                <Link to="/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal">
                  Read article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
