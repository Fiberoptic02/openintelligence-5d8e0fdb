import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  Download,
  AlertCircle,
} from "lucide-react";
import jomarPhoto from "@/assets/jomar.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jomar Battad — AI Automation & Business Intelligence" },
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
const JOB_TITLE = "AI Automation & Business Intelligence Engineer";
const EMAIL = "jdbattad02@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/jomar-battad-003459113/";
const GITHUB_URL = "https://fiberoptic02.github.com";
const RESUME_URL = "[[RESUME_PDF_URL]]";
// Formspree endpoint — replace [[FORMSPREE_FORM_ID]] with your real form id from formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/[[FORMSPREE_FORM_ID]]";

const services = [
  { icon: Database, title: "Data Engineering", desc: "Build robust ETL pipelines with Python, SQL & MongoDB that turn raw operational data into trusted single sources of truth." },
  { icon: LineChart, title: "Business Intelligence", desc: "Design dashboards and analytics models that surface the metrics decision-makers actually act on." },
  { icon: Brain, title: "AI Integration", desc: "Embed Claude and LLM workflows into operations — from document parsing to intelligent triage and reporting." },
  { icon: Workflow, title: "Workflow Automation", desc: "Stitch together Airtable, n8n, Zapier and APIs to eliminate manual handoffs across teams and systems." },
  { icon: Cpu, title: "OT ↔ IT Integration", desc: "Bridge DCS, SCADA and PLC data into modern cloud stacks — leveraging deep Yokogawa, Triconex and Allen Bradley expertise." },
  { icon: Sparkles, title: "Process Optimization", desc: "Replace spreadsheets and tribal knowledge with structured, automated systems that scale with the business." },
];

const experience = [
  {
    role: "Senior Control Systems Engineer / Data Automation Lead",
    company: "Oil and Gas",
    period: "[[JOB1_START_YEAR]] — Present",
    bullets: [
      "Spearheaded OT-to-business data integration using Python & SQL to centralize real-time DCS streams.",
      "Designed dynamic Excel-to-CSV logging frameworks, eliminating 40% of manual data-entry errors.",
      "Bridged engineering and ops via API automation across Microsoft 365 and Google Workspace.",
      "Maintained 99.9% uptime on critical telemetry across Yokogawa Centum VP and FujiView.",
    ],
  },
  {
    role: "Instrumentation & Control (I&C) Engineer",
    company: "Energy Power Plant",
    period: "Energy Power Plant— Energy Power Plant",
    bullets: [
      "Built preventative maintenance models from time-series sensor data, reducing failure rates.",
      "Programmed Allen Bradley PLC and Triconex logic loops for safety-critical operations.",
      "Delivered SCADA/HMI dashboards giving plant management actionable operational insight.",
    ],
  },
];

const works = [
  { tag: "Data Pipeline", title: "Real-Time OT Data Lake", desc: "Streamed DCS telemetry into a centralized MongoDB store with Python ETL, enabling cross-plant analytics for the first time.", stack: ["Python", "MongoDB", "AVEVA PI", "SQL"], link: "[[PROJECT_1_LINK]]", metric: "[[PROJECT_1_METRIC]]" },
  { tag: "AI Automation", title: "Claude-Powered Report Generator", desc: "Automated weekly engineering reports — Claude reads logs, summarizes anomalies, and drafts stakeholder briefs.", stack: ["Claude", "n8n", "Airtable"], link: "[[PROJECT_2_LINK]]", metric: "[[PROJECT_2_METRIC]]" },
  { tag: "BI Dashboard", title: "Asset Tracking Command Center", desc: "Replaced paper logs with a dynamic Airtable + dashboard system tracking conveyor instrumentation across sites.", stack: ["Airtable", "Zapier", "Excel"], link: "[[PROJECT_3_LINK]]", metric: "[[PROJECT_3_METRIC]]" },
  { tag: "Workflow", title: "Cross-Platform Sync Engine", desc: "Built an n8n workflow bridging Microsoft 365, Google Workspace and Slack, eliminating duplicate data entry.", stack: ["n8n", "APIs", "Slack"], link: "[[PROJECT_4_LINK]]", metric: "[[PROJECT_4_METRIC]]" },
];

const testimonials = [
  { quote: "Took our messy operational data and turned it into a real intelligence layer. The kind of engineer who actually ships.", name: "CjCubebe", role: "Plant Operations Manager — Heavy Industry" },
  { quote: "Bridges the OT and IT worlds in a way most people can't. Pragmatic, fast, and obsessed with reliability.", name: "[[TESTIMONIAL_2_NAME]]", role: "Director of Engineering — Manufacturing" },
  { quote: "The AI workflows he built save our team dozens of hours every week. A clear ROI within a month.", name: "[[TESTIMONIAL_3_NAME]]", role: "Process Improvement Lead — Industrial Services" },
];

const certs = [
  { name: "Certified Claude Professional — Anthropic", url: "[[CERT_1_VERIFY_URL]]" },
  { name: "Associate Data Analyst — DataCamp", url: "[[CERT_2_VERIFY_URL]]" },
  { name: "MongoDB Certified Developer", url: "[[CERT_3_VERIFY_URL]]" },
  { name: "Certified Airtable Builder", url: "[[CERT_4_VERIFY_URL]]" },
];

