'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

const YOUTUBE_PATTERN = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/

const parseYouTubeId = (url) => {
  if (!url) return null
  const match = url.match(YOUTUBE_PATTERN)
  return match ? match[1] : null
}

/* ── Demo video player: lazy-loaded thumbnail + play overlay, embeds on click.
     Supports YouTube links (any format) or a direct .mp4 URL. Falls back to a
     static poster image when no videoUrl is set yet. ── */
const VideoEmbed = ({ videoUrl, poster, title }) => {
  const [playing, setPlaying] = useState(false)
  const youtubeId = parseYouTubeId(videoUrl)

  if (!videoUrl) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={poster}
          alt={`${title} screenshot`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={`${title} demo video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <video src={videoUrl} controls autoPlay className="w-full h-full object-cover" />
        )}
      </div>
    )
  }

  const posterSrc = poster || (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : null)

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play demo video for ${title}`}
      className="group relative aspect-video w-full overflow-hidden bg-[#0B132B] cursor-pointer block"
    >
      {posterSrc && (
        <img
          src={posterSrc}
          alt={`${title} demo preview`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/70 via-[#0B132B]/10 to-transparent" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(0,0,0,0.4)] group-hover:scale-110 group-hover:bg-[#00E5FF] transition-all duration-300">
          <Play size={22} className="text-[#0B132B] ml-1" fill="currentColor" />
        </span>
      </span>
      <span className="absolute bottom-3 left-3 text-[10px] font-mono tracking-wider text-white/90 bg-black/30 backdrop-blur px-2 py-1 rounded uppercase">
        Watch Demo
      </span>
    </button>
  )
}

export default VideoEmbed
