import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valba Corp — Brand System',
  robots: { index: false, follow: false },
}

const colors = [
  { name: 'Ink', var: '--ink', hex: '#111110', dark: true },
  { name: 'Ink Deep', var: '--ink-deep', hex: '#0A0A09', dark: true },
  { name: 'Concrete', var: '--concrete', hex: '#1B1B18', dark: true },
  { name: 'Concrete 2', var: '--concrete-2', hex: '#232320', dark: true },
  { name: 'Card Dark', var: '--card-dark', hex: '#16160F', dark: true },
  { name: 'Orange', var: '--orange', hex: '#F24E24', dark: true },
  { name: 'Orange Hot', var: '--orange-hot', hex: '#FF6334', dark: true },
  { name: 'Orange Deep', var: '--orange-deep', hex: '#D43C12', dark: true },
  { name: 'Paper', var: '--paper', hex: '#F0EBE1', dark: false },
  { name: 'Bone', var: '--bone', hex: '#FAF8F2', dark: false },
  { name: 'Concrete Lt', var: '--concrete-lt', hex: '#E3DDD0', dark: false },
  { name: 'Steel', var: '--steel', hex: '#9B988D', dark: false },
]

const typeScales = [
  { label: 'Display', className: 'display', sample: 'Valba Corp', note: 'Archivo 800 · uppercase · -0.03em · clamp(3rem,6.6vw,6rem)' },
  { label: 'H2', tag: 'h2', sample: 'Built for Operators', note: 'Archivo 700 · uppercase · -0.02em · clamp(1.9rem,3.4vw,3rem)' },
  { label: 'H3', tag: 'h3', sample: 'Fixed Price. Fast Delivery.', note: 'Archivo 700 · -0.01em · 1.3rem' },
  { label: 'Body', tag: 'p', sample: 'When generic software stops working, Valba Corp builds the system your business actually needs.', note: 'Archivo 400 · 1.0625rem · line-height 1.6' },
  { label: 'Section Label', className: 'section-label', sample: 'About Valba', note: 'Space Mono 700 · 0.7rem · 0.16em tracking · uppercase' },
  { label: 'Mono', className: 'mono-sample', sample: 'FIG.01 — SYSTEMS', note: 'Space Mono 400 · monospace' },
]

const spacingTokens = [
  { token: '--space-1', px: '8px' },
  { token: '--space-2', px: '16px' },
  { token: '--space-3', px: '24px' },
  { token: '--space-4', px: '32px' },
  { token: '--space-6', px: '48px' },
  { token: '--space-8', px: '64px' },
  { token: '--space-12', px: '96px' },
  { token: '--space-16', px: '128px' },
]

const uiElements = [
  { label: 'Primary Button', el: <a href="#" className="btn-primary" onClick={e => e.preventDefault()}>Start a Project</a> },
  { label: 'Ghost Button (Dark BG)', el: <a href="#" className="btn-ghost" onClick={e => e.preventDefault()}>See Services</a> },
  { label: 'Ghost Button (Light BG)', el: <a href="#" className="btn-ghost-dark" onClick={e => e.preventDefault()}>See Our Work</a> },
  { label: 'Link Arrow', el: <a href="#" className="link-arrow" onClick={e => e.preventDefault()}>Discuss This Project</a> },
]

