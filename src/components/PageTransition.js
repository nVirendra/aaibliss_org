'use client'

/* ── Fades/slides the page's main content in on mount ── */
const PageTransition = ({ children }) => (
  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 ease-out fill-mode-both motion-reduce:animate-none">
    {children}
  </div>
)

export default PageTransition
