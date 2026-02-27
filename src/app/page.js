'use client'

import { useState } from 'react'
import {
  Code, Database, Server, Shield, Rocket, CheckCircle2,
  Users, Bot, Building2, Wrench, Package, Target, Mail,
  ArrowRight, Cpu, Network, ChevronRight, Sparkles,
  Globe, Layers, Terminal, Zap, LineChart, BookOpen, Menu, X
} from 'lucide-react'

const Styles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      /* Brand colors extracted from AAIBLISS logo */
      --navy:       #1a2566;   /* AAI dark navy */
      --navy-deep:  #111b52;   /* deeper navy */
      --navy-mid:   #243080;   /* mid navy */
      --teal:       #3bbfbf;   /* BLISS teal */
      --teal-dark:  #2aa0a0;   /* darker teal */
      --teal-lt:    #e8f9f9;   /* light teal tint */

      --bg:         #f5f7fc;   /* very light navy-tinted white */
      --bg2:        #eef1f9;
      --bg3:        #e5e9f5;
      --surface:    #ffffff;
      --border:     #dde2f0;
      --border2:    #c8d0e8;

      --accent:     var(--navy);
      --accent2:    var(--teal);
      --accent-lt:  #eef1fc;
      --green:      #2aa0a0;
      --green-lt:   var(--teal-lt);

      --text:       #0d1433;
      --text2:      #2c3562;
      --muted:      #6872a3;
      --muted2:     #9aa0c4;

      --serif:      'DM Serif Display', Georgia, serif;
      --sans:       'DM Sans', sans-serif;
      --mono:       'Space Mono', monospace;
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
      background-image: radial-gradient(circle, #c0c8e8 1px, transparent 1px);
      background-size: 28px 28px;
      opacity: 0.45;
    }

    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 48px; height: 64px;
      background: rgba(245,247,252,0.9);
      backdrop-filter: blur(16px) saturate(1.6);
      border-bottom: 1px solid var(--border);
    }
    .nav-logo {
      font-family: var(--sans); font-size: 20px; font-weight: 700;
      color: var(--navy); letter-spacing: 0.08em; text-transform: uppercase;
    }
    .nav-logo span { color: var(--teal); }
    .nav-links { display: flex; align-items: center; gap: 4px; list-style: none; }
    .nav-link {
      padding: 7px 14px; border-radius: 8px;
      color: var(--muted); font-size: 14px; font-weight: 500;
      text-decoration: none; transition: all 0.18s;
    }
    .nav-link:hover { color: var(--navy); background: var(--bg2); }
    .nav-link-blog { color: var(--teal) !important; }
    .nav-link-blog:hover { background: var(--teal-lt) !important; }

    .badge {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 5px 12px; border-radius: 999px;
      background: var(--teal-lt);
      border: 1px solid rgba(59,191,191,0.3);
      font-family: var(--mono); font-size: 11px;
      color: var(--teal-dark); letter-spacing: 0.04em; font-weight: 400;
    }
    .badge-neutral { background: var(--bg2); border-color: var(--border2); color: var(--muted); }
    .badge-green   { background: var(--teal-lt); border-color: rgba(59,191,191,0.25); color: var(--teal-dark); }

    .btn-primary {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 24px; border-radius: 10px;
      background: var(--navy); color: #fff;
      font-family: var(--sans); font-weight: 600; font-size: 14px;
      border: none; cursor: pointer;
      box-shadow: 0 1px 3px rgba(26,37,102,0.3), 0 4px 16px rgba(26,37,102,0.18);
      transition: all 0.18s;
    }
    .btn-primary:hover { background: var(--navy-deep); transform: translateY(-1px); box-shadow: 0 4px 20px rgba(26,37,102,0.35); }

    .btn-ghost {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 24px; border-radius: 10px;
      background: var(--surface); border: 1px solid var(--border2);
      color: var(--text2); font-family: var(--sans); font-weight: 500; font-size: 14px;
      cursor: pointer; transition: all 0.18s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    .btn-ghost:hover { border-color: var(--teal); color: var(--teal-dark); background: var(--teal-lt); }

    .section     { padding: 96px 48px; }
    .section-alt { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
    .inner       { max-width: 1120px; margin: 0 auto; }

    .eyebrow { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
    .eyebrow-line { flex: 0 0 32px; height: 1px; background: var(--teal); opacity: 0.5; }

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
      border-radius: 16px;
      transition: border-color 0.22s, box-shadow 0.22s, transform 0.22s;
      box-shadow: 0 1px 4px rgba(26,37,102,0.05);
    }
    .card:hover {
      border-color: rgba(59,191,191,0.4);
      box-shadow: 0 8px 32px rgba(26,37,102,0.10);
      transform: translateY(-2px);
    }
    .card-flat {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(26,37,102,0.05);
    }

    .chip {
      display: inline-flex; padding: 5px 12px; border-radius: 6px;
      background: var(--bg); border: 1px solid var(--border);
      font-family: var(--mono); font-size: 12px; color: var(--muted);
      transition: all 0.18s;
    }
    .chip:hover { background: var(--teal-lt); border-color: rgba(59,191,191,0.35); color: var(--teal-dark); }

    .hl        { color: var(--navy); }
    .hl-italic { font-style: italic; color: var(--teal-dark); }

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
      background: var(--navy); color: #fff;
      font-family: var(--mono); font-size: 13px; font-weight: 400;
      box-shadow: 0 4px 14px rgba(26,37,102,0.3);
    }

    .hero-noise {
      position: absolute; inset: 0; pointer-events: none; opacity: 0.025;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    }

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

/* ── Nav ── */
const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">AAI<span>BLISS</span></div>
        <ul className="nav-links nav-links-desktop">
          {[['#services','Services'],['#stack','Stack'],['#approach','Approach']].map(([href, label]) => (
            <li key={label}><a href={href} className="nav-link">{label}</a></li>
          ))}
          <li>
            <a href="#blog" className="nav-link nav-link-blog">
              <BookOpen size={13} style={{display:'inline',marginRight:5,verticalAlign:'middle'}} />Blog
            </a>
          </li>
        </ul>
        <div style={{display:'flex',gap:10,alignItems:'center'}}>
          <button className="btn-primary hide-sm" style={{padding:'9px 18px',fontSize:13}}><Mail size={13} /> Get in Touch</button>
          <button onClick={() => setOpen(o => !o)} style={{background:'none',border:'none',cursor:'pointer',padding:6,display:'none'}} id="hamburger">
            {open ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </nav>
      {open && (
        <div style={{position:'fixed',top:64,left:0,right:0,zIndex:99,background:'var(--bg)',borderBottom:'1px solid var(--border)',padding:'12px 20px',display:'flex',flexDirection:'column',gap:4}}>
          {[['#services','Services'],['#stack','Stack'],['#approach','Approach'],['#blog','Blog']].map(([href, label]) => (
            <a key={label} href={href} className="nav-link" onClick={() => setOpen(false)} style={{display:'block'}}>{label}</a>
          ))}
          <button className="btn-primary" style={{marginTop:8,justifyContent:'center'}}><Mail size={13} /> Get in Touch</button>
        </div>
      )}
      <style>{`@media(max-width:780px){#hamburger{display:block!important}}`}</style>
    </>
  )
}

