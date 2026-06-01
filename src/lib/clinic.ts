// Centralized clinic info — swap these placeholders for the real values.
export const CLINIC = {
  name: "Aarogya Clinic",
  tagline: "Compassionate care, modern medicine",
  phone: "+91XXXXXXXXXX",
  phoneDisplay: "+91 XXXXX XXXXX",
  whatsapp: "91XXXXXXXXXX",
  email: "clinic@example.com",
  address: "12, Health Avenue, MG Road, Bengaluru — 560001",
  hours: "Mon–Sat · 9:00 AM – 8:00 PM",
} as const;

export const whatsappLink = (text = "Hello, I want to enquire about clinic services") =>
  `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(text)}`;
export const telLink = `tel:${CLINIC.phone}`;
export const mailLink = `mailto:${CLINIC.email}`;
