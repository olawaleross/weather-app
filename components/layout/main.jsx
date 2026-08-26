"use client"
import React from "react";
import TopBar  from "../features/topbar";
import Midbar from "../features/midbar";
import Lastbar from "../features/lastbar";
import Sidebar from "../features/sidebar";
import Loading from "../features/loading";

const main = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-3 mb-0 grid-rows-4 max-lg:flex max-lg:flex-col max-lg:shrink-0   gap-5 text-white flex-1 w-full p-4">
      <TopBar  />
      <Midbar />
      <Lastbar />
      <Sidebar />
    </div>
  );
};

export default main;
