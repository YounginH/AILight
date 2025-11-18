import React, { useState } from 'react';
import { ChevronLeftIcon, Bars3Icon, HeartIcon, RabbitIcon, BowIcon, LockIcon, GearIcon, StarIcon } from '../components/Icons';

interface PartSelectionPageProps {
  onBack: () => void;
  onNavigateToCreate: () => void;
}

const partCategories = [
  { id: 'heart', label: '파츠 01', icon: HeartIcon, enabled: true },
  { id: 'rabbit', label: '파츠 02', icon: RabbitIcon, enabled: false },
  { id: 'bow', label: '파츠 03', icon: BowIcon, enabled: false },
  { id: 'lock', label: '파츠 04', icon: LockIcon, enabled: false },
  { id: 'gear', label: '파츠 05', icon: GearIcon, enabled: false },
  { id: 'star', label: '파츠 06', icon: StarIcon, enabled: false },
];

const partOptions: { [key: string]: { id: string; src: string }[] } = {
  heart: [
    { id: 'h1', src: 'https://i.imgur.com/gT3bSJy.png' }, // Purple
    { id: 'h2', src: 'https://i.imgur.com/eYxJ1xY.png' }, // Iridescent
    { id: 'h3', src: 'https://i.imgur.com/5V1p3aE.png' }, // Green
  ],
  // Add other part options here as they become available
};

const PartSelectionPage: React.FC<PartSelectionPageProps> = ({ onBack, onNavigateToCreate }) => {
  const [selectedCategory, setSelectedCategory] = useState(partCategories[0].id);
  
  return (
    <div className="flex flex-col h-full bg-[#121212] overflow-y-auto">
      <header className="sticky top-0 bg-[#121212]/90 backdrop-blur-sm z-30 flex justify-between items-center p-4 border-b border-gray-800 flex-shrink-0">
        <button onClick={onBack}>
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="font-semibold text-lg">파츠 선택</h1>
        <button>
          <Bars3Icon className="w-6 h-6" />
        </button>
      </header>

      <main className="flex-grow flex flex-col p-4">
        <div className="flex justify-end items-center gap-2 mb-4">
          <button 
            onClick={onNavigateToCreate}
            className="px-4 py-1.5 bg-gray-700 text-white rounded-full text-sm font-semibold hover:bg-gray-600 transition-colors">
            AI 제작
          </button>
          <button className="px-4 py-1.5 bg-pink-500 text-white rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors">
            저장
          </button>
        </div>

        {/* Lightstick Preview */}
        <div className="flex-grow flex items-center justify-center my-4">
            <div className="relative w-64 h-96">
                <img src="https://i.imgur.com/1gqYq5e.png" alt="Lightstick Preview" className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(238,130,238,0.25)]" />
                {/* Stickers would be positioned here absolutely based on user selection */}
            </div>
        </div>

        {/* Part Categories */}
        <div className="mb-4">
          <div className="flex justify-between items-start p-2 bg-black/30 rounded-xl">
            {partCategories.map(cat => {
                const isSelected = selectedCategory === cat.id;
                const isLocked = !cat.enabled;
                const iconColor = isSelected 
                    ? 'text-pink-500' 
                    : (isLocked && cat.id === 'lock') 
                        ? 'text-white' 
                        : 'text-gray-600';

                return (
                    <button 
                        key={cat.id} 
                        disabled={isLocked}
                        onClick={() => cat.enabled && setSelectedCategory(cat.id)}
                        className={`flex flex-col items-center text-center group w-14 transition-opacity ${isLocked ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-80'}`}
                    >
                        {/* Icon Box */}
                        <div className={`w-full h-14 rounded-lg flex justify-center items-center transition-colors ${
                            isSelected ? 'bg-white' : 'bg-gray-800'
                        } ${!isLocked ? 'group-hover:bg-gray-700' : ''}`}>
                            <cat.icon className={`w-7 h-7 transition-colors ${iconColor}`} />
                        </div>

                        {/* Label */}
                        <div className="h-6 flex items-center justify-center mt-1.5 relative w-full">
                            <div className={`px-2 py-0.5 rounded-md ${isSelected ? 'bg-white' : 'bg-gray-800'}`}>
                                <span className={`text-[10px] font-medium transition-colors ${isSelected ? 'text-pink-500' : 'text-gray-500'}`}>{cat.label}</span>
                            </div>
                            {isLocked && cat.id === 'lock' && (
                                <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-medium tracking-tight">
                                    coming soon
                                </span>
                            )}
                        </div>
                    </button>
                );
            })}
          </div>
        </div>
        
        {/* Part Options */}
        <div className="h-28 flex items-center justify-center">
            <div className="flex gap-8">
                {(partOptions[selectedCategory] || []).map(option => (
                    <button key={option.id} className="w-20 h-20 flex items-center justify-center rounded-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-500/50">
                        <img src={option.src} alt={`Part option ${option.id}`} className="w-16 h-16 object-contain" />
                    </button>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
};

export default PartSelectionPage;