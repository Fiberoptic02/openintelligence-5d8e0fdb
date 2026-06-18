import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Database,
  Workflow,
  Brain,
  LineChart,
  Cpu,
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Sparkles,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Name — AI Automation & Business Intelligence" },
      {
        name: "description",
        content:
          "8+ years in industrial automation, now building AI-powered data pipelines, analytics, and workflow automation.",
      },
    ],
  }),
  component: Portfolio,
});

const NAME = "Jomar Battad";
const INITIALS = "JB";

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Build robust ETL pipelines with Python, SQL & MongoDB that turn raw operational data into trusted single sources of truth.",
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    desc: "Design dashboards and analytics models that surface the metrics decision-makers actually act on.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    desc: "Embed Claude and LLM workflows into operations — from document parsing to intelligent triage and reporting.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Stitch together Airtable, n8n, Zapier and APIs to eliminate manual handoffs across teams and systems.",
  },
  {
    icon: Cpu,
    title: "OT ↔ IT Integration",
    desc: "Bridge DCS, SCADA and PLC data into modern cloud stacks — leveraging deep Yokogawa, Triconex and Allen Bradley expertise.",
  },
  {
    icon: Sparkles,
    title: "Process Optimization",
    desc: "Replace spreadsheets and tribal knowledge with structured, automated systems that scale with the business.",
  },
];

const experience = [
  {
    role: "Senior Control Systems Engineer / Data Automation Lead",
    company: "Current Company",
    period: "20XX — Present",
    bullets: [
      "Spearheaded OT-to-business data integration using Python & SQL to centralize real-time DCS streams.",
      "Designed dynamic Excel-to-CSV logging frameworks, eliminating 40% of manual data-entry errors.",
      "Bridged engineering and ops via API automation across Microsoft 365 and Google Workspace.",
      "Maintained 99.9% uptime on critical telemetry across Yokogawa Centum VP and FujiView.",
    ],
  },
  {
    role: "Instrumentation & Control (I&C) Engineer",
    company: "Previous Company",
    period: "20XX — 20XX",
    bullets: [
      "Built preventative maintenance models from time-series sensor data, reducing failure rates.",
      "Programmed Allen Bradley PLC and Triconex logic loops for safety-critical operations.",
      "Delivered SCADA/HMI dashboards giving plant management actionable operational insight.",
    ],
  },
];

const works = [
  {
    tag: "Data Pipeline",
    title: "Real-Time OT Data Lake",
    desc: "Streamed DCS telemetry into a centralized MongoDB store with Python ETL, enabling cross-plant analytics for the first time.",
    stack: ["Python", "MongoDB", "AVEVA PI", "SQL"],
  },
  {
    tag: "AI Automation",
    title: "Claude-Powered Report Generator",
    desc: "Automated weekly engineering reports — Claude reads logs, summarizes anomalies, and drafts stakeholder briefs.",
    stack: ["Claude", "n8n", "Airtable"],
  },
  {
    tag: "BI Dashboard",
    title: "Asset Tracking Command Center",
    desc: "Replaced paper logs with a dynamic Airtable + dashboard system tracking conveyor instrumentation across sites.",
    stack: ["Airtable", "Zapier", "Excel"],
  },
  {
    tag: "Workflow",
    title: "Cross-Platform Sync Engine",
    desc: "Built an n8n workflow bridging Microsoft 365, Google Workspace and Slack, eliminating duplicate data entry.",
    stack: ["n8n", "APIs", "Slack"],
  },
];

const testimonials = [
  {
    quote:
      "Took our messy operational data and turned it into a real intelligence layer. The kind of engineer who actually ships.",
    name: "Plant Operations Manager",
    role: "Heavy Industry",
  },
  {
    quote:
      "Bridges the OT and IT worlds in a way most people can't. Pragmatic, fast, and obsessed with reliability.",
    name: "Director of Engineering",
    role: "Manufacturing",
  },
  {
    quote:
      "The AI workflows he built save our team dozens of hours every week. A clear ROI within a month.",
    name: "Process Improvement Lead",
    role: "Industrial Services",
  },
];