/* ── Hero ── */
const Hero = () => (
  <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 64, background: 'var(--bg)' }}>
    <div className="dot-grid" />
    <div className="hero-noise" />
    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 640, height: 640, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,191,191,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', bottom: '5%', left: '-8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,37,102,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />

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
        <button className="btn-primary"><Mail size={15} /> Start a Project</button>
        <button className="btn-ghost">View Services <ArrowRight size={15} /></button>
      </div>

      <div className="fu d4 stats-row" style={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}>
        {[['5+','Years Experience'],['50+','Systems Shipped'],['3×','Avg Perf. Gains'],['100%','Founder-Led']].map(([n, l], i) => (
          <div key={l} style={{ paddingRight: 40, marginRight: 40, borderRight: i < 3 ? '1px solid var(--border2)' : 'none', marginBottom: 8 }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 38, color: 'var(--navy)', lineHeight: 1 }}>{n}</div>
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
          <span className="badge badge-green"><CheckCircle2 size={11} /> Available for new projects</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[[Layers,'System Design'],[Server,'Backend & APIs'],[Shield,'Security'],[Cpu,'Performance'],[Bot,'AI Automation'],[Network,'Microservices']].map(([Icon, label]) => (
            <div key={label} className="card-flat" style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: 'var(--teal-lt)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={15} style={{ color: 'var(--teal-dark)' }} />
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
const BuildCard = ({ icon: Icon, title, items, tint, iconColor }) => (
  <div className="card" style={{ padding: 32, height: '100%' }}>
    <div style={{ width: 46, height: 46, borderRadius: 12, background: tint, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
      <Icon size={20} style={{ color: iconColor || 'var(--navy)' }} />
    </div>
    <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400, marginBottom: 18, color: 'var(--text)', lineHeight: 1.25 }}>{title}</h3>
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map(item => (
        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'var(--muted)', fontSize: 14, lineHeight: 1.55 }}>
          <ChevronRight size={14} style={{ color: 'var(--teal)', marginTop: 2, flexShrink: 0 }} />
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
        <BuildCard icon={Server}    title="Scalable SaaS Products"        tint="var(--accent-lt)"   iconColor="var(--navy)"      items={['Multi-tenant SaaS platforms','Role-based access & permissions','Subscription & billing systems','Admin dashboards & analytics','High-traffic production systems']} />
        <BuildCard icon={Bot}       title="AI-Powered Business Systems"    tint="var(--teal-lt)"     iconColor="var(--teal-dark)" items={['RAG chatbots & assistants','AI moderation & reporting','AI analytics & insights','Workflow automation pipelines']} />
        <BuildCard icon={Building2} title="Startup & Enterprise Solutions" tint="#eef1fc"            iconColor="var(--navy-mid)"  items={['Internal tools & portals','Legacy system modernization','Backend refactoring','API-first architecture']} />
      </div>
    </div>
  </section>
)

/* ── Tech Stack ── */
const StackCard = ({ icon: Icon, title, chips }) => (
  <div className="card" style={{ padding: 24 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
      <Icon size={15} style={{ color: 'var(--teal-dark)' }} />
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
        <StackCard icon={Code}     title="Frontend"              chips={['React.js','Next.js','Tailwind CSS']} />
        <StackCard icon={Server}   title="Backend"               chips={['Node.js','Express','Fastify','FastAPI','Laravel']} />
        <StackCard icon={Database} title="Databases"             chips={['PostgreSQL','MongoDB','Redis','Vector DB']} />
        <StackCard icon={Network}  title="Architecture"          chips={['Microservices','Modular Monolith','Event-Driven','NATS','Kafka']} />
        <StackCard icon={Cpu}      title="Performance & Scaling" chips={['Redis Caching','DB Optimization','Horizontal Scaling','CDN']} />
        <StackCard icon={Shield}   title="Security"              chips={['JWT / OAuth2','RBAC','Rate Limiting','Encryption','OWASP']} />
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
          ['01','Think First','Understand business goals, growth plans, and bottlenecks before writing a single line of code. Architecture decisions made upfront save months of refactoring later.'],
          ['02','Build for Production','Secure, scalable, and maintainable systems from day one. No shortcuts — every design decision is made with long-term health in mind.'],
          ['03','Optimize for Growth','Performance tuning, cost reduction, and AI automation. Systems that grow with your business rather than becoming bottlenecks.'],
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
            ['Founder-led, hands-on engineering','var(--navy)'],
            ['5+ years production experience','var(--teal)'],
            ['Startup & enterprise mindset','var(--navy-mid)'],
            ['Strong system design skills','var(--navy)'],
            ['AI-first problem solving','var(--teal)'],
            ['Clear ownership & communication','var(--navy-mid)'],
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
        {[[Code,'Backend & API Development'],[Layers,'SaaS Architecture & System Design'],[Bot,'AI-Powered Automation Systems'],[Globe,'RAG Chatbot Development'],[Network,'Microservices & Event-Driven Systems'],[Cpu,'Performance Optimization'],[Shield,'Security Hardening'],[Wrench,'Legacy System Migration']].map(([Icon, label]) => (
          <div key={label} className="card-flat" style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 13, cursor: 'pointer', transition: 'all 0.18s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(59,191,191,0.4)'; e.currentTarget.style.background='var(--teal-lt)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.background='var(--surface)'; }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, background: 'var(--teal-lt)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon size={15} style={{ color: 'var(--teal-dark)' }} />
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text2)', lineHeight: 1.4, flex: 1 }}>{label}</span>
            <ChevronRight size={13} style={{ color: 'var(--muted2)', flexShrink: 0 }} />
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
          { icon: Rocket,    label: 'Scale',   desc: 'Without rewriting systems',      color: 'var(--navy)'      },
          { icon: Shield,    label: 'Secure',  desc: 'Data & users from day one',      color: 'var(--teal-dark)' },
          { icon: LineChart, label: 'Revenue', desc: 'Reduce cost with AI automation', color: 'var(--navy-mid)'  },
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
const CTA = () => (
  <section style={{ padding: '96px 48px', background: 'var(--navy)', borderTop: '1px solid var(--navy-deep)', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(59,191,191,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,191,191,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
    <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <span className="badge" style={{ background: 'rgba(59,191,191,0.15)', borderColor: 'rgba(59,191,191,0.3)', color: 'var(--teal)' }}><Mail size={11} /> Let's Talk</span>
      </div>
      <h2 className="serif" style={{ fontSize: 'clamp(32px, 5vw, 58px)', marginBottom: 18, color: '#fff' }}>
        Let's Build Something<br /><span style={{ fontStyle: 'italic', color: 'var(--teal)' }}>That Lasts</span>
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17, marginBottom: 40, lineHeight: 1.75 }}>
        Work directly with the founder & principal engineer of Aaibliss. No middlemen, no BS — just focused engineering.
      </p>
      <button style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 32px', borderRadius:10, background:'var(--teal)', color:'var(--navy)', fontFamily:'var(--sans)', fontWeight:700, fontSize:15, border:'none', cursor:'pointer', boxShadow:'0 4px 20px rgba(59,191,191,0.4)', transition:'all 0.18s' }}
        onMouseEnter={e => { e.currentTarget.style.background='#4dd4d4'; e.currentTarget.style.transform='translateY(-1px)'; }}
        onMouseLeave={e => { e.currentTarget.style.background='var(--teal)'; e.currentTarget.style.transform='translateY(0)'; }}>
        <Mail size={16} /> Get in Touch <ArrowRight size={15} />
      </button>
    </div>
  </section>
)

/* ── Footer ── */
const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--navy-deep)', padding: '28px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, background: 'var(--navy-deep)' }}>
    <div style={{ fontFamily: 'var(--sans)', fontSize: 17, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff' }}>AAI<span style={{ color: 'var(--teal)' }}>BLISS</span></div>
    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, fontFamily: 'var(--mono)' }}>© 2025 Aaibliss · Founder-Led Engineering</p>
    <div style={{ display: 'flex', gap: 8 }}>
      {['Scale','Secure','Revenue'].map(t => <span key={t} style={{ display:'inline-flex', padding:'5px 12px', borderRadius:999, background:'rgba(59,191,191,0.1)', border:'1px solid rgba(59,191,191,0.2)', fontFamily:'var(--mono)', fontSize:11, color:'var(--teal)', letterSpacing:'0.04em' }}>{t}</span>)}
    </div>
  </footer>
)

export default function HomePage() {
  return (
    <>
      <Styles />
      <Nav />
      <Hero />
      <About />
      <WhatWeBuild />
      <TechStack />
      <Approach />
      <WhyUs />
      <ServicesSection />
      <BlogSection />
      <Vision />
      <CTA />
      <Footer />
    </>
  )
}