/* eslint-disable @next/next/no-img-element */
import React from "react";
import Dropdown from "../ui/dropdown";

const header = () => {
  return (
    <div className="pt-2 w-full max-w-304 text-white">
      <div className="flex justify-between items-center">
        <img src="/logo.svg" alt="logo" className="w-55" />
        <Dropdown />
      </div>
      <h1 className="text-[52px] text-center m-auto max-md:w-86 max-md:leading-18 max-lg:w-120 max-lg:leading-20 leading-30 font-bold flex flex-1 justify-center align-middle w-full my-4">
        How&apos;s the sky looking today?
      </h1>
    </div>
  );
};
export default header;
