import { NextRequest, NextResponse } from 'next/server'
import { PORTAL_AUTH_COOKIE, hashPortalPassword } from '@/lib/portal-auth'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const password = String(formData.get('password') ?? '')
  const next = String(formData.get('next') ?? '/portal/olive-winter')

  const expected = process.env.PORTAL_PASSWORD ?? ''

  if (!expected || password !== expected) {
    const loginUrl = new URL('/portal/login', request.url)
    loginUrl.searchParams.set('error', '1')
    loginUrl.searchParams.set('next', next)
    return NextResponse.redirect(loginUrl, { status: 303 })
  }

  const response = NextResponse.redirect(new URL(next, request.url), { status: 303 })
  response.cookies.set(PORTAL_AUTH_COOKIE, await hashPortalPassword(expected), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/portal/olive-winter',
    maxAge: 60 * 60 * 24 * 30,
  })
  return response
}
