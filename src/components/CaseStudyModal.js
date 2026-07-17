'use client'

import { useEffect } from 'react'
import { X, ArrowUpRight, Building2, Target, Lightbulb, TrendingUp } from 'lucide-react'

/* ── Case Study detail modal: Challenge / Solution / Outcomes for a portfolio project ── */
const CaseStudyModal = ({ project, onClose, onStartProject }) => {
  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B132B]/40 backdrop-blur-md overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="bg-white border border-[#0B132B]/15 rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl shadow-[#0B132B]/10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] hover:text-[#0B132B] transition-colors cursor-pointer z-10"
          aria-label="Close case study"
        >
          <X size={18} />
        </button>

        <div className="p-8 border-b border-[#0B132B]/10 flex-shrink-0 bg-[#F4F5F7]/50">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[10px] font-mono tracking-wider text-[#0B132B] bg-[#00E5FF]/20 px-2.5 py-1 rounded font-bold uppercase">{project.tag}</span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-[#64748B] bg-white border border-[#0B132B]/10 px-2.5 py-1 rounded uppercase">
              <Building2 size={11} /> {project.industry}
            </span>
          </div>
          <h3 id="case-study-title" className="text-2xl md:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            {project.title}
          </h3>
        </div>

        <div className="overflow-y-auto flex-grow bg-white p-8 space-y-6">
          <div className="p-4 rounded-xl bg-[#00E5FF]/8 border border-[#00E5FF]/20 flex items-start gap-3">
            <TrendingUp size={18} className="text-[#00A8CC] flex-shrink-0 mt-0.5" />
            <p className="text-[#0B132B] text-sm font-semibold leading-relaxed">{project.outcome}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#0B132B] text-sm font-bold">
              <Target size={14} className="text-[#00A8CC]" /> The Challenge
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed">{project.challenge}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#0B132B] text-sm font-bold">
              <Lightbulb size={14} className="text-[#00A8CC]" /> The Solution
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed">{project.solution}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10">
            {project.metrics.map((m, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[#0B132B] text-lg font-extrabold leading-tight">{m.val}</span>
                <span className="text-[#64748B] text-[10px] font-medium mt-0.5">{m.lbl}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded bg-[#F4F5F7] border border-[#0B132B]/10 text-[10px] font-mono text-[#64748B]">{t}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-md"
            >
              Explore Live Demo <ArrowUpRight size={13} className="text-[#00A8CC]" />
            </a>
            {onStartProject && (
              <button onClick={onStartProject} className="btn btn-primary btn-md">
                Start a Similar Project
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyModal
