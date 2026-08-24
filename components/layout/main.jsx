"use client"
import React from "react";
import TopBar  from "../features/topbar";
import Midbar from "../features/midbar";
import Lastbar from "../features/lastbar";
import Sidebar from "../features/sidebar";

const main = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-5 max-lg:flex max-lg:flex-col max-lg:shrink-0   gap-5 text-white flex-1 w-full p-4">
      <TopBar  />
      <Midbar />
      <Lastbar />
      <Sidebar />
    </div>
  );
};

export default main;
