import Image from "next/image";
import Header from "./components/layout/header";
import Search from "./components/layout/search";
import Main from "./components/layout/main";

export default function Home() {
  return (
    <div className="flex flex-col flex-1   font-sans">
      <main className=" flex-1 w-full  p-30 pt-5  bg-blue-950 ">
        
  <Header/>
  <Search/>
  <Main/>
      </main>
    </div>
  );
}
