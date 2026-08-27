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
     
    </div>
  );
};
export default header;
