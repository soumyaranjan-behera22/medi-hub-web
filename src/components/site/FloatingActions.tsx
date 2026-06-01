import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, CalendarPlus } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/clinic";

export function FloatingActions() {
  return (
    <>
      {/* WhatsApp — all screens */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-card animate-pulse-ring hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Call — mobile only */}
      <a
        href={telLink}
        aria-label="Call clinic"
        className="fixed bottom-5 left-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-teal text-teal-foreground shadow-card hover:scale-105 transition-transform md:hidden"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Sticky appointment — desktop only */}
      <Link
        to="/appointment"
        className="fixed bottom-24 right-5 z-50 hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:opacity-95 transition"
      >
        <CalendarPlus className="h-4 w-4" />
        Book Appointment
      </Link>
    </>
  );
}
