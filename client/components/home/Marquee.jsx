import React from "react";
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
  return (
    <div className="border-2 border-solid-blue">
      <div className="relative w-full max-w-full h-[206px] overflow-hidden">
        <motion.div
          className="whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1 className="text-9xl">Hello, World!</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
