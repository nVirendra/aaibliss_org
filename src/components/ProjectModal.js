'use client'

import { useState } from 'react'
import { X, CheckCircle2 } from 'lucide-react'

/* ── Project Modal Component ── */
const ProjectModal = ({ onClose, defaultType = 'Business' }) => {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [inquiryType, setInquiryType] = useState(defaultType) // 'Business' or 'Learner'

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B132B]/40 backdrop-blur-md overflow-y-auto">
      <div className="bg-white border border-[#0B132B]/15 rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl shadow-[#0B132B]/10 max-h-[90vh] flex flex-col">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] hover:text-[#0B132B] transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="p-8 border-b border-[#0B132B]/10 flex-shrink-0 bg-[#F4F5F7]/50">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B132B] tracking-tight">
            Start a <span className="text-[#00A8CC] italic">Conversation</span>
          </h3>
          <p className="text-[#64748B] text-sm mt-2">
            Let us know what you are looking for. We will respond within 24 hours.
          </p>

          {/* Toggle Type Selector */}
          <div className="flex gap-2 p-1 bg-[#F4F5F7] border border-[#0B132B]/10 rounded-xl mt-6">
            <button
              type="button"
              onClick={() => setInquiryType('Business')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${inquiryType === 'Business' ? 'bg-[#00E5FF] text-[#0B132B] shadow-sm' : 'text-[#64748B] hover:text-[#0B132B] bg-transparent'}`}
            >
              Build Product / Hire Developers
            </button>
            <button
              type="button"
              onClick={() => setInquiryType('Learner')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${inquiryType === 'Learner' ? 'bg-[#00E5FF] text-[#0B132B] shadow-sm' : 'text-[#64748B] hover:text-[#0B132B] bg-transparent'}`}
            >
              For Learners (Guidance / Course)
            </button>
          </div>
        </div>

        {/* Form Body / Success State */}
        <div className="overflow-y-auto flex-grow bg-white">
          {submitted ? (
            <div className="p-12 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center mb-6">
                <CheckCircle2 size={32} className="text-[#0B132B]" />
              </div>
              <h4 className="text-[#0B132B] text-xl font-bold mb-2">Request Received!</h4>
              <p className="text-[#64748B] text-sm max-w-sm mx-auto leading-relaxed mb-8">
                {inquiryType === 'Business'
                  ? "We will review your product parameters and reach back to schedule an architecture call."
                  : "We will check our program schedule and follow up via email with guidelines."}
              </p>
              <button
                type="button"
                className="px-6 py-2.5 rounded-xl bg-[#F4F5F7] hover:bg-[#slate-100] text-[#0B132B] border border-[#0B132B]/10 text-sm font-semibold transition-colors cursor-pointer"
                onClick={onClose}
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 space-y-6">

              {/* Common Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Conditional Business Fields */}
              {inquiryType === 'Business' ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Company Name</label>
                      <input
                        type="text"
                        placeholder="Company Inc."
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Inquiry Type *</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] focus:text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                      >
                        <option value="SaaS Development">Software Product Development</option>
                        <option value="MVP Building">MVP Building for Startups</option>
                        <option value="Developer Hiring">Dedicated Developer Staffing</option>
                        <option value="System Optimization">Scale & System Optimization</option>
                        <option value="Custom Project">Other Custom Project</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Estimated Budget *</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] focus:text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                        <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                        <option value="$30,000+">$30,000+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Desired Timeline *</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] focus:text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                      >
                        <option value="">Select start time</option>
                        <option value="Immediately">Immediately</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="Exploring options">Exploring options</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Project Description *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Outline the core functionality and what challenges you are looking to address..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors resize-vertical"
                    />
                  </div>
                </>
              ) : (
                /* Conditional Learner Fields */
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Focus Interest *</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] focus:text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                      >
                        <option value="Tutorials">Programming Tutorials</option>
                        <option value="Real Projects">Building Real-World Projects</option>
                        <option value="Career Advisory">Tech Career Guidance</option>
                        <option value="AI Integrations">AI & API Development</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">Current Coding Experience</label>
                      <select
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#64748B] focus:text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors"
                      >
                        <option value="Beginner">Beginner (&lt; 1 Year)</option>
                        <option value="Junior">Junior Developer (1-2 Years)</option>
                        <option value="Mid">Mid-Level Developer (3-5 Years)</option>
                        <option value="Senior">Senior Developer (5+ Years)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#64748B] text-xs font-mono tracking-wider uppercase">What is your learning goal? *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us what stacks you want to master, or what guidance you need..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F4F5F7] border border-[#0B132B]/10 text-[#0B132B] text-sm focus:border-[#00E5FF] outline-none transition-colors resize-vertical"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-5 py-4 mt-4 rounded-xl bg-[#00E5FF] hover:bg-[#00E5FF]/85 text-[#0B132B] font-semibold text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-[#00E5FF]/15"
              >
                {isSubmitting ? 'Submitting Details...' : "Submit Inquiry"}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}

export default ProjectModal
