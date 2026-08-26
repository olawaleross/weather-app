"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const Dropdown = ({ style, cover, type, options, onclick, current }) => {
  const [open, setOpen] = useState(false);
  return (
    <button
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
      <img src="/icon-dropdown.svg" className={` duration-300 ${open && "rotate-180"}`} alt="dropdown" />

      {open && (
        <div className="w-54 bg-surface  flex flex-col gap-1 ring-1 ring-gray-200/10 p-3 rounded-xl absolute right-0  top-12">
          {options &&
            options.map((option, i) => {
              return (
                <button
                  key={i}
                  className={` ${current === option && "bg-surface-raised"} h-8 hover:bg-surface-raised flex text-[16px] font-semibold rounded-sm items-center px-2 py-2.5 `}
                onClick={()=> onclick(option)}
                >
                  {option}
                </button>
              );
            })}
        </div>
      )}
    </button>
  );
};

export default Dropdown;
