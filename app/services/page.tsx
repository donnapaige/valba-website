import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — Valba Corp | Fixed-Price Operational Systems',
  description:
    'Operational systems, fixed price, delivered in weeks. Discovery audits, ERP, custom SaaS, HRIS, client portals, booking systems, and full business operating systems.',
}

const services = [
  {
    num: '01',
    name: 'Discovery & Systems Audit',
    for: 'Any business unsure where to start',
    timeline: '3–5 days',
    includes: [
      'Operations mapping session (remote, 90–120 min)',
      'Gap analysis: where your current tools are failing',
      'System architecture recommendation',
      'Full build roadmap with scope and cost estimate',
      'Written report you keep regardless of next steps',
    ],
  },
  {
    num: '02',
    name: 'Business Systems & ERP',
    for: 'Manufacturers, service businesses, and operators with 10–80 employees',
    timeline: 'Framework live in 1 week · Production-ready in 3 weeks',
    includes: [
      'Up to 4 custom operational modules (production, inventory, orders, team)',
      'Workflow automation between modules',
      'User roles and permission levels',
      'Team onboarding and documentation',
      '30 days of post-launch support',
    ],
  },
  {
    num: '03',
    name: 'Custom Internal SaaS / Web App',
    for: 'Startups and product companies that need a client-facing tool or internal platform',
    timeline: '2–4 weeks',
    includes: [
      'Custom web application with your branding and workflow',
      'User authentication and role management',
      'Integration with your existing tools where applicable',
      'Full source code and deployment',
      '30 days of post-launch support',
    ],
  },
  {
    num: '04',
    name: 'HRIS & People Operations Platform',
    for: 'Companies with 15+ employees managing HR manually',
    price: '$3,000 – $8,000',
    timeline: '2–3 weeks',
    includes: [
      'Employee records and document management',
      'Onboarding flow automation',
      'Leave request and approval workflow',
      'Performance tracking module',
      'HR dashboard for managers',
    ],
  },
  {
    num: '05',
    name: 'Client-Facing Project Portal',
    for: 'Agencies, consultancies, and professional services firms',
    price: '$2,500 – $6,000',
    timeline: '1–2 weeks',
    includes: [
      'Branded client portal your clients log into',
      'Project status tracking and milestone visibility',
      'Deliverable review and approval workflow',
      'Client–team communication thread',
      'Admin dashboard for your team',
    ],
  },
  {
    num: '06',
    name: 'Booking & Matching System',
    for: 'Service marketplaces and scheduling-heavy operations',
    price: '$3,500 – $9,000',
    timeline: '2–3 weeks',
    includes: [
      'Client-facing booking interface',
      'Automated provider matching logic',
      'Calendar management and availability rules',
      'Confirmation and follow-up automation',
      'Reporting dashboard',
    ],
  },
  {
    num: '07',
    name: 'Full Business Operating System',
    for: 'Established SMEs replacing multiple tools with one platform',
    price: '$15,000 – $35,000',
    timeline: '4–8 weeks',
    includes: [
      'End-to-end platform covering all operational departments',
      'Custom-built modules for your specific workflows',
      'Full data migration from existing tools',
      'Team training and change management support',
      'Ongoing system management retainer available',
    ],
  },
]

export default function Services() {
  return (
    <ScrollReveal>
      <header className="page-hero grain">
        <span className="page-hero-caption">FIG.02 — SERVICE INDEX</span>
        <div className="wrap">
          <span className="section-label fade-up">What We Build</span>
          <h1 className="page-title fade-up fade-up-d2">
            Operational systems. Fixed price. Delivered in <span className="flare">weeks.</span>
          </h1>
          <p className="page-hero-sub fade-up fade-up-d3">
            We don&apos;t bill hourly. Every engagement is a defined scope with a fixed price — so you know what you&apos;re getting before we start.
          </p>
          <div className="checkrow fade-up fade-up-d4">
            <div className="ci"><i />Framework live in under 1 week</div>
            <div className="ci"><i />Production-ready in 2–3 weeks</div>
          </div>
        </div>
      </header>

      {/* SERVICES LIST */}
      <section className="services-list section">
        <div className="wrap">
          {services.map((s) => (
            <div className="svc-entry reveal" key={s.num}>
              <div className="svc-left">
                <span className="svc-entry-num">{s.num}</span>
                <div className="svc-entry-name">{s.name}</div>
                <span className="svc-for-label">For</span>
                <div className="svc-for">{s.for}</div>
                <span className="svc-timeline">{s.timeline}</span>
              </div>
              <div className="svc-right">
                <ul className="svc-includes">
                  {s.includes.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <Link href="/contact" className="link-arrow">Discuss This Project</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RETAINER */}
      <section className="section section--concrete grain">
        <div className="wrap ret-inner">
          <div className="reveal">
            <span className="section-label">Ongoing Support</span>
            <h2 className="ret-h2">Every build includes <span className="flare">30 days of support.</span> Most clients stay longer.</h2>
            <p className="ret-body">After launch, we offer a System Management Retainer — covering updates, new modules, and ongoing ops advisory. Most clients turn a single build into a long-term operating relationship.</p>
          </div>
          <div className="ret-tiers reveal reveal-d2">
            <div className="ret-tier">
              <div className="ret-tier-name">System Maintenance</div>
              <div className="ret-tier-detail">5 hrs · Minor updates and fixes</div>
            </div>
            <div className="ret-tier featured">
              <div className="ret-tier-name">System Management</div>
              <div className="ret-tier-detail">10 hrs · Updates + new modules + reporting</div>
            </div>
            <div className="ret-tier">
              <div className="ret-tier-name">Fractional COO</div>
              <div className="ret-tier-detail">10 hrs · All of above + strategic ops advisory</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PHILOSOPHY */}
      <section className="section section--paper">
        <div className="wrap">
          <div className="pp-head reveal">
            <span className="section-label">Pricing</span>
            <h2 style={{ color: 'var(--ink)', maxWidth: '16ch' }}>Why fixed price?</h2>
          </div>
          <div className="pp-grid">
            <div className="pp-card reveal">
              <div className="pp-num">P—01</div>
              <div className="pp-mark" />
              <p className="pp-text">You know the number before we start. No surprises, no scope creep billing.</p>
            </div>
            <div className="pp-card reveal reveal-d1">
              <div className="pp-num">P—02</div>
              <div className="pp-mark" />
              <p className="pp-text">Fixed price means we&apos;re incentivized to work efficiently — not to log hours.</p>
            </div>
            <div className="pp-card reveal reveal-d2">
              <div className="pp-num">P—03</div>
              <div className="pp-mark" />
              <p className="pp-text">50% upfront, 50% on delivery. No free starts, no open-ended commitments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band grain">
        <div className="wrap reveal">
          <h2 className="display">Not sure which service fits?</h2>
          <p className="cta-sub">Start with a Discovery Audit. It takes 3–5 days and gives you a complete build roadmap — regardless of whether you proceed with us.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn-primary">Book a Discovery Audit</Link>
            <Link href="/work" className="btn-ghost">See Our Work First</Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
