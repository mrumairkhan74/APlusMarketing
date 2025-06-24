import React from 'react';

const Background = () => {
  return (
    <div className="relative  w-full h-[500px] z-10  overflow-hidden">
      <img
        title='main BG'
        src="./images/bgmain.webp"
        className="w-full h-full object-cover brightness-50 rounded-tl-[100px] rounded-br-[100px]"
        alt="Luxury real estate background"
      />
    </div>
  );
};

export default Background;
