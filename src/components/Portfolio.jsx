import { useEffect, useState } from "react";
import styles from "../style";
import { discount, Ekram, Ekram1, Ekram2 } from "../assets";
import { motion, AnimatePresence } from "framer-motion";
import GetStarted from "./GetStarted";

/* ================= ANIMATIONS ================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // 👈 one by one
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    x: 50,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    x: -50,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

const Portfolio = () => {
  const images = [Ekram, Ekram1, Ekram2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="home"
      className={`flex sm:flex-row flex-col ${styles.paddingY}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* ================= LEFT CONTENT ================= */}
      <motion.div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        variants={containerVariants}
      >
        {/* Welcome Box */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white text-2xl">Hi Dears</span> ! Welcome{" "}
            <span className="text-white">To My</span> Website.
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-row justify-between items-center w-full"
        >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[50px] text-white ss:leading-[85px] leading-[60px]">
            SOFTWARE <br className="sm:block hidden" />
            <span className="text-gradient">Engineer</span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </motion.div>

        {/* Sub Heading */}
        <motion.h1
          variants={fadeUpVariants}
          className="font-poppins font-semibold ss:text-[68px] text-[50px] text-white ss:leading-[85px] leading-[60px] w-full"
        >
          From Afghanistan.
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={fadeUpVariants}
          className={`${styles.paragraph} max-w-[650px] mt-4`}
        >
          I am a web designer and developer based in Kabul with{" "}
          <span className="text-white font-semibold">2+</span> years of
          professional experience supporting businesses in building and
          strengthening their online presence. I specialize in developing clean,
          efficient, and user-friendly websites and web applications. In
          addition, I offer services including database development, mobile
          application development, logo design, and search engine optimization
          (SEO).
        </motion.p>
      </motion.div>

      {/* ================= RIGHT IMAGE ================= */}
      <div
        className={`flex-1 flex ${styles.flexStart} md:my-0 my-10 relative Main_Photo`}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="hero"
            variants={slideVariants}
            initial="initial"
            whileInView="animate"
            exit="exit"
            className="w-[97%] max-w-[352px] md:max-w-[450px] h-auto aspect-square relative z-[5] rounded-2xl"
          />
        </AnimatePresence>

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 opacity-6 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      {/* ================= MOBILE BUTTON ================= */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </motion.section>
  );
};

export default Portfolio;
