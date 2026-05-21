import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Building2, Sprout, Factory, Wrench, ArrowRight, Star } from "lucide-react";
import residentialImg from "@/assets/solar-residential.jpg";
import commercialImg from "@/assets/solar-commercial.jpg";
import agriImg from "@/assets/solar-agricultural.jpg";
import homeImg from "@/assets/solar-home.jpg";
import cellsImg from "@/assets/solar-cells.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Solar Services — Residential, Commercial & Agricultural | SOLAREX ENERGY" },
      { name: "description", content: "Premium solar solutions for every need: residential rooftops, commercial buildings, agricultural pumps, industrial plants, and AMC services in Nagpur." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Home,
    img: residentialImg,
    title: "Residential Solar",
    tagline: "Power your home, slash your bills.",
    desc: "Custom 1kW–10kW rooftop systems for homes, villas and bungalows. Net-metering ready with full subsidy assistance.",
    points: ["1–10 kW systems", "Tier-1 panels", "Net-metering support", "Subsidy paperwork"],
  },
  {
    icon: Building2,
    img: commercialImg,
    title: "Commercial Solar",
    tagline: "Cut operating costs, scale your savings.",
    desc: "Rooftop and ground-mount systems for offices, retail, hotels, hospitals and educational institutions.",
    points: ["10–500 kW capacity", "OPEX & CAPEX models", "GST input benefit", "Accelerated depreciation"],
  },
  {
    icon: Sprout,
    img: agriImg,
    title: "Agricultural Solar",
    tagline: "Reliable power for every field.",
    desc: "Solar water pumps and farm power solutions under the PM-KUSUM scheme. Diesel-free, drought-proof irrigation.",
    points: ["1HP–10HP pumps", "PM-KUSUM enrolment", "Drip-irrigation ready", "Zero fuel cost"],
  },
  {
    icon: Factory,
    img: commercialImg,
    title: "Industrial Solar",
    tagline: "Heavy-duty solar for serious savings.",
    desc: "MW-scale systems for factories and MIDC units in Hingna, Butibori and across Vidarbha.",
    points: ["500 kW – 5 MW", "Hybrid storage options", "PPA available", "24/7 monitoring"],
  },
  {
    icon: Wrench,
    img: cellsImg,
    title: "Solar Maintenance & AMC",
    tagline: "Keep every panel performing.",
    desc: "Comprehensive Annual Maintenance Contracts: cleaning, inspection, inverter health checks and performance reports.",
    points: ["Quarterly cleaning", "Inverter diagnostics", "Performance reports", "Priority support"],
  },
];

const projectGallery = [
  { img: homeImg, label: "Residential · Manish Nagar", kW: "6 kW" },
  { img: commercialImg, label: "Factory Rooftop · MIDC Hingna", kW: "50 kW" },
  { img: agriImg, label: "Farm Pump · Kalmeshwar", kW: "5 HP" },
  { img: residentialImg, label: "Villa · Civil Lines", kW: "8 kW" },
];

const testimonials = [
  { name: "Vikram Bhandari", role: "Hotelier, Wardha Road", quote: "Our 30kW commercial system runs the kitchen, AC and lighting. Bills are 80% lower." },
  { name: "Sushma Tayde", role: "School Trustee, Hingna", quote: "Beautifully installed, students love it, and savings fund three new classrooms." },
];

function ServicesPage() {
  return (
    <div>
      {/* BANNER */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 text-primary-foreground md:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="text-xs font-semibold uppercase tracking-widest opacity-90">Our Services</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-6xl">
            Premium Solar Solutions for Every Need
          </h1>
          <p className="mt-5 max-w-xl text-base opacity-90">
            Whether it's your home, business or farm — SOLAREX ENERGY delivers solar
            systems engineered to last 25+ years.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="space-y-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div>
                <img src={s.img} alt={s.title} loading="lazy" width={1536} height={1024} className="rounded-3xl shadow-soft" />
              </div>
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight md:text-4xl">{s.title}</h2>
                <p className="mt-2 text-base font-medium text-primary">{s.tagline}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:scale-[1.03] transition-transform"
                >
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Project Gallery</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Recent installations across Nagpur
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {projectGallery.map((p) => (
              <figure key={p.label} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.label} loading="lazy" width={1536} height={1024} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <figcaption className="p-4">
                  <div className="text-xs font-semibold text-primary">{p.kW}</div>
                  <div className="mt-1 text-sm font-medium text-foreground">{p.label}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Solar customers, real results.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-3xl bg-gradient-hero p-10 text-center text-primary-foreground md:p-16">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl text-balance">
            Find the right solar system for your space.
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-primary shadow-soft hover:bg-card"
          >
            Get Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
