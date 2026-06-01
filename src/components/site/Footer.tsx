import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, Stethoscope } from "lucide-react";
import { CLINIC, mailLink, telLink, whatsappLink } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal text-teal-foreground">
                <Stethoscope className="h-5 w-5" />
              </span>
              <div className="font-display text-lg font-bold">{CLINIC.name}</div>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/75 max-w-xs">
              {CLINIC.tagline}. Trusted family medical care with experienced specialists and modern facilities.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["/about", "About Us"],
                ["/services", "Services"],
                ["/doctors", "Our Doctors"],
                ["/appointment", "Book Appointment"],
                ["/blog", "Health Tips"],
                ["/faq", "FAQs"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="text-primary-foreground/75 hover:text-teal transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-teal" /><span>{CLINIC.address}</span></li>
              <li><a className="flex items-center gap-2 hover:text-teal" href={telLink}><Phone className="h-4 w-4 text-teal" />{CLINIC.phoneDisplay}</a></li>
              <li><a className="flex items-center gap-2 hover:text-teal" href={mailLink}><Mail className="h-4 w-4 text-teal" />{CLINIC.email}</a></li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-teal" />{CLINIC.hours}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Get in touch</h4>
            <div className="mt-4 flex flex-col gap-2">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25d366] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
                Chat on WhatsApp
              </a>
              <a href={telLink}
                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-teal-foreground transition hover:opacity-90">
                Call Clinic
              </a>
              <Link to="/appointment"
                 className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 px-4 py-2.5 text-sm font-semibold transition hover:bg-primary-foreground/10">
                Book Online
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p>Built with care for patients across India.</p>
        </div>
      </div>
    </footer>
  );
}