const stats: Array<[string, string, string | null]> = [
  ["8+", "Years engineering", "[[STAT_1_CONTEXT, e.g. 'in industrial control systems']]"],
  ["99.9%", "Telemetry uptime", "[[STAT_2_CONTEXT, e.g. 'across DCS systems, 2023–2025']]"],
  ["40%", "Errors eliminated", "[[STAT_3_CONTEXT, e.g. 'in manual data-entry workflows']]"],
  ["4", "Pro certifications", null],
];

const navLinks: Array<[string, string]> = [
  ["Services", "services"],
  ["Experience", "experience"],
  ["Work", "work"],
  ["Testimonials", "testimonials"],
  ["Contact", "contact"],
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
    <a href="#top" className="group flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
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

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function Nav() {
  const active = useScrollSpy(navLinks.map(([, id]) => id));
  return (
    <header id="top" className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map(([label, id]) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-sm text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
                <span
                  className={`pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-primary transition-transform ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary outline-none transition-all hover:bg-primary/20 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex"
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
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for new automation projects
            </div>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Turning operational data into <span className="text-gradient">business intelligence</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              8+ years engineering industrial control systems — now building AI-powered
              data pipelines, dashboards, and automation workflows that move the needle.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground outline-none transition-all hover:shadow-[var(--shadow-glow)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View selected work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground outline-none transition-colors hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Start a project
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground outline-none transition-colors hover:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-2 shadow-[var(--shadow-glow)]">
              <img
                src={jomarPhoto.url}
                alt={`${NAME}, ${JOB_TITLE}`}
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
          {stats.map(([n, l, ctx]) => (
            <div key={l}>
              <div className="font-display text-3xl font-bold text-foreground md:text-4xl">{n}</div>
              <div className="mt-1 text-sm text-foreground/80">{l}</div>
              {ctx && <div className="mt-1 text-xs text-muted-foreground">{ctx}</div>}
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
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
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
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
      <SectionHeader kicker="Experience" title="Where I've delivered" />
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Certifications
            </h3>
            <ul className="mt-4 space-y-3">
              {certs.map((c) => (
                <li key={c.name} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {c.name}
                  </a>
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
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
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
            <div className="mt-4 rounded-md border border-dashed border-border/70 bg-surface-2/50 px-3 py-2 font-mono text-[11px] text-muted-foreground">
              <span className="text-primary">Metric:</span> {w.metric}
            </div>
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
            <a
              href={w.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-primary outline-none transition-colors hover:text-primary/80 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View case study <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
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

type FormStatus = "idle" | "submitting" | "success" | "error";

function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const project = String(fd.get("project") ?? "").trim();

    const next: Record<string, string> = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (project.length < 20) next.project = "Please give at least 20 characters of detail.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (!res.ok) throw new Error("Network");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20">
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
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 rounded-sm text-foreground outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <Mail className="h-4 w-4 text-primary" /> {EMAIL}
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-sm text-foreground outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <Linkedin className="h-4 w-4 text-primary" /> LinkedIn
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-sm text-foreground outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <Github className="h-4 w-4 text-primary" /> GitHub
              </a>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-sm text-foreground outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <Download className="h-4 w-4 text-primary" /> Download Resume
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <input type="hidden" name="_subject" value={`Portfolio inquiry for ${NAME}`} />
            <input type="hidden" name="_to" value="[[FORM_DESTINATION_EMAIL]]" />
            <Field label="Name" error={errors.name} htmlFor="cf-name">
              <input
                id="cf-name"
                name="name"
                required
                aria-invalid={!!errors.name}
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email" error={errors.email} htmlFor="cf-email">
              <input
                id="cf-email"
                name="email"
                required
                type="email"
                aria-invalid={!!errors.email}
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                placeholder="you@company.com"
              />
            </Field>
            <Field label="Project (min. 20 characters)" error={errors.project} htmlFor="cf-project">
              <textarea
                id="cf-project"
                name="project"
                required
                rows={4}
                minLength={20}
                aria-invalid={!!errors.project}
                className="w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                placeholder="What are you trying to automate?"
              />
            </Field>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground outline-none transition-all hover:shadow-[var(--shadow-glow)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-70"
            >
              {status === "success" ? (
                <><CheckCircle2 className="h-4 w-4" /> Message sent</>
              ) : status === "submitting" ? (
                <>Sending…</>
              ) : (
                <>Send message <Send className="h-4 w-4" /></>
              )}
            </button>
            {status === "success" && (
              <div role="status" className="flex items-start gap-2 rounded-lg border border-primary/40 bg-primary/10 p-3 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Message sent — I'll get back to you within a day.
              </div>
            )}
            {status === "error" && (
              <div role="alert" className="flex items-start gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-foreground">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                Something went wrong sending your message. Email {EMAIL} directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  error,
  htmlFor,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  htmlFor?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
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
