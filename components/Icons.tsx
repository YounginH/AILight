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

// This is now the "My Design" icon
export const SparklesIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M15.42 2.85a1.5 1.5 0 00-2.12 0L6.85 9.29a.5.5 0 000 .71l4.59 4.59a.5.5 0 00.71 0l6.44-6.44a1.5 1.5 0 000-2.12l-3.17-3.18zM5 16.5l-2-2 5.5-5.5 4 4-7.5 7.5z" />
        <path d="M21.5 6a1 1 0 01-1.414 0L19 4.914l-1.086 1.086a1 1 0 11-1.414-1.414L17.586 3.5l-1.086-1.086a1 1 0 111.414-1.414L19 2.086l1.086-1.086a1 1 0 111.414 1.414L20.414 3.5l1.086 1.086a1 1 0 010 1.414z" />
        <path d="M17.5 10.5a1 1 0 01-1.414 0L15 9.414l-1.086 1.086a1 1 0 11-1.414-1.414L13.586 8l-1.086-1.086a1 1 0 111.414-1.414L15 6.586l1.086-1.086a1 1 0 111.414 1.414L16.414 8l1.086 1.086a1 1 0 010 1.414z" />
    </svg>
);

// This is the Board icon
export const BoardIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7 4C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H13C13.5523 20 14 19.5523 14 19V5C14 4.44772 13.5523 4 13 4H7ZM16 8C15.4477 8 15 8.44772 15 9V15C15 15.5523 15.4477 16 16 16H17C18.1046 16 19 15.1046 19 14V10C19 8.89543 18.1046 8 17 8H16Z"/>
  </svg>
);


export const UserCircleIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
    </svg>
);

export const PlusCircleIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-1.383-.597 15.185 15.185 0 01-3.044-2.03.5.5 0 01-.054-.022l-.003-.002.002.003.002.002a.5.5 0 01.052.022 15.185 15.185 0 013.044 2.03c.461.326.948.621 1.455.872l.022.012.007.003h-.001c.003 0 .005-.001.007-.003l.022-.012a15.247 15.247 0 011.383-.597 15.185 15.185 0 013.044-2.03.5.5 0 01.054-.022l.003-.002-.002.003-.002.002a.5.5 0 01-.052.022 15.185 15.185 0 01-3.044 2.03c-.461.326-.948.621-1.455.872l-.022.012-.007.003h.001zM12 5.25a.75.75 0 01.75.75v.008l.006.006.002.002.002.002.002.002a6.733 6.733 0 011.83 1.511 6.72 6.72 0 012.38 3.23.75.75 0 11-1.342.646 5.22 5.22 0 00-1.836-2.52 5.233 5.233 0 00-2.802-1.182.75.75 0 01-.75-.75v-.008l-.006-.006-.002-.002-.002-.002L12 5.25zm-1.5 0a.75.75 0 01.75.75v.008l.006.006.002.002.002.002.002.002a6.733 6.733 0 011.83 1.511 6.72 6.72 0 012.38 3.23.75.75 0 11-1.342.646 5.22 5.22 0 00-1.836-2.52 5.233 5.233 0 00-2.802-1.182.75.75 0 01-.75-.75v-.008l-.006-.006-.002-.002-.002-.002L10.5 5.25z" />
  </svg>
);

export const RabbitIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C9.24 2 7 4.24 7 7V9.5C7 10.88 5.88 12 4.5 12S2 10.88 2 9.5V7C2 4.24 4.24 2 7 2H12M17 2C19.76 2 22 4.24 22 7V9.5C22 10.88 20.88 12 19.5 12S17 10.88 17 9.5V7C17 4.24 14.76 2 12 2H17M12 14C16.42 14 20 17.58 20 22H4C4 17.58 7.58 14 12 14Z" />
  </svg>
);

export const BowIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L6.5 7.5L12 13L17.5 7.5L12 2M12 13L6.5 18.5L12 24L17.5 18.5L12 13Z" />
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
