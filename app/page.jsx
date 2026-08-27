"use client";
import Image from "next/image";
import Header from "../components/layout/header";
import Search from "../components/layout/search";
import Main from "../components/layout/main";
import Error from "./../components/features/Error";
import { useContext } from "react";
import { appContext } from "@/context/appContext";

export default function Home() {
  const { error } = useContext(appContext);

  return (
    <div className="flex flex-col items-center p-4 flex-1 bg-main-background ">
      <Header />
      {error ? (
        <Error />
      ) : (
        <>
          <Search />
          <Main />
        </>
      )}
    </div>
  );
}
