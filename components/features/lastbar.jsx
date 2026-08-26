import React from "react";
import { useContext } from "react";
import { appContext } from "@/context/appContext";

const Lastbar = () => {
  const { data } = useContext(appContext);

  const forecast = data ? data.forecast.forecastday : null;

  return (
    <div className=" p-4  h-full w-full rounded-xl col-start-1 col-end-3 row-start-3 row-end-4 ">
      <p className="text-xs">Daily Forecast</p>
      {forecast ? (
        <div className="flex mt-2 flex-wrap gap-4">
          {forecast &&
            forecast.map((day, i) => {
              return (
                <div
                  key={i}
                  className="rounded-xl bg-surface flex flex-col items-center p-4 justify-around w-30.5 h-41"
                >
                  <p>
                    {" "}
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </p>
                  <img src={day.day.condition.icon} alt="" />

                  <div className="flex justify-between w-full">
                    <p>{day.day.maxtemp_c}°</p>
                    <p>{day.day.mintemp_c}°</p>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div className="flex mt-2 flex-wrap gap-4">
          {Array.from({ length: 3 }).map((item, i) => {
            return (
              <div
                key={i}
                className="rounded-xl bg-surface flex flex-col items-center p-4 justify-around w-30.5 h-41"
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Lastbar;
