import React from 'react';
import { AilightLogoIcon } from '../components/Icons';

const SplashScreen: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-black animate-fadeIn">
      <div style={{ filter: 'drop-shadow(0 0 0.75rem #e8cfff) drop-shadow(0 0 1.5rem #e8cfff)' }}>
        <AilightLogoIcon className="w-[250px] h-auto" />
      </div>
    </div>
  );
};

export default SplashScreen;
