'use client'

import { useState } from 'react'
import { Mail, Menu, X } from 'lucide-react'

const NAV_LINKS = {
  business: [
    ['#services', 'Services'],
    ['#about', 'About Us'],
    ['#case-studies', 'Case Studies'],
    ['#pricing', 'Pricing'],
  ],
  learner: [
    ['#resources', 'Resources'],
    ['#career', 'Career Guidance'],
  ],
}

const CROSS_LINK = {
  business: { href: '/learn', label: 'For Learners' },
  learner: { href: '/', label: 'For Businesses' },
}

const CTA_LABEL = {
  business: 'Start a Project',
  learner: 'Get Career Guidance',
}

/* ── Nav Component ── */
const Nav = ({ variant = 'business', onProjectClick }) => {
  const [open, setOpen] = useState(false)
  const links = NAV_LINKS[variant]
  const crossLink = CROSS_LINK[variant]
  const ctaLabel = CTA_LABEL[variant]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-20 bg-[#F4F5F7]/95 backdrop-blur-xl border-b border-[#0B132B]/10">
        <a href="/" className="flex items-center">
          <img src="/light-bg.png" alt="GetByTech" className="h-8 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-1 list-none">
          {links.map(([href, label]) => (
            <li key={label}>
              <a href={href} className="px-4 py-2 rounded-lg text-[#64748B] hover:text-[#0B132B] text-sm font-medium transition-colors duration-200">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={crossLink.href}
              className="ml-2 px-4 py-2 rounded-lg text-[#64748B] hover:text-[#0B132B] text-sm font-medium border-l border-[#0B132B]/10 transition-colors duration-200"
            >
              {crossLink.label}
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00E5FF] hover:bg-[#00E5FF]/85 text-[#0B132B] font-semibold text-sm transition-all duration-200 shadow-md shadow-[#00E5FF]/10 active:scale-95 cursor-pointer animate-pulse"
            onClick={onProjectClick}
          >
            <Mail size={14} /> {ctaLabel}
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
          {links.map(([href, label]) => (
            <a
              key={label}
              href={href}
              className="px-4 py-3 rounded-lg text-[#64748B] hover:text-[#0B132B] text-base font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href={crossLink.href}
            className="px-4 py-3 rounded-lg text-[#64748B] hover:text-[#0B132B] text-base font-medium transition-colors border-t border-[#0B132B]/10 pt-4"
            onClick={() => setOpen(false)}
          >
            {crossLink.label}
          </a>
          <button
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 mt-2 rounded-xl bg-[#00E5FF] hover:bg-[#00E5FF]/85 text-[#0B132B] font-semibold text-base transition-all duration-200"
            onClick={() => { setOpen(false); onProjectClick(); }}
          >
            <Mail size={16} /> {ctaLabel}
          </button>
        </div>
      )}
    </>
  )
}

export default Nav
