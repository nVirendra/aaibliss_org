'use client'

import { useEffect } from 'react'
import { X, ArrowUpRight, Target, Lightbulb, TrendingUp } from 'lucide-react'
import VideoEmbed from './VideoEmbed'

/* ── Project detail modal: Problem / Approach / Impact for a product we've built ── */
const ProjectDetailModal = ({ project, onClose, onStartProject }) => {
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
        aria-labelledby="project-detail-title"
        className="bg-white border border-[#0B132B]/15 rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl shadow-[#0B132B]/10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] hover:text-[#0B132B] transition-colors cursor-pointer z-10"
          aria-label="Close project details"
        >
          <X size={18} />
        </button>

        <div className="overflow-y-auto flex-grow bg-white">
          <VideoEmbed videoUrl={project.videoUrl} poster={project.poster} title={project.name} />

          <div className="p-8 space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-wider text-[#0B132B] bg-[#00E5FF]/20 px-2.5 py-1 rounded font-bold uppercase">
                {project.category}
              </span>
              <h3 id="project-detail-title" className="text-2xl md:text-3xl font-extrabold text-[#0B132B] tracking-tight mt-3">
                {project.name}
              </h3>
              <p className="text-[#00A8CC] text-sm font-semibold mt-1">{project.tagline}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#0B132B] text-sm font-bold">
                <Target size={14} className="text-[#00A8CC]" /> The Problem
              </div>
              <p className="text-[#64748B] text-sm leading-relaxed">{project.problem}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#0B132B] text-sm font-bold">
                <Lightbulb size={14} className="text-[#00A8CC]" /> Our Approach
              </div>
              <p className="text-[#64748B] text-sm leading-relaxed">{project.approach}</p>
            </div>

            {project.impact?.length > 0 && (
              <div className="p-4 rounded-xl bg-[#00E5FF]/8 border border-[#00E5FF]/20 flex items-start gap-3">
                <TrendingUp size={18} className="text-[#00A8CC] flex-shrink-0 mt-0.5" />
                <div className="grid grid-cols-2 gap-4 flex-1">
                  {project.impact.map((m, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[#0B132B] text-lg font-extrabold leading-tight">{m.val}</span>
                      <span className="text-[#64748B] text-[10px] font-medium mt-0.5">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-[#F4F5F7] border border-[#0B132B]/10 text-[10px] font-mono text-[#64748B]">{t}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-md"
                >
                  Live Demo <ArrowUpRight size={13} className="text-[#00A8CC]" />
                </a>
              )}
              {onStartProject && (
                <button onClick={onStartProject} className="btn btn-primary btn-md">
                  Start a Similar Project
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailModal
