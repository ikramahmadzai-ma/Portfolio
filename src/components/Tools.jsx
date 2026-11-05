import React from "react";
import { features } from "../constants";
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

function FeatureCard({ icon, title }) {
  return (
    <motion.div
      className="flex z-40 flex-col items-center justify-center w-full px-4 sm:px-20 md:px-20 py-5 rounded-[20px] feature-card bg-gray-800"
      variants={cardVariants}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-gray-900`}
      >
        <img src={icon} alt="icon" className="w-[75%] h-[75%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col mt-2 text-center">
        <h4 className="font-poppins text-white font-semibold text-[12px] sm:text-[16px] md:text-[16px] leading-[18px] sm:leading-[23px] mb-1 text-gradient">
          {title}
        </h4>
      </div>
    </motion.div>
  );
}

const Business = () => {
  return (
    <motion.section
      id="features"
      className={`${layout.section} px-4 items-center justify-center Tools_BG`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Wrapper */}
      <div className="flex flex-col items-center">
        {/* Heading */}
        <h2 className=" font-bold text-2xl mb-6 text-center text-gradient">
          Programming Languages & Tools
        </h2>

        {/* Grid of cards */}
        <div className=" w-[350px] sm:w-full md:w-full items-center justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 mt-12 gap-3 sm:gap-6 md:gap-8 cursor-pointer ">
            {features.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Business;
