import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calculator, Phone, Sun, Zap, Leaf, Shield, TrendingDown, Star, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/solar-hero.jpg";
import homeImg from "@/assets/solar-home.jpg";
import cellsImg from "@/assets/solar-cells.jpg";
import residentialImg from "@/assets/solar-residential.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOLAREX ENERGY — Power Your Future Naturally | Nagpur Solar" },
      { name: "description", content: "Reduce your electricity bills by up to 90% with premium solar solutions from SOLAREX ENERGY. Free consultation in Nagpur, Maharashtra." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "2.5 MW", label: "Installed Capacity" },
  { value: "25 yr", label: "Panel Warranty" },
  { value: "90%", label: "Bill Reduction" },
];

const benefits = [
  { icon: TrendingDown, title: "Slash Your Bills", desc: "Cut electricity costs by up to 90% from day one." },
  { icon: Leaf, title: "Clean & Green", desc: "Reduce your carbon footprint with renewable energy." },
  { icon: Shield, title: "25-Year Warranty", desc: "Premium tier-1 panels backed by long-term protection." },
  { icon: Zap, title: "Quick Installation", desc: "Most residential systems live within 7 working days." },
];

const testimonials = [
  { name: "Rajesh Sharma", role: "Homeowner, Manish Nagar", quote: "My electricity bill dropped from ₹8,200 to just ₹450 per month. SOLAREX made the entire process effortless." },
  { name: "Anita Deshmukh", role: "Factory Owner, MIDC Hingna", quote: "We installed a 50kW system across our factory roof. Payback in under 4 years — best investment we've made." },
  { name: "Kishore Patil", role: "Farmer, Kalmeshwar", quote: "The solar pump runs my drip irrigation all day. No more diesel costs, no power cuts during the season." },
  { name: "Meena Kulkarni", role: "Shop Owner, Sitabuldi", quote: "Reliable team, transparent pricing, and the savings started from the very first month. Highly recommend." },
  { name: "Sunil Joshi", role: "Housing Society, Civil Lines", quote: "Our society of 48 flats switched to solar. Common-area bills are essentially zero now." },
  { name: "Pooja Agrawal", role: "Homeowner, Pratap Nagar", quote: "Priyanshu and his team are genuine professionals. They explained every component clearly before installing." },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Sun className="h-3.5 w-3.5" /> Nagpur's Trusted Solar Partner
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground text-balance md:text-7xl">
              Power Your Future <span className="text-primary">Naturally</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Slash your electricity bills by up to 90% with premium solar systems
              designed, installed and maintained by SOLAREX ENERGY — Nagpur's most
              trusted solar specialists.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
              >
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#savings"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary"
              >
                <Calculator className="h-4 w-4" /> Calculate Your Savings
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-primary md:text-3xl">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-hero blur-2xl opacity-40" />
            <img src={homeImg} alt="Solar-powered home in Nagpur" className="relative rounded-3xl shadow-soft" width={1536} height={1024} />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-4 md:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SAVINGS BANNER */}
      <section id="savings" className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-primary-foreground md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/40 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl text-balance">
                Save up to ₹1.2 Lakh every year.
              </h2>
              <p className="mt-4 max-w-md text-base opacity-90">
                A typical 5kW residential system pays for itself in 3–4 years and keeps
                producing free electricity for 25+ years.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-primary shadow-soft hover:bg-card"
              >
                Get My Savings Estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <img src={cellsImg} alt="Solar cells close-up" loading="lazy" width={1536} height={1024} className="rounded-2xl shadow-soft" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Process</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            From sunlight to savings in 4 steps
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            { n: "01", t: "Free Consultation", d: "Site visit and personalised savings report — no obligation." },
            { n: "02", t: "Custom Design", d: "System sized to your roof, usage and budget." },
            { n: "03", t: "Installation", d: "Certified engineers, premium components, 7-day turnaround." },
            { n: "04", t: "Ongoing AMC", d: "Annual maintenance keeps your system performing at peak." },
          ].map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6">
              <div className="font-display text-4xl font-bold text-primary/30">{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Loved across Nagpur</span>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                500+ families and businesses, one shared sun.
              </h2>
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US STRIP */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <img src={residentialImg} alt="Rooftop solar installation" loading="lazy" width={1536} height={1024} className="rounded-3xl shadow-soft" />
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Why SOLAREX</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Premium engineering, honest pricing.
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "MNRE-approved tier-1 panels & inverters",
                "In-house certified installation crews",
                "Transparent quotes — no hidden charges",
                "End-to-end paperwork & net-metering handled",
                "Dedicated AMC team for 25 years of uptime",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-soft md:p-16">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight md:text-5xl">
            Ready to switch to solar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Talk to a solar expert today. Free site visit, free quote, zero pressure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+918459356501"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft"
            >
              <Phone className="h-4 w-4" /> Call +91 84593 56501
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
