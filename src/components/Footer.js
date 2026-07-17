import Link from 'next/link'
import { Mail, Phone, Globe, Github, Linkedin, Youtube, ArrowUpRight } from 'lucide-react'
import SocialIcon from './SocialIcon'

const COLUMNS = {
  business: [
    {
      heading: 'Company',
      links: [
        ['#services', 'Services'],
        ['#about', 'About Us'],
        ['#projects', 'Projects'],
        ['#pricing', 'Pricing'],
      ],
    },
    {
      heading: 'Explore',
      links: [
        ['/learn', 'For Learners'],
        ['https://calendly.com/', 'Book a Call'],
        ['https://wa.me/9183298985', 'WhatsApp Us'],
      ],
    },
  ],
  learner: [
    {
      heading: 'Learn',
      links: [
        ['#resources', 'Resources'],
        ['#career', 'Career Guidance'],
      ],
    },
    {
      heading: 'Explore',
      links: [
        ['/', 'For Businesses'],
        ['https://calendly.com/', 'Book a Call'],
      ],
    },
  ],
}

const TAGLINE = {
  business: 'Custom software, MVPs, and dedicated engineering teams — built and led by senior principal engineers.',
  learner: 'Tutorials, real-world project breakdowns, and direct career guidance from a working Principal Engineer.',
}

const isExternal = (href) => href.startsWith('http')
const isInternalRoute = (href) => href.startsWith('/')

/* ── Footer Component ── */
const Footer = ({ variant = 'business' }) => {
  const columns = COLUMNS[variant]

  return (
    <footer className="bg-white border-t border-[#0B132B]/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12">

        {/* Brand column */}
        <div className="col-span-2 md:col-span-5 space-y-5">
          <Link href="/" className="flex items-center">
            <img src="/light-bg.png" alt="GetByTech" className="h-7 w-auto" />
          </Link>
          <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">
            {TAGLINE[variant]}
          </p>
          <div className="space-y-2 text-xs md:text-sm text-[#64748B]">
            <a href="mailto:hello@GetByTech.com" className="flex items-center gap-2 hover:text-[#0B132B] transition-colors w-fit">
              <Mail size={14} /> hello@GetByTech.com
            </a>
            <a href="tel:+919183298985" className="flex items-center gap-2 hover:text-[#0B132B] transition-colors w-fit">
              <Phone size={14} /> +91 9183298985
            </a>
            <div className="flex items-center gap-2">
              <Globe size={14} /> Based in India · Working across Global Timezones
            </div>
          </div>
        </div>

        {/* Link columns */}
        {columns.map(col => (
          <div key={col.heading} className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-[#0B132B] text-xs font-mono font-bold uppercase tracking-wider">{col.heading}</h3>
            <ul className="space-y-3 list-none">
              {col.links.map(([href, label]) => (
                <li key={label}>
                  {isInternalRoute(href) ? (
                    <Link href={href} className="group inline-flex items-center gap-1 text-[#64748B] hover:text-[#0B132B] text-sm transition-colors">
                      {label}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      target={isExternal(href) ? '_blank' : undefined}
                      rel={isExternal(href) ? 'noreferrer' : undefined}
                      className="group inline-flex items-center gap-1 text-[#64748B] hover:text-[#0B132B] text-sm transition-colors"
                    >
                      {label}
                      {isExternal(href) && <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social column */}
        <div className="col-span-2 md:col-span-3 flex flex-row md:flex-col items-start md:items-end justify-between md:justify-start gap-4">
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

      <div className="border-t border-[#0B132B]/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#64748B]/70 text-xs font-mono">© 2026 GetByTech · Custom Software & MVP Engineering</p>
          <p className="text-[#64748B]/70 text-xs font-mono">Designed &amp; built in-house</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
