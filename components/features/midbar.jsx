import React from "react";
import { useContext } from "react";
import { appContext } from "@/context/appContext";

const midbar = () => {
  const { feelsLike } = useContext(appContext);
  const { humidity } = useContext(appContext);
  const { windSpeed } = useContext(appContext);
  const { precipitation } = useContext(appContext);
 

    return (
    <div className="flex w-full justify-between rounded-xl p-4   gap-3 col-start-1 col-end-3 row-start-3 row-end-4 mt-0">
      <div className="w-1/2 h-full p-4 bg-surface flex flex-col rounded-xl">
        
        <p className="text-xs ">Feels like </p>
        <span className="text-2xl">{feelsLike}° </span>
      </div>
      <div className="w-1/2 h-full p-4 bg-surface flex flex-col rounded-xl">
        
        <p className="text-xs ">Humidity </p>
        <span className="text-2xl">{humidity}% </span>
      </div>
      <div className="w-1/2 h-full p-4 bg-surface flex flex-col rounded-xl">
        
        <p className="text-xs ">Wind </p>
        <span className="text-2xl">{windSpeed}km/h </span>
      </div>
      <div className="w-1/2 h-full p-4 bg-surface flex flex-col rounded-xl">
        
        <p className="text-xs ">Precipitation </p>
        <span className="text-2xl">{precipitation} mm </span>
      </div>
    </div>
  );
};

export default midbar;
