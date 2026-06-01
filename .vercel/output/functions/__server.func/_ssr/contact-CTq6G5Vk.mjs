import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { u } from "../_libs/hookform__resolvers.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { S as SiteLayout, t as telLink, C as CLINIC, m as mailLink, B as Button, w as whatsappLink } from "./SiteLayout-Iiu6TifN.mjs";
import { I as Input, T as Textarea, L as Label } from "./textarea-CPu02rFT.mjs";
import { supabase } from "./client-BgR-jjPw.mjs";
import { P as Phone, M as MessageCircle, d as Mail, e as MapPin, L as LoaderCircle, f as Send } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, l as literalType } from "../_libs/zod.mjs";
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
  name: stringType().trim().min(2).max(100),
  email: stringType().trim().email().max(255),
  phone: stringType().trim().max(20).optional().or(literalType("")),
  subject: stringType().trim().max(150).optional().or(literalType("")),
  message: stringType().trim().min(5, "Tell us a bit more").max(1e3)
});
function ContactPage() {
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
    const {
      error
    } = await supabase.from("enquiries").insert({
      ...parsed,
      phone: parsed.phone || null,
      subject: parsed.subject || null
    });
    if (error) {
      toast.error("Could not send. Please try again.");
      return;
    }
    toast.success("Thanks! We'll be in touch shortly.");
    reset();
  };
  const contacts = [{
    icon: Phone,
    label: "Call us",
    value: CLINIC.phoneDisplay,
    href: telLink
  }, {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat instantly",
    href: whatsappLink()
  }, {
    icon: Mail,
    label: "Email",
    value: CLINIC.email,
    href: mailLink
  }, {
    icon: MapPin,
    label: "Visit",
    value: CLINIC.address
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16 md:px-6 md:py-20 text-center animate-fade-in-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-teal", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-4xl font-bold md:text-5xl", children: "Talk to us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "We're happy to answer questions, schedule appointments, or address concerns." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto grid gap-8 px-4 py-12 md:grid-cols-5 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2 space-y-3", children: contacts.map(({
        icon: Icon,
        label,
        value,
        href
      }) => {
        const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover-lift", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 font-medium", children: value })
          ] })
        ] });
        return href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: href.startsWith("http") ? "_blank" : void 0, rel: "noopener noreferrer", children: inner }, label) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: inner }, label);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "md:col-span-3 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Send a message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "We typically reply within a few hours during clinic hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-5 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your name *", error: errors.name?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register("name") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email *", error: errors.email?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", ...register("email") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", error: errors.phone?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register("phone") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Subject", error: errors.subject?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...register("subject") }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message *", error: errors.message?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 5, ...register("message") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: isSubmitting, size: "lg", className: "mt-5 w-full bg-gradient-primary", children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Sending…"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "mr-2 h-4 w-4" }),
          "Send message"
        ] }) })
      ] })
    ] })
  ] });
}
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 mt-5 md:mt-0 first:mt-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: error })
  ] });
}
export {
  ContactPage as component
};
