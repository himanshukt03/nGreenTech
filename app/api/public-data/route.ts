import { fetchEvents, fetchLeaderboard } from '@/lib/googleSheets'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const [events, leaderboard] = await Promise.all([
      fetchEvents(),
      fetchLeaderboard(),
    ])
    return NextResponse.json({ events, leaderboard })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
