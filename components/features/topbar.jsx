import React, { useContext } from "react";
import { appContext } from "@/context/appContext";

const TopBar = () => {
  const { data,unit } = useContext(appContext);

  function convertTime(str) {
    const date = str.split(" ")[0];

    const fixed = new Date(date).toLocaleDateString("en-US", {
      dateStyle: "full",
    });

    return fixed;
  }

  if (!data) {
    return (
      <div className="w-full flex-col flex items-center justify-center gap-1 p-4 col-start-1 col-end-3 max-lg:h-71 row-span-1 bg-surface rounded-xl">
        <svg
          fill="#D4D3D9"
          viewBox="0 0 24 24"
          className="w-14"
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
        <p className="text-lg">Loading....</p>
      </div>
    );
  }

  return (
    <div className="w-full flex items-center justify-between p-4 col-start-1 col-end-3 max-lg:h-71 row-span-1  bg-[url(/bg-today-large.svg)] max-md:bg-[url(/bg-today-small.svg)] lg:bg-cover bg-no-repeat bg-center bg-cover rounded-xl">
      <div>
        <p className="text-[28px] font-semibold">
          {data && `${data.location.name}, ${data.location.region === data.location.name ? data.location.country : data.location.region}`}
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
          {data && (unit.temp === "metric" ? data.current.temp_c : data.current.temp_f)}°
        </p>
      </div>
    </div>
  );
};

export default TopBar;
