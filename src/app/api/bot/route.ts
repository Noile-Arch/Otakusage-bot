import { NextResponse } from "next/server";
import { quotes } from "@/data/quotes";

let lastUpdate = new Date().toISOString();
let currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: currentQuote,
      lastUpdate,
    });
  } catch (error: unknown) {
    console.error("Bot error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to fetch quote",
      },
      { status: 500 }
    );
  }
}

// POST - Used by cron job to update the quote
export async function POST() {
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  lastUpdate = new Date().toISOString();
  return NextResponse.json({ success: true });
}
