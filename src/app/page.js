'use client'

import { useState } from 'react'
import {
  Code, Database, Server, Shield, Rocket, CheckCircle2,
  Users, Bot, Building2, Wrench, Package, Mail,
  ArrowRight, ArrowUpRight, Cpu, Network, Sparkles,
  Globe, Layers, Terminal, Zap, Star, Quote,
  Calendar, Activity, GitBranch,
  Search, ClipboardList, PenTool, Bug, UploadCloud, LifeBuoy, ChevronDown
} from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ProjectModal from '@/components/ProjectModal'
import WhatsAppFAB from '@/components/WhatsAppFAB'
import Reveal from '@/components/Reveal'

/* ── Hero Component ── */
const Hero = ({ onProjectClick }) => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#F4F5F7]">
    <div className="dot-grid" />
    <div className="hero-noise" />
    <div className="hero-mesh" />

    {/* Ambient Glows */}
    <div className="absolute top-[-10%] right-[-5%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-[#00E5FF]/10 pointer-events-none blur-3xl" />
    <div className="absolute bottom-[5%] left-[-8%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-[#00E5FF]/5 pointer-events-none blur-3xl" />

    <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left — Copy */}
        <div className="lg:col-span-7">
          <div className="badge mb-6">
            <Sparkles size={12} className="text-[#0B132B]" /> Custom Software & MVP Engineering Studio
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-extrabold tracking-tight text-[#0B132B] leading-[1.1] mb-6">
            We build software products that{' '}
            <span className="bg-gradient-to-r from-[#00A8CC] to-[#00E5FF] bg-clip-text text-transparent italic">scale</span>{' '}
            & grow your business.
          </h1>

          <p className="text-[#64748B] text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            GetByTech designs, builds, and launches high-performance MVPs, custom software solutions, and dedicated developer teams led directly by senior principal engineers.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-16">
            <button className="btn btn-primary btn-lg" onClick={onProjectClick}>
              <Mail size={16} /> Start a Project <ArrowRight size={16} />
            </button>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-lg"
            >
              <Calendar size={16} /> Book a Consultation
            </a>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 pt-8 border-t border-[#0B132B]/10">
            {[
              ['5+', 'Years Experience'],
              ['15+', 'Products Shipped'],
              ['38%', 'Avg. Infra Bill Savings'],
              ['Founder-Led', 'Direct Engineering']
            ].map(([val, label]) => (
              <div key={label} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">{val}</span>
                <span className="text-[#64748B] text-xs md:text-sm font-mono tracking-wide mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Abstract product mockup */}
        <div className="hidden lg:block lg:col-span-5 relative">
          <div className="relative rounded-3xl border border-[#0B132B]/10 bg-white shadow-[0_30px_70px_-20px_rgba(11,19,43,0.25)] overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#0B132B]/10 bg-[#F4F5F7]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-[10px] font-mono text-[#64748B]">production · getbytech.app</span>
              <span className="ml-auto flex items-center gap-1 text-[10px] font-mono text-[#00A8CC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" /> live
              </span>
            </div>

            {/* Simulated code */}
            <div className="p-6 space-y-2.5 font-mono text-[11px] leading-relaxed">
              <div className="flex gap-2"><span className="text-[#64748B]/50 select-none">1</span><span className="text-[#00A8CC]">import</span><span className="text-[#0B132B]">{'{ createServer }'}</span><span className="text-[#00A8CC]">from</span><span className="text-[#64748B]">'core'</span></div>
              <div className="flex gap-2"><span className="text-[#64748B]/50 select-none">2</span><span className="h-3 w-40 rounded bg-[#0B132B]/8" /></div>
              <div className="flex gap-2"><span className="text-[#64748B]/50 select-none">3</span><span className="text-[#00A8CC]">const</span><span className="text-[#0B132B]">app</span><span className="text-[#64748B]">=</span><span className="text-[#0B132B]">createServer()</span></div>
              <div className="flex gap-2"><span className="text-[#64748B]/50 select-none">4</span><span className="h-3 w-28 rounded bg-[#0B132B]/8" /></div>
              <div className="flex gap-2"><span className="text-[#64748B]/50 select-none">5</span><span className="text-[#00A8CC]">app</span><span className="text-[#64748B]">.secure()</span><span className="text-[#64748B]">.scale()</span><span className="text-[#64748B]">.deploy()</span></div>
              <div className="flex gap-2"><span className="text-[#64748B]/50 select-none">6</span><span className="h-3 w-52 rounded bg-[#00E5FF]/15" /></div>
              <div className="flex gap-2"><span className="text-[#64748B]/50 select-none">7</span><span className="text-[#64748B]/60">// zero-downtime, every time</span></div>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 divide-x divide-[#0B132B]/10 border-t border-[#0B132B]/10">
              {[
                [Activity, '99.98%', 'Uptime'],
                [Zap, '42ms', 'Latency'],
                [GitBranch, '12/wk', 'Deploys'],
              ].map(([Icon, val, label]) => (
                <div key={label} className="p-4 text-center">
                  <Icon size={14} className="text-[#00A8CC] mx-auto mb-1.5" />
                  <div className="text-[#0B132B] text-sm font-extrabold">{val}</div>
                  <div className="text-[#64748B] text-[10px] font-mono mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating status card */}
          <div className="glass-panel absolute -bottom-6 -left-8 rounded-2xl px-4 py-3 flex items-center gap-3 max-w-[220px]">
            <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/15 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 size={16} className="text-[#00A8CC]" />
            </div>
            <div>
              <div className="text-[#0B132B] text-xs font-bold leading-tight">Deployed to production</div>
              <div className="text-[#64748B] text-[10px] font-mono mt-0.5">Build passed · 2m ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ── About & Founder Component ── */
const About = () => (
  <section id="about" className="py-24 bg-white/50 border-y border-[#0B132B]/10 relative scroll-mt-24">
    <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Pitch Column */}
        <Reveal className="lg:col-span-7 space-y-6">
          <div className="badge">
            <Users size={12} /> Who We Are
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
            We don't just write code — <br />
            <span className="text-[#00A8CC] italic">we engineer custom business growth solutions.</span>
          </h2>
          <p className="text-[#64748B] text-base md:text-lg leading-relaxed">
            At GetByTech, we work directly with founders and product teams to translate complex business ideas into robust, production-ready software systems. Our process is zero-overhead, highly collaborative, and laser-focused on rapid business value.
          </p>
        </Reveal>

        {/* Right Founder Column */}
        <Reveal delay={120} className="lg:col-span-5">
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00E5FF]/10 blur-xl" />

            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00E5FF] flex-shrink-0">
                <img src="/founder_photo.png" alt="Virendra" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-[#0B132B] text-lg font-bold">Virendra</h3>
                <div className="text-[#64748B] text-xs font-mono mt-0.5">Founder & Principal Engineer</div>
              </div>
            </div>

            <p className="text-[#64748B] text-sm md:text-base leading-relaxed italic mb-6">
              "I build scalable products for businesses and guide developers on their coding journeys. At GetByTech, we combine deep tech stack skills with clear communication to build systems that last, with zero middlemen."
            </p>

            <div className="space-y-3 pt-6 border-t border-[#0B132B]/10">
              <div className="flex items-center gap-3 text-[#64748B] text-xs font-mono">
                <Globe size={13} className="text-[#0B132B]" /> Working globally (US & Indian timezones)
              </div>
              <div className="flex items-center gap-3 text-[#64748B] text-xs font-mono">
                <CheckCircle2 size={13} className="text-[#00A8CC]" /> Direct Slack & Call availability
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  </section>
)

/* ── Services Section ── */
const Services = () => {
  const businessServices = [
    {
      icon: Rocket,
      title: "Software Product Development",
      desc: "End-to-end full stack development for custom web and SaaS applications. Clean architecture designed from day one to handle heavy business workloads.",
      tags: ["Next.js", "Node.js", "APIs", "Postgres"]
    },
    {
      icon: Building2,
      title: "MVP Building for Startups",
      desc: "Fast-track your validation process. We build launch-ready, high-fidelity Minimum Viable Products in weeks so you can secure customers or raise funding.",
      tags: ["Rapid Prototyping", "Auth", "Payments", "SEO"]
    },
    {
      icon: Globe,
      title: "Custom Web & App Solutions",
      desc: "Responsive web portals and fully integrated native or cross-platform mobile apps configured to perform beautifully across devices.",
      tags: ["React Native", "Flutter", "Tailwind CSS"]
    },
    {
      icon: Bot,
      title: "AI-Powered Automation & Agents",
      desc: "RAG chatbots, AI-driven analytics, and workflow automation pipelines that plug directly into your existing systems and cut manual busywork.",
      tags: ["RAG", "LangChain", "Workflow Automation", "LLM APIs"]
    },
    {
      icon: Cpu,
      title: "Product Scaling Strategies",
      desc: "Tackle bottlenecks. We optimize database queries, implement caching structures, configure microservices, and reduce bloated cloud bills.",
      tags: ["Redis", "ClickHouse", "AWS Cost Optimization"]
    },
  ]

  return (
    <section id="services" className="py-24 bg-[#F4F5F7] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-4" as="div">
          <div className="badge">
            <Package size={12} /> Core Offerings
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Comprehensive software development to build, scale, and <span className="text-[#00A8CC] italic">grow</span> your vision.
          </h2>
          <p className="text-[#64748B] text-base md:text-lg">
            We provide specialized engineering services to address startup constraints and support enterprise expansion objectives.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessServices.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={i * 70} className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center">
                    <Icon size={20} className="text-[#0B132B]" />
                  </div>
                  <h3 className="text-[#0B132B] text-xl font-bold leading-snug">{service.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{service.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Case Studies Section ── */
const CaseStudies = () => {
  const projects = [
    {
      title: "PayDash: Fintech Payment Core",
      tag: "SYSTEMS ENGINEERING",
      desc: "Redesigned a high-traffic payment processing architecture to handle peak flash sale traffic without dropping transactions.",
      img: "/portfolio_paydash.png",
      metrics: [
        { val: "38%", lbl: "Infrastructure Cost Cut" },
        { val: "42ms", lbl: "Avg Latency (Down from 450ms)" }
      ],
      tech: ["Node.js", "Fastify", "Redis", "NATS", "PostgreSQL"],
      demoUrl: "https://paydash-demo.GetByTech.com"
    },
    {
      title: "Nexlify AI: Enterprise RAG Agent",
      tag: "AI & AUTOMATION",
      desc: "Developed a high-accuracy Retrieval-Augmented Generation agent querying over 40,000 internal training and technical docs.",
      img: "/portfolio_nexlify.png",
      metrics: [
        { val: "3×", lbl: "Support Volume Handled" },
        { val: "85%", lbl: "Auto Query Resolution" }
      ],
      tech: ["FastAPI", "pgvector", "Redis", "OpenAI", "LangChain"],
      demoUrl: "https://nexlify-ai-demo.GetByTech.com"
    },
    {
      title: "SaaSify: Real-Time B2B Analytics",
      tag: "SAAS ARCHITECTURE",
      desc: "Built a robust time-series analytical engine capable of parsing and visualizing 10 million events per day in real-time.",
      img: "/portfolio_saasify.png",
      metrics: [
        { val: "10M+", lbl: "Events / Day Traversed" },
        { val: "<200ms", lbl: "Dashboard Load Time" }
      ],
      tech: ["Next.js", "ClickHouse", "Go", "AWS Lambda", "Tailwind CSS"],
      demoUrl: "https://saasify-demo.GetByTech.com"
    }
  ]

  return (
    <section id="case-studies" className="py-24 bg-[#F4F5F7] border-t border-[#0B132B]/10 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="badge">
              <Rocket size={12} /> Case Studies
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
              Production systems built for <br />
              <span className="text-[#00A8CC] italic">speed, security, & scale.</span>
            </h2>
          </div>
          <p className="text-[#64748B] text-base max-w-md">
            Explore our real-world projects showing how robust backend architecture, product design, and clean execution deliver measurable business outcomes.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <Reveal key={proj.title} delay={idx * 80} className="surface-card rounded-2xl overflow-hidden flex flex-col h-full group">
              <div className="h-48 overflow-hidden bg-slate-100 border-b border-[#0B132B]/10 relative">
                <img src={proj.img} alt={proj.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-wider text-[#0B132B] bg-[#00E5FF]/20 px-2.5 py-1 rounded font-bold uppercase">{proj.tag}</span>
                  <h3 className="text-[#0B132B] text-xl font-bold leading-snug">{proj.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{proj.desc}</p>

                  <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10">
                    {proj.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="text-[#0B132B] text-lg font-extrabold leading-tight">{m.val}</span>
                        <span className="text-[#64748B] text-[10px] font-medium mt-0.5">{m.lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-[#F4F5F7] border border-[#0B132B]/10 text-[10px] font-mono text-[#64748B]">{t}</span>
                    ))}
                  </div>
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary w-full text-xs py-2.5"
                  >
                    Explore Live Demo <ArrowUpRight size={13} className="text-[#00A8CC]" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Tech Stack Component ── */
const TechStack = () => {
  const stackCategories = [
    { icon: Code, title: "Frontend Frameworks", chips: ['React.js', 'Next.js', 'Tailwind CSS', 'Redux Toolkit'] },
    { icon: Server, title: "Backend Solutions", chips: ['Node.js', 'Express', 'Fastify', 'FastAPI', 'Laravel'] },
    { icon: Database, title: "Databases & Cache", chips: ['PostgreSQL', 'MongoDB', 'Redis Caching', 'Vector DB (pgvector)'] },
    { icon: Network, title: "Systems Architecture", chips: [
    'Modular Monolith',
    'Microservices',
    'Event-Driven Systems',
    'NATS',
    'Kafka'
  ] },
    { icon: Cpu, title: "Performance Scaling", chips: ['Horizontal Scaling', 'CDN Caching', 'DB Query Optimization', 'Load Balancing'] },
    { icon: Shield, title: "Security Protocols", chips: ['JWT / OAuth2', 'RBAC System', 'Rate Limiting', 'OWASP Standards'] }
  ]

  return (
    <section className="py-24 bg-[#F4F5F7] border-t border-[#0B132B]/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="badge">
            <Cpu size={12} /> Battle-Tested
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Our Stack Expertise
          </h2>
          <p className="text-[#64748B] text-sm md:text-base">
            We write production-ready code with technologies chosen for speed, developer maintainability, and infrastructure optimization.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((category, i) => {
            const Icon = category.icon
            return (
              <Reveal key={category.title} delay={i * 60} className="surface-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Icon size={16} className="text-[#0B132B]" />
                  <h3 className="text-[#0B132B] text-sm font-bold tracking-tight">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.chips.map(chip => (
                    <span key={chip} className="px-2.5 py-1 rounded-lg bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] text-[11px] font-mono hover:border-[#00E5FF] hover:text-[#0B132B] transition-colors duration-150">
                      {chip}
                    </span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Engagement Models (Pricing) ── */
const Pricing = ({ onProjectClick }) => {
  const models = [
    {
      title: "Project-Based",
      badge: "Fixed Scope",
      desc: "Perfect for building defined MVPs, custom software integrations, or standalone system migrations.",
      cost: "Custom Scope",
      period: "per project",
      features: [
        "Complete architecture blueprinting",
        "Rigorous scope & timeline mapping",
        "Direct founder-led execution",
        "Comprehensive integration testing",
        "30 days post-launch support"
      ],
      btnText: "Request Scope Estimate"
    },
    {
      title: "Monthly Retainer",
      badge: "Dedicated Developer",
      desc: "Perfect for scaling startups needing ongoing feature development, cloud scaling, or fractional CTO support.",
      cost: "$4,500",
      period: "/ month",
      popular: true,
      features: [
        "Dedicated senior software engineer",
        "Slack integration & weekly syncs",
        "Continuous security review",
        "Flexible, cancel-anytime terms"
      ],
      btnText: "Hire on Retainer"
    },
    {
      title: "Consulting Call",
      badge: "1:1 Advisory",
      desc: "Perfect for engineering audits, backend design advice, database debugging, or system scaling reviews.",
      cost: "$250",
      period: "/ hour",
      features: [
        "Focused 60-minute video session",
        "Pre-call codebase/brief review",
        "Architectural scaling advice",
        "Detailed post-call action summary",
        "Full session audio recording"
      ],
      btnText: "Book a Consultation"
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-[#F4F5F7] border-t border-[#0B132B]/10 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="badge">
            <Layers size={12} /> Pricing Models
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
            How we can work together.
          </h2>
          <p className="text-[#64748B] text-base">
            Transparent engagement structures designed for clarity, alignment of goals, and high developer efficiency.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {models.map((model, idx) => (
            <Reveal
              key={model.title}
              delay={idx * 90}
              className={`p-8 rounded-2xl flex flex-col justify-between relative bg-white border transition-all duration-300 ${model.popular ? 'border-[#00E5FF] shadow-[0_20px_45px_-15px_rgba(0,229,255,0.25)] md:-translate-y-3' : 'border-[#0B132B]/10 shadow-[0_1px_2px_rgba(11,19,43,0.04),0_8px_24px_-12px_rgba(11,19,43,0.08)] hover:-translate-y-1'}`}
            >
              {model.popular && (
                <span className="absolute top-4 right-4 bg-[#00E5FF] text-[#0B132B] text-[10px] font-mono font-bold tracking-wide uppercase px-2.5 py-1 rounded-full shadow-sm">
                  Most Flexible
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-[#64748B] text-xs font-mono tracking-wide uppercase">{model.badge}</span>
                  <h3 className="text-[#0B132B] text-2xl font-bold leading-tight mt-1">{model.title}</h3>
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed">{model.desc}</p>
                <div className="flex items-baseline gap-1 text-[#0B132B]">
                  <span className="text-3xl md:text-4xl font-extrabold">{model.cost}</span>
                  <span className="text-[#64748B] text-xs">{model.period}</span>
                </div>

                <ul className="space-y-3 pt-6 border-t border-[#0B132B]/10 list-none">
                  {model.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-[#0B132B] text-sm leading-snug">
                      <CheckCircle2 size={16} className="text-[#00A8CC] mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button
                  onClick={onProjectClick}
                  className={`btn w-full btn-md ${model.popular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {model.btnText}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Testimonials Component ── */
const Testimonials = () => {
  const list = [
    {
      quote: "We were hemorrhaging money on over-provisioned infrastructure. GetByTech analyzed our queries, introduced caching layers, and simplified our data models. Our AWS bill dropped by 38% immediately. Outstanding technical capability.",
      author: "Rohan Kapoor",
      role: "CTO, PayDash (Fintech SaaS)",
      initials: "RK"
    },
    {
      quote: "GetByTech built our internal RAG assistant in less than a month. It queries over 40,000 documentation nodes and answers core product support queries with high accuracy. Our customer team now scales easily.",
      author: "Arjun Pillai",
      role: "VP Product, Nexlify (B2B Enterprise)",
      initials: "AP"
    }
  ]

  return (
    <section className="py-24 bg-[#F4F5F7] border-t border-[#0B132B]/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="badge">
              <Star size={12} /> Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
              Trusted by tech founders who prioritize <span className="text-[#00A8CC] italic">execution.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {list.map((t, i) => (
            <Reveal key={t.author} delay={i * 100} className="surface-card p-8 flex flex-col justify-between relative">
              <Quote size={28} className="text-[#00E5FF]/20 absolute top-6 right-6 fill-[#00E5FF]/5" />
              <p className="text-[#0B132B] text-base leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00A8CC] to-[#0B132B] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[#0B132B] text-base font-bold">{t.author}</div>
                  <div className="text-[#64748B] text-xs font-mono mt-0.5">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA Component ── */
const CTA = ({ onProjectClick }) => (
  <section className="py-24 bg-[#F4F5F7] border-t border-[#0B132B]/10 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#00E5FF]/8 pointer-events-none blur-3xl" />
    <Reveal className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
      <div className="badge">
        <Mail size={11} /> Let's Connect
      </div>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
        Let's Build Something <span className="text-[#00A8CC] italic">That Lasts</span>
      </h2>
      <p className="text-[#64748B] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
        Work directly with custom software and MVP engineering specialists. Build a reliable technical foundation with zero communication layers.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="btn btn-primary btn-md" onClick={onProjectClick}>
          <Mail size={14} /> Start a Project <ArrowRight size={14} />
        </button>
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary btn-md"
        >
          <Calendar size={14} /> Book a Call
        </a>
      </div>
    </Reveal>
  </section>
)

/* ── How We Work Section (Process Flow Diagram) ── */
const HowWeWork = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We dig into your business goals, users, and technical constraints to build a clear, shared understanding of what we're creating and why.",
      icon: Search
    },
    {
      num: "02",
      title: "Planning",
      desc: "Detailed scoping, architecture blueprinting, and sprint roadmaps so priorities, timelines, and deliverables are locked in before development starts.",
      icon: ClipboardList
    },
    {
      num: "03",
      title: "UI/UX Design",
      desc: "Wireframes and high-fidelity prototypes that map every user flow, validated with you before a single line of production code is written.",
      icon: PenTool
    },
    {
      num: "04",
      title: "Development",
      desc: "Clean, modular, production-ready code built in focused sprints by senior engineers, with regular check-ins so you always see real progress.",
      icon: Code
    },
    {
      num: "05",
      title: "Testing",
      desc: "Rigorous QA across functionality, performance, and security — unit, integration, and end-to-end tests catch issues before your users ever do.",
      icon: Bug
    },
    {
      num: "06",
      title: "Deployment",
      desc: "Zero-downtime releases to production with CI/CD pipelines, monitoring, and rollback plans in place from day one.",
      icon: UploadCloud
    },
    {
      num: "07",
      title: "Support & Maintenance",
      desc: "Ongoing monitoring, bug fixes, and feature iterations post-launch, so your product keeps improving as your business grows.",
      icon: LifeBuoy
    }
  ]

  return (
    <section className="py-24 bg-white/50 border-t border-y border-[#0B132B]/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="badge">
            <Wrench size={12} className="text-[#00A8CC]" /> Our Process
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
            How We Work
          </h2>

          {/* Prominent Banner Statement */}
          <div className="py-6 px-8 rounded-2xl bg-[#F4F5F7] border border-[#0B132B]/10 max-w-2xl mx-auto shadow-sm">
            <p className="text-lg md:text-xl font-extrabold text-[#0B132B] italic">
              "We don't deliver features — <br/>
              we deliver systems that generate value."
            </p>
          </div>
        </Reveal>

        {/* Flow diagram */}
        <div className="relative max-w-4xl mx-auto mt-20">
          {/* Connecting rail */}
          <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 timeline-rail" />
          <div className="md:hidden absolute left-7 -translate-x-1/2 top-2 bottom-2 w-px timeline-rail" />

          {steps.map((step, idx) => {
            const Icon = step.icon
            const isLeft = idx % 2 === 0
            const isLast = idx === steps.length - 1

            const cardContent = (mobile) => (
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-[#0B132B] text-lg font-bold">{step.title}</h3>
                  {mobile && (
                    <span className="text-[10px] font-mono text-[#00A8CC] font-bold tracking-wider">{step.num}</span>
                  )}
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed">{step.desc}</p>
              </div>
            )

            return (
              <Reveal
                key={step.title}
                delay={idx * 90}
                className={`relative ${isLast ? 'pb-0' : 'pb-14 md:pb-16'}`}
              >
                <div className="flex md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-10 gap-5 items-start">
                  {/* Desktop — left slot */}
                  <div className="hidden md:flex md:justify-end md:pt-2.5">
                    {isLeft && <div className="text-right max-w-sm">{cardContent(false)}</div>}
                  </div>

                  {/* Node (shared) */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-2 relative z-10 w-14">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#00E5FF] shadow-[0_8px_24px_-8px_rgba(0,229,255,0.45)] flex items-center justify-center">
                      <Icon size={20} className="text-[#0B132B]" />
                    </div>
                    <span className="hidden md:inline-block text-[10px] font-mono text-[#00A8CC] font-bold tracking-wider">
                      {step.num}
                    </span>
                  </div>

                  {/* Desktop — right slot */}
                  <div className="hidden md:flex md:pt-2.5">
                    {!isLeft && <div className="max-w-sm">{cardContent(false)}</div>}
                  </div>

                  {/* Mobile content */}
                  <div className="md:hidden pt-2.5 flex-1">{cardContent(true)}</div>
                </div>

                {/* Connector arrow to next step */}
                {!isLast && (
                  <>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-1.5 z-10 w-6 h-6 rounded-full bg-[#F4F5F7] border border-[#0B132B]/10 items-center justify-center">
                      <ChevronDown size={12} className="text-[#00A8CC]" />
                    </div>
                    <div className="md:hidden absolute left-7 -translate-x-1/2 bottom-1.5 z-10 w-6 h-6 rounded-full bg-[#F4F5F7] border border-[#0B132B]/10 flex items-center justify-center">
                      <ChevronDown size={12} className="text-[#00A8CC]" />
                    </div>
                  </>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Main Export Component ── */
export default function HomePage() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  const openProject = () => setIsProjectModalOpen(true)
  const closeProject = () => setIsProjectModalOpen(false)

  return (
    <div className="bg-[#F4F5F7] min-h-screen text-[#0B132B] selection:bg-[#00E5FF]/30 selection:text-[#0B132B] font-sans antialiased">
      <Nav variant="business" onProjectClick={openProject} />
      <main>
        <Hero onProjectClick={openProject} />
        <About />
        <TechStack />
        <HowWeWork />
        <Services />
        <CaseStudies />
        <Pricing onProjectClick={openProject} />
        <Testimonials />
        <CTA onProjectClick={openProject} />
      </main>
      <Footer variant="business" />
      {isProjectModalOpen && <ProjectModal onClose={closeProject} defaultType="Business" />}
      <WhatsAppFAB />
    </div>
  )
}
