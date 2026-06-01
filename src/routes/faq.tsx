import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs — Aarogya Clinic" },
      { name: "description", content: "Frequently asked questions about appointments, insurance, online consultations, and clinic hours at Aarogya Clinic." },
      { property: "og:title", content: "Frequently Asked Questions" },
      { property: "og:description", content: "Answers about appointments, insurance, online consultations, and clinic hours." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const { data = [] } = useQuery({
    queryKey: ["faqs"],
    queryFn: async () => (await supabase.from("faqs").select("*").order("display_order")).data ?? [],
  });
  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-20 text-center animate-fade-in-up">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">FAQs</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Questions, answered</h1>
        </div>
      </section>
      <section className="container mx-auto max-w-3xl px-4 py-12 md:px-6">
        <Accordion type="single" collapsible className="space-y-3">
          {data.map((f) => (
            <AccordionItem key={f.id} value={f.id}
                           className="rounded-2xl border border-border bg-card px-5">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{f.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </SiteLayout>
  );
}
