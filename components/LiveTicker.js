import React from 'react';
import Marquee from 'react-fast-marquee';
import { faSoccerBall, faVolleyball } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LiveTicker = () => {
  return (
    <div className="leading-0 fixed z-50 w-6/12 overflow-x-hidden bg-lime-400 text-center text-[.66rem] font-black text-white lg:text-[0.8rem]">
      <Marquee>
        <FontAwesomeIcon
          className="mr-3 inline h-5 w-5 p-0 text-slate-300"
          icon={faVolleyball}
        />
        <FontAwesomeIcon
          className="mr-3 inline h-5 w-5 p-0 text-slate-300"
          icon={faVolleyball}
        />
        <FontAwesomeIcon
          className="mr-3 inline h-5 w-5 p-0 text-slate-300"
          icon={faVolleyball}
        />
        SC Freiburg Ticker {''}
        <FontAwesomeIcon
          className="mr-3 inline h-5 w-5 p-0 text-slate-300"
          icon={faVolleyball}
        />
        <FontAwesomeIcon
          className="mr-3 inline h-5 w-5 p-0 text-slate-300"
          icon={faVolleyball}
        />
        <FontAwesomeIcon
          className="mr-3 inline h-5 w-5 p-0 text-slate-300"
          icon={faVolleyball}
        />
      </Marquee>
    </div>
  );
};

export default LiveTicker;
