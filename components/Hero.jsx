'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

/* =========================================================================
   OLD HERO COMPONENT BACKUP (Commented out as per request)
   =========================================================================
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
        <div className="w-full lg:w-[62%] relative h-[320px] sm:h-[460px] lg:h-auto lg:min-h-[calc(100vh-82px)]" data-aos="fade-right">
          <div className="overflow-hidden" style={{ position: 'absolute', inset: 0, border: '4px solid var(--color-gold)', zIndex: 1, borderRadius: '10px' }}>
            <div className="flex h-full" style={{ width: `${slides.length * 100}%`, transform: `translateX(-${(current * 100) / slides.length}%)`, transition: 'transform 0.7s cubic-bezier(0.77,0,0.18,1)', height: '100%' }}>
              {slides.map((src, idx) => (
                <div key={idx} style={{ width: `${100 / slides.length}%`, flexShrink: 0, position: 'relative' }}>
                  <Image src={src} alt={`Tata 88 East ${idx + 1}`} fill className="object-cover object-top" priority={idx === 0} sizes="(max-width: 1024px) 100vw, 62vw" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {slides.map((_, idx) => (
              <button key={idx} onClick={() => setCurrent(idx)} style={{ width: current === idx ? '36px' : '10px', height: '4px', background: GOLD, opacity: current === idx ? 1 : 0.5, border: 'none', borderRadius: '2px', cursor: 'pointer', transition: 'all 0.4s ease' }} />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[38%] flex flex-col bg-white border-l border-gray-100 shadow-[-8px_0_32px_rgba(0,0,0,0.06)]" data-aos="fade-left">
          <div style={{ background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)', color: '#fff', textAlign: 'center', padding: '11px 16px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }} />
            <p style={{ fontFamily: F_JOST, fontSize: '13px', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: 'var(--color-gold)' }} />
              Booking Window Opens
              <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: 'var(--color-gold)' }} />
            </p>
          </div>

          <div className="p-4 flex flex-col gap-3">
            <div style={{ textAlign: 'center', paddingBottom: '10px', borderBottom: '1px solid #f0f0f0' }}>
              <h1 style={{ fontFamily: F_JOST, fontWeight: '700', fontSize: '26px', color: 'var(--color-primary)', lineHeight: 1.2, margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.02em' }} data-aos="fade-up" data-aos-delay="200">
                Tata 88 East
              </h1>
              <span style={{ fontSize: '1px', opacity: 0, position: 'absolute', pointerEvents: 'none', userSelect: 'none' }}>
                Tata 88 East Alipore Kolkata 3 BHK Luxury Apartments Tata Housing
              </span>
              <p style={{ fontFamily: F_SANS, fontSize: '13px', color: '#6b7280', margin: 0, letterSpacing: '0.02em' }} data-aos="fade-up" data-aos-delay="300">
                Alipore, Kolkata — By Tata Housing
              </p>
            </div>

            <div style={{ background: 'var(--color-gold-bg)', borderRadius: '12px', padding: '14px 18px', textAlign: 'center', border: '1px solid var(--color-gold-light)' }} data-aos="fade-up" data-aos-delay="320">
              {[ '43 Storey Exclusive High-Rise Tower', 'Only 176 Premium Apartments', '3 Bed Residences from ₹4.99 Cr*' ].map((tag, i) => (
                <p key={i} style={{ fontFamily: F_JOST, fontSize: '14px', fontWeight: '600', color: 'var(--color-primary)', margin: i === 0 ? '0' : '4px 0 0', letterSpacing: '0.01em' }}>{tag}</p>
              ))}
            </div>

            <div style={{ background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)', borderRadius: '12px', padding: '4px 14px', boxShadow: '0 6px 20px var(--color-shadow-inner)' }} data-aos="fade-up" data-aos-delay="400">
              {[ "Tallest residential tower in Alipore, Kolkata", 'Panoramic views of Hooghly River & Victoria Memorial', 'Exclusive sky decks with multilevel amenities' ].map((item, i, arr) => (
                <div key={i}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 0' }}>
                    <span style={{ flexShrink: 0, width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p style={{ fontFamily: F_JOST, fontSize: '13px', color: '#fff', margin: 0, fontWeight: '600', letterSpacing: '0.01em' }}>{item}</p>
                  </div>
                  {i < arr.length - 1 && ( <div style={{ borderTop: '1px dashed rgba(255,255,255,0.25)' }} /> )}
                </div>
              ))}
            </div>

            <div style={{ background: 'linear-gradient(90deg, var(--color-gold) 0%, var(--color-gold-light) 50%, var(--color-gold) 100%)', padding: '12px 16px', textAlign: 'center', margin: '8px 0', borderRadius: '4px', boxShadow: '0 4px 12px rgba(181, 135, 40, 0.3)', position: 'relative' }} data-aos="fade-up" data-aos-delay="450">
              <p style={{ fontFamily: F_JOST, fontSize: '13px', fontWeight: '800', color: '#fff', margin: '0', letterSpacing: '0.04em', lineHeight: 1.45, textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                READY TO MOVE IN RESIDENCES NOW COMES WITH AN ASSURED RENTAL BENEFIT
              </p>
            </div>

            <div style={{ textAlign: 'center', background: 'var(--color-bg-muted)', borderRadius: '10px', padding: '12px 16px' }} data-aos="fade-up" data-aos-delay="500">
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
                  <span className="blink-price text-[20px] sm:text-[28px]" style={{ fontWeight: '700', color: 'var(--color-gold)', fontFamily: F_JOST, lineHeight: 1 }}>
                    ₹ 4.99 Cr* Onwards
                  </span>
                </div>
              </div>
            </div>

            <p style={{ textAlign: 'center', fontFamily: F_JOST, fontSize: '13px', fontWeight: '700', color: 'var(--color-gold)', margin: '0', letterSpacing: '0.02em' }} data-aos="fade-up" data-aos-delay="520">
              Hurry! Limited Inventory At This Price
            </p>

            <button onClick={() => setIsOpen(true)} className="btn-gold" style={{ width: '100%', padding: '14px', fontSize: '14px', letterSpacing: '0.1em' }} data-aos="fade-up" data-aos-delay="600">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Enquire Now
            </button>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #f0f0f0', paddingTop: '10px', gap: '4px' }}>
              {[ { icon: '🎧', label: 'Instant Call Back' }, { icon: '🚗', label: 'Free Site Visit' }, { icon: '🏷️', label: 'Best Price Assurance' } ].map((b, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', padding: '8px 4px', borderRadius: '10px', background: '#fff', border: '1px solid #000' }}>
                  <span style={{ fontSize: '18px', lineHeight: 1 }}>{b.icon}</span>
                  <span style={{ fontSize: '10px', color: '#6b7280', fontFamily: F_SANS, fontWeight: '600', textAlign: 'center', letterSpacing: '0.02em' }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
========================================================================= */

