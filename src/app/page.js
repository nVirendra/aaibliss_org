'use client'

import { useState } from 'react'
import {
  Code, Database, Server, Shield, Rocket, CheckCircle2,
  Users, Bot, Building2, Wrench, Package, Target, Mail,
  ArrowRight, ArrowUpRight, Cpu, Network, ChevronRight, Sparkles,
  Globe, Layers, Terminal, Zap, LineChart, BookOpen, Menu, X, Star, Quote,
  Youtube, Linkedin, Github, Calendar, Phone
} from 'lucide-react'

/* ── Nav Component ── */
const Nav = ({ onProjectClick }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-20 bg-[#F4F5F7]/95 backdrop-blur-xl border-b border-[#0B132B]/10">
        <div className="flex items-center">
          <img src="/get-by-tech-final-logo.png" alt="GetByTech" className="h-8 w-auto" />
        </div>
        
        <ul className="hidden md:flex items-center gap-1 list-none">
          {[
            ['#services', 'Services'],
            ['#about', 'About Us'],
            ['#case-studies', 'Case Studies'],
            ['#learners', 'For Learners'],
            ['#pricing', 'Pricing']
          ].map(([href, label]) => (
            <li key={label}>
              <a href={href} className="px-4 py-2 rounded-lg text-[#64748B] hover:text-[#0B132B] text-sm font-medium transition-colors duration-200">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button 
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00E5FF] hover:bg-[#00E5FF]/85 text-[#0B132B] font-semibold text-sm transition-all duration-200 shadow-md shadow-[#00E5FF]/10 active:scale-95 cursor-pointer animate-pulse"
            onClick={onProjectClick}
          >
            <Mail size={14} /> Start a Project
          </button>
          
          <button 
            onClick={() => setOpen(o => !o)} 
            className="md:hidden p-2 rounded-lg text-[#64748B] hover:text-[#0B132B] transition-colors cursor-pointer" 
            id="hamburger"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* --Mobile Drawer-- */}
      {open && (
        <div className="fixed top-20 left-0 right-0 z-40 bg-[#F4F5F7]/95 backdrop-blur-2xl border-b border-[#0B132B]/10 p-6 flex flex-col gap-3 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          {[
            ['#services', 'Services'],
            ['#about', 'About Us'],
            ['#case-studies', 'Case Studies'],
            ['#learners', 'For Learners'],
            ['#pricing', 'Pricing']
          ].map(([href, label]) => (
            <a
              key={label} 
              href={href} 
              className="px-4 py-3 rounded-lg text-[#64748B] hover:text-[#0B132B] text-base font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <button 
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 mt-2 rounded-xl bg-[#00E5FF] hover:bg-[#00E5FF]/85 text-[#0B132B] font-semibold text-base transition-all duration-200"
            onClick={() => { setOpen(false); onProjectClick(); }}
          >
            <Mail size={16} /> Start a Project
          </button>
        </div>
      )}
    </>
  )
}

/* ── Hero Component ── */
const Hero = ({ onProjectClick }) => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#F4F5F7]">
    <div className="dot-grid" />
    <div className="hero-noise" />
    
    {/* Ambient Glows */}
    <div className="absolute top-[-10%] right-[-5%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-[#00E5FF]/10 pointer-events-none blur-3xl" />
    <div className="absolute bottom-[5%] left-[-8%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-[#00E5FF]/5 pointer-events-none blur-3xl" />

    <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 w-full">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#0B132B] text-xs font-semibold tracking-wide mb-6">
        <Sparkles size={12} className="text-[#0B132B] animate-pulse" /> Custom Software & MVP Engineering Studio
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[#0B132B] leading-[1.1] mb-6 max-w-4xl">
        We build software products that <span className="text-[#00A8CC] italic">scale</span> & grow your business.
      </h1>

      <p className="text-[#64748B] text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
        GetByTech designs, builds, and launches high-performance MVPs, custom software solutions, and dedicated developer teams led directly by senior principal engineers.
      </p>

      <div className="flex flex-wrap gap-4 items-center mb-16">
        <button 
          className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#00E5FF] hover:bg-[#00E5FF]/85 text-[#0B132B] font-semibold text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#00E5FF]/20 cursor-pointer"
          onClick={onProjectClick}
        >
          <Mail size={16} /> Start a Project <ArrowRight size={16} />
        </button>
        <a 
          href="https://calendly.com/" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#0B132B] border border-slate-200 shadow-sm font-semibold text-base transition-all duration-200"
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
  </section>
)

/* ── About & Founder Component ── */
const About = () => (
  <section id="about" className="py-24 bg-white/50 border-y border-[#0B132B]/10 relative scroll-mt-10">
    <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Pitch Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] text-xs font-mono">
            <Users size={12} /> Who We Are
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
            We don't just write code — <br />
            <span className="text-[#00A8CC] italic">we engineer custom business growth solutions.</span>
          </h2>
          <p className="text-[#64748B] text-base md:text-lg leading-relaxed">
            At GetByTech, we work directly with founders and product teams to translate complex business ideas into robust, production-ready software systems. Our process is zero-overhead, highly collaborative, and laser-focused on rapid business value.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              [Layers, 'System Architecture'],
              [Server, 'Scalable Backend APIs'],
              [Shield, 'OWASP Security Hardening'],
              [Cpu, 'Performance Tuning'],
              [Bot, 'AI Agent Automations'],
              [Network, 'Cloud Architecture']
            ].map(([Icon, label]) => (
              <div key={label} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#0B132B]/10 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={14} className="text-[#0B132B]" />
                </div>
                <span className="text-[#0B132B] text-sm font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Founder Column */}
        <div className="lg:col-span-5">
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00E5FF]/10 blur-xl" />
            
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00E5FF] flex-shrink-0">
                <img src="/founder_photo.png" alt="Virendra" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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
        </div>

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
      icon: Users,
      title: "Dedicated Developer Hiring",
      desc: "Scale your team instantly. Access senior, vetted engineers who integrate directly into your workflows to accelerate product feature delivery.",
      tags: ["Senior Talents", "Staff Augmentation", "Slack Integration"]
    },
    {
      icon: Globe,
      title: "Custom Web & App Solutions",
      desc: "Responsive web portals and fully integrated native or cross-platform mobile apps configured to perform beautifully across devices.",
      tags: ["React Native", "Flutter", "Tailwind CSS"]
    },
    {
      icon: Cpu,
      title: "Product Scaling Strategies",
      desc: "Tackle bottlenecks. We optimize database queries, implement caching structures, configure microservices, and reduce bloated cloud bills.",
      tags: ["Redis", "ClickHouse", "AWS Cost Optimization"]
    },
    {
      icon: LineChart,
      title: "Client Acquisition & Growth Tools",
      desc: "Engines to grow your company. We design high-converting lead loops, automated SEO funnels, analytics tooling, and digital marketing tech setups.",
      tags: ["SEO Frameworks", "Lead Gen Tools", "Metric Tracking"]
    }
  ]

  return (
    <section id="services" className="py-24 bg-[#F4F5F7] scroll-mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0B132B]/10 text-[#64748B] text-xs font-mono">
            <Package size={12} /> Core Offerings
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Comprehensive software development to build, scale, and <span className="text-[#00A8CC] italic">grow</span> your vision.
          </h2>
          <p className="text-[#64748B] text-base md:text-lg">
            We provide specialized engineering services to address startup constraints and support enterprise expansion objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessServices.map((service, i) => {
            const Icon = service.icon
            return (
              <div key={i} className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-full hover:scale-[1.02] transition-transform duration-300">
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
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── For Learners Section (Secondary / Credibility Builder) ── */
const Learners = () => {
  const learningBlocks = [
    {
      icon: Code,
      title: "Programming Tutorials",
      desc: "Step-by-step technical guides and structural patterns for modern software stacks. We write about what we learn building actual customer software."
    },
    {
      icon: Wrench,
      title: "Real-World Projects",
      desc: "Learn by building production-ready clones, microservices, and AI utilities. Access architectural reviews that mirror real-world systems."
    },
    {
      icon: Code,
      title: "Web & Mobile Development",
      desc: "Deep dives into React, Next.js, FastAPI, Node.js, and mobile design patterns. Establish robust foundations that bypass initial developer pitfalls."
    },
    {
      icon: Bot,
      title: "AI, APIs & Latest Tech",
      desc: "Tutorials on integrating Large Language Models (LLMs), pgvector databases, LangChain pipelines, and setting up secure third-party APIs."
    },
    {
      icon: Target,
      title: "Career Guidance in Tech",
      desc: "Guidance on resume formatting, building high-conversion portfolios, developer interview structures, and accelerating progression to senior roles."
    }
  ]

  return (
    <section id="learners" className="py-24 bg-[#F4F5F7] border-t border-[#0B132B]/10 scroll-mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0B132B]/10 text-[#64748B] text-xs font-mono">
              <BookOpen size={12} className="text-[#00A8CC]" /> For Learners
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
              We train the next generation of <span className="text-[#00A8CC] italic">engineers.</span>
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed">
              At GetByTech, we maintain deep technical mastery by constantly writing training curricula and sharing real-world software templates with developers globally. Our dedication to learning ensures that the systems we build for our clients utilize the most optimized, up-to-date architectural patterns.
            </p>
            <div className="pt-4">
              <a 
                href="https://calendly.com/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#0B132B] hover:text-[#00E5FF] font-bold border-b-2 border-[#00E5FF] pb-0.5 transition-colors group"
              >
                Book a 1:1 Career Guidance Call <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#00E5FF]" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {learningBlocks.map((block, i) => {
              const Icon = block.icon
              return (
                <div key={i} className="p-6 rounded-2xl bg-white border border-[#0B132B]/10 shadow-sm space-y-3 hover:border-[#00E5FF]/40 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center">
                    <Icon size={16} className="text-[#0B132B]" />
                  </div>
                  <h3 className="text-[#0B132B] text-base font-bold leading-snug">{block.title}</h3>
                  <p className="text-[#64748B] text-xs leading-relaxed">{block.desc}</p>
                </div>
              )
            })}
          </div>
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
    <section id="case-studies" className="py-24 bg-[#F4F5F7] border-t border-[#0B132B]/10 scroll-mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0B132B]/10 text-[#64748B] text-xs font-mono">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full hover:scale-[1.02] transition-transform duration-300 group bg-white">
              <div className="h-48 overflow-hidden bg-slate-100 border-b border-[#0B132B]/10 relative">
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-[#0B132B] border border-slate-200 text-xs font-semibold shadow-sm transition-colors"
                  >
                    Explore Live Demo <ArrowUpRight size={13} className="text-[#00E5FF]" />
                  </a>
                </div>
              </div>
            </div>
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
    { icon: Network, title: "Systems Architecture", chips: ['Microservices', 'Event-Driven Systems', 'NATS', 'Kafka Message Broker'] },
    { icon: Cpu, title: "Performance Scaling", chips: ['Horizontal Scaling', 'CDN Caching', 'DB Query Optimization', 'Load Balancing'] },
    { icon: Shield, title: "Security Protocols", chips: ['JWT / OAuth2', 'RBAC System', 'Rate Limiting', 'OWASP Standards'] }
  ]

  return (
    <section className="py-24 bg-[#F4F5F7] border-t border-[#0B132B]/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0B132B]/10 text-[#64748B] text-xs font-mono">
            <Cpu size={12} /> Battle-Tested
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Our Stack Expertise
          </h2>
          <p className="text-[#64748B] text-sm md:text-base">
            We write production-ready code with technologies chosen for speed, developer maintainability, and infrastructure optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((category, i) => {
            const Icon = category.icon
            return (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#0B132B]/10 shadow-sm space-y-4">
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
              </div>
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
    <section id="pricing" className="py-24 bg-[#F4F5F7] border-t border-[#0B132B]/10 scroll-mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0B132B]/10 text-[#64748B] text-xs font-mono">
            <Layers size={12} /> Pricing Models
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
            How we can work together.
          </h2>
          <p className="text-[#64748B] text-base">
            Transparent engagement structures designed for clarity, alignment of goals, and high developer efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {models.map((model, idx) => (
            <div 
              key={idx} 
              className={`glass-panel p-8 rounded-2xl flex flex-col justify-between relative bg-white ${model.popular ? 'border-[#00E5FF] shadow-[0_10px_35px_rgba(0,229,255,0.08)]' : ''}`}
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
                  className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${model.popular ? 'bg-[#00E5FF] hover:bg-[#00E5FF]/85 text-[#0B132B] shadow-lg shadow-[#00E5FF]/15' : 'bg-white hover:bg-slate-50 text-[#0B132B] border border-slate-200 shadow-sm'}`}
                >
                  {model.btnText}
                </button>
              </div>
            </div>
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
      role: "CTO, PayDash (Fintech SaaS)"
    },
    {
      quote: "GetByTech built our internal RAG assistant in less than a month. It queries over 40,000 documentation nodes and answers core product support queries with high accuracy. Our customer team now scales easily.",
      author: "Arjun Pillai",
      role: "VP Product, Nexlify (B2B Enterprise)"
    }
  ]

  return (
    <section className="py-24 bg-[#F4F5F7] border-t border-[#0B132B]/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0B132B]/10 text-[#64748B] text-xs font-mono">
              <Star size={12} /> Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
              Trusted by tech founders who prioritize <span className="text-[#00A8CC] italic">execution.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {list.map((t, i) => (
            <div key={i} className="glass-panel p-8 rounded-2xl flex flex-col justify-between relative bg-white">
              <Quote size={28} className="text-[#00E5FF]/20 absolute top-6 right-6 fill-[#00E5FF]/5" />
              <p className="text-[#0B132B] text-base leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <div className="text-[#0B132B] text-base font-bold">{t.author}</div>
                <div className="text-[#64748B] text-xs font-mono mt-1">{t.role}</div>
              </div>
            </div>
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
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#0B132B] text-xs font-semibold">
        <Mail size={11} /> Let's Connect
      </div>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
        Let's Build Something <span className="text-[#00A8CC] italic">That Lasts</span>
      </h2>
      <p className="text-[#64748B] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
        Work directly with custom software and MVP engineering specialists. Build a reliable technical foundation with zero communication layers.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button 
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00E5FF] hover:bg-[#00E5FF]/85 text-[#0B132B] font-semibold text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-[#00E5FF]/15"
          onClick={onProjectClick}
        >
          <Mail size={14} /> Start a Project <ArrowRight size={14} />
        </button>
        <a 
          href="https://calendly.com/" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0B132B] border border-slate-200 shadow-sm font-semibold text-sm transition-all duration-200"
        >
          <Calendar size={14} /> Book a Call
        </a>
      </div>
    </div>
  </section>
)

/* ── SocialIcon Component ── */
const SocialIcon = ({ icon: Icon, href }) => (
  <a 
    href={href} 
    className="flex items-center justify-center w-9 h-9 rounded-full bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] hover:text-[#0B132B] hover:border-[#00E5FF] hover:bg-[#00E5FF]/15 transition-all duration-200"
  >
    <Icon size={16} />
  </a>
)

/* ── Footer Component ── */
const Footer = () => (
  <footer className="bg-white border-t border-[#0B132B]/10 py-16">
    <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-start justify-between gap-10">
      <div className="space-y-4">
        <div className="flex items-center">
          <img src="/get-by-tech-final-logo.png" alt="GetByTech" className="h-7 w-auto" />
        </div>
        <div className="space-y-2 text-xs md:text-sm text-[#64748B]">
          <a href="mailto:hello@GetByTech.com" className="flex items-center gap-2 hover:text-[#0B132B] transition-colors">
            <Mail size={14} className="text-[#64748B]" /> hello@GetByTech.com
          </a>
          <a href="tel:+919183298985" className="flex items-center gap-2 hover:text-[#0B132B] transition-colors">
            <Phone size={14} className="text-[#64748B]" /> +91 9183298985
          </a>
          <div className="flex items-center gap-2 text-[#64748B]">
            <Globe size={14} /> Based in India · Working across Global Timezones
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-start md:items-end">
        <div className="flex gap-3">
          <SocialIcon icon={Github} href="#" />
          <SocialIcon icon={Linkedin} href="#" />
          <SocialIcon icon={Youtube} href="#" />
        </div>
        <div className="flex gap-2">
          {['Build', 'Scale', 'Staff'].map(t => (
            <span key={t} className="px-2 py-0.5 rounded bg-[#F4F5F7] border border-[#0B132B]/10 text-[10px] font-mono text-[#64748B]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
    
    <div className="max-w-6xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-[#0B132B]/10 text-center">
      <p className="text-[#64748B]/60 text-xs font-mono">© 2026 GetByTech · Custom Software & MVP Engineering</p>
    </div>
  </footer>
)

/* ── Project Modal Component ── */
const ProjectModal = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [inquiryType, setInquiryType] = useState('Business') // 'Business' or 'Learner'

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B132B]/40 backdrop-blur-md overflow-y-auto">
      <div className="bg-white border border-[#0B132B]/15 rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl shadow-[#0B132B]/10 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] hover:text-[#0B132B] transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="p-8 border-b border-[#0B132B]/10 flex-shrink-0 bg-[#F4F5F7]/50">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            Start a <span className="text-[#00A8CC] italic">Conversation</span>
          </h3>
          <p className="text-[#64748B] text-sm mt-2">
            Let us know what you are looking for. We will respond within 24 hours.
          </p>

          {/* Toggle Type Selector */}
          <div className="flex gap-2 p-1 bg-[#F4F5F7] border border-[#0B132B]/10 rounded-xl mt-6">
            <button 
              type="button" 
              onClick={() => setInquiryType('Business')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${inquiryType === 'Business' ? 'bg-[#00E5FF] text-[#0B132B] shadow-sm' : 'text-[#64748B] hover:text-[#0B132B] bg-transparent'}`}
            >
              Build Product / Hire Developers
            </button>
            <button 
              type="button" 
              onClick={() => setInquiryType('Learner')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${inquiryType === 'Learner' ? 'bg-[#00E5FF] text-[#0B132B] shadow-sm' : 'text-[#64748B] hover:text-[#0B132B] bg-transparent'}`}
            >
              For Learners (Guidance / Course)
            </button>
          </div>
        </div>

        {/* Form Body / Success State */}
        <div className="overflow-y-auto flex-grow bg-white">
          {submitted ? (
            <div className="p-12 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center mb-6">
                <CheckCircle2 size={32} className="text-[#0B132B]" />
              </div>
              <h4 className="text-[#0B132B] text-xl font-bold mb-2">Request Received!</h4>
              <p className="text-[#64748B] text-sm max-w-sm mx-auto leading-relaxed mb-8">
                {inquiryType === 'Business' 
                  ? "We will review your product parameters and reach back to schedule an architecture call."
                  : "We will check our program schedule and follow up via email with guidelines."}
              </p>
              <button 
                type="button" 
                className="px-6 py-2.5 rounded-xl bg-[#F4F5F7] hover:bg-[#slate-100] text-[#0B132B] border border-[#0B132B]/10 text-sm font-semibold transition-colors cursor-pointer"
                onClick={onClose}
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              
              {/* Common Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Full Name *</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Email Address *</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Conditional Business Fields */}
              {inquiryType === 'Business' ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Company Name</label>
                      <input 
                        type="text" 
                        placeholder="Company Inc." 
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Inquiry Type *</label>
                      <select 
                        required 
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] focus:text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                      >
                        <option value="SaaS Development">Software Product Development</option>
                        <option value="MVP Building">MVP Building for Startups</option>
                        <option value="Developer Hiring">Dedicated Developer Staffing</option>
                        <option value="System Optimization">Scale & System Optimization</option>
                        <option value="Custom Project">Other Custom Project</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Estimated Budget *</label>
                      <select 
                        required 
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] focus:text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                        <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                        <option value="$30,000+">$30,000+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Desired Timeline *</label>
                      <select 
                        required 
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] focus:text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                      >
                        <option value="">Select start time</option>
                        <option value="Immediately">Immediately</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="Exploring options">Exploring options</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Project Description *</label>
                    <textarea 
                      required 
                      rows={3} 
                      placeholder="Outline the core functionality and what challenges you are looking to address..." 
                      className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors resize-vertical"
                    />
                  </div>
                </>
              ) : (
                /* Conditional Learner Fields */
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Focus Interest *</label>
                      <select 
                        required 
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] focus:text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                      >
                        <option value="Tutorials">Programming Tutorials</option>
                        <option value="Real Projects">Building Real-World Projects</option>
                        <option value="Career Advisory">Tech Career Guidance</option>
                        <option value="AI Integrations">AI & API Development</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Current Coding Experience</label>
                      <select 
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] focus:text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                      >
                        <option value="Beginner">Beginner (&lt; 1 Year)</option>
                        <option value="Junior">Junior Developer (1-2 Years)</option>
                        <option value="Mid">Mid-Level Developer (3-5 Years)</option>
                        <option value="Senior">Senior Developer (5+ Years)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">What is your learning goal? *</label>
                    <textarea 
                      required 
                      rows={4} 
                      placeholder="Tell us what stacks you want to master, or what guidance you need..." 
                      className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors resize-vertical"
                    />
                  </div>
                </>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full flex items-center justify-center gap-2 px-5 py-4 mt-4 rounded-xl bg-[#00E5FF] hover:bg-[#00E5FF]/85 text-[#0B132B] font-semibold text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-[#00E5FF]/15"
              >
                {isSubmitting ? 'Submitting Details...' : "Submit Inquiry"}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}

/* ── Focus Areas Section ── */
const FocusAreas = () => {
  const areas = [
    {
      title: "AI-Powered Business Systems",
      items: ["RAG chatbots & assistants", "AI analytics & insights", "Workflow automation pipelines"],
      icon: Bot
    },
    {
      title: "Startup & Enterprise Solutions",
      items: ["Internal tools & portals", "Legacy system modernization", "Backend refactoring"],
      icon: Building2
    },
    {
      title: "Architecture",
      items: ["Modular Monolith Design", "Domain-Driven Architectures", "Maintainable Codebases"],
      icon: Layers
    }
  ]

  return (
    <section className="py-24 bg-[#F4F5F7] border-t border-[#0B132B]/10 scroll-mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0B132B]/10 text-[#64748B] text-xs font-mono">
            <Target size={12} className="text-[#00A8CC]" /> Expertise Focus
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Specialized engineering for complex needs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, idx) => {
            const Icon = area.icon
            return (
              <div key={idx} className="glass-panel p-8 rounded-2xl bg-white border border-[#0B132B]/10 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center">
                    <Icon size={20} className="text-[#0B132B]" />
                  </div>
                  <h3 className="text-[#0B132B] text-lg font-bold leading-snug">{area.title}</h3>
                </div>
                <ul className="space-y-3 flex-grow list-none">
                  {area.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-3 text-[#64748B] text-sm">
                      <CheckCircle2 size={16} className="text-[#00E5FF] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── How We Work Section ── */
const HowWeWork = () => {
  const steps = [
    {
      title: "Think First",
      desc: "Rigorous alignment, detailed product design document (PRD), and architectural blueprinting before writing a single line of code. We bypass issues early.",
      icon: Terminal
    },
    {
      title: "Build for Production",
      desc: "Clean code structure, modular monolith designs, automated test coverage, and enterprise grade security. Vetted directly by senior principal engineering.",
      icon: Code
    },
    {
      title: "Optimize for Growth",
      desc: "Infrastructure scaling, performance optimization, lead acquisition systems, database indexes, and cloud cost reduction audits.",
      icon: Zap
    }
  ]

  return (
    <section className="py-24 bg-white/50 border-t border-y border-[#0B132B]/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] text-xs font-mono">
            <Wrench size={12} className="text-[#00A8CC]" /> Our Philosophy
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center">
                  <Icon size={20} className="text-[#0B132B]" />
                </div>
                <h3 className="text-[#0B132B] text-xl font-bold">{step.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── WhatsApp Floating Action Button ── */
const WhatsAppFAB = () => (
  <a
    href="https://wa.me/9183298985"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contact us on WhatsApp"
    className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25d366]/30 z-40 transition-all duration-200 hover:scale-110 hover:shadow-[#25d366]/40"
  >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  </a>
)

/* ── Main Export Component ── */
export default function HomePage() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  const openProject = () => setIsProjectModalOpen(true)
  const closeProject = () => setIsProjectModalOpen(false)

  return (
    <div className="bg-[#F4F5F7] min-h-screen text-[#0B132B] selection:bg-[#00E5FF]/30 selection:text-[#0B132B] font-sans antialiased">
      <Nav onProjectClick={openProject} />
      <Hero onProjectClick={openProject} />
      <About />
      <TechStack />
      <HowWeWork />
      <FocusAreas />
      <Services />
      <Learners />
      <CaseStudies />
      <Pricing onProjectClick={openProject} />
      <Testimonials />
      <CTA onProjectClick={openProject} />
      <Footer />
      {isProjectModalOpen && <ProjectModal onClose={closeProject} />}
      <WhatsAppFAB />
    </div>
  )
}
