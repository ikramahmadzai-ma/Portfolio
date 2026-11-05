import React from "react";
import styles from "../style";
import { stats } from "../constants";
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
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Stats = () => {
  return (
    <motion.section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          className={`flex-1 justify-center flex items-center sm:flex-col flex-row m-3 stats-card rounded-xl p-3 cursor-pointer`}
          variants={cardVariants}
        >
          <p className="font-poppins xs:text-[24px] text-[15px] xs:leading-[26px] font-semibold leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
          <h4 className="font-poppins xs:text-[40px] text-[30px] xs:leading-[53px] font-semibold leading-[43px] text-white ml-3">
            {stat.value}
          </h4>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Stats;
