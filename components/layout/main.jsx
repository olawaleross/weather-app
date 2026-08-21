import React from "react";
import Topbar from "../features/topbar";
import Midbar from "../features/midbar";
import Lastbar from "../features/lastbar";
import Sidebar from "../features/sidebar";

const main = () => {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-1 grid-rows-5 gap-5 text-white flex-1 w-full p-4">
      <Topbar />
      <Midbar />
      <Lastbar />
      <Sidebar />
    </div>
  );
};

export default main;
