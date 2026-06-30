'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] flex flex-col items-center justify-center p-6 text-center select-none relative">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-radial from-[#00E5FF]/8 to-transparent blur-3xl" />
      <div className="relative z-10 max-w-md space-y-6">
        <div className="mx-auto mb-2">
          <img src="/get-by-tech-text-logo-01-JULY-2026.png" alt="GetByTech" className="h-12 w-auto mx-auto" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B132B] tracking-tight">
          404 — Page Not Found
        </h1>
        
        <p className="text-[#64748B] text-sm leading-relaxed max-w-sm mx-auto">
          The page you are looking for doesn't exist or has been moved to a new location.
        </p>

        <div className="pt-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00E5FF] hover:bg-[#00E5FF]/85 text-[#0B132B] font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
