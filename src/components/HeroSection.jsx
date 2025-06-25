import React from 'react';
import Background from './Background';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  const texts = [
    'Real Estate Experts',
    'Find Your Dream Home',
    'Plots, Apartments, Commercial',
    'Invest with Confidence'
  ];

  return (
    <div className="relative w-full h-[500px] mb-10">
      <Background />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold m-4">
          Welcome to{' '}
          <span className="text-yellow-500">
            <Typewriter
              words={['A+ Marketing']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <div className="text-yellow-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-white bg-opacity-40 px-6 py-2 rounded-lg mb-5 shadow-md max-w-[90%]">
          <Typewriter
            words={texts}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </div>

        <a
        title='Call Now'
          href="tel:+923355500590"
          className="bg-yellow-600 hover:bg-yellow-700 transition duration-300 text-white text-lg sm:text-xl md:text-2xl px-6 py-3 rounded-md shadow-lg mt-4"
        >
          📞 Call Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
