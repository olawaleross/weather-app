import React from "react";
import Image from "next/image";

const search = () => {
  return (
    <form className="flex items-center max-md:flex-col flex-1 w-full max-w-164 max-lg:w-full max-lg:max-w-none text-white h-fit gap-4 justify-center ">
      <div className="flex flex-1 max-md:w-full items-center gap-4  bg-surface p-4 rounded-xl">
        <Image src="/icon-search.svg" alt="search" width="20" height="20" />
        <input
          type="text"
          placeholder="Search for a place..."
          className="bg-surface flex-1 text-white text-xl placeholder:text-gray-400 border-none focus:outline-none"
        />
      </div>
      <button className="bg-accent max-md:w-full w-28.5 h-14 text-xl rounded-xl text-white p-2">
        Search
      </button>
    </form>
  );
};

export default search;
