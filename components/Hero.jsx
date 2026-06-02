'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { heroImages } from '../lib/images'

const GOLD = 'var(--color-gold)'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const slides = [heroImages.banner, heroImages.banner2]

const Hero = ({ setIsOpen }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="!pt-[82px] !pb-0 bg-[var(--color-bg)]">
      <div className="flex flex-col lg:flex-row">

        {/* LEFT — Image Carousel */}
        <div className="w-full lg:w-[62%] relative h-[320px] sm:h-[460px] lg:h-auto lg:min-h-[calc(100vh-82px)]"
          data-aos="fade-right">

          {/* Carousel */}
          <div className="overflow-hidden" style={{ position: 'absolute', inset: 0, border: '4px solid var(--color-gold)', zIndex: 1, borderRadius: '10px' }}>
            <div
              className="flex h-full"
              style={{
                width: `${slides.length * 100}%`,
                transform: `translateX(-${(current * 100) / slides.length}%)`,
                transition: 'transform 0.7s cubic-bezier(0.77,0,0.18,1)',
                height: '100%',
              }}
            >
              {slides.map((src, idx) => (
                <div key={idx} style={{ width: `${100 / slides.length}%`, flexShrink: 0, position: 'relative' }}>
                  <Image src={src} alt={`Tata 88 East ${idx + 1}`} fill className="object-cover object-top"
                    priority={idx === 0} sizes="(max-width: 1024px) 100vw, 62vw" />
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {slides.map((_, idx) => (
              <button key={idx} onClick={() => setCurrent(idx)}
                style={{
                  width: current === idx ? '36px' : '10px', height: '4px', background: GOLD,
                  opacity: current === idx ? 1 : 0.5, border: 'none',
                  borderRadius: '2px', cursor: 'pointer', transition: 'all 0.4s ease'
                }} />
            ))}
          </div>
        </div>

        {/* RIGHT — Premium Info Card */}
        <div className="w-full lg:w-[38%] flex flex-col bg-white border-l border-gray-100 shadow-[-8px_0_32px_rgba(0,0,0,0.06)]" data-aos="fade-left">

          {/* ── Top Banner ── */}
          <div style={{
            background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)',
            color: '#fff',
            textAlign: 'center',
            padding: '11px 16px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* shimmer line */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
            }} />
            <p style={{
              fontFamily: F_JOST, fontSize: '13px', fontWeight: '700',
              letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0,
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
            }}>
              <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: 'var(--color-gold)' }} />
              Booking Window Opens
              <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: 'var(--color-gold)' }} />
            </p>
          </div>

          <div className="p-4 flex flex-col gap-3">

            {/* ── Project Identity ── */}
            <div style={{ textAlign: 'center', paddingBottom: '10px', borderBottom: '1px solid #f0f0f0' }}>
              {/* Brand accent */}
              {/* <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>
                <span style={{
                  display: 'inline-block', padding: '3px 14px',
                  background: 'var(--color-gold)', borderRadius: '4px',
                  fontSize: '10px', fontWeight: '700', color: '#fff',
                  fontFamily: F_JOST, letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>New Launch</span>
              </div> */}
              <h1 style={{
                fontFamily: F_JOST, fontWeight: '700', fontSize: '26px',
                color: 'var(--color-primary)', lineHeight: 1.2, margin: '0 0 4px',
                textTransform: 'uppercase', letterSpacing: '0.02em'
              }}
                data-aos="fade-up" data-aos-delay="200">
                Tata 88 East
              </h1>
              {/* Hidden SEO Text */}
              <span style={{ fontSize: '1px', opacity: 0, position: 'absolute', pointerEvents: 'none', userSelect: 'none' }}>
                Tata 88 East Alipore Kolkata 3 BHK Luxury Apartments Tata Housing
              </span>
              <p style={{
                fontFamily: F_SANS, fontSize: '13px', color: '#6b7280', margin: 0,
                letterSpacing: '0.02em'
              }}
                data-aos="fade-up" data-aos-delay="300">
                Alipore, Kolkata — By Tata Housing
              </p>
            </div>

            {/* ── Tagline Pills ── */}
            <div style={{
              background: 'var(--color-gold-bg)',
              borderRadius: '12px',
              padding: '14px 18px',
              textAlign: 'center',
              border: '1px solid var(--color-gold-light)',
            }}
              data-aos="fade-up" data-aos-delay="320">
              {[
                '43 Storey Exclusive High-Rise Tower',
                'Only 176 Premium Apartments',
                '3 Bed Residences from ₹4.99 Cr*',
              ].map((tag, i) => (
                <p key={i} style={{
                  fontFamily: F_JOST, fontSize: '14px',
                  fontWeight: '600', color: 'var(--color-primary)',
                  margin: i === 0 ? '0' : '4px 0 0', letterSpacing: '0.01em',
                }}>{tag}</p>
              ))}
            </div>

            {/* ── Highlights Box ── */}
            <div style={{
              background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)',
              borderRadius: '12px',
              padding: '4px 14px',
              boxShadow: '0 6px 20px var(--color-shadow-inner)',
            }} data-aos="fade-up" data-aos-delay="400">
              {[
                "Tallest residential tower in Alipore, Kolkata",
                'Panoramic views of Hooghly River & Victoria Memorial',
                'Exclusive sky decks with multilevel amenities',
              ].map((item, i, arr) => (
                <div key={i}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 0' }}>
                    {/* checkmark circle */}
                    <span style={{
                      flexShrink: 0,
                      width: '18px', height: '18px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.22)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p style={{
                      fontFamily: F_JOST, fontSize: '13px', color: '#fff',
                      margin: 0, fontWeight: '600', letterSpacing: '0.01em'
                    }}>{item}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ borderTop: '1px dashed rgba(255,255,255,0.25)' }} />
                  )}
                </div>
              ))}
            </div>

            {/* ── Apartment Type ── */}
            <div style={{ textAlign: 'center' }} data-aos="fade-up" data-aos-delay="450">
              <p style={{
                fontFamily: F_JOST, fontSize: '16px', fontWeight: '700',
                color: 'var(--color-primary)', margin: '0',
                letterSpacing: '0.01em',
              }}>
                3 BHK Luxury Apartments Starts
              </p>
            </div>

            {/* ── Pricing ── */}
            <div style={{
              textAlign: 'center',
              background: 'var(--color-bg-muted)',
              borderRadius: '10px',
              padding: '12px 16px',
            }} data-aos="fade-up" data-aos-delay="500">
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
                  {/* <span className="text-[16px] sm:text-[20px]" style={{
                    fontWeight: '600',
                    color: '#9ca3af',
                    textDecoration: 'line-through',
                    fontFamily: F_JOST,
                    lineHeight: 1,
                  }}>
                    ₹ 5.49 Cr*
                  </span> */}
                  <span className="blink-price text-[20px] sm:text-[28px]" style={{
                    fontWeight: '700',
                    color: 'var(--color-gold)',
                    fontFamily: F_JOST,
                    lineHeight: 1,
                  }}>
                    ₹ 4.99 Cr* Onwards
                  </span>
                </div>
              </div>
            </div>

            {/* ── Hurry Text ── */}
            <p style={{
              textAlign: 'center',
              fontFamily: F_JOST, fontSize: '13px', fontWeight: '700',
              color: 'var(--color-gold)', margin: '0',
              letterSpacing: '0.02em',
            }} data-aos="fade-up" data-aos-delay="520">
              Hurry! Limited Inventory At This Price
            </p>

            {/* ── CTA Button ── */}
            <button onClick={() => setIsOpen(true)}
              className="btn-gold"
              style={{ width: '100%', padding: '14px', fontSize: '14px', letterSpacing: '0.1em' }}
              data-aos="fade-up" data-aos-delay="600">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Enquire Now
            </button>

            {/* ── Trust Badges ── */}
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              borderTop: '1px solid #f0f0f0',
              paddingTop: '10px', gap: '4px',
            }}>
              {[
                { icon: '🎧', label: 'Instant Call Back' },
                { icon: '🚗', label: 'Free Site Visit' },
                { icon: '🏷️', label: 'Best Price Assurance' },
              ].map((b, i) => (
                <div key={i} style={{
                  flex: 1, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', gap: '3px',
                  padding: '8px 4px',
                  borderRadius: '10px',
                  background: '#fff',
                  border: '1px solid #000',
                }}>
                  <span style={{ fontSize: '18px', lineHeight: 1 }}>{b.icon}</span>
                  <span style={{
                    fontSize: '10px', color: '#6b7280', fontFamily: F_SANS,
                    fontWeight: '600', textAlign: 'center', letterSpacing: '0.02em'
                  }}>{b.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
