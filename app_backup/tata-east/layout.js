import './tata-east.css'
import { Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import { CITY_DISPLAY } from '../../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../../public/tata-east/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  title: 'Tata 88 East | Premium 3, 3.5 & 4 BHK Residences in Alipore, Kolkata',
  description: "Tata 88 East — Kolkata's premier luxury high-rise in Alipore. Premium 3, 3.5 & 4 BHK residences starting from ₹6.30 Cr. Designed for those who demand the extraordinary. RERA: HIRA/P/KOL/2019/000383.",
}

export default function TataEastLayout({ children }) {
  return (
    <div className={`tata-east-theme min-h-screen ${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}>
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <Script
        id="json-ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tata88.com/tata-east"
            },
            "headline": "Tata 88 East | Premium 3, 3.5 & 4 BHK Residences in Alipore, Kolkata",
            "description": "Tata 88 East, Kolkata's premier luxury high-rise in Alipore. Premium 3, 3.5 & 4 BHK residences starting from ₹6.30 Cr. RERA: HIRA/P/KOL/2019/000383.",
            "image": "https://tata88.com/_next/image?url=%2Ftata-east%2Fimages%2Fhero%2Fbanner1.webp&w=1200&q=75",
            "author": {
              "@type": "Organization",
              "name": "Proptiger Marketing Services Pvt Ltd",
              "url": "https://tata88.com/tata-east"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Proptiger",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.proptiger.com/"
              }
            },
            "datePublished": "2026-06-10"
          })
        }}
      />
      <Script id="gtag-init" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
      </Script>
      {children}
    </div>
  )
}



