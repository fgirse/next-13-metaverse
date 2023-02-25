"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { Modal04, Modale04 } from "../components";
import { TypingText, TitleText, StartSteps } from "../components";
import { startingFeatures } from "../constants";

const GetStarted =() => {
return (
<section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/crowd22.svg"
          alt="crowd at party"
          className="w-[100%] h-[98%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Dein Event" />
        <TitleText title={<>Dein Event</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] text-3xl text-gray-300 first letter:text-red-500">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={index + 1}
             text={feature} />
          ))}
        </div>
      </motion.div>
      </motion.div>
      <Modale04/>
  
  </section>
);
}
 export default GetStarted;
