import React from "react";
import Dropdown from "../ui/dropdown";
const loading = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-5 max-lg:flex max-lg:flex-col max-lg:shrink-0   gap-5 text-white flex-1 w-full p-4">
      <div>
        <div className=" flex flex-col items-center justify-center  p-4 col-start-1 col-end-3 h-71 row-start-1 row-end-3 m rounded-xl">
          <svg
            fill="gray"
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
          <p className="text-2xl text-gray-400">Loading...</p>
        </div>
      </div>
      <div className="flex w-full max-md:flex-wrap justify-between rounded-xl p-4   gap-3 col-start-1 col-end-3 row-start-3 row-end-4 mt-0">
        <div className="flex-1 min-w-35 h-29.5 justify-around p-4 bg-surface flex flex-col rounded-xl">
          <p className="text-xs ">Feels like </p>
          <span className="text-3xl">- </span>
        </div>
        <div className="flex-1 min-w-35h-29.5 justify-around p-4 bg-surface flex flex-col rounded-xl">
          <p className="text-xs ">Humidity </p>
          <span className="text-3xl">- </span>
        </div>
        <div className="flex-1 min-w-35h-29.5 justify-around p-4 bg-surface flex flex-col rounded-xl">
          <p className="text-xs ">Wind </p>
          <span className="text-3xl">- </span>
        </div>
        <div className="flex-1 min-w-35h-29.5 justify-around p-4 bg-surface flex flex-col rounded-xl">
          <p className="text-xs ">Precipitation </p>
          <span className="text-3xl">- </span>
        </div>
      </div>
      <div className="p-4  h-full w-full rounded-xl col-start-1 col-end-3 row-start-4 row-end-6 ">
        <p className="text-xs">Daily Forecast</p>
        <div className="flex flex-1 mt-2 flex-wrap gap-4">
          <div className="w-30.5 h-41 bg-surface rounded-xl"></div>
          <div className="w-30.5 h-41 bg-surface rounded-xl"></div>
          <div className="w-30.5 h-41 bg-surface rounded-xl"></div>
          <div className="w-30.5 h-41 bg-surface rounded-xl"></div>
          <div className="w-30.5 h-41 bg-surface rounded-xl"></div>
          <div className="w-30.5 h-41 bg-surface rounded-xl"></div>
          <div className="w-30.5 h-41 bg-surface rounded-xl"></div>
        </div>
      </div>
      <div className="rounded-xl max-lg:h-160 h-180 w-full flex flex-col p-4 col-start-3 col-end-4 row-start-1 row-end-6 bg-surface">
        <div>
          <div className="flex justify-between ">
            <p>Hourly Forecast</p>
            <div>
              <Dropdown
                style={
                  "bg-surface-raised flex items-center gap-2 cursor-pointer justify-between bg-surface min-w-30 w-fit p-4 h-10 rounded-lg"
                }
                cover={<p>-</p>}
              />
            </div>
            <div className="gap-2 flex-1 overflow-y-auto scrollbar-thumb-white/70 w-full mt-2 flex flex-col">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
