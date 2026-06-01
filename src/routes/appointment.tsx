import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarCheck, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Aarogya Clinic" },
      { name: "description", content: "Book an appointment online with our specialists. Fast confirmation, secure form, no waiting on hold." },
      { property: "og:title", content: "Book an Appointment" },
      { property: "og:description", content: "Online appointment booking with confirmation in hours." },
      { property: "og:url", content: "/appointment" },
    ],
    links: [{ rel: "canonical", href: "/appointment" }],
  }),
  component: AppointmentPage,
});

const schema = z.object({
  patient_name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20).regex(/^[0-9+\-\s()]+$/, "Digits only"),
  email: z.string().trim().email("Enter a valid email").max(255).optional().or(z.literal("")),
  age: z.coerce.number().int().min(0).max(120).optional().or(z.literal("")),
  gender: z.string().max(20).optional(),
  service: z.string().max(100).optional(),
  doctor: z.string().max(100).optional(),
  appointment_date: z.string().min(1, "Choose a date"),
  appointment_time: z.string().min(1, "Choose a time"),
  message: z.string().max(1000).optional(),
});
type FormValues = z.input<typeof schema>;

function AppointmentPage() {
  const { data: doctors = [] } = useQuery({
    queryKey: ["doctors-list"],
    queryFn: async () => (await supabase.from("doctors").select("name,specialization").order("display_order")).data ?? [],
  });
  const { data: services = [] } = useQuery({
    queryKey: ["services-list"],
    queryFn: async () => (await supabase.from("services").select("title").order("display_order")).data ?? [],
  });

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    const parsed = schema.parse(values);
    const payload = {
      ...parsed,
      email: parsed.email || null,
      age: parsed.age === "" ? null : (parsed.age as number),
    };
    const { error } = await supabase.from("appointments").insert(payload);
    if (error) {
      toast.error("Could not submit. Please try again or call us.");
      return;
    }
    toast.success("Appointment requested! We'll confirm shortly.");
    reset();
  };

  return (
    <SiteLayout>
      <section className="bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-20 text-center animate-fade-in-up">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Book Appointment</span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Reserve your visit</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Fill in the form and we'll confirm within a few hours. Need it sooner? Call us directly.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:px-6">
        <form onSubmit={handleSubmit(onSubmit)}
              className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full name *" error={errors.patient_name?.message}>
              <Input {...register("patient_name")} placeholder="e.g. Asha Verma" />
            </Field>
            <Field label="Phone *" error={errors.phone?.message}>
              <Input {...register("phone")} placeholder="+91 98XXX XXXXX" />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <Input type="email" {...register("email")} placeholder="you@example.com" />
            </Field>
            <Field label="Age" error={errors.age?.message}>
              <Input type="number" min={0} max={120} {...register("age")} />
            </Field>
            <Field label="Gender">
              <select {...register("gender")} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                <option value="">Prefer not to say</option>
                <option>Female</option><option>Male</option><option>Other</option>
              </select>
            </Field>
            <Field label="Service required">
              <select {...register("service")} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                <option value="">Any</option>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
              </select>
            </Field>
            <Field label="Preferred doctor">
              <select {...register("doctor")} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                <option value="">No preference</option>
                {doctors.map((d) => <option key={d.name}>{d.name} — {d.specialization}</option>)}
              </select>
            </Field>
            <Field label="Date *" error={errors.appointment_date?.message}>
              <Input type="date" {...register("appointment_date")} min={new Date().toISOString().slice(0, 10)} />
            </Field>
            <Field label="Time *" error={errors.appointment_time?.message}>
              <Input type="time" {...register("appointment_time")} />
            </Field>
          </div>
          <Field label="Message" error={errors.message?.message}>
            <Textarea rows={4} {...register("message")} placeholder="Briefly describe your concern (optional)" />
          </Field>
          <Button type="submit" size="lg" disabled={isSubmitting}
                  className="mt-6 w-full bg-gradient-primary shadow-soft hover:opacity-95">
            {isSubmitting
              ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" />Submitting…</>
              : <><CalendarCheck className="mr-2 h-5 w-5" />Request appointment</>}
          </Button>
          <p className="mt-4 text-center text-xs text-muted-foreground">By submitting you agree to be contacted by our team to confirm your visit.</p>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
