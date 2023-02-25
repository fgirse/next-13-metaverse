'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import Tooltip from 'react-simple-tooltip';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from "../components";

const About = () => (
  <section className={`${styles.paddings} relative z-10`} name="hashid">
    <div className="gradient-02 z-0"></div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText id="moinmoin" title="| Moin Moin" textStyles="text-center" />

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-gray-500"
      >
        <h1 className="lg:text-[4rem] font-extrabold text-yellow-500 text-center">&quot;Moin Moin&quot;</h1>
        <Image
          src="/lighthouse3.png"
          height="320"
          width="230"
          alt="Leuchtturm"
          className="shape-lighthouse"
        />
        
        <p className = "text-gray-300"> In Hommage an eine typische Kiez-Kneipe auf St.Pauli, haben wir im
        Herzen von Freiburg ein Lokal eröffnet, welches es so südlich der Elbe
        wohl kein zweites Mal gibt. Ausgebaut im Stile eines Schiffrumpfes, ist
        der im Zentrum der Altstadt gelegene Rettungsanker-Freiburg idealer
        Treffpunkt um nach Feierabend etwas zu entspannen und nette Leute
        kennenzulernen. Wir sind stolz auf unser buntes, internationales
        Publikum. <br /> Unser Rettungsanker ist auch ideale Location zur
        Durchführung Ihres privaten oder geschäftlichen Events &nbsp;Sprechen
        Sie uns an oder kontaktieren Sie uns vor Ort oder schreiben Sie uns eine
        email. Wir freuen uns Sie im Rettungsanker begrüsssen zu dürfen.</p> 
        
        <div className="flex flex-row justify-center items-center gap-x-5">
        <Image
          src="/portraitmick.png"
          height="80"
          width="72"
          float="left"
          alt="Portrait"
          className=" mt-5 rounded-full portraitMick"
        />
        <p className='text-gray-300'> Michael Schreck und das Team des Rettungsankers</p>
        </div>
      </motion.div>
      <div className="flex flex-col items-center justify-center">
          <Tooltip fontSize="0.866rem" padding="2px" content="sende email an rettungsanker-freiburg@gmx.de" direction="top" border="#ffffff" background="#d000ff">
            <button className="lg-justify-between relative mx-auto mb-5 mt-6 flex w-52 flex-row items-center justify-center gap-x-3 rounded-lg border border-transparent bg-yellow-500 px-4 py-2 font-sans text-2xl font-medium  text-gray-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:text-3xl lg:mb-20 lg:flex lg:w-80 lg:flex-row lg:items-center lg:text-2xl xl:mt-2" type="button">
              <svg
                className="w-16 lg:w-20 "
                fill="#ffffff"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a className="ui btn" href="mailto:rettungsanker-freiburg@gmx.de?">SOS email</a>
            </button>
          </Tooltip>
        </div>
        <p className="text-yellow-500 text-center">scrolling down</p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      ></motion.img>
    </motion.div>
  </section>
);export default About;