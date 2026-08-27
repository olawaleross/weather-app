import React from "react";
import { useContext } from "react";
import { appContext } from "@/context/appContext";

const Midbar = () => {
  const { data ,unit} = useContext(appContext);

  return (
    <div className="flex w-full max-md:flex-wrap justify-between rounded-xl p-4   gap-3 col-start-1 col-end-3 row-start-2 row-end-3">
      <div className="flex-1 min-w-35 h-29.5 justify-around p-4 bg-surface flex flex-col rounded-xl">
        <p className="text-lg ">Feels like </p>
        <span className="text-2xl">
          {data ? `${unit.temp === "metric"? data.current.feelslike_c : data.current.feelslike_f}°` : "-"}{" "}
        </span>
      </div>
      <div className="flex-1 min-w-35h-29.5 justify-around p-4 bg-surface flex flex-col rounded-xl">
        <p className="text-lg ">Humidity </p>
        <span className="text-2xl">
          {data ? `${data.current.humidity}%` : "-"}{" "}
        </span>
      </div>
      <div className="flex-1 min-w-35h-29.5 justify-around p-4 bg-surface flex flex-col rounded-xl">
        <p className="text-lg ">Wind </p>
        <span className="text-2xl">
          {data ? `${unit.temp === "metric"? `${data.current.wind_kph}km/h` :`${data.current.wind_mph} mph`}` : "-"}{" "}
        </span>
      </div>
      <div className="flex-1 min-w-35h-29.5 justify-around p-4 bg-surface flex flex-col rounded-xl">
        <p className="text-lg ">Precipitation </p>
        <span className="text-2xl">
          {data ? `${unit.temp === "metric"? data.current.precip_mm + "mm" :`${data.current.precip_in} in`}` : "-"}{" "}
        </span>
      </div>
    </div>
  );
};

export default Midbar;
