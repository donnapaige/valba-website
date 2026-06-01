import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work — Valba Corp | Systems Built, Problems Solved',
  description:
    'Selected work from Valba Corp — operational systems built for real businesses. ERP platforms, HRIS, client portals, and booking systems delivered in weeks.',
}

export default function Work() {
  return (
    <ScrollReveal>
      <header className="page-hero grain">
        <span className="page-hero-caption">FIG.03 — SELECTED BUILDS</span>
        <div className="wrap">
          <span className="section-label fade-up">Selected Work</span>
          <h1 className="page-title fade-up fade-up-d2">
            Systems built. Problems <span className="flare">solved.</span>
          </h1>
          <p className="page-hero-sub fade-up fade-up-d3">
            Four operational systems built for real businesses. No agency markup, no dev team overhead — just production-ready platforms delivered in weeks.
          </p>
          <p className="page-hero-note fade-up fade-up-d4">Visuals are abstract representations. Client details confidential.</p>
        </div>
      </header>

      {/* CASE STUDIES */}
      <section className="section section--ink">
        <div className="wrap">
          <div style={{ marginBottom: 'var(--space-6)', display: 'flex', justifyContent: 'flex-end' }}>
            <a href="mailto:hello@valba.co?subject=Sample build access request" className="link-arrow">
              Request access to sample builds
            </a>
          </div>
          <div className="cs-grid">

            {/* CS1 — wide */}
            <article className="cs-card wide reveal">
              <span className="card-top-accent" />
              <div className="cs-visual">
                <div className="vis-erp">
                  <div className="vis-erp-sidebar">
                    <div className="vis-erp-nav a" /><div className="vis-erp-nav" /><div className="vis-erp-nav" /><div className="vis-erp-nav" /><div className="vis-erp-nav" />
                  </div>
                  <div className="vis-erp-main">
                    <div className="vis-erp-topbar" />
                    <div className="vis-erp-kpis">
                      <div className="vis-erp-kpi" /><div className="vis-erp-kpi" /><div className="vis-erp-kpi" /><div className="vis-erp-kpi" />
                    </div>
                    <div className="vis-erp-rows">
                      {Array.from({ length: 8 }).map((_, i) => <div className="vis-erp-row" key={i} />)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs-info">
                <div className="cs-meta">
                  <span className="cs-type">ERP / Business System</span>
                  <span className="cs-divider" />
                  <span className="cs-industry">Sign Manufacturing</span>
                </div>
                <div className="cs-name">Full Operating System — Sign Manufacturing Co.</div>
                <span className="cs-problem-lbl">The Problem</span>
                <p className="cs-text">A medium-scale sign manufacturer was running production, inventory, job costing, client orders, and team management across five separate tools with no integration between them.</p>
                <span className="cs-build-lbl">The Build</span>
                <p className="cs-text">A complete business operating system on StartInfinity — covering all five departments in a single platform, with automated handoffs between production stages and real-time job costing.</p>
                <div className="cs-outcomes">
                  <div><span className="cs-stat-val">5→1</span><span className="cs-stat-lbl">Tools Consolidated</span></div>
                  <div><span className="cs-stat-val">&lt; 2 wk</span><span className="cs-stat-lbl">Framework Delivery</span></div>
                  <div><span className="cs-stat-val">100%</span><span className="cs-stat-lbl">Team Adoption</span></div>
                </div>
              </div>
            </article>

            {/* CS2 — HRIS */}
            <article className="cs-card reveal">
              <span className="card-top-accent" />
              <div className="cs-visual">
                <div className="vis-hris">
                  <div className="vis-hris-grid">
                    {[false, true, false, false, false, false].map((orange, i) => (
                      <div className="vis-hris-card" key={i}>
                        <div className="vis-hris-avatar" style={orange ? { background: 'rgba(242,78,36,0.4)' } : undefined} />
                        <div className="vis-hris-lines"><div className="vis-hris-line" /><div className="vis-hris-line s" /></div>
                      </div>
                    ))}
                  </div>
                  <div className="vis-hris-table">
                    {(['g','y','g','gr','y'] as const).map((c, i) => (
                      <div className="vis-hris-trow" key={i}><div className={`vis-hris-badge ${c}`} /></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="cs-info">
                <div className="cs-meta">
                  <span className="cs-type">Internal System</span>
                  <span className="cs-divider" />
                  <span className="cs-industry">HR &amp; People Ops</span>
                </div>
                <div className="cs-name">HRIS Platform</div>
                <span className="cs-problem-lbl">The Problem</span>
                <p className="cs-text">A multi-entity company was managing employee records, leave requests, and onboarding across spreadsheets and email — with no visibility across entities.</p>
                <span className="cs-build-lbl">The Build</span>
                <p className="cs-text">A unified HRIS covering employee records, onboarding flows, leave management, and performance tracking for all entities in one system.</p>
                <div className="cs-outcomes">
                  <div><span className="cs-stat-val">4</span><span className="cs-stat-lbl">Entities unified</span></div>
                  <div><span className="cs-stat-val">3 wk</span><span className="cs-stat-lbl">Build time</span></div>
                </div>
              </div>
            </article>

            {/* CS3 — Portal */}
            <article className="cs-card reveal reveal-d1">
              <span className="card-top-accent" />
              <div className="cs-visual">
                <div className="vis-portal">
                  <div className="vis-portal-sidebar">
                    <div className="vis-portal-nav a" /><div className="vis-portal-nav" /><div className="vis-portal-nav" /><div className="vis-portal-nav" />
                  </div>
                  <div className="vis-portal-main">
                    <div className="vis-portal-bar" />
                    <div className="vis-portal-list">
                      {(['g','b','gr','g','b','gr'] as const).map((c, i) => (
                        <div className="vis-portal-row" key={i}><div className={`vis-portal-pill ${c}`} /></div>
                      ))}
                    </div>
                    <div className="vis-portal-action" />
                  </div>
                </div>
              </div>
              <div className="cs-info">
                <div className="cs-meta">
                  <span className="cs-type">Client-Facing Portal</span>
                  <span className="cs-divider" />
                  <span className="cs-industry">Creative Agency</span>
                </div>
                <div className="cs-name">Project Management Portal</div>
                <span className="cs-problem-lbl">The Problem</span>
                <p className="cs-text">A graphic design agency was managing client communication, project status, and deliverable approvals across email threads — no single source of truth for either side.</p>
                <span className="cs-build-lbl">The Build</span>
                <p className="cs-text">A client-facing portal where clients log in, track project status, review deliverables, and communicate — replacing email entirely for project management.</p>
                <div className="cs-outcomes">
                  <div><span className="cs-stat-val">0</span><span className="cs-stat-lbl">Emails for approvals</span></div>
                  <div><span className="cs-stat-val">1</span><span className="cs-stat-lbl">Portal for everything</span></div>
                </div>
              </div>
            </article>

            {/* CS4 — Booking */}
            <article className="cs-card reveal">
              <span className="card-top-accent" />
              <div className="cs-visual">
                <div className="vis-booking">
                  <div className="vis-cal">
                    {['Mo','Tu','We','Th','Fr','Sa','Su'].map(d => <div className="vis-cal-cell" key={d}>{d}</div>)}
                    {[
                      {v:'1'},{v:'2',c:'t'},{v:'3'},{v:'4',c:'b'},{v:'5',c:'b'},{v:'6'},{v:'7'},
                      {v:'8',c:'b'},{v:'9'},{v:'10',c:'t'},{v:'11'},{v:'12',c:'b'},{v:'13',c:'b'},{v:'14'},
                      {v:'15'},{v:'16',c:'t'},{v:'17',c:'b'},{v:'18'},{v:'19'},{v:'20',c:'t'},{v:'21'},
                    ].map(({v,c}) => <div className={`vis-cal-cell${c ? ` ${c}` : ''}`} key={v}>{v}</div>)}
                  </div>
                  <div className="vis-match">
                    <div className="vis-match-col">
                      <div className="vis-match-item" /><div className="vis-match-item a" /><div className="vis-match-item" />
                    </div>
                    <div className="vis-match-lines">
                      <div className="vis-match-line" /><div className="vis-match-line" /><div className="vis-match-line" />
                    </div>
                    <div className="vis-match-col">
                      <div className="vis-match-item" /><div className="vis-match-item a" /><div className="vis-match-item" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs-info">
                <div className="cs-meta">
                  <span className="cs-type">SaaS Platform</span>
                  <span className="cs-divider" />
                  <span className="cs-industry">Services</span>
                </div>
                <div className="cs-name">Booking &amp; Matching System</div>
                <span className="cs-problem-lbl">The Problem</span>
                <p className="cs-text">A service business was manually matching clients to providers by phone and email — scheduling errors, missed follow-ups, and hours of admin time every week.</p>
                <span className="cs-build-lbl">The Build</span>
                <p className="cs-text">An automated booking and matching platform — clients select a service, the system matches to the right provider, confirms the booking, and handles all follow-up.</p>
                <div className="cs-outcomes">
                  <div><span className="cs-stat-val">Auto</span><span className="cs-stat-lbl">Client–provider matching</span></div>
                  <div><span className="cs-stat-val">&lt; 1 wk</span><span className="cs-stat-lbl">Build to live</span></div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PROCESS NOTE */}
      <section className="section section--concrete grain">
        <div className="wrap pn-inner">
          <div className="reveal">
            <span className="section-label">How We Work</span>
            <h2 className="pn-h2">Every project follows the same process. No exceptions.</h2>
            <p className="pn-body">Discovery first. Scope defined. Price fixed. We don&apos;t start until you know exactly what you&apos;re getting — and we don&apos;t change the price after we start.</p>
          </div>
          <div className="pn-steps reveal reveal-d2">
            <div className="pn-step"><div className="pn-step-title">01 · Discovery Audit</div><div className="pn-step-desc">We map your operations and define what needs to be built. 3–5 days, $500–$1,500.</div></div>
            <div className="pn-step"><div className="pn-step-title">02 · Fixed Scope &amp; Price</div><div className="pn-step-desc">You receive a detailed scope document and a fixed price. No surprises.</div></div>
            <div className="pn-step"><div className="pn-step-title">03 · Build</div><div className="pn-step-desc">Framework live in under a week. Production-ready in 2–3 weeks.</div></div>
            <div className="pn-step"><div className="pn-step-title">04 · Handover &amp; Support</div><div className="pn-step-desc">Documentation, team training, 30 days of post-launch support.</div></div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="section section--paper">
        <div className="wrap center-block reveal">
          <span className="section-label">Start Here</span>
          <h2>Want to see how we&apos;d approach your project?</h2>
          <p>Tell us what you&apos;re building. We&apos;ll tell you exactly what it would take.</p>
          <Link href="/contact" className="btn-primary">Start a Project</Link>
        </div>
      </section>
    </ScrollReveal>
  )
}
