 'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Features from'../components/Feature'
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

function Philosophie () { 
  const [active, setActive] = useState('world-2');
 
  return(
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Philosophie" textStyles="text-center" />
      
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                                   
          <Features/>
          
        </div>
      </motion.div>
    </section>
  )
}

export default Philosophie;
