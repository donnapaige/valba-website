'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const bot = form.querySelector<HTMLInputElement>('[name="bot-field"]')
    if (bot?.value) return

    setLoading(true)
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="form-wrapper">
        <div className="thank-you show">
          <div className="ty-icon" />
          <div className="ty-h">Message received.</div>
          <p className="ty-p">We&apos;ll be in touch within 1 business day.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <input type="text" name="bot-field" className="honeypot" tabIndex={-1} autoComplete="off" />
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="fname">Name <span>*</span></label>
            <input className="form-input" type="text" id="fname" name="name" required placeholder="Your name" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="fcompany">Company / Organization <span>*</span></label>
            <input className="form-input" type="text" id="fcompany" name="company" required placeholder="Company name" />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="femail">Email <span>*</span></label>
          <input className="form-input" type="email" id="femail" name="email" required placeholder="you@company.com" />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="fbuild">What are you looking to build? <span>*</span></label>
          <textarea className="form-textarea" id="fbuild" name="message" required rows={5} placeholder="Describe what you're trying to build or what problem you're trying to solve." />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="ftimeline">Approximate timeline</label>
            <select className="form-select" id="ftimeline" name="timeline">
              <option value="">— Select —</option>
              <option>As soon as possible</option>
              <option>Within 1–3 months</option>
              <option>Within 3–6 months</option>
              <option>Just exploring</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="fbudget">Budget range</label>
            <select className="form-select" id="fbudget" name="budget">
              <option value="">— Select —</option>
              <option>Under $3,000</option>
              <option>$3,000 – $10,000</option>
              <option>$10,000 – $35,000</option>
              <option>$35,000+</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn-primary btn-submit" disabled={loading}>
          {loading ? 'Sending…' : 'Send Message'}
        </button>
      </form>
      <p className="form-note">Prefer email? Reach us at <a href="mailto:hello@valba.co">hello@valba.co</a></p>
    </div>
  )
}
