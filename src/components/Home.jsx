import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-gradient-to-b from-rose-200 via-pink-100 to-cyan-200 py-20">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase text-gray-500">
            <div className="w-10 h-[2px] mr-3 bg-cyan-700 text-blue-500"></div>Hot Trend
          </div>
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4 text-left text-pink-950">Fresh Fashion Finds<br />
          <span className="font-light">new collection</span></h1>
          <Link to={'/category'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;