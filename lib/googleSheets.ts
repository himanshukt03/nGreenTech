import { google } from 'googleapis'

// Initialize auth only if keys are present
let sheets: any = null;

try {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY_JSON) {
    const keyJson = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY_JSON)
    const auth = new google.auth.GoogleAuth({
      credentials: keyJson,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })
    sheets = google.sheets({ version: 'v4', auth })
  }
} catch (error: any) {
  console.error("Error initializing Google Sheets auth:", error?.message || error);
}

export type EventRow = {
  id?: string
  date?: string
  title?: string
  location?: string
  description?: string
}

export type LeaderRow = {
  position?: number
  name?: string
  kgs?: number
  points?: number
}

/**
 * Helper: parse rows (first row = header)
 */
function parseRows(rows: any[][]) {
  if (!rows || rows.length === 0) return []
  const headers = rows[0].map((h: any) => String(h).trim())
  const data = rows.slice(1)
  return data.map((r: any[]) => {
    const obj: Record<string, any> = {}
    headers.forEach((h: string, i: number) => {
      obj[h] = r[i] !== undefined ? r[i] : ''
    })
    return obj
  })
}

/** Fetch Events sheet (sheet name: Events). Expects header row with columns: id,date,title,location,description */
export async function fetchEvents(sheetId = process.env.GOOGLE_SHEET_ID!): Promise<EventRow[]> {
  if (!sheets) return [];
  try {
    const range = 'Events!A1:Z'
    const res = await sheets.spreadsheets.values.get({ spreadsheetId: sheetId, range })
    const rows = res.data.values || []
    const parsed = parseRows(rows) as any[]
    // Normalize to typed shape and sort by date desc (optional)
    return parsed
      .map(r => ({
        id: r.id ?? '',
        date: r.date ?? '',
        title: r.title ?? '',
        location: r.location ?? '',
        description: r.description ?? '',
      }))
      .sort((a, b) => {
        // if date present, sort by descending date; otherwise keep order
        if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime()
        return 0
      })
  } catch {
    return [];
  }
}

/** Fetch Leaderboard sheet (sheet name: Leaderboard). Expects header row: position,name,kgs,points */
export async function fetchLeaderboard(sheetId = process.env.GOOGLE_SHEET_ID!): Promise<LeaderRow[]> {
  if (!sheets) return [];
  try {
    const range = 'Leaderboard!A1:Z'
    const res = await sheets.spreadsheets.values.get({ spreadsheetId: sheetId, range })
    const rows = res.data.values || []
    const parsed = parseRows(rows) as any[]
    return parsed
      .map(r => ({
        position: r.position ? Number(r.position) : undefined,
        name: r.name ?? '',
        // Handle "16 kgs" format - extract just the number
        kgs: r.kgs ? Number(String(r.kgs).replace(/[^\d.]/g, '')) : 0,
        points: r.points ? Number(r.points) : undefined,
      }))
      .sort((a, b) => (a.position ?? 999) - (b.position ?? 999))
  } catch {
    return [];
  }
}
