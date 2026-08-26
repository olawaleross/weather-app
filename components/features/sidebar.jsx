import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { appContext } from "@/context/appContext";
import Dropdown from "../ui/dropdown";

const SideBar = () => {
  const { data } = useContext(appContext);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!data) return;

    setSelected(data.forecast.forecastday[0]);
  }, [data]);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const coverDay =
    selected &&
    new Date(selected.date)
      .toLocaleDateString("en-US", {
        dateStyle: "full",
      })
      .split(", ")[0];

  const covers =
    data &&
    data.forecast.forecastday.map(
      (item) =>
        new Date(item.date)
          .toLocaleDateString("en-US", {
            dateStyle: "full",
          })
          .split(", ")[0],
    );

  function handleClick(target) {
   const forecastDays = data.forecast.forecastday

   const index = covers.indexOf(target)
   setSelected(forecastDays[index])
   
  }

  return (
    <div className="rounded-xl max-lg:h-160 h-180 w-full flex flex-col p-4 col-start-3 col-end-4 row-span-3 bg-surface">
      <div className="flex justify-between items-center">
        <p>Hourly Forecast</p>
        <Dropdown
          options={covers}
          type={"date"}
          onclick={handleClick}
          current={coverDay}
          style={
            "bg-surface-raised relative flex items-center gap-2 cursor-pointer justify-between bg-surface min-w-30 w-fit p-4 h-10 rounded-lg"
          }
          cover={<p>{coverDay || "-"}</p>}
        />
      </div>
      {data ? (
        <div className="gap-2 flex-1 overflow-y-auto scrollbar-thumb-white/70 w-full mt-2 flex flex-col">
          {selected &&
            selected.hour.map((hour, i) => {
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
      ) : (
        <div className="flex mt-2 flex-col scrollbar-thumb-white/70  overflow-y-auto gap-4">
          {Array.from({ length: 24 }).map((item, i) => {
            return (
              <div
                key={i}
                className="h-15 p-3 flex gap-3 items-center  justify-between rounded-lg bg-surface-raised shrink-0"
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SideBar;
