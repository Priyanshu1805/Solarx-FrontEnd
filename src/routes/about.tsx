import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Heart, Sun } from "lucide-react";
import homeImg from "@/assets/solar-home.jpg";
import cellsImg from "@/assets/solar-cells.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SOLAREX ENERGY — Nagpur's Trusted Solar Partner" },
      {
        name: "description",
        content:
          "Meet the team behind SOLAREX ENERGY. Founded by Priyanshu Talvekar, we've helped 500+ families and businesses across Maharashtra switch to clean solar power.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To make premium solar energy accessible, affordable and reliable for every home, business and farm across central India — accelerating Maharashtra's transition to clean power.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "A Vidarbha powered entirely by the sun. Where every rooftop generates its own electricity, every farmer pumps water without diesel, and every business runs on clean energy.",
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "Honest pricing, premium components, and lifelong partnership. We don't disappear after the installation — we stay with you for the 25-year journey.",
  },
];

const team = [
  {
    name: "Priyanshu Talvekar",
    role: "Founder & CEO",
    bio: "An engineer turned solar entrepreneur, Priyanshu founded SOLAREX ENERGY with a single mission: bring world-class solar engineering to every Nagpur household. He personally oversees system design on every project.",
    initials: "PT",
  },
  {
    name: "Ankush Patle",
    role: "Senior Solar Consultant",
    bio: "With 8+ years in renewable energy, Ankush leads customer consultations and site assessments. He's helped over 300 families calculate exact savings before they commit to going solar.",
    initials: "AP",
  },
];

function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={homeImg}
            alt=""
            className="h-full w-full object-cover opacity-20"
            width={1536}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <Sun className="h-3.5 w-3.5" /> About Us
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance md:text-7xl">
            Nagpur's Trusted <span className="text-primary">Solar Energy</span> Partner
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Since our founding, SOLAREX ENERGY has helped 500+ homes, farms and businesses across
            Maharashtra harness the power of the sun — saving crores in electricity bills and
            offsetting thousands of tonnes of CO₂.
          </p>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Our Story
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Built for the long haul.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                SOLAREX ENERGY was born from a simple observation: Nagpur receives over 300 days of
                strong sunshine every year, yet most rooftops sit empty while electricity bills
                climb.
              </p>
              <p>
                We set out to change that — not by selling cheap kits, but by engineering premium
                solar systems that genuinely deliver 25+ years of clean power. Every system we
                install uses MNRE-approved tier-1 panels, certified inverters, and is backed by our
                in-house AMC team.
              </p>
              <p>
                Today, we're proud to be the solar partner of choice for hundreds of families across
                Manish Nagar, Civil Lines, Pratap Nagar, and the MIDC industrial belt of Hingna and
                Butibori.
              </p>
            </div>
          </div>
          <img
            src={cellsImg}
            alt="Solar panel cells"
            loading="lazy"
            width={1536}
            height={1024}
            className="rounded-3xl shadow-soft"
          />
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Leadership
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            The people behind your solar journey.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {team.map((m) => (
            <div key={m.name} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <div className="flex items-center gap-5">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-sun font-display text-xl font-bold text-primary-foreground">
                  {m.initials}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{m.name}</h3>
                  <p className="text-sm text-primary">{m.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-3xl bg-gradient-hero p-10 text-center text-primary-foreground md:p-16">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight md:text-5xl text-balance">
            Join the solar movement across Nagpur.
          </h2>
          <p className="mx-auto mt-4 max-w-xl opacity-90">
            Talk to our team and discover what solar can do for your home or business.
          </p>
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
