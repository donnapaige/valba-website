import type { Metadata, Viewport } from 'next'
import { Archivo, Space_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-archivo',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-space-mono',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Valba Corp — Custom ERP & Internal SaaS. Built in 2–3 Weeks.',
  description:
    'When generic software stops working, Valba Corp builds the system your business actually needs — custom ERP, HRIS, booking, and internal SaaS. Fixed price. Delivered in 2–3 weeks.',
  openGraph: {
    type: 'website',
    title: 'Valba Corp — Custom ERP & Internal SaaS. Built in 2–3 Weeks.',
    description:
      'When generic software stops working, Valba Corp builds the system your business actually needs — custom ERP, HRIS, booking, and internal SaaS. Fixed price. Delivered in 2–3 weeks.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceMono.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />

        {/* HubSpot */}
        <Script
          id="hs-script-loader"
          src="//js-na2.hs-scripts.com/246365096.js"
          strategy="afterInteractive"
        />

        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-insight" strategy="afterInteractive">{`
          _linkedin_partner_id = "9466316";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l) {
            if (!l) {
              window.lintrk = function(a, b) { window.lintrk.q.push([a, b]) };
              window.lintrk.q = [];
            }
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}</Script>
        {/* LinkedIn noscript fallback */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=9466316&fmt=gif"
          />
        </noscript>
      </body>
    </html>
  )
}
