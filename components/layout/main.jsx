"use client"
import React, { useContext } from "react";
import TopBar  from "../features/topbar";
import Midbar from "../features/midbar";
import Lastbar from "../features/lastbar";
import Sidebar from "../features/sidebar";
import { appContext } from "@/context/appContext";

const Main = () => {


  const {data} = useContext(appContext)

  return (
    <div className="grid grid-cols-3 grid-rows-[4.5fr_2fr_3.5fr] max-lg:flex max-lg:flex-col max-lg:shrink-0 gap-5 text-white flex-1 w-full p-4 max-w-304">
      <TopBar  />
      <Midbar />
      <Lastbar />
      <Sidebar />
    </div>
  );
};

export default Main;
