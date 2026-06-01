import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Phone, MessageCircle, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";
import { CLINIC, mailLink, telLink, whatsappLink } from "@/lib/clinic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aarogya Clinic" },
      { name: "description", content: "Contact Aarogya Clinic by phone, WhatsApp, email, or our online enquiry form. We respond quickly." },
      { property: "og:title", content: "Contact Aarogya Clinic" },
      { property: "og:description", content: "Get in touch by phone, WhatsApp, email, or our online enquiry form." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  subject: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});
type FormValues = z.input<typeof schema>;

function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (values: FormValues) => {
    const parsed = schema.parse(values);
    const { error } = await supabase.from("enquiries").insert({
      ...parsed,
      phone: parsed.phone || null,
      subject: parsed.subject || null,
    });
    if (error) { toast.error("Could not send. Please try again."); return; }
    toast.success("Thanks! We'll be in touch shortly.");
    reset();
  };

  const contacts = [
    { icon: Phone, label: "Call us", value: CLINIC.phoneDisplay, href: telLink },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: whatsappLink() },
    { icon: Mail, label: "Email", value: CLINIC.email, href: mailLink },
    { icon: MapPin, label: "Visit", value: CLINIC.address },
  ];

  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-20 text-center animate-fade-in-up">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Contact</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Talk to us</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">We're happy to answer questions, schedule appointments, or address concerns.</p>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-5 md:px-6">
        <div className="md:col-span-2 space-y-3">
          {contacts.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover-lift">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary"><Icon className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="mt-0.5 font-medium">{value}</div>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a>
            ) : <div key={label}>{inner}</div>;
          })}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-3 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
          <h2 className="font-display text-2xl font-bold">Send a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">We typically reply within a few hours during clinic hours.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Field label="Your name *" error={errors.name?.message}>
              <Input {...register("name")} />
            </Field>
            <Field label="Email *" error={errors.email?.message}>
              <Input type="email" {...register("email")} />
            </Field>
            <Field label="Phone" error={errors.phone?.message}>
              <Input {...register("phone")} />
            </Field>
            <Field label="Subject" error={errors.subject?.message}>
              <Input {...register("subject")} />
            </Field>
          </div>
          <Field label="Message *" error={errors.message?.message}>
            <Textarea rows={5} {...register("message")} />
          </Field>
          <Button type="submit" disabled={isSubmitting} size="lg" className="mt-5 w-full bg-gradient-primary">
            {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending…</> : <><Send className="mr-2 h-4 w-4" />Send message</>}
          </Button>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5 mt-5 md:mt-0 first:mt-0">
      <Label className="text-sm">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
