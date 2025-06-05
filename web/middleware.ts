import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Basic pass-through middleware (you can add logic later)
export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|static|favicon.ico).*)'],
}