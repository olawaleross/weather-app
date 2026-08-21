import React from "react";

const lastbar = () => {
  return (
    <div className="border flex gap-2 flex-col w-full rounded-xl col-start-1 col-end-3 row-start-4 row-end-6 ">
      <p className="text-xs">Daily Forecast</p>
      <div className="flex border justify-between">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default lastbar;
