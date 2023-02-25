'use client';

import React, { useEffect, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Iframe from './iframe.js';
import Head from 'next/head.js';

const MyTEST = () => {
  return (
    <>
      <Head>
        <script
          async
          src="https://cdnjs.cloudflare.co  m/ajax/libs/jquery/3.6.3/jquery.min.js"
          integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ=="
          crossorigin="anonymous"
          referrertype="cross-origin"
        ></script>
        ;
      </Head>

      <div className="mt-16">
        <p class="headingB text-center text-[1.0rem] text-yellow-500"></p>
      </div>
      <iframe
        className="mx-auto"
        src="../index.html"
        width="90%"
        height="3000"
      ></iframe>

      <p className="text-xellow-400 mt-5 text-center text-[1.33rem]">
        Viel Vergnügen beim Stöbern im History Slider des Rettungsankers
      </p>
    </>
  );
};
export default MyTEST;
