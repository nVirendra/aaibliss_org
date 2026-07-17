'use client'

import { useEffect, useRef, useState } from 'react'

/* Parses "38%", "$4,500", "<200ms", "10M+", "3×" into an animatable {prefix, num, suffix} */
const parseValue = (raw) => {
  const match = String(raw).match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/)
  if (!match) return null
  const [, prefix, numStr, suffix] = match
  const num = parseFloat(numStr.replace(/,/g, ''))
  if (Number.isNaN(num)) return null
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
  const hasComma = numStr.includes(',')
  return { prefix, num, suffix, decimals, hasComma }
}

const formatNum = (num, decimals, hasComma) => {
  const fixed = decimals ? num.toFixed(decimals) : Math.round(num).toString()
  if (!hasComma) return fixed
  const [int, dec] = fixed.split('.')
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return dec ? `${withCommas}.${dec}` : withCommas
}

/* ── Animates a numeric value from 0 to its target once it scrolls into view. Falls back to static text for non-numeric values. ── */
const Counter = ({ value, duration = 1400, className = '' }) => {
  const ref = useRef(null)
  const [display, setDisplay] = useState(null)
  const parsed = parseValue(value)

  useEffect(() => {
    if (!parsed) return
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setDisplay(value)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = parsed.num * eased
          setDisplay(`${parsed.prefix}${formatNum(current, parsed.decimals, parsed.hasComma)}${parsed.suffix}`)
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  if (!parsed) {
    return <span ref={ref} className={className}>{value}</span>
  }

  return (
    <span ref={ref} className={className}>
      {display ?? `${parsed.prefix}0${parsed.suffix}`}
    </span>
  )
}

export default Counter
