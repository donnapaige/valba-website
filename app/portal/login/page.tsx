import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Preview — Valba Corp',
  robots: { index: false, follow: false },
}

export default async function PortalLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>
}) {
  const params = await searchParams
  const next = params.next ?? '/portal/olive-winter'

  return (
    <main style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '160px 20px 80px' }}>
      <div style={{ maxWidth: 400, width: '100%' }}>
        <span className="section-label">Client Preview</span>
        <h1 style={{ marginBottom: '0.75rem' }}>Enter Password</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
          This is a private preview link. Enter the password you were given to continue.
        </p>
        <form method="POST" action="/api/portal-auth" className="form-wrapper">
          <input type="hidden" name="next" value={next} />
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-input"
              autoFocus
              required
            />
          </div>
          {params.error && (
            <p style={{ color: 'var(--orange)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Incorrect password. Please try again.
            </p>
          )}
          <button type="submit" className="btn-primary btn-submit">Continue</button>
        </form>
      </div>
    </main>
  )
}
