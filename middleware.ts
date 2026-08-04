import { NextRequest, NextResponse } from 'next/server'
import { PORTAL_AUTH_COOKIE, hashPortalPassword } from '@/lib/portal-auth'

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get(PORTAL_AUTH_COOKIE)?.value
  const expected = await hashPortalPassword(process.env.PORTAL_PASSWORD ?? '')

  if (cookie && cookie === expected) {
    return NextResponse.next()
  }

  const loginUrl = new URL('/portal/login', request.url)
  loginUrl.searchParams.set('next', request.nextUrl.pathname + request.nextUrl.search)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: '/portal/olive-winter/:path*',
}
