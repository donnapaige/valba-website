'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = useCallback(() => setOpen(false), [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          Valba<span className="dot" aria-hidden="true" />
        </Link>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <Link href="/contact" className="btn-primary nav-cta">Start a Project</Link>
          <button
            className="nav-hamburger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`nav-overlay${open ? ' open' : ''}`} aria-hidden={!open}>
        <button className="nav-overlay-close" onClick={close} aria-label="Close menu">
          &times;
        </button>
        <ul className="nav-overlay-links">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} onClick={close}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="btn-primary" onClick={close}>
              Start a Project
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
