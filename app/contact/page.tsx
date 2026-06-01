import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact — Valba Corp | Tell Us What You're Building",
  description:
    "We review every inquiry and respond within 1 business day — no sales pressure, just a conversation about what you need.",
}

export default function Contact() {
  return (
    <ScrollReveal>
      <header className="page-hero grain">
        <span className="page-hero-caption">FIG.04 — DIRECT LINE</span>
        <div className="wrap">
          <span className="section-label fade-up">Get in Touch</span>
          <h1 className="page-title fade-up fade-up-d2">
            Tell us what you&apos;re <span className="flare">building.</span>
          </h1>
          <p className="page-hero-sub fade-up fade-up-d3">
            We review every inquiry and respond within 1 business day. No sales pressure — just a conversation about what you need and whether we&apos;re the right fit.
          </p>
        </div>
      </header>

      <section className="section section--ink">
        <div className="wrap contact-grid">
          <div className="reveal">
            <ContactForm />
          </div>

          <div className="info-blocks reveal reveal-d2">
            <div className="info-block">
              <span className="info-block-label">Response Time</span>
              <p className="info-block-text">We review every inquiry personally and respond within 1 business day — usually sooner.</p>
            </div>
            <div className="info-block">
              <span className="info-block-label">What Happens Next</span>
              <p className="info-block-text">
                1. We read your message and assess fit.<br />
                2. If it&apos;s a match, we schedule a 30-minute call.<br />
                3. We send you a scoped proposal with a fixed price within 2 days of the call.
              </p>
            </div>
            <div className="info-block">
              <span className="info-block-label">Not Ready Yet?</span>
              <p className="info-block-text">
                Start with a Discovery Audit ($500–$1,500, 3–5 days). You&apos;ll walk away with a complete build roadmap regardless of whether you proceed.<br /><br />
                <Link href="/services">Learn about the Discovery Audit →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
