import type { Metadata } from 'next'
import { Archivo, Space_Mono } from 'next/font/google'
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
      </body>
    </html>
  )
}
