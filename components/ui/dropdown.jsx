/* eslint-disable @next/next/no-img-element */
import React from "react";

const Dropdown = () => {
  return (
    <button className="flex items-center gap-2 justify-between bg-surface min-w-30 w-fit p-4 h-10 rounded-lg">
      <img src="/icon-units.svg" alt="units" />
      <span className="">Units</span>
      <img src="/icon-dropdown.svg" alt="dropdown" />
    </button>
  );
};

export default Dropdown;