export default function Branding() {
  return (
    <div style={{ background: 'var(--ink)', minHeight: '100vh', color: 'var(--bone)' }}>

      {/* HERO */}
      <header style={{ borderBottom: '1px solid var(--line-dark)', padding: '80px var(--content-padding)' }} className="grain">
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <span className="section-label">Internal Reference</span>
          <h1 className="display" style={{ color: 'var(--bone)', marginTop: '1rem', marginBottom: '1rem' }}>
            Valba <span className="flare">Brand</span><br />System
          </h1>
          <p style={{ color: 'var(--steel)', maxWidth: '48ch', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.04em' }}>
            Design tokens, typography, colour palette, and UI components. Not indexed. Not linked. Internal use only.
          </p>
        </div>
      </header>

      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 var(--content-padding)' }}>

        {/* COLOUR PALETTE */}
        <section style={{ padding: '80px 0', borderBottom: '1px solid var(--line-dark)' }}>
          <span className="section-label">01 — Colour Palette</span>
          <h2 style={{ color: 'var(--bone)', marginBottom: '48px' }}>Brand Colours</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
            {colors.map(c => (
              <div key={c.var} style={{ borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--line-dark)' }}>
                <div style={{ background: c.hex, height: '100px' }} />
                <div style={{ padding: '16px', background: 'var(--concrete)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--bone)', fontWeight: 700, marginBottom: '4px' }}>{c.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--steel)' }}>{c.hex}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--steel)' }}>{c.var}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Signal colour callout */}
          <div style={{ marginTop: '48px', padding: '32px', background: 'var(--concrete)', border: '1px solid var(--line-dark)', borderRadius: '4px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>Primary Signal</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--orange)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>#F24E24</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--steel)', marginTop: '4px' }}>Use on dark backgrounds only</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>Dark Ground</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--bone)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>#111110</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--steel)', marginTop: '4px' }}>Primary canvas</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>Light Ground</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--paper)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>#F0EBE1</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--steel)', marginTop: '4px' }}>Section paper / warm off-white</div>
            </div>
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section style={{ padding: '80px 0', borderBottom: '1px solid var(--line-dark)' }}>
          <span className="section-label">02 — Typography</span>
          <h2 style={{ color: 'var(--bone)', marginBottom: '48px' }}>Type Scale</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {typeScales.map((t, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 280px', gap: '32px', alignItems: 'start', padding: '32px 0', borderTop: '1px solid var(--line-dark)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.12em', paddingTop: '4px' }}>{t.label}</div>
                <div style={{ overflow: 'hidden' }}>
                  {t.className === 'display' && <p className="display" style={{ color: 'var(--bone)' }}>{t.sample}</p>}
                  {t.tag === 'h2' && <h2 style={{ color: 'var(--bone)' }}>{t.sample}</h2>}
                  {t.tag === 'h3' && <h3 style={{ color: 'var(--bone)' }}>{t.sample}</h3>}
                  {t.tag === 'p' && <p style={{ color: 'var(--steel)' }}>{t.sample}</p>}
                  {t.className === 'section-label' && <span className="section-label">{t.sample}</span>}
                  {t.className === 'mono-sample' && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--steel)', letterSpacing: '0.06em' }}>{t.sample}</span>}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--steel)', lineHeight: 1.7, paddingTop: '4px' }}>{t.note}</div>
              </div>
            ))}
          </div>

          {/* Font families */}
          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ padding: '32px', background: 'var(--concrete)', border: '1px solid var(--line-dark)', borderRadius: '4px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>Display & Body — Archivo</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--bone)', lineHeight: 1, letterSpacing: '-0.03em', textTransform: 'uppercase' }}>ABCDEFG<br />0123456</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--steel)', marginTop: '16px', lineHeight: 1.6 }}>The quick brown fox jumps over the lazy dog. Variable font — single file, all weights.</div>
            </div>
            <div style={{ padding: '32px', background: 'var(--concrete)', border: '1px solid var(--line-dark)', borderRadius: '4px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>Monospace — Space Mono</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', fontWeight: 700, color: 'var(--bone)', lineHeight: 1.1, letterSpacing: '-0.01em' }}>FIG.01<br />SYSTEMS</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--steel)', marginTop: '16px', lineHeight: 1.6 }}>Labels · captions · codes · metadata. Used sparingly for system-level text.</div>
            </div>
          </div>
        </section>

        {/* SPACING */}
        <section style={{ padding: '80px 0', borderBottom: '1px solid var(--line-dark)' }}>
          <span className="section-label">03 — Spacing</span>
          <h2 style={{ color: 'var(--bone)', marginBottom: '48px' }}>Space Scale</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {spacingTokens.map(s => (
              <div key={s.token} style={{ display: 'grid', gridTemplateColumns: '160px 80px 1fr', gap: '24px', alignItems: 'center', padding: '16px 0', borderTop: '1px solid var(--line-dark)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--steel)' }}>{s.token}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--orange)' }}>{s.px}</div>
                <div style={{ height: '8px', background: 'var(--orange)', opacity: 0.4, width: s.px, maxWidth: '100%' }} />
              </div>
            ))}
          </div>
        </section>

        {/* LOGO */}
        <section style={{ padding: '80px 0', borderBottom: '1px solid var(--line-dark)' }}>
          <span className="section-label">04 — Logotype</span>
          <h2 style={{ color: 'var(--bone)', marginBottom: '48px' }}>Logo Usage</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
            {/* Dark BG */}
            <div style={{ padding: '48px 32px', background: 'var(--ink)', border: '1px solid var(--line-dark)', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '32px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'var(--bone)' }}>VALBA</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>On Ink · Preferred</div>
            </div>
            {/* Paper BG */}
            <div style={{ padding: '48px 32px', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '32px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'var(--ink)' }}>VALBA</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>On Paper · Secondary</div>
            </div>
            {/* Orange signal */}
            <div style={{ padding: '48px 32px', background: 'var(--orange)', border: '1px solid transparent', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '32px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'var(--bone)' }}>VALBA</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>On Orange · Accent Use Only</div>
            </div>
          </div>
          <div style={{ marginTop: '24px', padding: '24px', background: 'var(--concrete)', border: '1px solid var(--line-dark)', borderRadius: '4px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--steel)', lineHeight: 1.8 }}>
              — Logotype is set in Archivo 800, uppercase, -0.02em tracking<br />
              — Minimum clear space: 1× the cap-height on all sides<br />
              — Never stretch, rotate, or apply drop shadows<br />
              — Never place on a busy background without a backing plate
            </div>
          </div>
        </section>

        {/* UI ELEMENTS */}
        <section style={{ padding: '80px 0', borderBottom: '1px solid var(--line-dark)' }}>
          <span className="section-label">05 — UI Components</span>
          <h2 style={{ color: 'var(--bone)', marginBottom: '48px' }}>Buttons & Links</h2>

          {/* On dark */}
          <div style={{ marginBottom: '32px', padding: '48px', background: 'var(--ink)', border: '1px solid var(--line-dark)', borderRadius: '4px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '32px' }}>On Dark Background</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center' }}>
              <a href="#" className="btn-primary" onClick={e => e.preventDefault()}>Start a Project</a>
              <a href="#" className="btn-ghost" onClick={e => e.preventDefault()}>See Services</a>
              <a href="#" className="link-arrow" onClick={e => e.preventDefault()}>Discuss This Project</a>
            </div>
          </div>

          {/* On paper */}
          <div style={{ padding: '48px', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '4px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '32px' }}>On Paper Background</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center' }}>
              <a href="#" className="btn-primary" onClick={e => e.preventDefault()}>Start a Project</a>
              <a href="#" className="btn-ghost-dark" onClick={e => e.preventDefault()}>See Our Work</a>
              <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-ink)', textDecoration: 'underline', textUnderlineOffset: '3px' }} onClick={e => e.preventDefault()}>Learn More</a>
            </div>
          </div>
        </section>

        {/* SURFACE TREATMENTS */}
        <section style={{ padding: '80px 0', borderBottom: '1px solid var(--line-dark)' }}>
          <span className="section-label">06 — Surface Treatments</span>
          <h2 style={{ color: 'var(--bone)', marginBottom: '48px' }}>Backgrounds & Texture</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[
              { label: 'Ink', bg: 'var(--ink)', border: 'var(--line-dark)' },
              { label: 'Ink Deep', bg: 'var(--ink-deep)', border: 'var(--line-dark)' },
              { label: 'Concrete', bg: 'var(--concrete)', border: 'var(--line-dark)' },
              { label: 'Paper', bg: 'var(--paper)', border: 'var(--line)' },
              { label: 'Bone', bg: 'var(--bone)', border: 'var(--line)' },
              { label: 'Concrete Lt', bg: 'var(--concrete-lt)', border: 'var(--line)' },
            ].map(s => (
              <div key={s.label} style={{ height: '120px', background: s.bg, border: `1px solid ${s.border}`, borderRadius: '4px', display: 'flex', alignItems: 'flex-end', padding: '16px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: s.bg.includes('paper') || s.bg.includes('bone') || s.bg.includes('lt') ? 'var(--text-muted)' : 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Grain */}
          <div style={{ marginTop: '24px', height: '160px', borderRadius: '4px', overflow: 'hidden', position: 'relative', background: 'var(--ink-deep)', border: '1px solid var(--line-dark)' }} className="grain">
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.16em' }}>.grain — film noise overlay · opacity 0.40 · mix-blend-mode: overlay</span>
            </div>
          </div>
        </section>

        {/* VOICE */}
        <section style={{ padding: '80px 0' }}>
          <span className="section-label">07 — Voice & Tone</span>
          <h2 style={{ color: 'var(--bone)', marginBottom: '48px' }}>Brand Voice</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {[
              { title: 'Operator, Not Salesperson', body: 'Speak like someone who has run the operation. No buzzwords. No padding. State the fact, move on.' },
              { title: 'Specific Over Vague', body: '"2–3 weeks" not "fast." "$3K–$8K" not "affordable." Specificity is confidence.' },
              { title: 'Earned Confidence', body: 'The brand is sure of itself without being arrogant. No superlatives. No "world-class." Just precision.' },
              { title: 'Dark & Direct', body: 'Short sentences. Active voice. Present tense. Cut every word that doesn\'t earn its place.' },
            ].map((v, i) => (
              <div key={i} style={{ padding: '32px', background: 'var(--concrete)', border: '1px solid var(--line-dark)', borderRadius: '4px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>V—0{i + 1}</div>
                <h3 style={{ color: 'var(--bone)', marginBottom: '12px' }}>{v.title}</h3>
                <p style={{ color: 'var(--steel)', fontSize: '0.9rem' }}>{v.body}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <div style={{ borderTop: '1px solid var(--line-dark)', padding: '32px var(--content-padding)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Valba Corp — Brand System · Internal Use Only</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--steel)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Not indexed · Not linked</span>
      </div>
    </div>
  )
}
