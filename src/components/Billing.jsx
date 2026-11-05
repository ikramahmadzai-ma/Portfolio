import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // one by one
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const imgVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const Billing = () => {
  return (
    <motion.section
      id="product"
      className={layout.sectionReverse}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className={layout.sectionImgReverse} variants={imgVariants}>
        <img
          src={bill}
          alt="billing"
          className="w-[60%] h-[90%] rotate-12 rounded-3xl relative z-[5]"
        />
        <div className="absolute z-[3] -left-[50%] top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-[50%] bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </motion.div>

      <motion.div className={layout.sectionInfo} variants={cardVariants}>
        <motion.h2 className={styles.heading2} variants={cardVariants}>
          OBJECTS <br className="sm:block hidden" />
        </motion.h2>
        <motion.p
          className={`${styles.paragraph} max-w-[480px] mt-5`}
          variants={cardVariants}
        >
          Dynamic and versatile Web Developer with expertise in React and modern
          webtechnologies. Skilled indesigning interactive, scalable, and
          user-friendly applications,leading teams, and delivering innovative
          solutions that enhance user experience anddrive project success.
        </motion.p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <motion.img
            src={google}
            alt="google play"
            className="w-[128px] h-[42px] object-contain  cursor-pointer"
            variants={cardVariants}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Billing;
