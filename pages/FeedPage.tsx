
import React from 'react';
import { MagnifyingGlassIcon } from '../components/Icons';

const lightsticks = [
  { id: 1, src: 'https://picsum.photos/seed/ls1/500/800', title: 'Cosmic Dream' },
  { id: 2, src: 'https://picsum.photos/seed/ls2/500/600', title: 'Frog Prince' },
  { id: 3, src: 'https://picsum.photos/seed/ls3/500/750', title: 'Sakura Glow' },
  { id: 4, src: 'https://picsum.photos/seed/ls4/500/900', title: 'Ocean Heart' },
  { id: 5, src: 'https://picsum.photos/seed/ls5/500/650', title: 'Cyber Kitty' },
  { id: 6, src: 'https://picsum.photos/seed/ls6/500/850', title: 'Forest Spirit' },
  { id: 7, src: 'https://picsum.photos/seed/ls7/500/700', title: 'Starry Night' },
  { id: 8, src: 'https://picsum.photos/seed/ls8/500/820', title: 'Gothic Rose' },
];

const LightstickCard: React.FC<{ src: string, title: string }> = ({ src, title }) => (
    <div className="relative rounded-lg overflow-hidden group break-inside-avoid mb-4">
        <img src={src} alt={title} className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <h3 className="text-white font-semibold">{title}</h3>
        </div>
    </div>
);


const FeedPage: React.FC = () => {
  return (
    <div className="bg-[#121212] min-h-full">
        <header className="sticky top-0 bg-[#121212]/80 backdrop-blur-sm z-10 p-4 border-b border-gray-800">
            <h1 className="text-xl font-bold text-center mb-4">남들의 무드보드</h1>
            <div className="relative">
                <input
                  type="text"
                  placeholder="다른 사람들의 아이디어 검색"
                  className="w-full bg-gray-800 border border-gray-700 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
        </header>

        <main className="p-4">
            <div className="columns-2 gap-4">
                {lightsticks.map(item => (
                    <LightstickCard key={item.id} src={item.src} title={item.title} />
                ))}
            </div>
        </main>
    </div>
  );
};

export default FeedPage;
