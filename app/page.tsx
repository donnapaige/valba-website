import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Valba Corp — Custom ERP & Internal SaaS. Built in 2–3 Weeks.',
}

export default function Home() {
  return (
    <ScrollReveal>
      {/* HERO */}
      <header className="hero grain">
        <div className="hero-text">
          <span className="section-label fade-up">For businesses that have outgrown generic software</span>
          <h1 className="display fade-up fade-up-d2">
            One system. Built for <span className="flare">your</span> operations. Live in weeks.
          </h1>
          <p className="hero-sub fade-up fade-up-d3">
            Your tools aren&apos;t broken. They just weren&apos;t built for a business your size. We replace the patchwork — with one custom ERP, HRIS, or internal platform built around how you actually work. Fixed price. No surprises.
          </p>
          <div className="hero-ctas fade-up fade-up-d4">
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/work" className="btn-ghost">See a Real Build</Link>
          </div>
        </div>

        <div className="hero-media">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
            aria-hidden="true"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <span className="hero-plate-caption">FIG.01 — OPERATIONS PLATE</span>
          <div className="hero-mark-overlay">
            <div className="valba-mark" aria-hidden="true"><i /><i /><i /></div>
          </div>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <div className="line" />
          <span>Scroll</span>
        </div>
      </header>

      {/* INDUSTRIES STRIP */}
      <section className="industries">
        <div className="wrap industries-inner">
          <span className="section-label">We work in</span>
          <div className="industries-list">
            <span>Manufacturing</span>
            <span>Services</span>
            <span>HR &amp; People Ops</span>
            <span>SaaS</span>
            <span>Logistics</span>
            <span>Retail &amp; Wholesale</span>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section section--paper">
        <div className="wrap services-grid">
          <div className="services-intro reveal">
            <span className="section-label">What We Build</span>
            <h2>Built for the business that&apos;s drowning in disconnected tools.</h2>
            <p className="lead">Fixed price. No hourly billing. Live in 2–3 weeks.</p>
          </div>

          <div className="services-cards reveal reveal-d1">
            <article className="card svc-card">
              <div className="card-top-accent" />
              <div className="svc-index">S—01</div>
              <svg className="svc-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="14" height="14" /><rect x="23" y="3" width="14" height="14" />
                <rect x="3" y="23" width="14" height="14" /><rect x="23" y="23" width="14" height="14" />
              </svg>
              <h3>Business Systems &amp; ERP</h3>
              <p className="svc-desc">Production, job costing, inventory, client orders — one place. Stop copying data between tools by hand.</p>
              <div className="svc-tags">
                <span className="tag">Airtable</span><span className="tag">StartInfinity</span><span className="tag">Custom SaaS</span>
              </div>
            </article>

            <article className="card svc-card">
              <div className="card-top-accent" />
              <div className="svc-index">S—02</div>
              <svg className="svc-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="6" width="34" height="28" /><line x1="3" y1="14" x2="37" y2="14" />
                <line x1="9" y1="10" x2="9" y2="10.5" /><line x1="14" y1="10" x2="14" y2="10.5" />
                <rect x="8" y="20" width="12" height="9" />
              </svg>
              <h3>Custom Internal SaaS</h3>
              <p className="svc-desc">Client portals, booking platforms, and dashboards — built around your workflow, not a vendor&apos;s template.</p>
              <div className="svc-tags">
                <span className="tag">Lovable</span><span className="tag">No-Code</span><span className="tag">Rapid Build</span>
              </div>
            </article>

            <article className="card svc-card">
              <div className="card-top-accent" />
              <div className="svc-index">S—03</div>
              <svg className="svc-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="20" cy="13" r="7" /><path d="M6 36c0-8 6.3-13 14-13s14 5 14 13" />
              </svg>
              <h3>HRIS Platforms</h3>
              <p className="svc-desc">Employee records, onboarding, leave, and performance — in one system your HR team actually wants to use.</p>
              <div className="svc-tags">
                <span className="tag">HR Ops</span><span className="tag">Multi-entity</span><span className="tag">Automated</span>
              </div>
            </article>

            <article className="card svc-card">
              <div className="card-top-accent" />
              <div className="svc-index">S—04</div>
              <svg className="svc-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 30 L15 18 L23 25 L36 9" /><circle cx="36" cy="9" r="2.5" fill="currentColor" stroke="none" />
                <line x1="4" y1="36" x2="36" y2="36" />
              </svg>
              <h3>Fractional COO &amp; Ops Consulting</h3>
              <p className="svc-desc">When you need someone to own the ops layer — not just hand off a document. Retainer-based. Embedded.</p>
              <div className="svc-tags">
                <span className="tag">Retainer</span><span className="tag">SOP Build</span><span className="tag">Tool Audit</span>
              </div>
            </article>
          </div>
        </div>
        <div className="wrap services-foot reveal">
          <Link href="/services" className="link-arrow">See all services — with fixed prices</Link>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats">
        <div className="wrap stats-grid">
          <div className="stat reveal"><div className="stat-value">2–3 wk</div><div className="stat-label">From brief to production-ready</div></div>
          <div className="stat reveal reveal-d1"><div className="stat-value">4+</div><div className="stat-label">Full operating systems shipped</div></div>
          <div className="stat reveal reveal-d2"><div className="stat-value">6+</div><div className="stat-label">Years running real operations</div></div>
          <div className="stat reveal reveal-d3"><div className="stat-value">$3K–$35K</div><div className="stat-label">Most projects land here</div></div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="section section--paper">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 'var(--space-8)' }}>
            <span className="section-label">Featured Work</span>
            <h2 style={{ color: 'var(--ink)', maxWidth: '20ch' }}>
              How we replaced <em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>five tools</em> with one operating system.
            </h2>
          </div>

          <div className="case-grid">
            <div className="case-story reveal">
              <div className="case-block">
                <span className="tag-label">The Problem</span>
                <p>A growing sign manufacturer was running production, inventory, job costing, client orders, and team management across five disconnected tools. Nothing talked to anything else.</p>
              </div>
              <div className="case-block">
                <span className="tag-label">The Build</span>
                <p>We designed and built a full operating system on StartInfinity — covering every department in a single platform. Working prototype in under a week. Team running on it in two.</p>
              </div>
              <div className="case-metrics">
                <div className="case-metric"><div className="m-value">5→1</div><div className="m-label">Tools consolidated</div></div>
                <div className="case-metric"><div className="m-value">2 weeks</div><div className="m-label">To production-ready</div></div>
                <div className="case-metric"><div className="m-value">Full</div><div className="m-label">Entire team on board</div></div>
              </div>
              <Link href="/work" className="btn-ghost-dark">View All Work</Link>
            </div>

            <div className="case-viz reveal reveal-d1" aria-hidden="true">
              <div className="viz-bar"><span>VALBA · OPERATING SYSTEM</span><span>● LIVE</span></div>
              <div className="viz-grid">
                <div className="viz-node is-live"><span className="n-tag">Production</span><span className="n-bar" /></div>
                <div className="viz-node"><span className="n-tag">Inventory</span><span className="n-bar" /></div>
                <div className="viz-node"><span className="n-tag">Job Costing</span><span className="n-bar" /></div>
                <div className="viz-node"><span className="n-tag">Orders</span><span className="n-bar" /></div>
                <div className="viz-node is-live"><span className="n-tag">Team</span><span className="n-bar" /></div>
                <div className="viz-node"><span className="n-tag">Reporting</span><span className="n-bar" /></div>
              </div>
              <div className="viz-foot"><span>06 MODULES</span><span>01 PLATFORM</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="section process grain">
        <div className="wrap">
          <div className="process-head reveal">
            <span className="section-label">No surprises. Here&apos;s exactly how it goes.</span>
          </div>
          <div className="process-steps">
            <div className="step reveal">
              <span className="step-num">01</span>
              <div className="step-title">Discovery</div>
              <p className="step-desc">We map your operations and agree on exactly what gets built — before a single line of work begins.</p>
            </div>
            <div className="step reveal reveal-d1">
              <span className="step-num">02</span>
              <div className="step-title">Scope &amp; Price</div>
              <p className="step-desc">Fixed price, fixed scope. You know the exact number before we start.</p>
            </div>
            <div className="step reveal reveal-d2">
              <span className="step-num">03</span>
              <div className="step-title">Build</div>
              <p className="step-desc">Working prototype live in under a week. Production-ready system in 2–3 weeks.</p>
            </div>
            <div className="step reveal reveal-d3">
              <span className="step-num">04</span>
              <div className="step-title">Handover</div>
              <p className="step-desc">Your team walks away with full documentation, hands-on training, and 30 days of included support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band grain">
        <div className="wrap reveal">
          <h2 className="display">Know the price. Know the scope. Be live in three weeks.</h2>
          <p className="cta-sub">Tell us what you&apos;re running. We&apos;ll scope it, price it, and tell you exactly how long it takes. Most builds are in production within three weeks.</p>
          <div><Link href="/contact" className="btn-primary">Start a Project</Link></div>
          <p className="cta-fine">No commitment. No sales pitch. Just a conversation about what you&apos;re building.</p>
        </div>
      </section>
    </ScrollReveal>
  )
}
