import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const entries = await prisma.guestBook.findMany({
    orderBy: { createdAt: "desc" },
  });
  return new Response(JSON.stringify(entries), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  try {
    const { name, note, url } = await req.json();

    if (!name || !note) {
      return new Response(JSON.stringify({ error: "Name and message are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const newEntry = await prisma.guestBook.create({
      data: { name, note, url },
    });

    return new Response(JSON.stringify(newEntry), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return new Response(JSON.stringify({ error: "Failed to create guestbook entry." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
