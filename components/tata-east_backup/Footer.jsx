'use client'
import React from 'react'
import Link from 'next/link'


const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const Footer = () => (
  <footer style={{ background: 'var(--color-dark)', color: '#fff' }}>

    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 24px 32px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '800', fontFamily: F_JOST, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }} data-aos="fade-in">
        Tata Housing
      </h2>
      <p style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: F_JOST, fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
        Luxury Residences — Alipore, Kolkata
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
        <span style={{ width: '36px', height: '2.5px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px' }} />
      </div>
      <p style={{ fontSize: '15px', color: '#bbb', fontFamily: F_SANS, lineHeight: 1.8, marginBottom: '24px', textAlign: 'justify' }}
        data-aos="fade-in" data-aos-delay="100">
        Tata Housing Development Company is one of India's most respected real estate developers, backed by the legacy of the Tata Group. Known for its commitment to quality, innovation, and customer-centricity, Tata Housing has delivered landmark residential and commercial projects across major cities including Mumbai, Pune, Bangalore, Kolkata, Gurgaon, and Chennai. The company is driven by a vision to provide world-class living experiences with a focus on sustainability, superior construction, and modern amenities. With decades of trust, Tata Housing continues to set new benchmarks in luxury, affordable, and premium housing segments across India.
      </p>
      
      {/* RERA Block */}
      <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '10px 24px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
        <span style={{ fontFamily: F_SANS, fontSize: '14px', color: '#aaa' }}>Project RERA No. : </span>
        <strong style={{ fontFamily: F_JOST, fontSize: '15px', color: '#fff', letterSpacing: '0.04em' }}>HIRA/P/KOL/2019/000383</strong>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-4 px-6 border-t border-[#222] text-center sm:text-left max-w-[1200px] mx-auto">
      <p style={{ fontSize: '13px', color: '#888', fontFamily: F_SANS }}>
        &copy; 2026 Tata 88 East. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        <Link href="/tata-east/privacy-policy" style={{ fontSize: '13px', color: 'var(--color-gold)', fontFamily: F_SANS }}>
          Privacy Policy
        </Link>
      </div>
    </div>

    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 24px 20px', textAlign: 'center' }}>
      <p style={{ fontSize: '10.5px', color: '#999', fontFamily: F_SANS, lineHeight: 1.7, textAlign: 'justify' }}>
        <strong style={{ color: '#bbb' }}>Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
      </p>
    </div>
  </footer>
)

export default Footer

