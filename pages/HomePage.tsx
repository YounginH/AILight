import React, { useState } from 'react';
import { Bars3Icon, MagnifyingGlassIcon } from '../components/Icons';

interface HomePageProps {
  onSelectIdol: (idolName: string) => void;
}

const idols = [
  { name: 'NEW JEANS', img: 'https://i.pinimg.com/564x/2b/96/52/2b96525979a3b6c6225a0988636b0439.jpg' },
];

const filters = ['인기 전체', '여자 아이돌', '남자 아이돌', '솔로'];

const IdolCard = ({ name, img }: { name: string; img: string }) => (
  <div className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-lg mb-4 group">
    <img src={img} alt={name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    <h3 className="absolute bottom-6 left-6 text-white font-bold text-4xl font-serif tracking-wider">{name}</h3>
  </div>
);

const ComingSoonCard = () => (
  <div className="relative w-full h-[480px] rounded-2xl bg-gray-800 flex flex-col justify-center items-center text-center p-4 shadow-lg mb-4 border-2 border-dashed border-gray-600">
    <h3 className="text-white font-bold text-3xl mb-2">Coming Soon</h3>
    <p className="text-gray-400">더 많은 아이돌이 곧 추가될 예정입니다!</p>
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ onSelectIdol }) => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <div className="bg-[#121212] min-h-full">
      {/* Header section with sticky positioning to keep controls accessible */}
      <header className="sticky top-0 bg-[#121212]/90 backdrop-blur-sm z-10 p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">랭킹</h1>
          <button aria-label="Menu">
            <Bars3Icon className="h-8 w-8 text-gray-300" />
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="원하는 아이돌 검색하기"
            className="w-full bg-white text-black rounded-lg py-3 pl-4 pr-12 focus:outline-none placeholder-gray-500 border-none"
          />
          <MagnifyingGlassIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
        </div>
      </header>

      {/* Filter buttons section */}
      <div className="px-4 pt-2 pb-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex-shrink-0 ${
                activeFilter === filter
                  ? 'bg-pink-500 text-white'
                  : 'bg-zinc-200 text-zinc-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      {/* Main content: list of idol cards */}
      <main className="px-4">
        {idols.map((idol) => (
           <button key={idol.name} onClick={() => onSelectIdol(idol.name)} className="w-full text-left focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-2xl">
            <IdolCard name={idol.name} img={idol.img} />
          </button>
        ))}
        <ComingSoonCard />
      </main>
    </div>
  );
};

export default HomePage;
