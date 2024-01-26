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
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogolook.net%2Fwp-content%2Fuploads%2F2021%2F07%2FMLB-Logo-1992-768x432.png&f=1&nofb=1&ipt=b2958eb4d255b1865ad9eea3ac3e51e1aa4b4692a6ea9762308173ac7f2dc135&ipo=images",
    route: "/mlb",
    style: "",
    title: "",
  },
  { img: "", route: "#", style: "", title: "" },
  {
    img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthewatchdogonline.com%2Fwp-content%2Fuploads%2F2019%2F11%2FMLS-Logo.png&f=1&nofb=1&ipt=a2bb35ff987e1523937ab8c89f8f76ef3d524f0615951d2588f9b0d7680fe2e7&ipo=images",
    route: "/mls",
    style: "",
    title: "",
  },
  {
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpnghq.com%2Fwp-content%2Fuploads%2Fnhl-logo-png-hd-transparent-png-18356.png&f=1&nofb=1&ipt=b296b8a37332ce9e36f136e6b3653ffc0149e1b011fe0eb1943c5c0b4b1981c3&ipo=images",
    route: "/nhl",
    style: "",
    title: "",
  },
  { img: "", route: "#", style: "", title: "" },
];

const BentoBox = () => {
  return (
    <>
      <header className="hidden sm:grid grid-cols-3 auto-rows-[192px] gap-4 border-solid border-2 border-blue-500">
        {boxes.map((box, i) => (
          <img
            key={i}
            className={`object-contain h-full w-full row-span-1 rounded-xl p-4 border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 ${
              i === 3 || i === 6 ? "col-span-2" : ""
            }`}
            src={box.img}
          />
        ))}
      </header>
      <button className="absolute top-[60%] right-[30%] sm:right-[25%] rounded-xl p-4 border-2 border-blue">
        Click Me
      </button>
    </>
  );
};

export default BentoBox;
