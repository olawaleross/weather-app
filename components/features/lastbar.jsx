import React from "react";
import { useContext } from "react";
import { appContext } from "@/context/appContext";

const lastbar = () => {
  const { dailyForecast } = useContext(appContext);
  return (
    <div className=" p-4  h-full w-full rounded-xl col-start-1 col-end-3 row-start-4 row-end-6 ">
      <p className="text-xs">Daily Forecast</p>
      <div className="flex  flex-wrap mt-2 gap-3">
        <div className="  flex  rounded-xl">
          <div className="flex  justify-between">
            {dailyForecast?.map((day, index) => (
              <div
                key={index}
                className=" bg-surface rounded-xl text-center items-center p-4 "
              >
                <div>
                  <span className="text-xs">
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </span>
                </div>
                <img
                  src="//cdn.weatherapi.com/weather/64x64/day/122.png"
                  alt=""
                />
                <div className="flex justify-between">
                  <span className="text-xs">{day.day.maxtemp_c}°</span>
                  <span className="text-xs">{day.day.mintemp_c}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="  flex  rounded-xl">
          <div className="flex  justify-between">
            {dailyForecast?.map((day, index) => (
              <div
                key={index}
                className=" bg-surface rounded-xl text-center items-center p-4 "
              >
                <div>
                  <span className="text-xs">
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </span>
                </div>
                <img
                  src="//cdn.weatherapi.com/weather/64x64/day/122.png"
                  alt=""
                />
                <div className="flex justify-between">
                  <span className="text-xs">{day.day.maxtemp_c}°</span>
                  <span className="text-xs">{day.day.mintemp_c}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="  flex  rounded-xl">
          <div className="flex  justify-between">
            {dailyForecast?.map((day, index) => (
              <div
                key={index}
                className=" bg-surface rounded-xl text-center items-center p-4 "
              >
                <div>
                  <span className="text-xs">
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </span>
                </div>
                <img
                  src="//cdn.weatherapi.com/weather/64x64/day/122.png"
                  alt=""
                />
                <div className="flex justify-between">
                  <span className="text-xs">{day.day.maxtemp_c}°</span>
                  <span className="text-xs">{day.day.mintemp_c}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="  flex  rounded-xl">
          <div className="flex  justify-between">
            {dailyForecast?.map((day, index) => (
              <div
                key={index}
                className=" bg-surface rounded-xl text-center items-center p-4 "
              >
                <div>
                  <span className="text-xs">
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </span>
                </div>
                <img
                  src="//cdn.weatherapi.com/weather/64x64/day/122.png"
                  alt=""
                />
                <div className="flex justify-between">
                  <span className="text-xs">{day.day.maxtemp_c}°</span>
                  <span className="text-xs">{day.day.mintemp_c}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="  flex  rounded-xl">
          <div className="flex  justify-between">
            {dailyForecast?.map((day, index) => (
              <div
                key={index}
                className=" bg-surface rounded-xl text-center items-center p-4 "
              >
                <div>
                  <span className="text-xs">
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </span>
                </div>
                <img
                  src="//cdn.weatherapi.com/weather/64x64/day/122.png"
                  alt=""
                />
                <div className="flex justify-between">
                  <span className="text-xs">{day.day.maxtemp_c}°</span>
                  <span className="text-xs">{day.day.mintemp_c}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="  flex  rounded-xl">
          <div className="flex  justify-between">
            {dailyForecast?.map((day, index) => (
              <div
                key={index}
                className=" bg-surface rounded-xl text-center items-center p-4 "
              >
                <div>
                  <span className="text-xs">
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </span>
                </div>
                <img
                  src="//cdn.weatherapi.com/weather/64x64/day/122.png"
                  alt=""
                />
                <div className="flex justify-between">
                  <span className="text-xs">{day.day.maxtemp_c}°</span>
                  <span className="text-xs">{day.day.mintemp_c}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>
         <div className="  flex  rounded-xl">
          <div className="flex  justify-between">
            {dailyForecast?.map((day, index) => (
              <div
                key={index}
                className=" bg-surface rounded-xl text-center items-center p-4 "
              >
                <div>
                  <span className="text-xs">
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </span>
                </div>
                <img
                  src="//cdn.weatherapi.com/weather/64x64/day/122.png"
                  alt=""
                />
                <div className="flex justify-between">
                  <span className="text-xs">{day.day.maxtemp_c}°</span>
                  <span className="text-xs">{day.day.mintemp_c}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default lastbar;
