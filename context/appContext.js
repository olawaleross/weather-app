"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

 export const appContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    if (!navigator) return;
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation(`${latitude} ${longitude}`);
    });
  }, []);

  useEffect(() => {
    if (!location) return;

    async function load() {
      const forecastRes = await axios.get("/api/forecast");
      setData(forecastRes.data);
      setFeelsLike(forecastRes.data.current.feelslike_c);
      setHumidity(forecastRes.data.current.humidity);
      setWindSpeed(forecastRes.data.current.wind_kph);
      setPrecipitation(forecastRes.data.current.precip_mm);
      setDailyForecast(forecastRes.data.forecast.forecastday);
      setHourlyForecast(forecastRes.data.forecast.forecastday[0].hour.slice(0, 6));
      
    }
    load();
  }, [location]);

  const values = { location,data, feelsLike, humidity, windSpeed, precipitation, dailyForecast, hourlyForecast };
  return <appContext.Provider value={values}>{children}</appContext.Provider>;
};

export default AppContextProvider;
