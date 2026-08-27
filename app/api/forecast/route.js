import { NextResponse } from "next/server";
import getForecast from "@/utils/getForecast";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q");
  const res = await getForecast(query);

  return NextResponse.json(res);
}