const certs = [
  "Certified Claude Professional — Anthropic",
  "Associate Data Analyst — DataCamp",
  "MongoDB Certified Developer",
  "Certified Airtable Builder",
];

function Portfolio() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Works />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-2 font-display text-sm font-bold text-primary transition-all group-hover:border-primary/60 group-hover:shadow-[0_0_20px_-4px_var(--primary)]">
        {INITIALS}
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
      </span>
      <span className="font-display text-base font-semibold tracking-tight">
        {NAME}
        <span className="text-primary">.</span>
      </span>
    </a>
  );
}

function Nav() {
  const links = [
    ["Services", "#services"],
    ["Experience", "#experience"],
    ["Work", "#work"],
    ["Testimonials", "#testimonials"],
    ["Contact", "#contact"],
  ];
  return (
    <header id="top" className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20 md:inline-flex"
        >
          Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for new automation projects
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Turning operational data into <span className="text-gradient">business intelligence</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          8+ years engineering industrial control systems — now building AI-powered
          data pipelines, dashboards, and automation workflows that move the needle.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
          >
            View selected work <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
          >
            Start a project
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
          {[
            ["8+", "Years engineering"],
            ["99.9%", "Telemetry uptime"],
            ["40%", "Errors eliminated"],
            ["4", "Pro certifications"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl font-bold text-foreground md:text-4xl">{n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="font-mono text-xs uppercase tracking-widest text-primary">{kicker}</div>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground">{desc}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        kicker="Services"
        title="What I build"
        desc="A modern stack — engineered with the rigor of someone who's kept safety-critical systems online."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all hover:border-primary/40 hover:bg-surface-2"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-all group-hover:bg-primary/20" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader kicker="Experience" title="Where I've delivered" />
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Certifications
            </h3>
            <ul className="mt-4 space-y-3">
              {certs.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ol className="relative space-y-8 border-l border-border pl-8">
          {experience.map((e) => (
            <li key={e.role} className="relative">
              <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-primary/40 bg-background">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {e.period}
              </div>
              <h3 className="mt-1.5 font-display text-xl font-semibold">{e.role}</h3>
              <div className="text-sm text-primary">{e.company}</div>
              <ul className="mt-4 space-y-2.5">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        kicker="Selected Work"
        title="Recent automation projects"
        desc="A glimpse of pipelines, dashboards, and AI workflows I've shipped."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {works.map((w) => (
          <article
            key={w.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all hover:border-primary/40"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">{w.tag}</span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold">{w.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {w.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader kicker="Testimonials" title="What collaborators say" />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="relative rounded-2xl border border-border bg-surface p-7"
          >
            <Quote className="h-7 w-7 text-primary/40" />
            <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 md:p-14">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div className="relative grid gap-12 lg:grid-cols-2">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary">Contact</div>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Let's automate <span className="text-gradient">something useful</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Have a data pipeline, dashboard, or AI workflow in mind? Tell me about it — I usually
              respond within a day.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a href="mailto:hello@yourname.com" className="flex items-center gap-3 text-foreground hover:text-primary">
                <Mail className="h-4 w-4 text-primary" /> hello@yourname.com
              </a>
              <a href="#" className="flex items-center gap-3 text-foreground hover:text-primary">
                <Linkedin className="h-4 w-4 text-primary" /> linkedin.com/in/yourname
              </a>
              <a href="#" className="flex items-center gap-3 text-foreground hover:text-primary">
                <Github className="h-4 w-4 text-primary" /> github.com/yourname
              </a>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-4"
          >
            <Field label="Name">
              <input
                required
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="you@company.com"
              />
            </Field>
            <Field label="Project">
              <textarea
                required
                rows={4}
                className="w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="What are you trying to automate?"
              />
            </Field>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  Send message <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <Logo />
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {NAME}. Built with intent.
        </div>
      </div>
    </footer>
  );
}
