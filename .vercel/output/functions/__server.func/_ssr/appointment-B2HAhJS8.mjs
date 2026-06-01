import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { u } from "../_libs/hookform__resolvers.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { S as SiteLayout, B as Button } from "./SiteLayout-Iiu6TifN.mjs";
import { I as Input, T as Textarea, L as Label } from "./textarea-CPu02rFT.mjs";
import { supabase } from "./client-BgR-jjPw.mjs";
import { L as LoaderCircle, g as CalendarCheck } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, c as coerce, l as literalType } from "../_libs/zod.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const schema = objectType({
  patient_name: stringType().trim().min(2, "Please enter your name").max(100),
  phone: stringType().trim().min(7, "Enter a valid phone").max(20).regex(/^[0-9+\-\s()]+$/, "Digits only"),
  email: stringType().trim().email("Enter a valid email").max(255).optional().or(literalType("")),
  age: coerce.number().int().min(0).max(120).optional().or(literalType("")),
  gender: stringType().max(20).optional(),
  service: stringType().max(100).optional(),
  doctor: stringType().max(100).optional(),
  appointment_date: stringType().min(1, "Choose a date"),
  appointment_time: stringType().min(1, "Choose a time"),
  message: stringType().max(1e3).optional()
});
function AppointmentPage() {
  const {
    data: doctors = []
  } = useQuery({
    queryKey: ["doctors-list"],
    queryFn: async () => (await supabase.from("doctors").select("name,specialization").order("display_order")).data ?? []
  });
  const {
    data: services = []
  } = useQuery({
    queryKey: ["services-list"],
    queryFn: async () => (await supabase.from("services").select("title").order("display_order")).data ?? []
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    resolver: u(schema)
  });
  const onSubmit = async (values) => {
    const parsed = schema.parse(values);
    const payload = {
      ...parsed,
      email: parsed.email || null,
      age: parsed.age === "" ? null : parsed.age
    };
    const {
      error
    } = await supabase.from("appointments").insert(payload);
    if (error) {
      toast.error("Could not submit. Please try again or call us.");
      return;
    }
    toast.success("Appointment requested! We'll confirm shortly.");
    reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16 md:px-6 md:py-20 text-center animate-fade-in-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-teal", children: "Book Appointment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-4xl font-bold md:text-5xl", children: "Reserve your visit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "Fill in the form and we'll confirm within a few hours. Need it sooner? Call us directly." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 py-12 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name *", error: errors.patient_name?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register("patient_name"), placeholder: "e.g. Asha Verma" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone *", error: errors.phone?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register("phone"), placeholder: "+91 98XXX XXXXX" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", error: errors.email?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", ...register("email"), placeholder: "you@example.com" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Age", error: errors.age?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 0, max: 120, ...register("age") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Gender", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...register("gender"), className: "h-10 w-full rounded-md border border-input bg-background px-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Prefer not to say" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Female" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Male" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Other" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Service required", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...register("service"), className: "h-10 w-full rounded-md border border-input bg-background px-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Any" }),
          services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: s.title }, s.title))
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Preferred doctor", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...register("doctor"), className: "h-10 w-full rounded-md border border-input bg-background px-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "No preference" }),
          doctors.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { children: [
            d.name,
            " — ",
            d.specialization
          ] }, d.name))
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Date *", error: errors.appointment_date?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", ...register("appointment_date"), min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Time *", error: errors.appointment_time?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "time", ...register("appointment_time") }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message", error: errors.message?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 4, ...register("message"), placeholder: "Briefly describe your concern (optional)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "lg", disabled: isSubmitting, className: "mt-6 w-full bg-gradient-primary shadow-soft hover:opacity-95", children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-5 w-5 animate-spin" }),
        "Submitting…"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "mr-2 h-5 w-5" }),
        "Request appointment"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-xs text-muted-foreground", children: "By submitting you agree to be contacted by our team to confirm your visit." })
    ] }) })
  ] });
}
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: error })
  ] });
}
export {
  AppointmentPage as component
};
