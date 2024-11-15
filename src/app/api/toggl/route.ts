import { NextResponse } from 'next/server';
import axios from 'axios';

const TOGGL_API_KEY = process.env.TOGGL_API_KEY; 

export async function GET() {
  const auth = Buffer.from(`${TOGGL_API_KEY}:api_token`).toString('base64');

  try {
    const response = await axios.get('https://api.track.toggl.com/api/v9/me/time_entries', {
      headers: { Authorization: `Basic ${auth}` },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data from Toggl API' }, { status: 500 });
  }
}
