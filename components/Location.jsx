'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const categories = [
  {
    label: 'Hospitals',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
    items: ['Kothari Hospital – 1.4 KM', 'CMRI – 1.1 KM', 'BM Birla Hospital – 1.1 KM'],
  },
  {
    label: 'Schools & Colleges',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
    items: ['Sri Sri Academy – 1.3 KM', 'Loyola School – 1 KM', 'Lakshmipat Singhania Academy – 950 M', 'The Bhowanipore Education Society College – 3.7 KM'],
  },
  {
    label: 'Clubs',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>,
    items: ['Saturday Club – 4.2 KM', 'RCGC – 4.7 KM', 'Calcutta Club – 3.3 KM'],
  },
  {
    label: 'Landmarks & Connectivity',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
    items: ['NSCB International Airport – 22 KM', 'National Library – 2.7 KM', 'Technopolis IT Park – 16 KM', 'Park Street – 6.6 KM', 'Taj Bengal – 3.4 KM', 'Kalighat Temple – 2.4 KM'],
  },
]

const Location = () => {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="location" style={{
      padding: '56px 0',
      background: '#f8f9fa',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23e5e7eb' stroke-width='0.5'/%3E%3C/svg%3E")`,
      backgroundSize: '48px 48px',
      borderBottom: '1px solid #e5e7eb',
    }}>
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div style={{ marginBottom: '36px', textAlign: 'center' }} data-aos="fade-up">
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: 'var(--color-gold-bg)', borderRadius: '50px',
            fontSize: '11px', fontWeight: '700', color: 'var(--color-gold)',
            fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid var(--color-gold-light)', marginBottom: '10px',
          }}>Alipore, Kolkata</span>
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '800', fontSize: '26px',
            color: '#111827', margin: '0 0 6px', letterSpacing: '-0.01em',
          }}>
            Location{' '}
            <span style={{ color: 'var(--color-gold)' }}>Advantages</span>
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px', margin: '8px auto 12px' }} />
          {/* <p style={{ fontFamily: F_SANS, fontSize: '14px', color: '#6b7280', margin: 0 }}>
            Strategically located at Sector 36A, Gurugram — seamlessly connected to Delhi, Airport, and business hubs
          </p> */}
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* LEFT — Accordion */}
          <div className="w-full lg:w-[40%]" data-aos="fade-right">
            <div style={{
              background: '#fff', borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              border: '1px solid #f0f0f0', overflow: 'hidden',
            }}>
              {categories.map((cat, i) => {
                const isOpen = openIdx === i
                return (
                  <div key={i} style={{ borderBottom: i < categories.length - 1 ? '1px solid #f0f0f0' : 'none' }}>

                    {/* Accordion Header */}
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center',
                        justifyContent: 'space-between', padding: '15px 20px',
                        background: isOpen ? 'var(--color-gold-bg)' : '#f9fafb',
                        border: 'none', cursor: 'pointer',
                        transition: 'background 0.2s',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{
                          width: '30px', height: '30px', borderRadius: '8px',
                          background: isOpen ? 'var(--color-gold)' : 'var(--color-gold-bg)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: isOpen ? '#fff' : 'var(--color-gold)', flexShrink: 0,
                          transition: 'background 0.2s, color 0.2s',
                        }}>
                          {cat.icon}
                        </span>
                        <span style={{
                          fontSize: '14px', fontWeight: '700', fontFamily: F_JOST,
                          color: isOpen ? 'var(--color-gold)' : '#374151',
                          transition: 'color 0.2s',
                        }}>{cat.label}</span>
                      </div>
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke={isOpen ? 'var(--color-gold)' : '#9ca3af'}
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {/* Accordion Body */}
                    {isOpen && (
                      <div style={{ padding: '10px 20px 16px 20px', background: '#fff' }}>
                        {cat.items.map((item, j) => (
                          <div key={j} style={{
                            display: 'flex', alignItems: 'flex-start', gap: '10px',
                            padding: '6px 0',
                            borderBottom: j < cat.items.length - 1 ? '1px dashed #f0f0f0' : 'none',
                          }}>
                            <span style={{
                              width: '6px', height: '6px', borderRadius: '50%',
                              background: 'var(--color-gold)', flexShrink: 0, marginTop: '6px',
                            }} />
                            <span style={{
                              fontSize: '13px', color: '#4b5563',
                              fontFamily: F_SANS, lineHeight: 1.6, fontWeight: '500'
                            }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 8px 32px var(--color-shadow-inner)',
              border: '2px solid var(--color-gold)',
              height: '100%', minHeight: '420px',
              position: 'relative',
            }}>
              {/* Brand top accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', zIndex: 10,
              }} />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.676161747965!2d88.32275399999999!3d22.522118499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279fe75fa1e69%3A0xd08c204c79d60f25!2sTata%20Housing%2088%20East!5e1!3m2!1sen!2sin!4v1779863077111!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Map label badge */}
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-gold)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Alipore, Kolkata
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
