import React from "react";

const boxes = [
  {
    img: "https://seeklogo.net/wp-content/uploads/2014/10/nfl-logo-National-Football-League.png",
    route: "/nfl",
    style: "",
    title: "",
  },
  {
    img: "https://1.bp.blogspot.com/-SH9fu4Pzgyc/WMGA_RnsZRI/AAAAAAAACNY/TjooauWsDngZe3M3dl8QhXKXk-keMffoQCLcB/s1600/Logo%2BNBA%2BVector%2BCDR%2BFile%2BFree.png",
    route: "/nba",
    style: "",
    title: "",
  },
  {
    img: "",
    route: "/mlb",
    style: "",
    title: "",
  },
  { img: "", route: "/nba", style: "", title: "" },
  { img: "", route: "/cbb", style: "", title: "" },
  { img: "", route: "/nhl", style: "", title: "" },
  { img: "", route: "/nba", style: "", title: "" },
];

const BentoBox = () => {
  return (
    <header className="hidden md:grid grid-cols-1 lg:grid md:auto-rows-[192px] md:grid-cols-3 md:gap-4 w-full md:px-40 border-solid border-2 border-blue-500">
      {boxes.map((box, i) => (
        <img
          key={i}
          className={`object-cover sm:h-full h-28 w-full row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-6 dark:bg-neutral-900 ${
            i === 3 || i === 6 ? "col-span-2" : ""
          }`}
          src={box.img}
        />
      ))}
    </header>
  );
};

export default BentoBox;
