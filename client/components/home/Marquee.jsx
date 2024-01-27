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
        duration: 10,
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
              className="w-full h-auto mx-6 border-2 border-solid-blue"
              variants={marqueeVariants}
              animate="animate"
            >
              <h1 className="text-2xl">{score.shortName}</h1>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Marquee;
