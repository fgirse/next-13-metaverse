

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

import { TypingText, ExploreCard, TitleText } from "../components";
import { exploreWorlds } from "../constants";

const Wohin = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className={`${styles.paddings}`} id="bgGradient06">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Wohin?" textStyles="text-center" />
        <TitleText
          title={
            <>
              Wohin? <br className="md:block hidden" /> Lageplan Rettungsanker Freiburg
                          </>
          }
          textStyles="text-center"
        />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                  </div>
      </motion.div>
    </section>
  );
};

export default Wohin;

