import { NextResponse } from "next/server";
import axios from "axios";

const TOGGL_API_KEY = process.env.TOGGL_API_KEY;

const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

export const revalidate = 0;
// this is so next will refresh the api instead of caching

export const GET = async () => {
  const auth = Buffer.from(`${TOGGL_API_KEY}:api_token`).toString("base64");
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 90);
  const endDate = new Date();
  // endDate.setDate(endDate.getDate() - 1);

  try {
    const response = await axios.get("https://api.track.toggl.com/api/v9/me/time_entries", {
      headers: { Authorization: `Basic ${auth}` },
      params: {
        start_date: `${formatDate(startDate)}T00:00:00Z`,
        end_date: endDate.toISOString(),
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data from Toggl API" }, { status: 500 });
  }
};
