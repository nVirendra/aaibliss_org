'use client'

import { useState } from 'react'
import {
  Code, Wrench, Bot, Target, BookOpen, Mail,
  ArrowRight, ArrowUpRight, Calendar, CheckCircle2,
  Sparkles, Globe
} from 'lucide-react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ProjectModal from '@/components/ProjectModal'
import WhatsAppFAB from '@/components/WhatsAppFAB'

/* ── Learner Hero ── */
const LearnerHero = ({ onProjectClick }) => (
  <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20 bg-[#F4F5F7]">
    <div className="dot-grid" />
    <div className="hero-noise" />
    <div className="absolute top-[-10%] right-[-5%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-[#00E5FF]/10 pointer-events-none blur-3xl" />

    <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 w-full">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#0B132B] text-xs font-semibold tracking-wide mb-6">
        <BookOpen size={12} className="text-[#0B132B]" /> Learning Hub
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0B132B] leading-[1.1] mb-6 max-w-3xl">
        Learn to build software the way we build it for <span className="text-[#00A8CC] italic">paying clients.</span>
      </h1>

      <p className="text-[#64748B] text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
        Tutorials, real-world project breakdowns, and direct career guidance from a working Principal Engineer — grounded in production systems, not just theory.
      </p>

      <div className="flex flex-wrap gap-4 items-center mb-16">
        <button
          className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#00E5FF] hover:bg-[#00E5FF]/85 text-[#0B132B] font-semibold text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#00E5FF]/20 cursor-pointer"
          onClick={onProjectClick}
        >
          <Mail size={16} /> Book a 1:1 Career Guidance Call <ArrowRight size={16} />
        </button>
        <a
          href="#resources"
          className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#0B132B] border border-slate-200 shadow-sm font-semibold text-base transition-all duration-200"
        >
          Explore Resources
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 pt-8 border-t border-[#0B132B]/10">
        {[
          ['Founder-Led', 'Direct Guidance'],
          ['Production', 'Client-Grade Patterns'],
          ['1:1', 'Career Guidance Calls'],
          ['Global', 'Timezone Support']
        ].map(([val, label]) => (
          <div key={label} className="flex flex-col">
            <span className="text-2xl md:text-3xl font-extrabold text-[#0B132B] tracking-tight">{val}</span>
            <span className="text-[#64748B] text-xs md:text-sm font-mono tracking-wide mt-1">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ── Resources Section ── */
const Resources = () => {
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
    <section id="resources" className="py-24 bg-[#F4F5F7] border-t border-[#0B132B]/10 scroll-mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#0B132B]/10 text-[#64748B] text-xs font-mono">
            <Sparkles size={12} className="text-[#00A8CC]" /> What You'll Find Here
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
            Everything to grow from <span className="text-[#00A8CC] italic">learner to engineer.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningBlocks.map((block, i) => {
            const Icon = block.icon
            return (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#0B132B]/10 shadow-sm space-y-3 hover:border-[#00E5FF]/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center">
                  <Icon size={16} className="text-[#0B132B]" />
                </div>
                <h3 className="text-[#0B132B] text-base font-bold leading-snug">{block.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{block.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Career Guidance / Founder Section ── */
const CareerGuidance = ({ onProjectClick }) => (
  <section id="career" className="py-24 bg-white/50 border-y border-[#0B132B]/10 relative scroll-mt-10">
    <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] text-xs font-mono">
            <Target size={12} /> Career Guidance
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
            We train the next generation of <br />
            <span className="text-[#00A8CC] italic">engineers.</span>
          </h2>
          <p className="text-[#64748B] text-base md:text-lg leading-relaxed">
            At GetByTech, we maintain deep technical mastery by constantly writing training curricula and sharing real-world software templates with developers globally. Our dedication to learning ensures that the systems we build for our clients utilize the most optimized, up-to-date architectural patterns.
          </p>
          <div className="pt-2">
            <button
              onClick={onProjectClick}
              className="inline-flex items-center gap-2 text-[#0B132B] hover:text-[#00E5FF] font-bold border-b-2 border-[#00E5FF] pb-0.5 transition-colors group cursor-pointer"
            >
              Book a 1:1 Career Guidance Call <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#00E5FF]" />
            </button>
          </div>
        </div>

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

/* ── Learner CTA ── */
const LearnerCTA = ({ onProjectClick }) => (
  <section className="py-24 bg-[#F4F5F7] border-t border-[#0B132B]/10 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#00E5FF]/8 pointer-events-none blur-3xl" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#0B132B] text-xs font-semibold">
        <Mail size={11} /> Let's Talk
      </div>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0B132B] tracking-tight leading-tight">
        Ready to level up your <span className="text-[#00A8CC] italic">engineering career?</span>
      </h2>
      <p className="text-[#64748B] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
        Tell us where you're stuck — resume, portfolio, interviews, or a specific stack — and we'll point you in the right direction.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00E5FF] hover:bg-[#00E5FF]/85 text-[#0B132B] font-semibold text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-[#00E5FF]/15"
          onClick={onProjectClick}
        >
          <Mail size={14} /> Book a Guidance Call <ArrowRight size={14} />
        </button>
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0B132B] border border-slate-200 shadow-sm font-semibold text-sm transition-all duration-200"
        >
          <Calendar size={14} /> Pick a Time
        </a>
      </div>
    </div>
  </section>
)

/* ── Main Export Component ── */
export default function LearnPage() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  const openProject = () => setIsProjectModalOpen(true)
  const closeProject = () => setIsProjectModalOpen(false)

  return (
    <div className="bg-[#F4F5F7] min-h-screen text-[#0B132B] selection:bg-[#00E5FF]/30 selection:text-[#0B132B] font-sans antialiased">
      <Nav variant="learner" onProjectClick={openProject} />
      <LearnerHero onProjectClick={openProject} />
      <Resources />
      <CareerGuidance onProjectClick={openProject} />
      <LearnerCTA onProjectClick={openProject} />
      <Footer variant="learner" />
      {isProjectModalOpen && <ProjectModal onClose={closeProject} defaultType="Learner" />}
      <WhatsAppFAB />
    </div>
  )
}
