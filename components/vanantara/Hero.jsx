'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { heroImages } from '../../lib/vanantara/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), "Open Sans", sans-serif'
const DARK_ACCENT = '#22c55e'

const slides = [heroImages.banner, heroImages.banner2]
const INTERVAL = 5500

export default function Hero({ setIsOpen }) {
  const [cur, setCur] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    startRef.current = Date.now()
    cancelAnimationFrame(rafRef.current)

    function tick() {
      const pct = Math.min((Date.now() - startRef.current) / INTERVAL * 100, 100)
      if (pct < 100) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    const timer = setTimeout(() => setCur(p => (p + 1) % slides.length), INTERVAL)
    return () => { clearTimeout(timer); cancelAnimationFrame(rafRef.current) }
  }, [cur])

  const goTo = (idx) => setCur(idx)

  return (
    <>
      <style>{`
        @keyframes heroFadeDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes heroRiseUp   { from{opacity:0;transform:translateY(22px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes heroSlideUp  { from{opacity:0;transform:translateY(30px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes livepulse {
          0%  { box-shadow:0 0 0 0 rgba(76,175,80,0.6); }
          70% { box-shadow:0 0 0 6px rgba(76,175,80,0); }
          100%{ box-shadow:0 0 0 0 rgba(76,175,80,0); }
        }
      `}</style>

      <div style={{
        width: '100%',
        minHeight: 'calc(100vh - 80px)',
        marginTop: '80px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'visible',
        background: '#111827',
      }}>

        {/* ══ IMAGE STAGE — top section ══ */}
        <div style={{ flex: 1, minHeight: '240px', position: 'relative', overflow: 'hidden' }}>

          {/* Carousel track */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex',
            transform: `translateX(-${cur * 100}%)`,
            transition: 'transform 1s cubic-bezier(0.86,0,0.07,1)',
          }}>
            {slides.map((src, idx) => (
              <div key={idx} style={{ flex: '0 0 100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute', inset: '-3%',
                  transform: cur === idx ? 'scale(1.06)' : 'scale(1)',
                  transition: 'transform 8s ease-out',
                }}>
                  <Image
                    src={src}
                    alt={`Godrej Vanantara ${idx + 1}`}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                    sizes="100vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom vignette */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%', zIndex: 3,
            background: 'linear-gradient(to top, rgba(17,24,39,0.85) 0%, rgba(17,24,39,0.18) 60%, transparent 100%)',
            pointerEvents: 'none',
          }} />

          {/* Top nav badge */}
          <nav
            className="absolute top-0 left-0 right-0 z-10 flex items-center justify-end p-3 sm:p-6 lg:p-10"
            style={{
              background: 'linear-gradient(to bottom, rgba(17,24,39,0.65) 0%, transparent 100%)',
              animation: 'heroFadeDown 0.7s 0.2s ease both',
            }}
          >
            <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
              <span style={{
                fontFamily: F_SANS, fontSize: 'clamp(8px, 2vw, 10px)', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.4)', padding: '4px 10px', borderRadius: '2px',
                background: 'rgba(17,24,39,0.5)', backdropFilter: 'blur(8px)', whiteSpace: 'nowrap',
              }}
                className="px-2 py-1 sm:px-4 sm:py-1.5"
              >
                ✦ New Launch · Bannerghatta Road, Bangalore
              </span>
            </div>
          </nav>

          {/* Project title overlaid on image */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, zIndex: 5,
            padding: '0 40px 22px',
            animation: 'heroRiseUp 0.9s 0.3s cubic-bezier(0.16,1,0.3,1) both',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ display: 'block', width: '28px', height: '1px', background: DARK_ACCENT, opacity: 0.95, boxShadow: '0 0 10px rgba(34,197,94,0.45)' }} />
              <span style={{ fontFamily: F_SANS, fontSize: '10px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: DARK_ACCENT, textShadow: '0 1px 8px rgba(0,0,0,0.75)' }}>
                Bannerghatta Road, Bangalore
              </span>
            </div>
            <h1 style={{
              fontFamily: F_JOST,
              fontSize: 'clamp(28px, 3.4vw, 52px)',
              fontWeight: 800, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em',
            }}>
              Godrej Vanantara
            </h1>
          </div>

          {/* Pip dots */}
          <div style={{ position: 'absolute', bottom: '20px', right: '40px', zIndex: 6, display: 'flex', gap: '7px' }}>
            {slides.map((_, idx) => (
              <button key={idx} onClick={() => goTo(idx)} style={{
                height: '2px', border: 'none', borderRadius: '1px', cursor: 'pointer', padding: 0,
                width: cur === idx ? '40px' : '22px',
                background: cur === idx ? DARK_ACCENT : 'rgba(255,255,255,0.3)',
                transition: 'all 0.4s ease',
              }} />
            ))}
          </div>
        </div>

        {/* ══ INFO STRIP — bottom section ══ */}
        <div className="flex flex-col lg:flex-row" style={{
          flex: '0 0 auto',
          background: 'var(--color-bg, #ffffff)',
          animation: 'heroSlideUp 0.8s 0.5s cubic-bezier(0.16,1,0.3,1) both',
        }}>

          {/* A — Description + Trust badges (dark) */}
          <div className="w-full lg:w-[320px]" style={{
            flex: '0 0 auto',
            padding: '24px 32px',
            background: 'var(--color-dark, #111827)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px',
            borderRight: '1px solid rgba(255,255,255,0.06)',
          }}>
            <p style={{ fontFamily: F_SANS, fontSize: '13px', lineHeight: 1.6, color: '#ffffff', fontWeight: 300 }}>
              A nature-inspired residential masterpiece by{' '}
              <span style={{ color: DARK_ACCENT, fontWeight: 700 }}>Godrej Properties</span> — immersive green living at{' '}
              <span style={{ color: DARK_ACCENT, fontWeight: 700 }}>Bannerghatta Road, Bangalore</span>.
            </p>

            <div style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
              {[
                { icon: '🎧', label: 'Call\nBack' },
                { icon: '🚗', label: 'Site\nVisit' },
                { icon: '🏷️', label: 'Best\nPrice' },
              ].map((b, i) => (
                <div key={i} style={{
                  flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px',
                  padding: '14px 8px',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,0.04)',
                }}>
                  <span style={{ fontSize: '13px', lineHeight: 1, color: '#ffffff' }}>{b.icon}</span>
                  <span style={{ fontFamily: F_SANS, fontSize: '9px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#ffffff', textAlign: 'center', lineHeight: 1.2, whiteSpace: 'pre-line' }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* B — Specs 2×2 grid */}
          <div className="w-full lg:w-[360px]" style={{
            flex: '0 0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            borderRight: '1px solid rgba(17,24,39,0.1)',
          }}>
            {[
              { val: '36 Acres', lbl: 'Integrated\nTownship' },
              { val: '65,000+', lbl: 'Sq. Ft.\nClubhouse' },
              { val: '2,3 & 4 BHK', lbl: 'Luxury\nApartments' },
              { val: '8L*', lbl: 'EOI Open\nStarts From' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '22px 28px',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                borderRight: i % 2 === 0 ? '1px solid rgba(17,24,39,0.1)' : 'none',
                borderBottom: i < 2 ? '1px solid rgba(17,24,39,0.1)' : 'none',
                background: 'var(--color-bg, #ffffff)',
              }}>
                <p style={{ fontFamily: F_JOST, fontSize: '20px', fontWeight: 700, color: 'var(--color-dark)', lineHeight: 1, marginBottom: '8px' }}>{s.val}</p>
                <p style={{ fontFamily: F_SANS, fontSize: '9px', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--color-text-mid, #6B7280)', lineHeight: 1.35, whiteSpace: 'pre-line' }}>{s.lbl}</p>
              </div>
            ))}
          </div>

          {/* C — Advantages list */}
          <div style={{
            flex: 1, padding: '16px 24px',
            borderRight: '1px solid rgba(17,24,39,0.1)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px',
          }}>
            <p style={{ fontFamily: F_JOST, fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-teal-dark)', marginBottom: '8px' }}>
              Privileged Launch Advantages
            </p>
            {[
              'A forest sanctuary in the sky',
              "Bangalore's finest 33-acres development",
              '80% green spaces. with nature themed',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: DARK_ACCENT, flexShrink: 0, opacity: 0.8 }} />
                <span style={{ fontFamily: F_SANS, fontSize: '13.5px', fontWeight: 500, color: 'var(--color-dark)' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* D — Price + CTA (dark) */}
          <div className="w-full lg:w-[300px]" style={{
            flex: '0 0 auto', padding: '24px 32px',
            background: 'var(--color-dark, #111827)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px',
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: F_SANS, fontSize: '13px', fontWeight: 600, color: '#ffffff', letterSpacing: '0.06em', marginBottom: '6px' }}>
                2,3 &amp; 4 BHK Luxury Apartments Starts
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '8px' }}>
                <span className="blink-price" style={{ fontFamily: F_JOST, fontSize: '32px', fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>₹1.57 Cr*</span>
              </div>
              <p style={{ fontFamily: F_SANS, fontSize: '11px', fontWeight: 700, color: DARK_ACCENT, marginTop: '6px', letterSpacing: '0.04em' }}>
                Hurry! Limited Inventory At This Price
              </p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              style={{
                width: '100%', padding: '12px',
                background: DARK_ACCENT, color: '#fff',
                border: 'none', borderRadius: '6px',
                fontFamily: F_JOST, fontSize: '12.5px', fontWeight: 700,
                letterSpacing: '0.10em', textTransform: 'uppercase', cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(76,175,80,0.4)',
                transition: 'opacity 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Request Brochure
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
