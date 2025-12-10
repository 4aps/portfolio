import { NextResponse } from "next/server"
import { google } from "googleapis"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
    const sheetId = process.env.GOOGLE_SHEET_ID

    if (!clientEmail || !privateKey || !sheetId) {
      console.error("Missing Google env vars")
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 })
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    const timestamp = new Date().toISOString()

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:D", // change Sheet1 if your tab has a different name
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, name, email, message]],
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Google Sheets Contact Error:", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

// optional helper so GET requests show something useful
export async function GET() {
  return NextResponse.json({ ok: true, message: "Contact endpoint alive" })
}
