import './globals.css'
import { Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
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
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  title: 'Tata 88 East Alipore Kolkata | 3 BHK Luxury Residences by Tata Housing',
  description: 'Explore Tata 88 East in Alipore, Kolkata. The tallest residential tower with panoramic views of Hooghly River & Victoria Memorial. 3 BHK residences from ₹4.99 Cr*.',
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon/favicon.ico',
  },
  manifest: '/favicon/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.tata88east.in/"
              },
              "headline": "Tata 88 East Alipore Kolkata | 3 BHK Luxury Residences by Tata Housing",
              "description": "Explore Tata 88 East in Alipore, Kolkata. The tallest residential tower with panoramic views of Hooghly River & Victoria Memorial. 3 BHK residences from ₹4.99 Cr*.",
              "image": "https://www.tata88east.in/_next/image?url=%2Fimages%2Fhero%2Fbanner.webp&w=1200&q=75",
              "author": {
                "@type": "Organization",
                "name": "Proptiger",
                "url": "https://proptiger.com/"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Proptiger",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://prod-static.proptiger.com/mobile/images/New-PropTiger-Logo-dark.34e3e8f4.svg"
                }
              },
              "datePublished": "2026-04-22"
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
