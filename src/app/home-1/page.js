'use client'

import { useState } from 'react'
import {
  Code, Database, Server, Shield, Rocket, CheckCircle2,
  Users, Bot, Building2, Wrench, Package, Target, Mail,
  ArrowRight, Cpu, Network, ChevronRight, Sparkles,
  Globe, Layers, Terminal, Zap, LineChart, BookOpen, Menu, X, Star, Quote,
  Youtube, Linkedin, Github, Calendar, Phone
} from 'lucide-react'

const Styles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:         #f5f3f0;
      --bg2:        #ede8e3;
      --bg3:        #e5dfd8;
      --surface:    #ffffff;
      --border:     #d9d3cb;
      --border2:    #ccc5bb;
      --accent:     #2c5f8d;
      --accent2:    #d4a574;
      --accent-lt:  #e8f1f7;
      --green:      #3d7d63;
      --green-lt:   #e6f3ed;
      --crimson:    #b91c1c;
      --crimson-dk: #7f1d1d;
      --text:       #1a1a1a;
      --text2:      #3a3a3a;
      --muted:      #7a7a7a;
      --muted2:     #a8a8a8;
      --serif:      'Playfair Display', Georgia, serif;
      --sans:       'Poppins', sans-serif;
      --mono:       'JetBrains Mono', monospace;
    }

    html { scroll-behavior: smooth; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--sans);
      -webkit-font-smoothing: antialiased;
    }

    .dot-grid {
      position: absolute; inset: 0; pointer-events: none;
      background-image: radial-gradient(circle, #c9beb5 1px, transparent 1px);
      background-size: 32px 32px;
      opacity: 0.35;
    }

    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 48px; height: 72px;
      background: rgba(245,243,240,0.92);
      backdrop-filter: blur(20px) saturate(1.8);
      border-bottom: 1px solid var(--border2);
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    }
    .nav-logo {
      font-family: var(--sans); font-size: 20px; font-weight: 700;
      color: var(--text); letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nav-logo .logo-aai  { color: var(--text); }
    .nav-logo .logo-bliss { color: var(--crimson); }

    .nav-links { display: flex; align-items: center; gap: 4px; list-style: none; }
    .nav-link {
      padding: 7px 14px; border-radius: 8px;
      color: var(--muted); font-size: 14px; font-weight: 500;
      text-decoration: none; transition: all 0.18s;
    }
    .nav-link:hover { color: var(--text); background: var(--bg2); }
    .nav-link-blog { color: var(--accent) !important; }
    .nav-link-blog:hover { background: var(--accent-lt) !important; }

    .badge {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 5px 12px; border-radius: 999px;
      background: var(--accent-lt);
      border: 1px solid rgba(26,86,219,0.2);
      font-family: var(--mono); font-size: 11px;
      color: var(--accent); letter-spacing: 0.04em; font-weight: 500;
    }
    .badge-neutral { background: var(--bg2); border-color: var(--border2); color: var(--muted); }
    .badge-green   { background: var(--green-lt); border-color: rgba(2,122,72,0.2); color: var(--green); }

    .btn-primary {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 13px 28px; border-radius: 12px;
      background: var(--accent); color: #fff;
      font-family: var(--sans); font-weight: 600; font-size: 14px;
      border: none; cursor: pointer;
      box-shadow: 0 4px 14px rgba(44,95,141,0.25), 0 8px 24px rgba(44,95,141,0.12);
      transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .btn-primary:hover { background: #1e4a6b; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(44,95,141,0.35), 0 12px 32px rgba(44,95,141,0.16); }

    .btn-ghost {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 24px; border-radius: 10px;
      background: var(--surface); border: 1px solid var(--border2);
      color: var(--text2); font-family: var(--sans); font-weight: 500; font-size: 14px;
      cursor: pointer; transition: all 0.18s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    .btn-ghost:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-lt); }

    .section     { padding: 96px 48px; }
    .section-alt { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
    .inner       { max-width: 1120px; margin: 0 auto; }

    .eyebrow { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
    .eyebrow-line { flex: 0 0 32px; height: 1px; background: var(--border2); }

    h1.serif, h2.serif {
      font-family: var(--serif);
      font-weight: 400;
      line-height: 1.1;
      letter-spacing: -0.01em;
      color: var(--text);
    }

    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 18px;
      transition: border-color 0.28s, box-shadow 0.28s, transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
      box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.02);
    }
    .card:hover {
      border-color: var(--accent2);
      box-shadow: 0 12px 40px rgba(0,0,0,0.12), 0 6px 20px rgba(212,165,116,0.08);
      transform: translateY(-4px);
    }
    .card-flat {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }

    .chip {
      display: inline-flex; padding: 5px 12px; border-radius: 6px;
      background: var(--bg); border: 1px solid var(--border);
      font-family: var(--mono); font-size: 12px; color: var(--muted);
      transition: all 0.18s;
    }
    .chip:hover { background: var(--accent-lt); border-color: rgba(26,86,219,0.25); color: var(--accent); }

    .hl        { color: var(--accent); }
    .hl-italic { font-style: italic; color: var(--accent); }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fu   { animation: fadeUp 0.65s cubic-bezier(.22,1,.36,1) both; }
    .d1   { animation-delay: 0.08s; }
    .d2   { animation-delay: 0.18s; }
    .d3   { animation-delay: 0.28s; }
    .d4   { animation-delay: 0.40s; }

    .step-num {
      width: 42px; height: 42px; border-radius: 10px; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      background: var(--accent); color: #fff;
      font-family: var(--mono); font-size: 13px; font-weight: 500;
      box-shadow: 0 4px 14px rgba(26,86,219,0.3);
    }

    .hero-noise {
      position: absolute; inset: 0; pointer-events: none; opacity: 0.025;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    }

    /* Footer logo */
    .footer-logo { font-family: var(--sans); font-size: 17px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; }
    .footer-logo .logo-aai   { color: var(--text); }
    .footer-logo .logo-bliss { color: var(--crimson); }

    @media (max-width: 780px) {
      .nav { padding: 0 20px; }
      .nav-links-desktop { display: none; }
      .section { padding: 72px 20px; }
      .two-col  { grid-template-columns: 1fr !important; gap: 40px !important; }
      .three-col{ grid-template-columns: 1fr !important; }
      .hide-sm  { display: none !important; }
      .stats-row { gap: 24px !important; }
      .stats-row > div { padding-right: 24px !important; margin-right: 24px !important; }
    }
  `}</style>
)

/* ── Logo Component ── */
const Logo = ({ className = 'nav-logo' }) => (
  <div className={className}>
    <span className="logo-aai">AAI</span><span className="logo-bliss">BLISS</span>
  </div>
)

/* ── Nav ── */
const Nav = ({ onProjectClick }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="nav">
        <Logo className="nav-logo" />
        <ul className="nav-links nav-links-desktop">
          {[['#services', 'Services'], ['#stack', 'Stack'], ['#approach', 'Approach']].map(([href, label]) => (
            <li key={label}><a href={href} className="nav-link">{label}</a></li>
          ))}
          <li>
            <a href="#blog" className="nav-link nav-link-blog">
              <BookOpen size={13} style={{ display: 'inline', marginRight: 5, verticalAlign: 'middle' }} />Blog
            </a>
          </li>
        </ul>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button className="btn-primary hide-sm" onClick={onProjectClick} style={{ padding: '9px 18px', fontSize: 13 }}><Mail size={13} /> Start a Project</button>
          <button onClick={() => setOpen(o => !o)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'none' }} id="hamburger">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div style={{ position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99, background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[['#services', 'Services'], ['#stack', 'Stack'], ['#approach', 'Approach'], ['#blog', 'Blog']].map(([href, label]) => (
            <a key={label} href={href} className="nav-link" onClick={() => setOpen(false)} style={{ display: 'block' }}>{label}</a>
          ))}
          <button className="btn-primary" onClick={() => { setOpen(false); onProjectClick(); }} style={{ marginTop: 8, justifyContent: 'center' }}><Mail size={13} /> Start a Project</button>
        </div>
      )}
      <style>{`@media(max-width:780px){#hamburger{display:block!important}}`}</style>
    </>
  )
}

/* ── Hero ── */
const Hero = ({ onProjectClick }) => (
  <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 64, background: 'var(--bg)' }}>
    <div className="dot-grid" />
    <div className="hero-noise" />
    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 640, height: 640, borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,86,219,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', bottom: '5%', left: '-8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(105,65,198,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

    <div style={{ position: 'relative', zIndex: 1, maxWidth: 1120, margin: '0 auto', padding: '80px 48px', width: '100%' }}>
      <div className="fu" style={{ marginBottom: 28 }}>
        <span className="badge"><Terminal size={11} /> Founder-led · Hands-on · Built for Growth</span>
      </div>

      <h1 className="serif fu d1" style={{ fontSize: 'clamp(42px, 6.5vw, 82px)', marginBottom: 28, maxWidth: 860 }}>
        Systems Engineering for<br />
        <span className="hl-italic">Scalable</span> & AI-Driven Software
      </h1>

      <p className="fu d2" style={{ fontSize: 18, color: 'var(--muted)', maxWidth: 520, lineHeight: 1.78, marginBottom: 40 }}>
        Aaibliss helps startups and businesses design, build, and scale secure, production-ready systems that handle real users, real traffic, and real revenue.
      </p>

      <div className="fu d3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 72 }}>
        <button className="btn-primary" onClick={onProjectClick}><Mail size={15} /> Start a Project</button>
        <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-flex' }}><Calendar size={15} /> Book a Call</a>
        <a href="#services" className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-flex' }}>View Services <ArrowRight size={15} /></a>
      </div>

      <div className="fu d4 stats-row" style={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}>
        {[['5+', 'Years Experience'], ['5+', 'Systems Shipped'], ['3×', 'Avg Perf. Gains'], ['100%', 'Founder-Led']].map(([n, l], i) => (
          <div key={l} style={{ paddingRight: 40, marginRight: 40, borderRight: i < 3 ? '1px solid var(--border2)' : 'none', marginBottom: 8 }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 38, color: 'var(--text)', lineHeight: 1 }}>{n}</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 5, fontFamily: 'var(--mono)' }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ── About ── */
const About = () => (
  <section className="section section-alt">
    <div className="inner">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="two-col">
        <div>
          <div className="eyebrow"><div className="eyebrow-line" /><span className="badge badge-neutral"><Users size={11} /> About</span></div>
          <h2 className="serif" style={{ fontSize: 'clamp(30px, 4vw, 50px)', marginBottom: 22 }}>
            We don't just write code —<br />
            <span className="hl-italic">we design systems that survive growth.</span>
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 16, marginBottom: 28 }}>
            Aaibliss is a founder-led backend & systems engineering studio focused on performance — building software that scales smoothly, stays secure, and delivers long-term business value. With 5+ years of real-world production experience.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <span className="badge badge-green"><CheckCircle2 size={11} /> Available for new projects</span>
            <span className="badge badge-neutral" style={{ background: 'var(--surface)' }}>
              <Globe size={11} style={{ color: 'var(--muted)' }} /> Based in India · Working seamlessly across US & Indian timezones
            </span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[[Layers, 'System Design'], [Server, 'Backend & APIs'], [Shield, 'Security'], [Cpu, 'Performance'], [Bot, 'AI Automation'], [Network, 'Microservices']].map(([Icon, label]) => (
            <div key={label} className="card-flat" style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: 'var(--accent-lt)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={15} style={{ color: 'var(--accent)' }} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text2)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

/* ── What We Build ── */
const BuildCard = ({ icon: Icon, title, items, tint }) => (
  <div className="card" style={{ padding: 32, height: '100%' }}>
    <div style={{ width: 46, height: 46, borderRadius: 12, background: tint, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
      <Icon size={20} style={{ color: 'var(--accent)' }} />
    </div>
    <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400, marginBottom: 18, color: 'var(--text)', lineHeight: 1.25 }}>{title}</h3>
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map(item => (
        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'var(--muted)', fontSize: 14, lineHeight: 1.55 }}>
          <ChevronRight size={14} style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }} />
          {item}
        </li>
      ))}
    </ul>
  </div>
)

