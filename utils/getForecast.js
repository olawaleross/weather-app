import axios from "axios";

export default async function getForecast() {
  const base = process.env.BASE_URL;
  const key = process.env.API_KEY;

  const url = `${base}/forecast.json?key=${key}&q=lagos`;

  const response = await axios.get(url);

  return response.data;
}
