import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request) {
  const base = process.env.BASE_URL;
  const key = process.env.API_KEY;

  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  const url = `${base}/search.json?key=${key}&q=${query}`;

  const res = await axios.get(url);

  return NextResponse.json(res.data);
}
