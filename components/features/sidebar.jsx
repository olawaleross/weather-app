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
                <svg
                  fill="hsl(228, 97%, 42%)"
                  viewBox="0 0 24 24"
                  className="w-20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="12" r="3">
                    <animate
                      id="spinner_qFRN"
                      begin="0;spinner_OcgL.end+0.25s"
                      attributeName="cy"
                      calcMode="spline"
                      dur="0.6s"
                      values="12;6;12"
                      keySplines=".33,.66,.66,1;.33,0,.66,.33"
                    />
                  </circle>
                  <circle cx="12" cy="12" r="3">
                    <animate
                      begin="spinner_qFRN.begin+0.1s"
                      attributeName="cy"
                      calcMode="spline"
                      dur="0.6s"
                      values="12;6;12"
                      keySplines=".33,.66,.66,1;.33,0,.66,.33"
                    />
                  </circle>
                  <circle cx="20" cy="12" r="3">
                    <animate
                      id="spinner_OcgL"
                      begin="spinner_qFRN.begin+0.2s"
                      attributeName="cy"
                      calcMode="spline"
                      dur="0.6s"
                      values="12;6;12"
                      keySplines=".33,.66,.66,1;.33,0,.66,.33"
                    />
                  </circle>
                </svg>

                <p>{hour.temp_c}°</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SideBar;
