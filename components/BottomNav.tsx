import React from 'react';
import { Page } from '../types';
import { HomeIcon, SparklesIcon, BoardIcon, UserCircleIcon } from './Icons';

interface BottomNavProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activePage, onNavigate }) => {
  const navItems = [
    { page: Page.Home, icon: HomeIcon, label: '홈' },
    { page: Page.Create, icon: SparklesIcon, label: '내 디자인' },
    { page: Page.Feed, icon: BoardIcon, label: '보드' },
    { page: Page.Profile, icon: UserCircleIcon, label: '내 정보' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <nav className="flex justify-around items-center h-20">
        {navItems.map((item) => {
          const isActive = activePage === item.page;
          return (
            <button
              key={item.label}
              onClick={() => onNavigate(item.page)}
              className={`flex flex-col items-center justify-center w-1/4 transition-colors duration-200 ${
                isActive ? 'text-white' : 'text-gray-500 hover:text-white'
              }`}
              aria-label={item.label}
            >
              <item.icon className="h-6 w-6 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </footer>
  );
};

export default BottomNav;
