import React from "react";
import { useContext, useState } from "react";
import { appContext } from "@/context/appContext";
import Dropdown from "../ui/dropdown";

const SideBar = () => {
  const { data } = useContext(appContext);
  const [selected, setSelected] = useState(null);

  const defaultDay = data && data.forecast.forecastday[0];
  console.log(defaultDay);

  return (
    <div className="rounded-xl max-lg:h-160 h-180 w-full flex flex-col p-4 col-start-3 col-end-4 row-start-1 row-end-6 bg-surface">
      <div className="flex justify-between items-center">
        <p>Hourly Forecast</p>
        <Dropdown
          style={
            "bg-surface-raised flex items-center gap-2 cursor-pointer justify-between bg-surface min-w-30 w-fit p-4 h-10 rounded-lg"
          }
          cover={<p>Day</p>}
        />
      </div>
      <div className="gap-2 flex-1 overflow-y-auto scrollbar-thumb-white/70 w-full mt-2 flex flex-col">
        {defaultDay &&
          defaultDay.hour.map((hour, i) => {
            return (
              <div
                key={i}
                className="h-15 p-3 flex gap-3 items-center justify-between rounded-lg bg-surface-raised shrink-0"
              >
                <img src={hour.condition.icon} className="w-15 h-15" alt="" />
                <p className="flex-1">
                  {new Date(hour.time).toLocaleTimeString("en-US", {
                    hour12: true,
                    hour: "numeric",
                  })}
                </p>
                

                <p>{hour.temp_c}°</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SideBar;
