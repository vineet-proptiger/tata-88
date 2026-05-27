'use client'
import React from 'react'
import Link from 'next/link'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const Footer = () => (
  <footer style={{ background: 'var(--color-dark)', color: '#fff', textAlign: 'center' }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 24px 40px' }}>

      {/* Developer Profile Section */}
      <h2 style={{ fontSize: '24px', fontWeight: '800', fontFamily: F_JOST, marginBottom: '24px', letterSpacing: '0.05em' }} data-aos="fade-in">
        Tata Housing
      </h2>
      <p style={{ fontSize: '14.5px', color: '#ccc', fontFamily: F_SANS, lineHeight: 1.8, marginBottom: '48px', maxWidth: '900px', margin: '0 auto 48px', textAlign: 'justify' }}
        data-aos="fade-in" data-aos-delay="100">
        Tata Housing Development Company is one of India's most respected real estate developers, backed by the legacy of the Tata Group. Known for its commitment to quality, innovation, and customer-centricity, Tata Housing has delivered landmark residential and commercial projects across major cities including Mumbai, Pune, Bangalore, Kolkata, Gurgaon, and Chennai. The company is driven by a vision to provide world-class living experiences with a focus on sustainability, superior construction, and modern amenities. With decades of trust, Tata Housing continues to set new benchmarks in luxury, affordable, and premium housing segments across India.
      </p>

      {/* RERA Section */}
      <div style={{ borderTop: '1px solid #222', padding: '24px 0', marginBottom: '8px' }}>
        <p style={{ fontSize: '14px', color: 'var(--color-gold)', fontFamily: F_SANS, fontWeight: '600' }} data-aos="fade-in">
          Project RERA NO.: Coming Soon (Subject to official approvals)
        </p>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 px-8 border-t border-[#222] max-w-[1200px] mx-auto text-center sm:text-left">
      <p style={{ fontSize: '14px', color: '#999', fontFamily: F_SANS }}>
        &copy; 2026 Tata 88 East. All rights reserved
      </p>
      <Link href="/privacy-policy" style={{ fontSize: '14px', color: '#3b82f6', fontFamily: F_SANS, transition: 'color 0.2s' }} className="hover:text-blue-400">
        Privacy Policy
      </Link>
    </div>
  </footer>
)

export default Footer
