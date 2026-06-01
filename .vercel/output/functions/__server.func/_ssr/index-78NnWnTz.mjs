import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as SiteLayout, C as CLINIC, B as Button, w as whatsappLink, t as telLink } from "./SiteLayout-Iiu6TifN.mjs";
import { supabase } from "./client-BgR-jjPw.mjs";
import { g as CalendarCheck, M as MessageCircle, i as ShieldCheck, c as Clock, P as Phone, H as HeartPulse, l as Smile, k as Users, j as Award, a as Stethoscope, A as ArrowRight, Q as Quote, S as Star } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const heroImg = "/assets/hero-clinic-B5O-HL0o.jpg";
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DoctorsPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center animate-fade-in-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }),
        " Now accepting new patients"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl", children: [
        "Care you can trust.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Medicine you can feel." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 max-w-xl text-base text-muted-foreground md:text-lg", children: [
        CLINIC.name,
        " brings together experienced specialists, modern diagnostics, and warm, unhurried consultations — for the whole family."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-gradient-primary shadow-soft hover:opacity-95", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/appointment", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "mr-2 h-5 w-5" }),
          "Book Appointment"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappLink(), target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "mr-2 h-5 w-5" }),
          "Chat on WhatsApp"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-teal" }),
          "Certified clinicians"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-teal" }),
          "Same-day reports"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-teal" }),
          "24×7 emergency line"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-slide-in-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-3xl border border-border shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Friendly doctor consulting a patient at Aarogya Clinic", width: 1600, height: 1100, className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-teal text-teal-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: "25k+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Happy patients" })
        ] })
      ] })
    ] })
  ] }) });
}
function useCount(target, duration = 1400) {
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return n;
}
function StatCard({
  icon: Icon,
  value,
  suffix = "+",
  label
}) {
  const n = useCount(value);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 text-center hover-lift", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 font-display text-3xl font-bold md:text-4xl", children: [
      n.toLocaleString(),
      suffix
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: label })
  ] });
}
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto -mt-10 px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 rounded-3xl border border-border bg-background p-6 shadow-soft sm:grid-cols-2 md:grid-cols-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Smile, value: 25e3, label: "Patients served" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Users, value: 20, label: "Specialist doctors" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Award, value: 25, label: "Years of care" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: HeartPulse, value: 50, label: "Health services" })
  ] }) });
}
function ServicesPreview() {
  const {
    data = []
  } = useQuery({
    queryKey: ["services-preview"],
    queryFn: async () => {
      const {
        data: data2,
        error
      } = await supabase.from("services").select("*").order("display_order").limit(6);
      if (error) throw error;
      return data2;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-20 md:px-6 md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-teal", children: "Our Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-bold md:text-4xl", children: "Care across every stage of life" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "From routine check-ups to specialist consultations, our team delivers personalized, evidence-based care." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: data.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { style: {
      animationDelay: `${i * 80}ms`
    }, className: "group animate-fade-in-up rounded-2xl border border-border bg-card p-6 hover-lift", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground transition-transform group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-semibold", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal hover:gap-2 transition-all", children: [
        "Learn more ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }, s.id)) })
  ] });
}
function WhyUs() {
  const items = [{
    icon: ShieldCheck,
    title: "Patient-first ethics",
    body: "Honest advice, transparent pricing, and absolutely no overtreatment."
  }, {
    icon: Award,
    title: "Experienced specialists",
    body: "Senior consultants with decades of clinical and surgical experience."
  }, {
    icon: Clock,
    title: "On-time appointments",
    body: "Booked slots run on schedule. Your time matters as much as your health."
  }, {
    icon: HeartPulse,
    title: "Modern diagnostics",
    body: "Same-day lab reports and digital imaging, reviewed by your doctor."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-teal", children: [
        "Why ",
        CLINIC.name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-bold md:text-4xl", children: "A clinic that feels like family" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "We blend the warmth of a neighborhood practice with the rigor of modern medicine — built around what patients actually need." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-gradient-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", children: "About us" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/doctors", children: "Meet the doctors" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: items.map(({
      icon: Icon,
      title,
      body
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 hover-lift", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-teal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: body })
    ] }, title)) })
  ] }) });
}
function DoctorsPreview() {
  const {
    data = []
  } = useQuery({
    queryKey: ["doctors-preview"],
    queryFn: async () => {
      const {
        data: data2,
        error
      } = await supabase.from("doctors").select("*").order("display_order").limit(3);
      if (error) throw error;
      return data2;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-20 md:px-6 md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-teal", children: "Our Doctors" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-bold md:text-4xl", children: "Trusted by thousands of families" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/doctors", children: [
        "View all doctors ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-3", children: data.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-2xl border border-border bg-card hover-lift", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden bg-secondary", children: d.image_url && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.image_url, alt: d.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-500 hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: d.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-teal", children: d.specialization }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-muted-foreground", children: [
          d.experience_years,
          "+ years experience"
        ] })
      ] })
    ] }, d.id)) })
  ] });
}
function TestimonialsSection() {
  const {
    data = []
  } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const {
        data: data2,
        error
      } = await supabase.from("testimonials").select("*").eq("is_approved", true).limit(6);
      if (error) throw error;
      return data2;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-20 md:px-6 md:py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-accent", children: "Patient Stories" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-bold md:text-4xl", children: "Real care, in real words" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: data.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "rounded-2xl bg-primary-foreground/5 p-6 border border-primary-foreground/10 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-6 w-6 text-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-3 text-sm leading-relaxed text-primary-foreground/90", children: [
        '"',
        t.message,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: t.patient_name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex", children: Array.from({
          length: t.rating
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-accent text-accent" }, i)) })
      ] })
    ] }, t.id)) })
  ] }) });
}
function CTASection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 py-20 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl bg-gradient-primary px-6 py-14 text-center text-primary-foreground shadow-card md:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mx-auto max-w-2xl text-3xl font-bold md:text-4xl", children: "Ready for an appointment?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-primary-foreground/80", children: "Book in under a minute. Confirmation arrives within a few hours, often sooner." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-accent text-accent-foreground hover:opacity-95", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/appointment", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "mr-2 h-5 w-5" }),
        "Book online"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: telLink, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mr-2 h-5 w-5" }),
        "Call clinic"
      ] }) })
    ] })
  ] }) });
}
export {
  HomePage as component
};
