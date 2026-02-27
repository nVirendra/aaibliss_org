'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Code, Database, Lock, Zap, Server, Shield, Rocket,
  CheckCircle2, Users, Bot, LineChart, Building2, Wrench,
  Package, Target, Mail, ArrowRight, Cpu, Network,
  ChevronRight, Sparkles, Globe, Layers, Terminal
} from 'lucide-react'

/* ─── Google Fonts ──────────────────────────────────────────── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:       #060810;
      --bg2:      #0b0f1a;
      --surface:  #0f1525;
      --border:   rgba(99,130,255,0.12);
      --accent:   #4d7cff;
      --accent2:  #7c5aff;
      --green:    #00e5a0;
      --text:     #e8eaf6;
      --muted:    #7b83a8;
      --card-bg:  rgba(15,21,37,0.8);
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'DM Sans', sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    .font-display { font-family: 'Syne', sans-serif; }
    .font-mono    { font-family: 'DM Mono', monospace; }

    /* ── grid bg ── */
    .grid-bg {
      position: absolute; inset: 0; pointer-events: none;
      background-image:
        linear-gradient(rgba(77,124,255,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(77,124,255,0.04) 1px, transparent 1px);
      background-size: 44px 44px;
      mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
    }

    /* ── glow ── */
    .glow-orb {
      position: absolute; border-radius: 50%;
      filter: blur(90px); pointer-events: none;
    }

    /* ── noise texture ── */
    .noise::after {
      content: ''; position: absolute; inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
      opacity: 0.35; pointer-events: none;
    }

    /* ── card ── */
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      backdrop-filter: blur(12px);
      transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
    }
    .card:hover {
      border-color: rgba(77,124,255,0.3);
      transform: translateY(-3px);
      box-shadow: 0 20px 60px rgba(77,124,255,0.1);
    }

    /* ── badge ── */
    .badge {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 5px 12px; border-radius: 999px;
      background: rgba(77,124,255,0.1);
      border: 1px solid rgba(77,124,255,0.25);
      font-family: 'DM Mono', monospace;
      font-size: 12px; color: var(--accent); letter-spacing: 0.03em;
    }

    /* ── tech chip ── */
    .tech-chip {
      display: inline-flex; align-items: center;
      padding: 6px 14px; border-radius: 8px;
      background: rgba(77,124,255,0.07);
      border: 1px solid rgba(77,124,255,0.15);
      font-family: 'DM Mono', monospace;
      font-size: 12px; color: var(--muted);
      transition: all 0.2s;
    }
    .tech-chip:hover { background: rgba(77,124,255,0.14); color: var(--accent); border-color: rgba(77,124,255,0.35); }

    /* ── buttons ── */
    .btn-primary {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 14px 28px; border-radius: 10px;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      color: #fff; font-weight: 600; font-size: 15px;
      border: none; cursor: pointer;
      box-shadow: 0 8px 32px rgba(77,124,255,0.35);
      transition: transform 0.2s, box-shadow 0.2s;
      font-family: 'DM Sans', sans-serif;
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 44px rgba(77,124,255,0.5); }

    .btn-ghost {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 14px 28px; border-radius: 10px;
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text); font-weight: 500; font-size: 15px;
      cursor: pointer; transition: all 0.2s;
      font-family: 'DM Sans', sans-serif;
    }
    .btn-ghost:hover { background: rgba(255,255,255,0.04); border-color: rgba(99,130,255,0.35); }

    /* ── nav ── */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 40px; height: 68px;
      background: rgba(6,8,16,0.8);
      backdrop-filter: blur(20px) saturate(1.5);
      border-bottom: 1px solid var(--border);
      transition: all 0.3s;
    }
    .nav-logo { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800; color: #fff; letter-spacing: -0.02em; }
    .nav-logo span { color: var(--accent); }
    .nav-links { display: flex; gap: 32px; list-style: none; }
    .nav-links a { color: var(--muted); font-size: 14px; font-weight: 500; text-decoration: none; transition: color 0.2s; }
    .nav-links a:hover { color: var(--text); }

    /* ── hero number ── */
    .stat-number { font-family: 'Syne', sans-serif; font-size: 42px; font-weight: 800; color: #fff; line-height: 1; }
    .stat-label  { font-size: 13px; color: var(--muted); margin-top: 4px; }

    /* ── step ── */
    .step-num {
      width: 40px; height: 40px; border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 800;
      color: #fff; flex-shrink: 0;
      box-shadow: 0 4px 20px rgba(77,124,255,0.4);
    }

    /* ── section header line ── */
    .section-label {
      display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
    }
    .section-label::after {
      content: ''; flex: 1; height: 1px; background: var(--border);
    }

    /* ── highlight line ── */
    .highlight { color: var(--accent); }
    .highlight-green { color: var(--green); }

    /* ── divider ── */
    .divider { height: 1px; background: var(--border); }

    /* ── fade-up animation ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) both; }
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
    .delay-4 { animation-delay: 0.4s; }
    .delay-5 { animation-delay: 0.55s; }

    /* ── terminal blink ── */
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
    .cursor { display:inline-block; width:2px; height:1em; background:var(--accent); vertical-align:middle; animation:blink 1s step-end infinite; margin-left:2px; }

    /* ── gradient text ── */
    .gradient-text {
      background: linear-gradient(135deg, #fff 30%, var(--accent));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* ── responsive ── */
    @media (max-width: 768px) {
      .nav { padding: 0 20px; }
      .nav-links { display: none; }
      .hero-grid { grid-template-columns: 1fr !important; }
    }
  `}</style>
)

/* ─── Nav ────────────────────────────────────────────────────── */
const Nav = () => (
  <nav className="nav">
    <div className="nav-logo">aai<span>bliss</span></div>
    <ul className="nav-links">
      <li><a href="#services">Services</a></li>
      <li><a href="#stack">Stack</a></li>
      <li><a href="#approach">Approach</a></li>
    </ul>
    <button className="btn-primary" style={{ padding: '10px 20px', fontSize: 14 }}>
      <Mail size={14} /> Get in Touch
    </button>
  </nav>
)

/* ─── Hero ───────────────────────────────────────────────────── */
const Hero = () => (
  <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 68 }}>
    <div className="grid-bg" />
    <div className="glow-orb" style={{ width: 700, height: 700, top: -200, left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(77,124,255,0.15) 0%, transparent 70%)' }} />
    <div className="glow-orb" style={{ width: 400, height: 400, bottom: 0, right: '10%', background: 'radial-gradient(circle, rgba(124,90,255,0.1) 0%, transparent 70%)' }} />

    <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '80px 40px', width: '100%' }}>

      <div className="fade-up" style={{ marginBottom: 28 }}>
        <span className="badge">
          <Terminal size={12} /> Scale · Secure · Revenue
        </span>
      </div>

      <h1 className="font-display fade-up delay-1" style={{ fontSize: 'clamp(38px, 6vw, 78px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 32, maxWidth: 860 }}>
        <span className="gradient-text">Systems Engineering</span>
        <br />for Scalable &{' '}
        <span style={{ color: 'var(--accent)' }}>AI-Driven</span> Software
      </h1>

      <p className="fade-up delay-2" style={{ fontSize: 18, color: 'var(--muted)', maxWidth: 560, lineHeight: 1.7, marginBottom: 16 }}>
        Aaibliss helps startups and businesses design, build, and scale secure, production-ready systems that handle real users, real traffic, and real revenue.
      </p>

      <p className="fade-up delay-2 font-mono" style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 40, letterSpacing: '0.04em' }}>
        Founder-led · Hands-on · Built for Growth
      </p>

      <div className="fade-up delay-3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 72 }}>
        <button className="btn-primary"><Mail size={16} /> Start a Project</button>
        <button className="btn-ghost">View Services <ArrowRight size={16} /></button>
      </div>

      {/* Stats row */}
      <div className="fade-up delay-4" style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
        {[['5+', 'Years of Experience'], ['50+', 'Systems Shipped'], ['100%', 'Founder-Led'], ['3x', 'Avg Performance Gains']].map(([n, l]) => (
          <div key={l}>
            <div className="stat-number">{n}</div>
            <div className="stat-label">{l}</div>
          </div>
        ))}
      </div>

    </div>

    {/* floating terminal card */}
    <div className="card fade-up delay-5" style={{ position: 'absolute', right: '5%', top: '55%', transform: 'translateY(-50%)', width: 340, padding: 24, display: 'none' }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {['#ff5f56','#ffbd2e','#27c93f'].map(c => <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />)}
      </div>
      <div className="font-mono" style={{ fontSize: 12, lineHeight: 1.8, color: 'var(--muted)' }}>
        <div><span style={{ color: 'var(--green)' }}>✓</span> System design complete</div>
        <div><span style={{ color: 'var(--green)' }}>✓</span> Auth module deployed</div>
        <div><span style={{ color: 'var(--green)' }}>✓</span> 10K RPM stress-tested</div>
        <div><span style={{ color: 'var(--accent)' }}>→</span> AI pipeline integrating<span className="cursor" /></div>
      </div>
    </div>
  </section>
)

/* ─── About Strip ────────────────────────────────────────────── */
const About = () => (
  <section style={{ background: 'var(--bg2)', padding: '80px 40px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div className="section-label">
            <span className="badge"><Users size={11} /> About</span>
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 20, lineHeight: 1.15 }}>
            We don't just write code —<br />
            <span className="highlight">we design systems that survive growth.</span>
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 16 }}>
            Aaibliss is a founder-led backend & system engineering studio focused on building software that scales smoothly, stays secure, and delivers long-term business value. With 5+ years of real-world production experience.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            [Layers,      'System Design & Architecture'],
            [Server,      'Backend & API Engineering'],
            [Shield,      'Security-Aware Development'],
            [Cpu,         'Performance & Scalability'],
            [Bot,         'AI-Driven Automation'],
            [Network,     'Microservices Architecture'],
          ].map(([Icon, label]) => (
            <div key={label} className="card" style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(77,124,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={16} style={{ color: 'var(--accent)' }} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.3 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

/* ─── What We Build ──────────────────────────────────────────── */
const BuildCard = ({ icon: Icon, title, items, accent }) => (
  <div className="card" style={{ padding: 32, height: '100%' }}>
    <div style={{ width: 48, height: 48, borderRadius: 12, background: `rgba(${accent},0.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
      <Icon size={22} style={{ color: `rgb(${accent})` }} />
    </div>
    <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, letterSpacing: '-0.01em' }}>{title}</h3>
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map(item => (
        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'var(--muted)', fontSize: 14, lineHeight: 1.5 }}>
          <ChevronRight size={14} style={{ color: `rgb(${accent})`, marginTop: 3, flexShrink: 0 }} />
          {item}
        </li>
      ))}
    </ul>
  </div>
)

