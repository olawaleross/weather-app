import React, { useContext } from "react";
import { appContext } from "@/context/appContext";

const TopBar = () => {
  const { data } = useContext(appContext);


  function convertTime(str) {
    const date = str.split(" ")[0];

    const fixed = new Date(date).toLocaleDateString("en-US", {
      dateStyle: "full",
    });

    return fixed;
  }

  return (
    <div className="w-full flex items-center justify-between  p-4 col-start-1 col-end-3 h-71 row-start-1 row-end-3  bg-[url(/bg-today-large.svg)] max-md:bg-[url(/bg-today-small.svg)] lg:bg-cover bg-no-repeat bg-center bg-cover rounded-xl">
      <div>
        <p className="text-[28px] font-semibold">
          {data && data.location.name}
        </p>
        <p className="text-lg">
          {data && convertTime(data.location.localtime)}
        </p>
      </div>

      <div className="flex gap-4 max-md:gap-3 items-center">
        <img
          src={data && data.current.condition.icon}
          className="w-30 h-30"
          alt=""
        />
        <p className="text-[96px] max-md:text-6xl italic font-bold">
          {data && data.current.temp_c}°
        </p>
      </div>
    </div>
  );
};

export default TopBar;