const WhatWeBuild = () => (
  <section id="services" className="section">
    <div className="inner">
      <div className="eyebrow"><div className="eyebrow-line" /><span className="badge badge-neutral"><Rocket size={11} /> What We Build</span></div>
      <h2 className="serif" style={{ fontSize: 'clamp(30px, 4vw, 52px)', marginBottom: 56, maxWidth: 600 }}>
        End-to-end engineering,<br />from <span className="hl-italic">architecture</span> to production.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }} className="three-col">
        <BuildCard icon={Server} title="Scalable SaaS Products" tint="var(--accent-lt)" items={['Multi-tenant SaaS platforms', 'Role-based access & permissions', 'Subscription & billing systems', 'Admin dashboards & analytics', 'High-traffic production systems']} />
        <BuildCard icon={Bot} title="AI-Powered Business Systems" tint="#f5f3ff" items={['RAG chatbots & assistants', 'AI moderation & reporting', 'AI analytics & insights', 'Workflow automation pipelines']} />
        <BuildCard icon={Building2} title="Startup & Enterprise Solutions" tint="var(--green-lt)" items={['Internal tools & portals', 'Legacy system modernization', 'Backend refactoring', 'API-first architecture']} />
      </div>
    </div>
  </section>
)

/* ── Tech Stack ── */
const StackCard = ({ icon: Icon, title, chips }) => (
  <div className="card" style={{ padding: 24 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
      <Icon size={15} style={{ color: 'var(--accent)' }} />
      <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em' }}>{title}</span>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
      {chips.map(c => <span key={c} className="chip">{c}</span>)}
    </div>
  </div>
)

const TechStack = () => (
  <section id="stack" className="section section-alt">
    <div className="inner">
      <div className="eyebrow"><div className="eyebrow-line" /><span className="badge badge-neutral"><Code size={11} /> Tech Stack</span></div>
      <h2 className="serif" style={{ fontSize: 'clamp(30px, 4vw, 52px)', marginBottom: 56 }}>
        Full-stack expertise,<br /><span className="hl-italic">battle-tested</span> in production.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        <StackCard icon={Code} title="Frontend" chips={['React.js', 'Next.js', 'Tailwind CSS']} />
        <StackCard icon={Server} title="Backend" chips={['Node.js', 'Express', 'Fastify', 'FastAPI', 'Laravel']} />
        <StackCard icon={Database} title="Databases" chips={['PostgreSQL', 'MongoDB', 'Redis', 'Vector DB']} />
        <StackCard icon={Network} title="Architecture" chips={['Microservices', 'Modular Monolith', 'Event-Driven', 'NATS', 'Kafka']} />
        <StackCard icon={Cpu} title="Performance & Scaling" chips={['Redis Caching', 'DB Optimization', 'Horizontal Scaling', 'CDN']} />
        <StackCard icon={Shield} title="Security" chips={['JWT / OAuth2', 'RBAC', 'Rate Limiting', 'Encryption', 'OWASP']} />
      </div>
    </div>
  </section>
)

/* ── Approach ── */
const Approach = () => (
  <section id="approach" className="section">
    <div className="inner">
      <div className="eyebrow"><div className="eyebrow-line" /><span className="badge badge-neutral"><Target size={11} /> How We Work</span></div>
      <h2 className="serif" style={{ fontSize: 'clamp(30px, 4vw, 52px)', marginBottom: 56, maxWidth: 560 }}>
        A structured approach to building <span className="hl-italic">systems that last.</span>
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {[
          ['01', 'Think First', 'Understand business goals, growth plans, and bottlenecks before writing a single line of code. Architecture decisions made upfront save months of refactoring later.'],
          ['02', 'Build for Production', 'Secure, scalable, and maintainable systems from day one. No shortcuts — every design decision is made with long-term health in mind.'],
          ['03', 'Optimize for Growth', 'Performance tuning, cost reduction, and AI automation. Systems that grow with your business rather than becoming bottlenecks.'],
        ].map(([n, title, desc], i) => (
          <div key={n} className="card" style={{ padding: '26px 30px', display: 'flex', alignItems: 'flex-start', gap: 22, borderRadius: i === 0 ? '14px 14px 4px 4px' : i === 2 ? '4px 4px 14px 14px' : '4px' }}>
            <div className="step-num">{n}</div>
            <div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 21, fontWeight: 400, marginBottom: 8, color: 'var(--text)' }}>{title}</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.72, fontSize: 15, maxWidth: 620 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ── Why Aaibliss ── */
const WhyUs = () => (
  <section className="section section-alt">
    <div className="inner">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="two-col">
        <div>
          <div className="eyebrow"><div className="eyebrow-line" /><span className="badge badge-neutral"><Sparkles size={11} /> Why Aaibliss</span></div>
          <h2 className="serif" style={{ fontSize: 'clamp(30px, 4vw, 50px)', marginBottom: 20 }}>
            We don't deliver features —<br />
            <span className="hl-italic">we deliver systems that generate value.</span>
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 16 }}>
            Work directly with the principal engineer — no account managers, no handoffs, no dilution. Senior-level engineering from start to finish.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            ['Founder-led, hands-on engineering', 'var(--crimson)'],
            ['5+ years production experience', 'var(--accent2)'],
            ['Startup & enterprise mindset', 'var(--green)'],
            ['Strong system design skills', 'var(--crimson)'],
            ['AI-first problem solving', 'var(--accent2)'],
            ['Clear ownership & communication', 'var(--green)'],
          ].map(([label, dot]) => (
            <div key={label} className="card-flat" style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: dot, flexShrink: 0 }} />
              <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text2)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

/* ── Services ── */
const ServicesSection = () => (
  <section className="section">
    <div className="inner">
      <div className="eyebrow"><div className="eyebrow-line" /><span className="badge badge-neutral"><Package size={11} /> Services</span></div>
      <h2 className="serif" style={{ fontSize: 'clamp(30px, 4vw, 52px)', marginBottom: 48, maxWidth: 480 }}>
        Everything you need to <span className="hl-italic">ship and scale.</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 12 }}>
        {[[Code, 'Backend & API Development'], [Layers, 'SaaS Architecture & System Design'], [Bot, 'AI-Powered Automation Systems'], [Globe, 'RAG Chatbot Development'], [Network, 'Microservices & Event-Driven Systems'], [Cpu, 'Performance Optimization'], [Shield, 'Security Hardening'], [Wrench, 'Legacy System Migration']].map(([Icon, label]) => (
          <div key={label} className="card-flat" style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 13, cursor: 'pointer', transition: 'all 0.18s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(26,86,219,0.3)'; e.currentTarget.style.background = 'var(--accent-lt)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface)'; }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, background: 'var(--accent-lt)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon size={15} style={{ color: 'var(--accent)' }} />
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text2)', lineHeight: 1.4, flex: 1 }}>{label}</span>
            <ChevronRight size={13} style={{ color: 'var(--muted2)', flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ── Testimonials ── */
const Testimonials = () => (
  <section className="section">
    <div className="inner">
      <div className="eyebrow"><div className="eyebrow-line" /><span className="badge badge-neutral"><Star size={11} /> Testimonials</span></div>
      <h2 className="serif" style={{ fontSize: 'clamp(30px, 4vw, 52px)', marginBottom: 56, maxWidth: 600 }}>
        Trusted by founders who value <span className="hl-italic">execution.</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }} className="three-col">
        {[
          {
            quote: "Aaibliss transformed our messy monolith into a scalable microservices architecture. Our server costs dropped by 40% and our uptime has been flawless since the migration.",
            author: "Sarah Jenkins",
            role: "CTO, FinFlow",
          },
          {
            quote: "Working with a founder-led engineering studio made all the difference. No layers of management—just deep technical expertise and systems that are built to scale on day one.",
            author: "David Chen",
            role: "Founder, OmniRetail",
          },
          {
            quote: "The RAG chatbot system they built for our customer support automated 60% of our daily queries. The performance is incredible and the integration was completely seamless.",
            author: "Elena Rodriguez",
            role: "VP Operations, SaaSify",
          }
        ].map((t, i) => (
          <div key={i} className="card" style={{ padding: 32, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Quote size={24} style={{ color: 'var(--accent-lt)', marginBottom: 20, fill: 'var(--accent-lt)' }} />
            <p style={{ color: 'var(--text)', fontSize: 16, lineHeight: 1.6, marginBottom: 32, flex: 1 }}>"{t.quote}"</p>
            <div>
              <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 15, color: 'var(--text)' }}>{t.author}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ── Blog ── */
const BlogSection = () => (
  <section id="blog" className="section section-alt">
    <div className="inner">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div className="eyebrow"><div className="eyebrow-line" /><span className="badge badge-neutral"><BookOpen size={11} /> Blog</span></div>
          <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Insights on <span className="hl-italic">systems engineering.</span>
          </h2>
        </div>
        <button className="btn-ghost" style={{ flexShrink: 0 }}>All Posts <ArrowRight size={14} /></button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
        {[
          { tag: 'Architecture', title: 'Why Most SaaS Startups Over-Engineer Their First System', date: 'Feb 2025', read: '5 min read' },
          { tag: 'AI', title: 'Building a Production-Ready RAG Chatbot With FastAPI and pgvector', date: 'Jan 2025', read: '8 min read' },
          { tag: 'Performance', title: 'Redis Caching Patterns That Actually Make a Difference at Scale', date: 'Dec 2024', read: '6 min read' },
        ].map(({ tag, title, date, read }) => (
          <div key={title} className="card" style={{ padding: 28, cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span className="badge badge-neutral" style={{ alignSelf: 'flex-start', fontSize: 10 }}>{tag}</span>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 19, fontWeight: 400, lineHeight: 1.35, color: 'var(--text)' }}>{title}</h3>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 'auto' }}>
              <span style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>{date}</span>
              <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--muted2)', display: 'inline-block' }} />
              <span style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>{read}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ── Vision ── */
const Vision = () => (
  <section className="section">
    <div className="inner" style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
        <span className="badge badge-neutral"><Zap size={11} /> Our Vision</span>
      </div>
      <h2 className="serif" style={{ fontSize: 'clamp(32px, 5vw, 60px)', marginBottom: 16 }}>Scale · Secure · Revenue</h2>
      <p style={{ color: 'var(--muted)', fontSize: 17, marginBottom: 52, maxWidth: 400, margin: '0 auto 52px' }}>Three pillars. Every system we build serves all three.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="three-col">
        {[
          { icon: Rocket, label: 'Scale', desc: 'Without rewriting systems', color: 'var(--accent)' },
          { icon: Shield, label: 'Secure', desc: 'Data & users from day one', color: 'var(--crimson)' },
          { icon: LineChart, label: 'Revenue', desc: 'Reduce cost with AI automation', color: 'var(--green)' },
        ].map(({ icon: Icon, label, desc, color }) => (
          <div key={label} className="card" style={{ padding: 32, textAlign: 'center' }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Icon size={22} style={{ color }} />
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color, marginBottom: 8 }}>{label}</div>
            <p style={{ color: 'var(--muted)', fontSize: 14 }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ── CTA ── */
const CTA = ({ onProjectClick }) => (
  <section style={{ padding: '96px 48px', background: 'var(--bg2)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(185,28,28,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
    <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <span className="badge"><Mail size={11} /> Let's Talk</span>
      </div>
      <h2 className="serif" style={{ fontSize: 'clamp(32px, 5vw, 58px)', marginBottom: 18 }}>
        Let's Build Something<br /><span className="hl-italic">That Lasts</span>
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: 17, marginBottom: 40, lineHeight: 1.75 }}>
        Work directly with the founder & principal engineer of Aaibliss. No middlemen, no BS — just focused engineering.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button className="btn-primary" onClick={onProjectClick} style={{ fontSize: 15, padding: '14px 32px' }}>
          <Mail size={16} /> Start a Project <ArrowRight size={15} />
        </button>
        <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize: 15, padding: '14px 32px', textDecoration: 'none', display: 'inline-flex' }}>
          <Calendar size={16} /> Book a Call
        </a>
      </div>
    </div>
  </section>
)

/* ── Footer ── */
const SocialIcon = ({ icon: Icon, href }) => (
  <a href={href} style={{
    display: 'flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: '50%',
    background: 'var(--surface)', color: 'var(--text2)', border: '1px solid var(--border)',
    transition: 'all 0.2s cubic-bezier(0.22, 1, 0.36, 1)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
  }}
    onMouseEnter={e => {
      e.currentTarget.style.background = 'var(--accent)';
      e.currentTarget.style.color = '#fff';
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = '0 6px 16px rgba(44,95,141,0.25)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'var(--surface)';
      e.currentTarget.style.color = 'var(--text2)';
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
    }}>
    <Icon size={18} />
  </a>
)

const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--border)', padding: '48px', background: 'var(--bg2)' }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32, maxWidth: 1120, margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="footer-logo">
          <span className="logo-aai">AAI</span><span className="logo-bliss">BLISS</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <a href="mailto:hello@aaibliss.com" style={{ fontSize: 14, color: 'var(--text2)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text2)'}>
            <Mail size={16} style={{ color: 'var(--muted)' }} /> hello@aaibliss.com
          </a>
          <a href="tel:+1234567890" style={{ fontSize: 14, color: 'var(--text2)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text2)'}>
            <Phone size={16} style={{ color: 'var(--muted)' }} /> +1 (234) 567-890
          </a>
          <div style={{ fontSize: 14, color: 'var(--text2)', display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
            <Globe size={16} style={{ color: 'var(--muted)' }} /> Based in India · Working seamlessly across US & Indian timezones
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <SocialIcon icon={Github} href="#" />
          <SocialIcon icon={Linkedin} href="#" />
          <SocialIcon icon={Youtube} href="#" />
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['Scale', 'Secure', 'Revenue'].map(t => <span key={t} className="badge badge-neutral" style={{ background: 'var(--surface)' }}>{t}</span>)}
        </div>
      </div>
    </div>
    <div style={{ maxWidth: 1120, margin: '48px auto 0', borderTop: '1px solid var(--border2)', paddingTop: 24, textAlign: 'center' }}>
      <p style={{ color: 'var(--muted)', fontSize: 13, fontFamily: 'var(--mono)' }}>© 2025 Aaibliss · Founder-Led Engineering</p>
    </div>
  </footer>
)


/* ── Project Modal ── */
const ProjectModal = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const selectStyle = {
    width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid var(--border)',
    background: 'var(--bg)', color: 'var(--text)', outline: 'none', fontFamily: 'var(--sans)'
  };
  const labelStyle = { display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text2)', marginBottom: 6 };
  const sectionTitleStyle = { fontFamily: 'var(--sans)', fontSize: 16, fontWeight: 600, color: 'var(--text)', marginBottom: 16, borderBottom: '1px solid var(--border2)', paddingBottom: 8 };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
      padding: '40px 20px', background: 'rgba(26,26,26,0.5)', backdropFilter: 'blur(8px)', animation: 'fadeUp 0.3s ease-out', overflowY: 'auto'
    }}>
      <div className="card" style={{
        width: '100%', maxWidth: 640, background: 'var(--surface)', padding: 0, position: 'relative', margin: 'auto'
      }}>
        <button type="button" onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '50%', cursor: 'pointer',
          color: 'var(--text)', padding: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2
        }}>
          <X size={18} />
        </button>

        <div style={{ padding: '32px 32px 24px', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, background: 'var(--surface)', zIndex: 1, borderTopLeftRadius: 18, borderTopRightRadius: 18 }}>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, color: 'var(--text)', marginBottom: 8 }}>
            Start a <span className="hl-italic">Project</span>
          </h3>
          <p style={{ color: 'var(--muted)', fontSize: 14 }}>Tell us what you're building. We'll review and get back to you within 24 hours.</p>
        </div>

        {submitted ? (
          <div style={{ padding: 64, textAlign: 'center' }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--green-lt)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <CheckCircle2 size={36} style={{ color: 'var(--green)' }} />
            </div>
            <h4 style={{ fontSize: 22, marginBottom: 12, color: 'var(--text)' }}>Got it!</h4>
            <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 32, maxWidth: 300, margin: '0 auto 32px', lineHeight: 1.6 }}>I'll review your project and reply within 24 hours.</p>
            <button type="button" className="btn-primary" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 32 }}>

            {/* Basic Info */}
            <div>
              <div style={sectionTitleStyle}>Basic Info</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={labelStyle}>Full Name <span style={{ color: 'var(--crimson)' }}>*</span></label>
                  <input required type="text" style={selectStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email Address <span style={{ color: 'var(--crimson)' }}>*</span></label>
                  <input required type="email" style={selectStyle} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div>
                  <label style={labelStyle}>Company Name <span style={{ color: 'var(--muted)', fontWeight: 400 }}>(optional)</span></label>
                  <input type="text" style={selectStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Country</label>
                  <input type="text" style={selectStyle} />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <div style={sectionTitleStyle}>💼 Project Details</div>
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>What type of project? <span style={{ color: 'var(--crimson)' }}>*</span></label>
                <select required style={selectStyle}>
                  <option value="">Select an option</option>
                  <option value="SaaS Product">SaaS Product</option>
                  <option value="AI Automation">AI Automation</option>
                  <option value="API / Backend">API / Backend</option>
                  <option value="Legacy Migration">Legacy Migration</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Describe your project <span style={{ color: 'var(--crimson)' }}>*</span></label>
                <textarea required rows={4} style={{ ...selectStyle, resize: 'vertical' }} placeholder="Tell us what you're building..." />
              </div>
              <div>
                <label style={labelStyle}>What's your biggest challenge right now?</label>
                <textarea rows={3} style={{ ...selectStyle, resize: 'vertical' }} placeholder="e.g. Scaling issues, need an MVP fast..." />
              </div>
            </div>

            {/* Budget & Timeline */}
            <div>
              <div style={sectionTitleStyle}>💰 Budget & Timeline</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div>
                  <label style={labelStyle}>Estimated Budget</label>
                  <select required style={selectStyle}>
                    <option value="">Select budget</option>
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                    <option value="$15,000+">$15,000+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>When do you want to start?</label>
                  <select required style={selectStyle}>
                    <option value="">Select timeline</option>
                    <option value="Immediately">Immediately</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>
              </div>
            </div>

            {/* How to Connect */}
            <div>
              <div style={sectionTitleStyle}>📞 How to Connect</div>
              <div>
                <label style={labelStyle}>Preferred contact method</label>
                <select required style={selectStyle}>
                  <option value="Email">Email</option>
                  <option value="Video Call (Calendly)">Video Call (Calendly)</option>
                  <option value="WhatsApp">WhatsApp</option>
                </select>
              </div>
            </div>

            <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ marginTop: 8, justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1, width: '100%', padding: '16px 0', fontSize: 15 }}>
              {isSubmitting ? 'Sending...' : "Submit & I'll Reply Within 24 Hours"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const WhatsAppFAB = () => (
  <a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: 'fixed',
      bottom: 24,
      right: 24,
      width: 56,
      height: 56,
      borderRadius: '50%',
      backgroundColor: '#25D366',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
      zIndex: 999,
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'scale(1.1)';
      e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.5)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
    }}
  >
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  </a>
)

export default function HomePage() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const openProject = () => setIsProjectModalOpen(true);
  const closeProject = () => setIsProjectModalOpen(false);

  return (
    <>
      <Styles />
      <Nav onProjectClick={openProject} />
      <Hero onProjectClick={openProject} />
      <About />
      <WhatWeBuild />
      <TechStack />
      <Approach />
      <WhyUs />
      <ServicesSection />
      <Testimonials />
      <BlogSection />
      <Vision />
      <CTA onProjectClick={openProject} />
      <Footer />
      {isProjectModalOpen && <ProjectModal onClose={closeProject} />}
      <WhatsAppFAB />
    </>
  )
}