const WhatWeBuild = () => (
  <section id="services" style={{ padding: '100px 40px' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div className="section-label">
        <span className="badge"><Rocket size={11} /> What We Build</span>
      </div>
      <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 56, lineHeight: 1.1 }}>
        End-to-end engineering,<br /><span className="highlight">from architecture to production.</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
        <BuildCard icon={Server} title="Scalable SaaS Products" accent="77,124,255" items={['Multi-tenant SaaS platforms', 'Role-based access & permissions', 'Subscription & billing-ready systems', 'Admin dashboards & analytics', 'High-traffic production systems']} />
        <BuildCard icon={Bot} title="AI-Powered Business Systems" accent="124,90,255" items={['RAG chatbots & assistants', 'AI moderation & reporting', 'AI analytics & insights', 'Workflow automation pipelines']} />
        <BuildCard icon={Building2} title="Startup & Enterprise" accent="0,229,160" items={['Internal tools & portals', 'Legacy system modernization', 'Backend refactoring & cleanup', 'API-first architecture']} />
      </div>
    </div>
  </section>
)

/* ─── Tech Stack ─────────────────────────────────────────────── */
const StackGroup = ({ icon: Icon, title, chips }) => (
  <div className="card" style={{ padding: 28 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
      <Icon size={16} style={{ color: 'var(--accent)' }} />
      <span className="font-display" style={{ fontWeight: 700, fontSize: 15 }}>{title}</span>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {chips.map(c => <span key={c} className="tech-chip">{c}</span>)}
    </div>
  </div>
)

const TechStack = () => (
  <section id="stack" style={{ background: 'var(--bg2)', padding: '100px 40px', borderTop: '1px solid var(--border)' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div className="section-label">
        <span className="badge"><Code size={11} /> Tech Stack</span>
      </div>
      <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 56 }}>
        Full-stack expertise,<br /><span className="highlight">battle-tested in production.</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        <StackGroup icon={Code}     title="Frontend"               chips={['React.js', 'Next.js', 'Tailwind CSS']} />
        <StackGroup icon={Server}   title="Backend"                chips={['Node.js', 'Express', 'Fastify', 'FastAPI', 'Laravel']} />
        <StackGroup icon={Database} title="Databases"              chips={['PostgreSQL', 'MongoDB', 'Redis', 'Vector DB']} />
        <StackGroup icon={Network}  title="Architecture"           chips={['Microservices', 'Modular Monolith', 'Event-Driven', 'NATS', 'Kafka']} />
        <StackGroup icon={Cpu}      title="Performance & Scaling"  chips={['Redis Caching', 'DB Optimization', 'Horizontal Scaling', 'CDN']} />
        <StackGroup icon={Shield}   title="Security"               chips={['JWT / OAuth2', 'RBAC', 'Rate Limiting', 'Encryption', 'OWASP']} />
      </div>
    </div>
  </section>
)

/* ─── Approach ───────────────────────────────────────────────── */
const Approach = () => (
  <section id="approach" style={{ padding: '100px 40px' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div className="section-label">
        <span className="badge"><Target size={11} /> How We Work</span>
      </div>
      <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 56 }}>
        A structured approach to<br /><span className="highlight">building systems that last.</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {[
          { n: '01', title: 'Think First', desc: 'Understand business goals, growth plans, and bottlenecks before writing a single line of code. Architecture decisions made upfront save months of refactoring.' },
          { n: '02', title: 'Build for Production', desc: 'Secure, scalable, and maintainable systems from day one. No shortcuts — every design decision is made with long-term health in mind.' },
          { n: '03', title: 'Optimize for Growth', desc: 'Performance tuning, cost reduction, and AI automation. Systems that grow with your business rather than becoming bottlenecks.' },
        ].map(({ n, title, desc }, i) => (
          <div key={n} className="card" style={{ padding: '28px 32px', display: 'flex', alignItems: 'flex-start', gap: 24, borderRadius: i === 0 ? '16px 16px 4px 4px' : i === 2 ? '4px 4px 16px 16px' : '4px' }}>
            <div className="step-num">{n}</div>
            <div>
              <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{title}</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: 15, maxWidth: 640 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─── Why Aaibliss ───────────────────────────────────────────── */
const WhyUs = () => (
  <section style={{ background: 'var(--bg2)', padding: '100px 40px', borderTop: '1px solid var(--border)' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div className="section-label">
            <span className="badge"><Sparkles size={11} /> Why Aaibliss</span>
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 20, lineHeight: 1.15 }}>
            We don't deliver features —<br />
            <span className="highlight">we deliver systems that generate value.</span>
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 16 }}>
            Work directly with the principal engineer — no account managers, no handoffs, no dilution. Just focused, senior-level engineering from start to finish.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            ['Founder-led, hands-on engineering',    'var(--accent)'],
            ['5+ years production experience',        'var(--accent2)'],
            ['Startup & enterprise mindset',          'var(--green)'],
            ['Strong system design skills',           'var(--accent)'],
            ['AI-first problem solving',              'var(--accent2)'],
            ['Clear ownership & communication',       'var(--green)'],
          ].map(([label, color]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
              <span style={{ fontSize: 15, fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

/* ─── Services List ──────────────────────────────────────────── */
const Services = () => (
  <section style={{ padding: '100px 40px' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div className="section-label">
        <span className="badge"><Package size={11} /> Services</span>
      </div>
      <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 56 }}>
        Everything you need to<br /><span className="highlight">ship and scale.</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
        {[
          [Code,      'Backend & API Development'],
          [Layers,    'SaaS Architecture & System Design'],
          [Bot,       'AI-Powered Automation Systems'],
          [Globe,     'RAG Chatbot Development'],
          [Network,   'Microservices & Event-Driven Systems'],
          [Cpu,       'Performance Optimization'],
          [Shield,    'Security Hardening'],
          [Wrench,    'Legacy System Migration & Refactoring'],
        ].map(([Icon, label]) => (
          <div key={label} className="card" style={{ padding: '20px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(77,124,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon size={16} style={{ color: 'var(--accent)' }} />
            </div>
            <span style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.4 }}>{label}</span>
            <ChevronRight size={14} style={{ color: 'var(--muted)', marginLeft: 'auto', flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─── Vision ─────────────────────────────────────────────────── */
const Vision = () => (
  <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: '100px 40px' }}>
    <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
      <div className="badge" style={{ marginBottom: 24 }}><Zap size={11} /> Our Vision</div>
      <h2 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 58px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
        Scale · Secure · Revenue
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: 18, marginBottom: 56, lineHeight: 1.7 }}>
        Three pillars. Every system we build serves all three.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {[
          { icon: Rocket,  label: 'Scale',   desc: 'Without rewriting systems',       color: 'var(--accent)' },
          { icon: Shield,  label: 'Secure',  desc: 'Data & users from day one',        color: 'var(--accent2)' },
          { icon: LineChart,label:'Revenue', desc: 'Reduce cost with AI automation',   color: 'var(--green)' },
        ].map(({ icon: Icon, label, desc, color }) => (
          <div key={label} className="card" style={{ padding: 32, textAlign: 'center' }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: `rgba(0,0,0,0.2)`, border: `1px solid ${color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Icon size={24} style={{ color }} />
            </div>
            <div className="font-display" style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, color }}>{label}</div>
            <p style={{ color: 'var(--muted)', fontSize: 14 }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ─── CTA ────────────────────────────────────────────────────── */
const CTA = () => (
  <section style={{ padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
    <div className="glow-orb" style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(77,124,255,0.12) 0%, transparent 70%)' }} />
    <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
      <div className="badge" style={{ marginBottom: 24 }}><Mail size={11} /> Let's Talk</div>
      <h2 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 20, lineHeight: 1.1 }}>
        Let's Build Something<br /><span className="highlight">That Lasts</span>
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: 18, marginBottom: 40, lineHeight: 1.7 }}>
        Work directly with the founder & principal engineer of Aaibliss. No middlemen, no BS — just great engineering.
      </p>
      <button className="btn-primary" style={{ fontSize: 17, padding: '16px 36px' }}>
        <Mail size={18} /> Get in Touch <ArrowRight size={16} />
      </button>
    </div>
  </section>
)

/* ─── Footer ─────────────────────────────────────────────────── */
const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--border)', padding: '28px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
    <div className="nav-logo" style={{ fontSize: 18 }}>aai<span style={{ color: 'var(--accent)' }}>bliss</span></div>
    <p style={{ color: 'var(--muted)', fontSize: 13, fontFamily: "'DM Mono', monospace" }}>© 2025 Aaibliss · Founder-Led Engineering</p>
    <div style={{ display: 'flex', gap: 8 }}>
      {['Scale','Secure','Revenue'].map(t => <span key={t} className="badge">{t}</span>)}
    </div>
  </footer>
)

/* ─── App ────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <FontLink />
      <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
        <Nav />
        <Hero />
        <About />
        <WhatWeBuild />
        <TechStack />
        <Approach />
        <WhyUs />
        <Services />
        <Vision />
        <CTA />
        <Footer />
      </div>
    </>
  )
}