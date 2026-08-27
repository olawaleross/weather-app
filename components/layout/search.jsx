"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { appContext } from "@/context/appContext";

const Search = () => {
  const [input, setInput] = useState("");
  const [found, setFound] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setLocation } = useContext(appContext);

  useEffect(() => {
    if (!input) return;
    const debounce = setTimeout(async () => {
      setLoading(true);
      setFound(null);
      try {
        const res = await axios.get(`/api/search?q=${input}`);
        setFound(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [input]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex items-center max-md:flex-col flex-1 w-full max-w-164 max-lg:w-full max-lg:max-w-none text-white h-fit gap-4 justify-center "
    >
      <div className="flex relative flex-1 max-md:w-full items-center gap-4  bg-surface p-4 rounded-xl">
        <Image src="/icon-search.svg" alt="search" width="20" height="20" />
        <input
          type="text"
          value={input}
          onInput={(e) => setInput(e.currentTarget.value)}
          placeholder="Search for a place..."
          className="bg-surface flex-1 text-white text-xl placeholder:text-gray-400 focus:outline-none"
        />
        {input &&
          (loading ? (
            <div className="p-2  items-center justify-center absolute top-17 flex flex-col gap-2 w-full left-0 bg-surface h-60 rounded-lg">
              <svg
                fill="#D4D3D9"
                viewBox="0 0 24 24"
                className="w-14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="12" r="3">
                  <animate
                    id="spinner_qFRN"
                    begin="0;spinner_OcgL.end+0.25s"
                    attributeName="cy"
                    calcMode="spline"
                    dur="0.6s"
                    values="12;6;12"
                    keySplines=".33,.66,.66,1;.33,0,.66,.33"
                  />
                </circle>
                <circle cx="12" cy="12" r="3">
                  <animate
                    begin="spinner_qFRN.begin+0.1s"
                    attributeName="cy"
                    calcMode="spline"
                    dur="0.6s"
                    values="12;6;12"
                    keySplines=".33,.66,.66,1;.33,0,.66,.33"
                  />
                </circle>
                <circle cx="20" cy="12" r="3">
                  <animate
                    id="spinner_OcgL"
                    begin="spinner_qFRN.begin+0.2s"
                    attributeName="cy"
                    calcMode="spline"
                    dur="0.6s"
                    values="12;6;12"
                    keySplines=".33,.66,.66,1;.33,0,.66,.33"
                  />
                </circle>
              </svg>
              <p className="text-lg">Loading....</p>
            </div>
          ) : found ? (
            <div className="p-2 absolute top-17 flex flex-col gap-2 w-full left-0 bg-surface h-fit rounded-lg">
              {found.map((item, i) => {
                return (
                  <button
                    key={i}
                    className="bg-surface-raised text-start cursor-pointer rounded-lg text-[16px] px-2 py-2.5"
                    onClick={() => {
                      setFound(null);
                      setLocation(`${item.lat} ${item.lon}`);
                    }}
                  >
                    {item.name},{" "}
                    {item.region === item.name ? item.country : item.region}
                  </button>
                );
              })}
            </div>
          ) : (
            ""
          ))}
      </div>
      <button className="bg-accent max-md:w-full w-28.5 h-14 text-xl rounded-xl text-white p-2">
        Search
      </button>
    </form>
  );
};

export default Search;
