'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Mail, Menu, X } from 'lucide-react'

const NAV_LINKS = {
  business: [
    ['#services', 'Services'],
    ['#about', 'About Us'],
    ['#projects', 'Projects'],
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
  const [scrolled, setScrolled] = useState(false)
  const links = NAV_LINKS[variant]
  const crossLink = CROSS_LINK[variant]
  const ctaLabel = CTA_LABEL[variant]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      <nav
        aria-label="Primary"
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-20 bg-[#F4F5F7]/90 backdrop-blur-xl border-b transition-shadow duration-300 ${scrolled ? 'border-[#0B132B]/10 shadow-[0_1px_0_rgba(11,19,43,0.04),0_12px_28px_-16px_rgba(11,19,43,0.18)]' : 'border-transparent'}`}
      >
        <Link href="/" className="flex items-center">
          <img src="/light-bg.png" alt="GetByTech" className="h-8 w-auto" />
        </Link>

        <ul className="hidden md:flex items-center gap-1 list-none">
          {links.map(([href, label]) => (
            <li key={label}>
              <a href={href} className="px-4 py-2 rounded-lg text-[#64748B] hover:text-[#0B132B] text-sm font-medium transition-colors duration-200">
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href={crossLink.href}
              className="ml-2 px-4 py-2 rounded-lg text-[#64748B] hover:text-[#0B132B] text-sm font-medium border-l border-[#0B132B]/10 transition-colors duration-200"
            >
              {crossLink.label}
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            className="btn btn-primary btn-md hidden md:inline-flex"
            onClick={onProjectClick}
          >
            <Mail size={14} /> {ctaLabel}
          </button>

          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden p-2 rounded-lg text-[#64748B] hover:text-[#0B132B] transition-colors cursor-pointer"
            id="hamburger"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* --Mobile Drawer-- */}
      {open && (
        <div id="mobile-menu" className="fixed top-20 left-0 right-0 z-40 bg-[#F4F5F7]/95 backdrop-blur-2xl border-b border-[#0B132B]/10 shadow-lg p-6 flex flex-col gap-3 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
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
          <Link
            href={crossLink.href}
            className="px-4 py-3 rounded-lg text-[#64748B] hover:text-[#0B132B] text-base font-medium transition-colors border-t border-[#0B132B]/10 pt-4"
            onClick={() => setOpen(false)}
          >
            {crossLink.label}
          </Link>
          <button
            className="btn btn-primary btn-lg w-full mt-2"
            onClick={() => { setOpen(false); onProjectClick(); }}
          >
            <Mail size={16} /> {ctaLabel}
          </button>
        </div>
      )}
    </header>
  )
}

export default Nav
