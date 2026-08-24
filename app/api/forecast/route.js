import { NextResponse } from "next/server";
import getForecast from "@/utils/getForecast";


export async function GET() {
  const res = await getForecast()


  return NextResponse.json(res)
}
