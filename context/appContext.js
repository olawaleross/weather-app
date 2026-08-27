"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const appContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);
  const [unit, setUnit] = useState({
    global: "metric",
    speed: "metric",
    temp: "metric",
    precipitation: "metric",
  });
  const [error, setError] = useState(true);

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
      try {
        const forecastRes = await axios.get(`/api/forecast?q=${location}`);
        setData(forecastRes.data);
        setError(false)
      } catch (error) {
        setError(true);
      }
    }
    load();
  }, [location]);

  const values = { data, unit, setUnit, setLocation,error };
  return <appContext.Provider value={values}>{children}</appContext.Provider>;
};

export default AppContextProvider;
