import React from "react";
import { motion } from "framer-motion";

const marquee = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeateType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div>
      <div className="marquee">
        <motion.div className="track" variants={marquee} animate="animate">
          <h1>Hello, World!</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
