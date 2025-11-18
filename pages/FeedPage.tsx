
import React, { useState } from 'react';
import { MagnifyingGlassIcon, PlusIcon, ChevronLeftIcon, Bars3Icon } from '../components/Icons';

const moodboardItems = [
  { id: 1, src: 'https://i.postimg.cc/8z0376Vf/image.png' },
  { id: 2, src: 'https://i.postimg.cc/Xv1MXx6b/image.png' },
  { id: 3, src: 'https://i.postimg.cc/SNX9p8G7/image.png' },
  { id: 4, src: 'https://i.postimg.cc/N0nN2rS7/image.png' },
  { id: 5, src: 'https://i.postimg.cc/J0bQ9WzZ/image.png' },
  { id: 6, src: 'https://i.postimg.cc/P5tYp8sL/image.png' },
  { id: 7, src: 'https://i.postimg.cc/zXWkP1s0/image.png' },
  { id: 8, src: 'https://i.postimg.cc/k47v0W6t/image.png' },
  { id: 9, src: 'https://i.postimg.cc/sX1x7B29/image.png' },
  { id: 10, src: 'https://i.postimg.cc/Y0d7vFv3/image.png' },
];

const MoodboardCard: React.FC<{ src: string }> = ({ src }) => (
    <div className="break-inside-avoid mb-4">
        <img src={src} alt="Moodboard item" className="w-full h-auto object-cover rounded-2xl" />
    </div>
);

const FeedPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'home'>('home');
  const [view, setView] = useState<'list' | 'detail'>('list');

  // 탭을 변경하면 목록 뷰로 초기화
  const handleTabChange = (tab: 'all' | 'home') => {
      setActiveTab(tab);
      setView('list');
  };

  const renderDetailView = () => (
      <div className="animate-fadeIn pb-20">
           {/* 상세 페이지 헤더 (뒤로가기 등) - 탭 헤더 아래에 위치하므로 별도 타이틀 섹션 구성 */}
           <div className="flex justify-between items-center mb-4 mt-2 px-2">
                <button onClick={() => setView('list')} className="p-2">
                    <ChevronLeftIcon className="w-6 h-6 text-white" />
                </button>
                <div className="flex space-x-4">
                    <button><span className="text-white text-xl">...</span></button>
                </div>
           </div>

           <div className="px-2 mb-6">
               <h1 className="text-2xl font-bold text-white mb-1">뉴진스 응원봉</h1>
               <p className="text-sm text-gray-400">핀 18개</p>
           </div>

           {/* 상단 콜라주 */}
           <div className="h-64 rounded-2xl overflow-hidden bg-gray-800 grid grid-cols-3 gap-1 mb-8">
                <div className="col-span-2 h-full bg-gray-700 relative group">
                    <img src="https://i.postimg.cc/SNX9p8G7/image.png" className="w-full h-full object-cover" alt="Main idea" />
                    <button className="absolute top-2 right-2 text-white/80 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    </button>
                </div>
                <div className="col-span-1 h-full grid grid-rows-2 gap-1">
                    <div className="bg-gray-600 relative group">
                        <img src="https://i.postimg.cc/N0nN2rS7/image.png" className="w-full h-full object-cover" alt="Sub idea 1" />
                    </div>
                    <div className="bg-gray-600 relative group">
                        <img src="https://i.postimg.cc/J0bQ9WzZ/image.png" className="w-full h-full object-cover" alt="Sub idea 2" />
                    </div>
                </div>
           </div>

           {/* 아이디어 더 보기 섹션 */}
           <div className="mb-4 text-center">
               <h3 className="text-lg font-bold text-white">아이디어 더 보기</h3>
               <p className="text-xs text-gray-400 mt-1">회원님이 좋아할 만한 몇 가지 아이디어입니다.</p>
           </div>

           <div className="grid grid-cols-2 gap-4">
               <div className="rounded-xl overflow-hidden h-40">
                   <img src="https://i.postimg.cc/P5tYp8sL/image.png" className="w-full h-full object-cover" alt="More 1" />
               </div>
               <div className="rounded-xl overflow-hidden h-40">
                   <img src="https://i.postimg.cc/zXWkP1s0/image.png" className="w-full h-full object-cover" alt="More 2" />
               </div>
               <div className="rounded-xl overflow-hidden h-40">
                   <img src="https://i.postimg.cc/k47v0W6t/image.png" className="w-full h-full object-cover" alt="More 3" />
               </div>
               <div className="rounded-xl overflow-hidden h-40">
                   <img src="https://i.postimg.cc/sX1x7B29/image.png" className="w-full h-full object-cover" alt="More 4" />
               </div>
           </div>
      </div>
  );

  return (
    <div className="bg-[#121212] min-h-full flex flex-col">
        <header className="sticky top-0 bg-[#121212]/90 backdrop-blur-sm z-10 p-4 space-y-4">
            {/* 상단 탭 (상세 뷰에서도 유지하여 네비게이션 역할) */}
            <div className="flex justify-center items-center relative">
                <div className="flex space-x-8 text-lg font-semibold">
                    <button 
                        onClick={() => handleTabChange('all')}
                        className={`relative transition-colors ${activeTab === 'all' ? 'text-white' : 'text-gray-500'}`}
                    >
                        전체
                        {activeTab === 'all' && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-0.5 bg-white rounded-full"></span>
                        )}
                    </button>
                    <button 
                        onClick={() => handleTabChange('home')}
                        className={`relative transition-colors ${activeTab === 'home' ? 'text-white' : 'text-gray-500'}`}
                    >
                        홈
                        {activeTab === 'home' && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-0.5 bg-white rounded-full"></span>
                        )}
                    </button>
                </div>
            </div>
            
            {/* 검색창 영역 */}
            <div className="flex items-center space-x-3">
                 <img
                    src="https://i.postimg.cc/KYWWZ96b/unnamed.jpg"
                    alt="User profile"
                    className="w-10 h-10 rounded-full object-cover border border-gray-700"
                />
                <div className="relative flex-grow">
                    <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <input
                      type="text"
                      // 상세 뷰일 때는 placeholder 변경
                      placeholder={view === 'detail' ? "내 핀 검색" : "아이디어 검색"}
                      className="w-full bg-white text-black rounded-full py-2.5 pl-11 pr-4 focus:outline-none placeholder-gray-500 border-none font-medium"
                    />
                </div>
                <button className="flex-shrink-0">
                    <PlusIcon className="w-8 h-8 text-gray-300 hover:text-white transition-colors" />
                </button>
            </div>
        </header>

        <main className="flex-grow p-4">
            {activeTab === 'all' ? (
                <div className="columns-2 gap-4">
                    {moodboardItems.map(item => (
                        <MoodboardCard key={item.id} src={item.src} />
                    ))}
                </div>
            ) : (
                // Home Tab
                view === 'detail' ? (
                    renderDetailView()
                ) : (
                    <div className="space-y-8 pb-20">
                        {/* 저장한 아이디어 섹션 */}
                        <section>
                            <h2 className="text-lg font-bold text-white mb-4">저장한 아이디어</h2>
                            <div className="flex space-x-4 overflow-x-auto pb-4">
                                {/* 카드 1 */}
                                <div className="flex-shrink-0 w-64 group cursor-pointer">
                                    <div className="h-40 rounded-2xl overflow-hidden bg-gray-800 grid grid-cols-3 gap-0.5 mb-3">
                                        <div className="col-span-2 h-full bg-gray-700">
                                            <img src="https://i.postimg.cc/SNX9p8G7/image.png" className="w-full h-full object-cover" alt="Main idea" />
                                        </div>
                                        <div className="col-span-1 h-full grid grid-rows-2 gap-0.5">
                                            <div className="bg-gray-600">
                                                <img src="https://i.postimg.cc/N0nN2rS7/image.png" className="w-full h-full object-cover" alt="Sub idea 1" />
                                            </div>
                                            <div className="bg-gray-600">
                                                <img src="https://i.postimg.cc/J0bQ9WzZ/image.png" className="w-full h-full object-cover" alt="Sub idea 2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg leading-tight">하투하</h3>
                                        <p className="text-xs text-gray-400 mt-1">핀 2개 · 6개월</p>
                                    </div>
                                </div>
                                
                                 {/* 카드 2 (더미) */}
                                 <div className="flex-shrink-0 w-64 group cursor-pointer">
                                    <div className="h-40 rounded-2xl overflow-hidden bg-gray-800 grid grid-cols-3 gap-0.5 mb-3">
                                        <div className="col-span-2 h-full bg-gray-700">
                                            <img src="https://i.postimg.cc/P5tYp8sL/image.png" className="w-full h-full object-cover" alt="Main idea" />
                                        </div>
                                        <div className="col-span-1 h-full grid grid-rows-2 gap-0.5">
                                            <div className="bg-gray-600">
                                                <img src="https://i.postimg.cc/zXWkP1s0/image.png" className="w-full h-full object-cover" alt="Sub idea 1" />
                                            </div>
                                            <div className="bg-gray-600">
                                                <img src="https://i.postimg.cc/k47v0W6t/image.png" className="w-full h-full object-cover" alt="Sub idea 2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg leading-tight">블루밍</h3>
                                        <p className="text-xs text-gray-400 mt-1">핀 5개 · 1주일</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 보드 제안 섹션 */}
                        <section>
                            <h2 className="text-lg font-bold text-white mb-4">보드 제안</h2>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { id: 1, img1: 'https://i.postimg.cc/Xv1MXx6b/image.png', img2: 'https://i.postimg.cc/8z0376Vf/image.png' },
                                    { id: 2, img1: 'https://i.postimg.cc/Y0d7vFv3/image.png', img2: 'https://i.postimg.cc/sX1x7B29/image.png' },
                                    { id: 3, img1: 'https://i.postimg.cc/zXWkP1s0/image.png', img2: 'https://i.postimg.cc/k47v0W6t/image.png' },
                                    { id: 4, img1: 'https://i.postimg.cc/SNX9p8G7/image.png', img2: 'https://i.postimg.cc/N0nN2rS7/image.png' },
                                ].map((item) => (
                                    <div key={item.id} className="relative h-32 rounded-xl overflow-hidden group cursor-pointer">
                                        <div className="absolute inset-0 grid grid-cols-2">
                                            <img src={item.img1} className="w-full h-full object-cover" alt="Suggestion left" />
                                            <img src={item.img2} className="w-full h-full object-cover" alt="Suggestion right" />
                                        </div>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {/* 만들기 버튼 클릭 시 상세 뷰로 전환 */}
                                            <button 
                                                onClick={() => setView('detail')}
                                                className="bg-white text-black text-xs font-bold py-2 px-5 rounded-full shadow-lg hover:scale-105 transition-transform"
                                            >
                                                만들기
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )
            )}
        </main>
    </div>
  );
};

export default FeedPage;
