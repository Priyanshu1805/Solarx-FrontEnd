import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Sun } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SOLAREX ENERGY — Free Solar Consultation in Nagpur" },
      { name: "description", content: "Request your free solar consultation. Our solar expert will contact you within 24 hours. Call +91 84593 56501 or fill the form." },
    ],
  }),
  component: ContactPage,
});

type SolarType = "Residential Solar" | "Commercial Solar" | "Agricultural Solar" | "Industrial Solar";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Nagpur",
    type: "Residential Solar" as SolarType,
    message: "",
  });

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Combine additional fields into the message to match the backend schema
    const payload = {
      name: form.name,
      email: form.email || "ankushpatle31@gmail.com", // Fallback to office email if empty
      message: `Phone: ${form.phone}\nCity: ${form.city}\nType: ${form.type}\n\nAdditional Message:\n${form.message}`
    };

    try {
      const response = await fetch('http://localhost:5000/api/form/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        setSubmitted(true);
        // Redirect user directly to WhatsApp
        const waNumber = "918459356501"; // Business WhatsApp Number
        const waMessage = `Hi, I am interested in a free solar consultation.\n\nName: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}\nType: ${form.type}\nMessage: ${form.message}`;
        const encodedMessage = encodeURIComponent(waMessage);
        window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, "_blank");
      } else {
        const result = await response.json();
        alert(result.message || 'Error submitting form');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to connect to the server. Is the backend running?');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-hero py-20 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/20 px-4 py-1.5 text-xs font-semibold backdrop-blur">
            <Sun className="h-3.5 w-3.5" /> Free Consultation
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-6xl">
            Let's Power Your Future Together
          </h1>
          <p className="mt-5 max-w-xl text-base opacity-90">
            Tell us about your space — our solar expert will design a custom system
            and savings plan, completely free.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* CONTACT INFO */}
          <aside className="space-y-5">
            <h2 className="font-display text-2xl font-bold">Reach out directly</h2>
            <p className="text-sm text-muted-foreground">
              Prefer to talk? We're available 7 days a week.
            </p>

            <div className="space-y-4 pt-4">
              {[
                { icon: Phone, label: "Phone", value: "+91 84593 56501", href: "tel:+918459356501" },
                { icon: Mail, label: "Email", value: "ankushpatle31@gmail.com", href: "mailto:ankushpatle31@gmail.com" },
                { icon: MapPin, label: "Office", value: "Nagpur, Maharashtra, India" },
                { icon: Clock, label: "Hours", value: "Mon–Sun · 9:00 AM – 8:00 PM" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block break-all text-sm font-medium text-foreground hover:text-primary">{c.value}</a>
                    ) : (
                      <div className="mt-1 text-sm font-medium text-foreground">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* FORM */}
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft md:p-10">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">Request received!</h3>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Our solar expert will contact you within 24 hours to schedule your
                  free consultation.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", city: "Nagpur", type: "Residential Solar", message: "" }); }}
                  className="mt-8 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <h2 className="font-display text-2xl font-bold">Request your free solar consultation</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fill the form and we'll respond within 24 hours.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" required>
                    <input required value={form.name} onChange={onChange("name")} className={inputCls} placeholder="Rajesh Sharma" />
                  </Field>
                  <Field label="Phone" required>
                    <input required type="tel" value={form.phone} onChange={onChange("phone")} className={inputCls} placeholder="+91 98xxxxxxxx" />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email">
                    <input type="email" value={form.email} onChange={onChange("email")} className={inputCls} placeholder="you@example.com" />
                  </Field>
                  <Field label="City" required>
                    <input required value={form.city} onChange={onChange("city")} className={inputCls} placeholder="Nagpur" />
                  </Field>
                </div>

                <Field label="Type of solar system" required>
                  <select required value={form.type} onChange={onChange("type")} className={inputCls}>
                    <option>Residential Solar</option>
                    <option>Commercial Solar</option>
                    <option>Agricultural Solar</option>
                    <option>Industrial Solar</option>
                  </select>
                </Field>

                <Field label="Tell us about your project">
                  <textarea rows={4} value={form.message} onChange={onChange("message")} className={inputCls} placeholder="Roof size, monthly bill, timeline..." />
                </Field>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" /> {isSubmitting ? 'Submitting...' : 'Request Free Consultation'}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by our solar expert.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}{required && <span className="text-primary"> *</span>}
      </span>
      {children}
    </label>
  );
}
