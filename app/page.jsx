import Image from "next/image";
import Header from "../components/layout/header";
import Search from "../components/layout/search";
import Main from "../components/layout/main";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4 flex-1 bg-main-background ">
      <Header />
      <Search />
      <Main />
    </div>
  );
}
