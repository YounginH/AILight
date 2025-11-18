import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full bg-black animate-fadeIn">
      <img
        src="https://i.postimg.cc/MZy1324p/image-170.png"
        alt="Splash Image"
        className="max-w-[80%] max-h-[80%] object-contain"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
    </div>
  );
};

export default SplashScreen;