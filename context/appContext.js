"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

 export const appContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);


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
    }
    load();
  }, [location]);

  const values = {data};
  return <appContext.Provider value={values}>{children}</appContext.Provider>;
};

export default AppContextProvider;