import { heroImages } from '../lib/tata-east/images'

const slides = [
  { img: heroImages.banner },
  { img: heroImages.banner2 }
]

const Hero = ({ setIsOpen }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero-container">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-container {
          position: relative;
          margin-top: 80px;
          height: auto;
          overflow: hidden;
          background: #111;
          display: block;
        }

        /* Dark gradient overlay — bottom heavy so text is legible */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.45) 55%,
            rgba(0,0,0,0.10) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* Content block — sits over the image */
        .hero-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
          padding: 0 44px 72px;
        }

        /* Main title */
        .hero-title {
          font-family: var(--font-jost), Montserrat, sans-serif;
          font-size: clamp(22px, 3vw, 42px);
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          line-height: 1.08;
          margin: 0 0 6px;
          text-shadow: 0 2px 16px rgba(0,0,0,0.5);
        }

        /* Subtitle */
        .hero-subtitle {
          font-family: var(--font-jost), Montserrat, sans-serif;
          font-size: clamp(11px, 1.4vw, 18px);
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 12px;
          opacity: 0.92;
          text-shadow: 0 1px 8px rgba(0,0,0,0.4);
        }

        /* Price line */
        .hero-price-line {
          font-family: var(--font-sans), Open Sans, sans-serif;
          font-size: clamp(13px, 1.5vw, 18px);
          color: rgba(255,255,255,0.88);
          margin: 0 0 22px;
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        @keyframes heroPriceBlink {
          0%, 75% { 
            opacity: 1; 
            text-shadow: 0 0 8px rgba(255,255,255,0.6); 
          }
          76%, 100% { 
            opacity: 0; 
            text-shadow: none; 
          }
        }

        .hero-price-amt {
          font-family: var(--font-jost), Montserrat, sans-serif;
          font-size: clamp(18px, 2.5vw, 32px);
          font-weight: 800;
          color: #fff;
          animation: heroPriceBlink 1.4s infinite;
          display: inline-block;
        }

        /* CTA Row */
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* First button — white text + white border on dark hero bg */
        .hero-btn-one {
          color: #fff !important;
          border-color: rgba(255,255,255,0.9) !important;
          background: transparent !important;
        }
        .hero-btn-one:hover {
          background: var(--color-gold) !important;
          color: #fff !important;
          border-color: var(--color-gold) !important;
        }

        /* RERA text */
        .hero-rera {
          font-family: var(--font-sans), Open Sans, sans-serif;
          font-size: 11.5px;
          color: rgba(255,255,255,0.75);
          white-space: nowrap;
        }

        .slide-layer {
          position: relative;
          width: 100%;
          opacity: 0;
          display: none;
          transition: opacity 1s ease-in-out;
        }
        .slide-layer.active {
          opacity: 1;
          display: block;
        }

        .hero-image {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ─── Desktop ─── */
        @media (min-width: 1024px) {
          .hero-container {
            aspect-ratio: 21/9;
          }
          .slide-layer {
            position: absolute;
            height: 100%;
          }
          .hero-image {
            height: 100%;
            object-fit: cover;
            object-position: center 80%;
          }
        }

        .carousel-dots {
          position: absolute;
          bottom: 24px;
          right: 44px;
          display: flex;
          gap: 8px;
          z-index: 20;
        }
        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: background 0.3s;
        }
        .carousel-dot.active {
          background: #fff;
        }

        /* ─── Tablet ─── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-container {
            aspect-ratio: 16/7;
          }
          .slide-layer {
            position: absolute;
            height: 100%;
          }
          .hero-image {
            height: 100%;
            object-fit: cover;
            object-position: center 80%;
          }
          .hero-content {
            padding: 0 28px 56px !important;
          }
        }

        /* ─── Mobile ─── */
        @media (max-width: 767px) {
          .hero-container {
            margin-top: 0px !important;
            padding-top: 80px !important;
            height: auto !important;
            display: flex !important;
            flex-direction: column !important;
          }

          .hero-overlay {
            display: none !important;
          }

          .hero-content {
            position: static !important;
            background: #111827;
            padding: 24px 20px 28px !important;
          }

          .hero-cta-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
            width: 100%;
          }

          .hero-cta-row > button,
          .hero-cta-row > a {
            width: 100% !important;
            justify-content: center !important;
            text-align: center;
            padding: 12px 10px !important;
            font-size: 11px !important;
            white-space: normal !important;
          }

          .hero-rera {
            font-size: 10px !important;
          }

          .carousel-dots {
            bottom: unset;
            top: 90px;
            right: 12px;
          }
        }
      `}} />

      {slides.map((slide, index) => (
        <div key={index} className={`slide-layer ${index === currentSlide ? 'active' : ''}`}>
          <Image
            src={slide.img}
            alt={`Banner ${index + 1}`}
            width={1920}
            height={800}
            className="hero-image"
            priority={index === 0}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            sizes="100vw"
          />
        </div>
      ))}

      {/* ── Dark overlay for text legibility ── */}
      <div className="hero-overlay" />

      {/* ── Content overlay ── */}
      <div className="hero-content">

        {/* Main Heading */}
        <h1 className="hero-title">
          Tata 88 East
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Alipore, Kolkata — By Tata Housing
        </p>

        {/* Price Line */}
        <p className="hero-price-line">
          3 Bed Residences from&nbsp;
          <span className="hero-price-amt">₹ 4.99 Cr*</span>
        </p>

        {/* Bullet Points */}
        <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            'Tallest residential tower in Alipore, Kolkata',
            'Panoramic views of Hooghly River & Victoria Memorial',
            'Exclusive sky decks with multilevel amenities'
          ].map((text, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold, #A9262D)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, backgroundColor: '#fff', borderRadius: '50%', padding: '2px' }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={{ fontFamily: 'var(--font-sans), Open Sans, sans-serif', fontSize: 'clamp(13px, 1.5vw, 18px)', fontWeight: '500', letterSpacing: '0.02em', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Row */}
        <div className="hero-cta-row">

          {/* Button 1 — Unlock Pricing: white text on dark hero bg */}
          <button
            onClick={() => setIsOpen(true)}
            className="btn-gold-outline hero-btn-one"
            style={{ fontSize: '12px', padding: '11px 22px' }}
          >
            Unlock Pricing &amp; Floor Plans
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>

          {/* Button 2 — Schedule a Site Visit (formerly WhatsApp) */}
          <button
            onClick={() => setIsOpen(true)}
            className="btn-gold"
            style={{ fontSize: '12px', padding: '11px 22px' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Schedule a Free Site Visit
          </button>

        </div>

      </div>
    </section>
  )
}

export default Hero
