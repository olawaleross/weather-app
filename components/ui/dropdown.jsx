"use client";
import { appContext } from "@/context/appContext";
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";

function Check() {
  return (
    <svg width="14" height="17" fill="none" viewBox="0 0 14 17">
      <path
        fill="#fff"
        d="M11.895 1.047c.136-.137.355-.137.464 0l.793.766c.11.136.11.355 0 .464L4.95 10.48a.315.315 0 0 1-.465 0L.82 6.844c-.11-.137-.11-.356 0-.465l.793-.793c.11-.11.328-.11.465 0l2.625 2.652 7.192-7.191Z"
      />
    </svg>
  );
}

const Dropdown = ({ style, cover, type, options, onclick, current }) => {
  const [open, setOpen] = useState(false);
  const { setUnit, unit } = useContext(appContext);
  return (
    <div
      className={
        style ||
        "flex items-center relative gap-2 justify-between bg-surface min-w-30 w-fit p-4 h-10 rounded-lg"
      }
      onClick={() => setOpen(!open)}
    >
      {cover ? (
        cover
      ) : (
        <>
          <img src="/icon-units.svg" alt="units" />
          <span className="">Units</span>
        </>
      )}
      <img
        src="/icon-dropdown.svg"
        className={` duration-300 ${open && "rotate-180"}`}
        alt="dropdown"
      />

      {open &&
        (type === "date" ? (
          <div className="w-54 bg-surface  flex flex-col gap-1 ring-1 ring-gray-200/10 px-2 py-1.5 rounded-xl absolute right-0  top-12">
            {options &&
              options.map((option, i) => {
                return (
                  <button
                    key={i}
                    className={` ${current === option && "bg-surface-raised"} h-8 hover:bg-surface-raised flex text-[16px] font-semibold rounded-sm items-center px-2 py-2.5 `}
                    onClick={() => onclick(option)}
                  >
                    {option}
                  </button>
                );
              })}
          </div>
        ) : (
          <div
            onClick={(e) => e.stopPropagation()}
            onBlur={() => setOpen(false)}
            className="w-54 bg-surface text-start flex flex-col gap-1 ring-1 ring-gray-200/10 px-2 py-1.5  rounded-xl absolute right-0  top-12"
          >
            <button
              onClick={() => {
                setUnit((prev) => {
                  if (prev.global === "metric") {
                    return {
                      global: "imperial",
                      speed: "imperial",
                      temp: "imperial",
                      precipitation: "imperial",
                    };
                  } else {
                    return {
                      global: "metric",
                      speed: "metric",
                      temp: "metric",
                      precipitation: "metric",
                    };
                  }
                });
              }}
              className="text-start text-[16px] cursor-pointer font-medium px-2 py-2.5"
            >
              Switch to {unit.global === "metric" ? "Imperial" : "Metric"}
            </button>
            <div className="text-start gap-2 flex flex-col">
              <p className="pt-1.5 text-[#ACACB7] text-sm px-2 ">Temperature</p>
              <button
                className={` cursor-pointer ${unit.temp === "metric" && "bg-surface-raised"} px-2 rounded-lg h-10 flex items-center justify-between py-2.5 text-[16px] gap-2.5`}
                onClick={() =>
                  setUnit((prev) => {
                    return { ...prev, temp: "metric" };
                  })
                }
              >
                <span className="flex-1 text-start">Celsius (°C)</span>

                {unit.temp === "metric" && <Check />}
              </button>
              <button
                className={` cursor-pointer ${unit.temp !== "metric" && "bg-surface-raised"} px-2 rounded-lg h-10 flex items-center justify-between py-2.5 text-[16px] gap-2.5`}
                onClick={() =>
                  setUnit((prev) => {
                    return { ...prev, temp: "imperial" };
                  })
                }
              >
                <span className="flex-1 text-start">Fahrenheit (°F)</span>
                {unit.temp !== "metric" && <Check />}
              </button>
            </div>
            <div className="text-start gap-2 flex flex-col">
              <p className="pt-1.5 text-[#ACACB7] text-sm px-2 ">Wind Speed</p>
              <button
                className={` cursor-pointer ${unit.speed === "metric" && "bg-surface-raised"} px-2 rounded-lg h-10 flex items-center justify-between py-2.5 text-[16px] gap-2.5`}
                onClick={() =>
                  setUnit((prev) => {
                    return { ...prev, speed: "metric" };
                  })
                }
              >
                <span className="flex-1 text-start">Km/h</span>

                {unit.speed === "metric" && <Check />}
              </button>
              <button
                className={` cursor-pointer ${unit.speed !== "metric" && "bg-surface-raised"} px-2 rounded-lg h-10 flex items-center justify-between py-2.5 text-[16px] gap-2.5`}
                onClick={() =>
                  setUnit((prev) => {
                    return { ...prev, speed: "imperial" };
                  })
                }
              >
                <span className="flex-1 text-start">mph</span>
                {unit.speed !== "metric" && <Check />}
              </button>
            </div>
            <div className="text-start gap-2 flex flex-col">
              <p className="pt-1.5 text-[#ACACB7] text-sm px-2 ">
                Precipitation
              </p>
              <button
                className={`cursor-pointer ${unit.precipitation === "metric" && "bg-surface-raised"} px-2 rounded-lg h-10 flex items-center justify-between py-2.5 text-[16px] gap-2.5`}
                onClick={() =>
                  setUnit((prev) => {
                    return { ...prev, precipitation: "metric" };
                  })
                }
              >
                <span className="flex-1 text-start">mm</span>

                {unit.precipitation === "metric" && <Check />}
              </button>
              <button
                className={` cursor-pointer ${unit.precipitation !== "metric" && "bg-surface-raised"} px-2 rounded-lg h-10 flex items-center justify-between py-2.5 text-[16px] gap-2.5`}
                onClick={() =>
                  setUnit((prev) => {
                    return { ...prev, precipitation: "imperial" };
                  })
                }
              >
                <span className="flex-1 text-start">in</span>
                {unit.precipitation !== "metric" && <Check />}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dropdown;
