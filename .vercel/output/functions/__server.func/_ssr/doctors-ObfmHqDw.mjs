import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { S as SiteLayout, B as Button } from "./SiteLayout-Iiu6TifN.mjs";
import { supabase } from "./client-BgR-jjPw.mjs";
import { b as Calendar, c as Clock } from "../_libs/lucide-react.mjs";
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
const doctor1 = "/assets/doctor-1-CTT48gxG.jpg";
const doctor2 = "/assets/doctor-2-BM1zZdoq.jpg";
const doctor3 = "/assets/doctor-3-9VT9cl5M.jpg";
const imgMap = {
  "/src/assets/doctor-1.jpg": doctor1,
  "/src/assets/doctor-2.jpg": doctor2,
  "/src/assets/doctor-3.jpg": doctor3
};
function DoctorsPage() {
  const {
    data = []
  } = useQuery({
    queryKey: ["doctors-all"],
    queryFn: async () => {
      const {
        data: data2,
        error
      } = await supabase.from("doctors").select("*").order("display_order");
      if (error) throw error;
      return data2;
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16 md:px-6 md:py-20 text-center animate-fade-in-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-teal", children: "Our Doctors" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-4xl font-bold md:text-5xl", children: "Specialists who actually listen" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-muted-foreground", children: "Senior consultants with deep expertise — and the unhurried bedside manner of a family physician." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-4 py-16 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: data.map((d, i) => {
      const src = d.image_url ? imgMap[d.image_url] ?? d.image_url : void 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { style: {
        animationDelay: `${i * 80}ms`
      }, className: "animate-fade-in-up overflow-hidden rounded-2xl border border-border bg-card hover-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden bg-secondary", children: src && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: d.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-500 hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold", children: d.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-teal", children: d.specialization }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: d.bio }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5 text-teal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (d.available_days || []).join(" · ") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-teal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: d.available_time })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-5 w-full bg-gradient-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/appointment", children: [
            "Book with ",
            d.name.split(" ")[1] ?? d.name
          ] }) })
        ] })
      ] }, d.id);
    }) }) })
  ] });
}
export {
  DoctorsPage as component
};
