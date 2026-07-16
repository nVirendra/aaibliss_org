import { Mail, Phone, Globe, Github, Linkedin, Youtube } from 'lucide-react'
import SocialIcon from './SocialIcon'

const CROSS_LINK = {
  business: { href: '/learn', label: 'Visit our Learning Hub →' },
  learner: { href: '/', label: 'Looking to hire us? Visit the business site →' },
}

/* ── Footer Component ── */
const Footer = ({ variant = 'business' }) => {
  const crossLink = CROSS_LINK[variant]

  return (
    <footer className="bg-white border-t border-[#0B132B]/10 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-start justify-between gap-10">
        <div className="space-y-4">
          <a href="/" className="flex items-center">
            <img src="/light-bg.png" alt="GetByTech" className="h-7 w-auto" />
          </a>
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
          <a href={crossLink.href} className="text-xs font-medium text-[#64748B] hover:text-[#0B132B] transition-colors">
            {crossLink.label}
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-[#0B132B]/10 text-center">
        <p className="text-[#64748B]/60 text-xs font-mono">© 2026 GetByTech · Custom Software & MVP Engineering</p>
      </div>
    </footer>
  )
}

export default Footer
