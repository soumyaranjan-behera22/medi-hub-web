import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider, u as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster } from "../_libs/sonner.mjs";
import { o as objectType, s as stringType, l as literalType, c as coerce } from "../_libs/zod.mjs";
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
const appCss = "/assets/styles-BRzZAgM1.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aarogya Clinic — Compassionate care, modern medicine" },
      { name: "description", content: "Aarogya Clinic offers trusted family healthcare with experienced doctors, modern diagnostics, and easy online appointment booking." },
      { name: "author", content: "Aarogya Clinic" },
      { name: "theme-color", content: "#0c2340" },
      { property: "og:site_name", content: "Aarogya Clinic" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
      }
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        name: "Aarogya Clinic",
        description: "Compassionate, modern medical care for the whole family.",
        address: { "@type": "PostalAddress", streetAddress: "12, Health Avenue, MG Road", addressLocality: "Bengaluru", postalCode: "560001", addressCountry: "IN" },
        telephone: "+91XXXXXXXXXX",
        openingHours: "Mo-Sa 09:00-20:00"
      })
    }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AuthListener, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
function AuthListener() {
  const router = useRouter();
  const queryClient = useQueryClient();
  reactExports.useEffect(() => {
    let unsub;
    import("./client-BgR-jjPw.mjs").then(({ supabase }) => {
      const { data } = supabase.auth.onAuthStateChange(() => {
        router.invalidate();
        queryClient.invalidateQueries();
      });
      unsub = () => data.subscription.unsubscribe();
    });
    return () => {
      unsub?.();
    };
  }, [router, queryClient]);
  return null;
}
const $$splitComponentImporter$8 = () => import("./testimonials-CcnE0ueQ.mjs");
const Route$8 = createFileRoute("/testimonials")({
  head: () => ({
    meta: [{
      title: "Patient Testimonials — Aarogya Clinic"
    }, {
      name: "description",
      content: "Read what our patients say about their care experience at Aarogya Clinic."
    }, {
      property: "og:title",
      content: "Patient Testimonials"
    }, {
      property: "og:description",
      content: "Real stories from patients across Bengaluru."
    }, {
      property: "og:url",
      content: "/testimonials"
    }],
    links: [{
      rel: "canonical",
      href: "/testimonials"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./services-jL3V9gLG.mjs");
const Route$7 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Aarogya Clinic"
    }, {
      name: "description",
      content: "Comprehensive medical services including general consultation, cardiology, pediatrics, dermatology, orthopedics, and diagnostics."
    }, {
      property: "og:title",
      content: "Our Medical Services"
    }, {
      property: "og:description",
      content: "Comprehensive medical services for the whole family."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./faq-DEUrVWsR.mjs");
const Route$6 = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQs — Aarogya Clinic"
    }, {
      name: "description",
      content: "Frequently asked questions about appointments, insurance, online consultations, and clinic hours at Aarogya Clinic."
    }, {
      property: "og:title",
      content: "Frequently Asked Questions"
    }, {
      property: "og:description",
      content: "Answers about appointments, insurance, online consultations, and clinic hours."
    }, {
      property: "og:url",
      content: "/faq"
    }],
    links: [{
      rel: "canonical",
      href: "/faq"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./doctors-ObfmHqDw.mjs");
const Route$5 = createFileRoute("/doctors")({
  head: () => ({
    meta: [{
      title: "Our Doctors — Aarogya Clinic"
    }, {
      name: "description",
      content: "Meet our team of experienced specialists across general medicine, cardiology, pediatrics and more."
    }, {
      property: "og:title",
      content: "Meet Our Doctors"
    }, {
      property: "og:description",
      content: "Experienced, compassionate specialists trusted by thousands of families."
    }, {
      property: "og:url",
      content: "/doctors"
    }],
    links: [{
      rel: "canonical",
      href: "/doctors"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-CTq6G5Vk.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Aarogya Clinic"
    }, {
      name: "description",
      content: "Contact Aarogya Clinic by phone, WhatsApp, email, or our online enquiry form. We respond quickly."
    }, {
      property: "og:title",
      content: "Contact Aarogya Clinic"
    }, {
      property: "og:description",
      content: "Get in touch by phone, WhatsApp, email, or our online enquiry form."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
objectType({
  name: stringType().trim().min(2).max(100),
  email: stringType().trim().email().max(255),
  phone: stringType().trim().max(20).optional().or(literalType("")),
  subject: stringType().trim().max(150).optional().or(literalType("")),
  message: stringType().trim().min(5, "Tell us a bit more").max(1e3)
});
const $$splitComponentImporter$3 = () => import("./blog-Cm-m54uq.mjs");
const Route$3 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Health Tips & Blog — Aarogya Clinic"
    }, {
      name: "description",
      content: "Practical health tips, wellness guides, and articles from the doctors at Aarogya Clinic."
    }, {
      property: "og:title",
      content: "Health Tips & Blog"
    }, {
      property: "og:description",
      content: "Practical health tips, wellness guides, and articles from our doctors."
    }, {
      property: "og:url",
      content: "/blog"
    }],
    links: [{
      rel: "canonical",
      href: "/blog"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./appointment-B2HAhJS8.mjs");
const Route$2 = createFileRoute("/appointment")({
  head: () => ({
    meta: [{
      title: "Book Appointment — Aarogya Clinic"
    }, {
      name: "description",
      content: "Book an appointment online with our specialists. Fast confirmation, secure form, no waiting on hold."
    }, {
      property: "og:title",
      content: "Book an Appointment"
    }, {
      property: "og:description",
      content: "Online appointment booking with confirmation in hours."
    }, {
      property: "og:url",
      content: "/appointment"
    }],
    links: [{
      rel: "canonical",
      href: "/appointment"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
objectType({
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
const $$splitComponentImporter$1 = () => import("./about-D2ooas6O.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Aarogya Clinic"
    }, {
      name: "description",
      content: "Learn about Aarogya Clinic's mission, values, and team of dedicated medical specialists serving Bengaluru since 2000."
    }, {
      property: "og:title",
      content: "About Aarogya Clinic"
    }, {
      property: "og:description",
      content: "Our mission, values, and team of dedicated medical specialists."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-78NnWnTz.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Aarogya Clinic — Compassionate care, modern medicine"
    }, {
      name: "description",
      content: "Trusted family healthcare in Bengaluru. Book appointments online with experienced doctors across cardiology, pediatrics, dermatology, and more."
    }, {
      property: "og:title",
      content: "Aarogya Clinic — Compassionate care, modern medicine"
    }, {
      property: "og:description",
      content: "Trusted family healthcare in Bengaluru. Book appointments online with experienced doctors."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TestimonialsRoute = Route$8.update({
  id: "/testimonials",
  path: "/testimonials",
  getParentRoute: () => Route$9
});
const ServicesRoute = Route$7.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$9
});
const FaqRoute = Route$6.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$9
});
const DoctorsRoute = Route$5.update({
  id: "/doctors",
  path: "/doctors",
  getParentRoute: () => Route$9
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$9
});
const BlogRoute = Route$3.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$9
});
const AppointmentRoute = Route$2.update({
  id: "/appointment",
  path: "/appointment",
  getParentRoute: () => Route$9
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$9
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AppointmentRoute,
  BlogRoute,
  ContactRoute,
  DoctorsRoute,
  FaqRoute,
  ServicesRoute,
  TestimonialsRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
