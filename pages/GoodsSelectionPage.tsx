import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeftIcon, Bars3Icon } from '../components/Icons';

interface GoodsSelectionPageProps {
  userName: string;
  onBack: () => void;
  onNavigateToCreate: () => void;
}

const goods = [
  { 
    title: 'AI 응원봉 커스텀', 
    img: 'https://i.pinimg.com/564x/4a/0c/8a/4a0c8a38381e47d1748286a2e482e9f0.jpg',
    decorator: 'https://www.pngarts.com/files/3/Pink-Butterfly-PNG-Image.png',
    gradient: 'from-pink-200/80 via-pink-50 to-white'
  },
  { title: '포토카드 제작', img: '', decorator: '', gradient: 'from-blue-200/80 via-blue-50 to-white' },
  { title: '커스텀 키링', img: '', decorator: '', gradient: 'from-purple-200/80 via-purple-50 to-white' },
  { title: '슬로건 디자인', img: '', decorator: '', gradient: 'from-green-200/80 via-green-50 to-white' },
];

const GoodsSelectionPage: React.FC<GoodsSelectionPageProps> = ({ userName, onBack, onNavigateToCreate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.scrollWidth / goods.length;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const scroller = scrollRef.current;
    if (scroller) {
      scroller.addEventListener('scroll', handleScroll, { passive: true });
      return () => scroller.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#121212] overflow-y-auto">
      <header className="sticky top-0 bg-[#121212]/90 backdrop-blur-sm z-30 flex justify-between items-center p-4 border-b border-gray-800 flex-shrink-0">
        <button onClick={onBack}>
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="font-semibold text-lg">굿즈 선택</h1>
        <button>
          <Bars3Icon className="w-6 h-6" />
        </button>
      </header>

      <main className="flex-grow flex flex-col pt-8 px-4">
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">{userName} 님,</span>
            <br />
            원하는 굿즈를 선택 해보세요.
          </h2>
          <p className="text-gray-400 mt-3">
            당신이 생각하던, 디자인<br />
            AI LIGHT에서 마음껏 뽐내보세요.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex-grow flex flex-col justify-center -mx-4">
            <div 
              ref={scrollRef}
              className="flex items-center overflow-x-auto snap-x snap-mandatory py-4"
              style={{ scrollbarWidth: 'none', 'msOverflowStyle': 'none' }}
            >
              <div className="flex-shrink-0 w-12 snap-center"></div> {/* Spacer */}
              {goods.map((item, index) => (
                  <div key={index} className="snap-center flex-shrink-0 w-[70%] px-2">
                      <button 
                        onClick={index === 0 ? onNavigateToCreate : undefined}
                        disabled={index !== 0}
                        className={`w-full h-[400px] rounded-3xl p-6 flex flex-col items-center text-center relative overflow-hidden transition-transform duration-300 transform ${activeIndex === index ? 'scale-100' : 'scale-90 opacity-70'} ${index !== 0 ? 'cursor-not-allowed justify-center' : 'justify-end'}`}
                      >
                          <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient}`}></div>
                          {index === 0 ? (
                            <>
                              {item.img && <img src={item.img} alt={item.title} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[60%] z-10 drop-shadow-lg" />}
                              {item.decorator && <img src={item.decorator} alt="" className="absolute top-1/4 right-0 w-20 h-20 opacity-80 z-20" />}
                              <div className="relative z-10">
                                  <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                              </div>
                            </>
                          ) : (
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-gray-700">{item.title}</h3>
                                <p className="mt-2 font-semibold text-gray-500">Coming Soon</p>
                            </div>
                          )}
                      </button>
                  </div>
              ))}
              <div className="flex-shrink-0 w-12 snap-center"></div> {/* Spacer */}
            </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center py-6">
            <div className="flex space-x-2">
                {goods.map((_, index) => (
                    <div key={index} className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-pink-400' : 'bg-gray-600'}`}></div>
                ))}
            </div>
        </div>

      </main>
    </div>
  );
};

export default GoodsSelectionPage;
