import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
import { motion} from "framer-motion";
const GetStarted = () => {
  const stampLoop = {
    animate: {
      y: [0, -8, 0],
      scale: [1, 0.9, 1.05, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1, 
      },
    },
  };

  return (
    <motion.div
      variants={stampLoop}
      animate="animate"
      whileTap={{ scale: 0.80 }}
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Let's</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[30px] object-contain"
          />
        </div>
        <p className="font-poppins font-semibold text-[16px] leading-[23px]">
          <span className="text-gradient">Build Together</span>
        </p>
      </div>
    </motion.div>
  );
};

export default GetStarted;
