"use client";
import React from "react";
import Link from "next/link";

const F_SANS = "var(--font-sans), Open Sans, sans-serif";
const F_JOST = "var(--font-jost), Montserrat, sans-serif";
const GREEN_ACCENT = "#22c55e";

const Footer = () => (
  <footer style={{ background: "var(--color-dark)", color: "#fff" }}>
    <div
      style={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "56px 24px 32px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "800",
          fontFamily: F_JOST,
          marginBottom: "18px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
        data-aos="fade-in"
      >
        Godrej Properties
      </h2>

      <p
        style={{
          fontSize: "15px",
          color: "#bbb",
          fontFamily: F_SANS,
          lineHeight: 1.8,
          marginBottom: "32px",
          textAlign: "center",
        }}
        data-aos="fade-in"
        data-aos-delay="100"
      >
        Godrej Properties is a leading real estate developer in India, renowned for blending innovative design, sustainability, and quality construction. As part of the trusted Godrej Group, it has delivered numerous residential, commercial, and township projects across major cities like Mumbai, Pune, Bangalore, and Hyderabad. The company focuses on creating spaces that enhance lifestyles while adhering to eco-friendly practices and modern amenities. With a commitment to transparency, customer satisfaction, and architectural excellence, Godrej Properties has earned a strong reputation in the Indian real estate sector. Its projects reflect a balance of luxury, functionality, and long-term value.</p>

      <div style={{ borderTop: "1px solid #222", marginBottom: "24px" }} />

      <p
        style={{
          fontSize: "15px",
          color: "#fff",
          fontFamily: F_SANS,
          fontWeight: "700",
          marginBottom: "0",
        }}
      >
        Project RERA NO.: Coming Soon (Subject to official approvals)
      </p>
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-4 px-6 border-t border-[#222] text-center sm:text-left max-w-[1200px] mx-auto">
      <p style={{ fontSize: "13px", color: "#888", fontFamily: F_SANS }}>
        &copy; 2026 Vanantara. All rights reserved
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <Link
          href="/vanantara/privacy-policy"
          style={{
            fontSize: "13px",
            color: GREEN_ACCENT,
            fontFamily: F_SANS,
          }}
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
