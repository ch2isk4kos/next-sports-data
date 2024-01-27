import { useEffect, useState } from "react";
import { getNFLScores } from "@/lib/api/getNFLScores";
import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: [-1035, 1035],
    transition: {
      x: {
        repeat: Infinity,
        repeateType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  const [nflScores, setNFLScores] = useState([]);

  useEffect(() => {
    getNFLScores().then((res) => setNFLScores(res));
  }, []);

  console.log("Marquee scores:", nflScores);

  return (
    <div className="border-2 border-solid-blue">
      <div className="relative flex flex-row justify-center items-center w-full max-w-full h-[100px] p-16 overflow-hidden">
        {nflScores &&
          nflScores.map((score) => (
            <motion.div
              key={score.uid}
              className="w-[25%] h-auto mx-3 border-2 border-blue-500"
              variants={marqueeVariants}
              animate="animate"
            >
              <h1 className="text-2xl">{score.shortName}</h1>
              {/* {score.competitions.competitors.map((comp) => (
                <h3>{comp.}</h3>
              ))} */}
              <h3>{score.status.displayClock}</h3>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Marquee;
