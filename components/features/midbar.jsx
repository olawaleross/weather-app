import React from "react";
import { useContext } from "react";
import { appContext } from "@/context/appContext";

const Midbar = () => {
  const { data } = useContext(appContext);

  return (
    <div className="flex w-full max-md:flex-wrap justify-between rounded-xl p-4   gap-3 col-start-1 col-end-3 row-start-3 row-end-4">
      <div className="flex-1 min-w-35 h-29.5 justify-around p-4 bg-surface flex flex-col rounded-xl">
        <p className="text-xs ">Feels like </p>
        <span className="text-2xl">{data && data.current.feelslike_c}° </span>
      </div>
      <div className="flex-1 min-w-35h-29.5 justify-around p-4 bg-surface flex flex-col rounded-xl">
        <p className="text-xs ">Humidity </p>
        <span className="text-2xl">{data && data.current.humidity}% </span>
      </div>
      <div className="flex-1 min-w-35h-29.5 justify-around p-4 bg-surface flex flex-col rounded-xl">
        <p className="text-xs ">Wind </p>
        <span className="text-2xl">{data && data.current.wind_kph}km/h </span>
      </div>
      <div className="flex-1 min-w-35h-29.5 justify-around p-4 bg-surface flex flex-col rounded-xl">
        <p className="text-xs ">Precipitation </p>
        <span className="text-2xl">{data && data.current.precip_mm} mm </span>
      </div>
    </div>
  );
};

export default Midbar;
