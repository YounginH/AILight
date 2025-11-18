import React from 'react';

type IconProps = {
  className?: string;
  fill?: string;
};

export const AilightLogoIcon: React.FC<IconProps> = (props) => (
    <svg width="250" height="110" viewBox="0 0 250 110" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fde6ff" />
                <stop offset="100%" stopColor="#e5c9ff" />
            </linearGradient>
        </defs>
        {/* Lightbulb part */}
        <g transform="translate(0, -25)">
            <path d="M125 55 C 119.477 55 115 50.523 115 45 C 115 39.477 119.477 35 125 35 C 130.523 35 135 39.477 135 45 C 135 50.523 130.523 55 125 55 Z M125 57 C 134.404 57 142 64.596 142 74 L142 79 L108 79 L108 74 C 108 64.596 115.596 57 125 57 Z" fill="url(#logoGradient)"/>
            <circle cx="125" cy="22" r="3" fill="url(#logoGradient)"/>
            <line x1="135" y1="28" x2="140" y2="24" stroke="url(#logoGradient)" strokeWidth="3" strokeLinecap="round"/>
            <line x1="115" y1="28" x2="110" y2="24" stroke="url(#logoGradient)" strokeWidth="3" strokeLinecap="round"/>
        </g>
        <text x="50%" y="80" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="url(#logoGradient)">
            Ailight
        </text>
    </svg>
);


export const LightbulbIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props} fill="currentColor">
         <g transform="scale(0.5) translate(-4, -4)">
            <path d="M24 22 C 22.895 22 22 21.105 22 20 C 22 18.895 22.895 18 24 18 C 25.105 18 26 18.895 26 20 C 26 21.105 25.105 22 24 22 Z M24 23 C 26.761 23 29 25.239 29 28 L29 30 L19 30 L19 28 C 19 25.239 21.239 23 24 23 Z" />
            <circle cx="24" cy="13" r="1.5" />
            <line x1="26.5" y1="14.5" x2="28" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="21.5" y1="14.5" x2="20" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
    </svg>
);


export const HomeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.026.026.05.054.07.084v6.101a2.25 2.25 0 01-2.25 2.25H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.25a2.25 2.25 0 01-2.25-2.25v-6.101c.02-.03.044-.058.07-.084L12 5.432z" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15.162 3.096a.75.75 0 0 1 1.06 0l2.68 2.68a.75.75 0 0 1 0 1.06L8.975 16.763l-3.848 1.085a.25.25 0 0 1-.312-.312l1.085-3.848L15.162 3.096ZM18.5 2.5L17.5 4 16 4.5 17.5 6 18.5 7.5 19.5 6 21 4.5 19.5 4 18.5 2.5Z"/>
    <path d="M4.5 18.5L4 20l-1.5.5L4 21l.5 1.5.5-1.5 1.5-.5-1.5-.5-.5-1.5Z"/>
    <path d="M20 18l-.5 1.5L18 20l1.5.5.5 1.5.5-1.5 1.5-.5-1.5-.5-.5-1.5Z"/>
  </svg>
);

export const BoardIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.858-10.557a.75.75 0 00-1.284 0l-1.053 1.92-2.14.386a.75.75 0 00-.405 1.26l1.493 1.578-.27 2.2a.75.75 0 001.077.775L12 17.65l1.94.913a.75.75 0 001.078-.776l-.27-2.199 1.493-1.578a.75.75 0 00-.406-1.261l-2.14-.386-1.053-1.92z" clipRule="evenodd" />
  </svg>
);


export const UserCircleIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>
);

export const PlusIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

export const Bars3Icon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const MagnifyingGlassIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

export const PaperAirplaneIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
);

export const StarIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
);

export const HeartIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.942 0 4.661 5.571 9.627 12 15.81 6.43-6.181 12-11.149 12-15.81 0-6.792-8.875-8.306-12-2.942z"/>
  </svg>
);

export const RabbitIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16 10.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-4zM7 10.5c0-.83.67-1.5 1.5-1.5S10 9.67 10 10.5v4c0 .83-.67 1.5-1.5 1.5S7 15.33 7 14.5v-4zM12 2c-3.31 0-6 2.69-6 6v4c0 1.1.9 2 2 2h1.5v2.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V14h2v2.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V14H16c1.1 0 2-.9 2-2v-4c0-3.31-2.69-6-6-6z"/>
  </svg>
);

export const BowIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.56 11.25L13.17 2.87c-.39-.39-1.02-.39-1.41 0L3.37 11.25c-.39.39-.39 1.02 0 1.41l8.38 8.38c.39.39 1.02.39 1.41 0l8.38-8.38c.4-.39.4-1.02.02-1.41zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
  </svg>
);


export const LockIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
  </svg>
);

export const GearIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.946 1.542A6.75 6.75 0 005.166 6.571a.75.75 0 00-1.222.872c.423.72.89 1.405 1.42 2.052a.75.75 0 001.064.093 6 6 0 012.356-1.026a.75.75 0 00.56-.934a6.75 6.75 0 00-1.788-3.33.75.75 0 00-.56-1.542zM4.102 12c0-.917.663-1.699 1.542-1.946A6.75 6.75 0 006.57 5.166a.75.75 0 00-.872-1.222c-.72.423-1.405.89-2.052 1.42a.75.75 0 00-.093 1.064 6 6 0 011.026 2.356a.75.75 0 00.934.56 6.75 6.75 0 003.33-1.788.75.75 0 001.542-.56zM12 4.102c.917 0 1.699-.663 1.946-1.542A6.75 6.75 0 0017.434 5.43a.75.75 0 001.222-.872c-.423-.72-.89-1.405-1.42-2.052a.75.75 0 00-1.064-.093 6 6 0 01-2.356 1.026a.75.75 0 00-.56.934 6.75 6.75 0 001.788 3.33.75.75 0 00.56 1.542zM19.898 12c0 .917-.663 1.699-1.542 1.946A6.75 6.75 0 0017.43 18.834a.75.75 0 00.872 1.222c.72-.423 1.405-.89 2.052-1.42a.75.75 0 00.093-1.064 6 6 0 01-1.026-2.356a.75.75 0 00-.934-.56 6.75 6.75 0 00-3.33 1.788.75.75 0 00-1.542.56zM12 19.898c-.917 0-1.699.663-1.946 1.542A6.75 6.75 0 008.57 18.57a.75.75 0 00-1.222.872c.423.72.89 1.405 1.42 2.052a.75.75 0 001.064.093 6 6 0 012.356-1.026a.75.75 0 00.56-.934 6.75 6.75 0 00-1.788-3.33.75.75 0 00-.56-1.542zM8.102 12c0 .917.663 1.699 1.542 1.946A6.75 6.75 0 008.57 18.834a.75.75 0 00-.872 1.222c-.72.423-1.405.89-2.052 1.42a.75.75 0 00-.093-1.064 6 6 0 011.026-2.356a.75.75 0 00.934-.56 6.75 6.75 0 003.33 1.788.75.75 0 001.542-.56z" clipRule="evenodd" />
  </svg>
);