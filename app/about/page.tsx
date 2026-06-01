import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Valba Corp | Built by Operators',
  description:
    "Valba Corp isn't a dev shop or a design agency. We're operators who build the operational systems generic software can't — fixed price, delivered in weeks, owned by your team.",
}

export default function About() {
  return (
    <ScrollReveal>
      <header className="page-hero grain">
        <span className="page-hero-caption">FIG.05 — THE OPERATORS</span>
        <div className="wrap">
          <span className="section-label fade-up">About Valba</span>
          <h1 className="page-title fade-up fade-up-d2">
            Built by operators, for <span className="flare">operators.</span>
          </h1>
          <p className="page-hero-sub fade-up fade-up-d3">
            Valba isn&apos;t a dev shop or a design agency. We&apos;re operators who got tired of stitching businesses together with disconnected tools — so we started building the systems instead.
          </p>
        </div>
      </header>

      {/* WHO WE ARE */}
      <section className="section section--paper">
        <div className="wrap about-intro">
          <div className="reveal">
            <span className="section-label">Who We Are</span>
            <h2>We replace the patchwork with one system that fits.</h2>
            <p>Most growing businesses don&apos;t have a software problem. They have a coordination problem — five tools that don&apos;t talk, data copied by hand, and no single place where the work actually lives.</p>
            <p>We&apos;ve been on that side of it. Valba exists to design and build the operational backbone generic software can&apos;t: <span className="em">ERP, HRIS, client portals, booking platforms, and internal SaaS</span> — scoped to your business and delivered in weeks, not quarters.</p>
            <p>No hourly billing. No open-ended engagements. A fixed price, a fixed scope, and a system your team owns at the end.</p>
          </div>
          <div className="about-media reveal reveal-d2">
            <span className="about-media-caption">FIG.A — OPERATIONS, ON THE FLOOR</span>
            <div style={{ width: '100%', height: '100%', background: 'var(--concrete-lt)' }} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section section--ink">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 'var(--space-8)' }}>
            <span className="section-label">How We Work</span>
            <h2 style={{ color: 'var(--bone)', maxWidth: '20ch' }}>Four principles. Every project, no exceptions.</h2>
          </div>
          <div className="principles-grid">
            {[
              { num: 'P—01', title: 'Operators First', body: "We've run real operations. We build for how the work actually happens — not how a template assumes it does." },
              { num: 'P—02', title: 'Fixed Price, Fixed Scope', body: "You know the number and the boundaries before we start. No scope-creep billing. No surprises after the fact." },
              { num: 'P—03', title: 'Fast by Design', body: "Working framework in under a week. Production-ready in two to three. Momentum is part of the method." },
              { num: 'P—04', title: 'Built to Hand Over', body: "Documentation, training, and 30 days of support. The system is yours — never a permanent dependency on us." },
            ].map((p, i) => (
              <article className={`principle reveal${i > 0 ? ` reveal-d${i}` : ''}`} key={p.num}>
                <span className="card-top-accent" />
                <div className="pr-num">{p.num}</div>
                <div className="pr-mark" />
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="wrap stats-grid">
          <div className="stat reveal"><div className="stat-value">2–3 wk</div><div className="stat-label">From brief to production-ready</div></div>
          <div className="stat reveal reveal-d1"><div className="stat-value">4+</div><div className="stat-label">Full operating systems shipped</div></div>
          <div className="stat reveal reveal-d2"><div className="stat-value">6+</div><div className="stat-label">Years running real operations</div></div>
          <div className="stat reveal reveal-d3"><div className="stat-value">30 days</div><div className="stat-label">Included post-launch support</div></div>
        </div>
      </section>

      {/* POSITION */}
      <section className="section section--paper">
        <div className="wrap center-block reveal">
          <span className="section-label">Our Position</span>
          <h2>Agencies sell hours. We sell the system.</h2>
          <p>The best operational system is the one your team stops noticing — because it finally just works. That&apos;s the bar we build to, and the reason we price by outcome instead of by the clock.</p>
          <Link href="/work" className="btn-ghost-dark">See What We&apos;ve Built</Link>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band grain">
        <div className="wrap reveal">
          <h2 className="display">Let&apos;s build the system your business runs on.</h2>
          <p className="cta-sub">Tell us what you&apos;re running today. We&apos;ll scope it, price it, and tell you exactly how long it takes.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/services" className="btn-ghost">See Services &amp; Pricing</Link>
          </div>
          <p className="cta-fine">No commitment. No sales pitch. Just a conversation about what you&apos;re building.</p>
        </div>
      </section>
    </ScrollReveal>
  )
}
