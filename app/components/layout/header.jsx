import React from "react";

const header = () => {
  return (
    <div className=" h-8 text-white p-6 w-full justify-between  flex flex-col flex-1 ">
      <div className="flex justify-between items-center">
        <img src="/logo.svg" alt="logo" />
        <button className="flex items-center gap-2 bg-gray-700 w-30 p-4 h-10 rounded-lg">
          <img src="/icon-units.svg" alt="units" />
          units <img src="/icon-dropdown.svg" alt="dropdown" />
        </button>
      </div>
      <h1 className="text-4xl font-bold flex flex-1 justify-center align-middle w-full my-5">How's the sky looking today?</h1>
    
    </div>
  );
};
export default header;
