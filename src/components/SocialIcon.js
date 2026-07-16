/* ── SocialIcon Component ── */
const SocialIcon = ({ icon: Icon, href }) => (
  <a
    href={href}
    className="flex items-center justify-center w-9 h-9 rounded-full bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] hover:text-[#0B132B] hover:border-[#00E5FF] hover:bg-[#00E5FF]/15 transition-all duration-200"
  >
    <Icon size={16} />
  </a>
)

export default SocialIcon
