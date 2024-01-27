"use client";
import BentoBox from "./BentoBox";
import Marquee from "./Marquee";

const Home = () => {
  return (
    <div className="w-full md:w-[60%] border-solid border-2 border-red-500">
      <BentoBox />
      <Marquee />
    </div>
  );
};

export default Home;
