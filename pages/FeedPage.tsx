
import React, { useState } from 'react';
import { MagnifyingGlassIcon, PlusIcon, ChevronLeftIcon } from '../components/Icons';

// 초기 더미 데이터 (저장한 아이디어)
const initialSavedMoodboards = [
    {
        id: 1001,
        title: "하투하",
        pins: [
            "https://i.postimg.cc/NFJPLpVq/Group-327.png",
            "https://i.postimg.cc/D08PpFjk/1761627382762-1.png",
            "https://i.postimg.cc/ZKvLrbvs/1761627382661-1.png"
        ],
        count: 2,
        date: "6개월"
    },
    {
        id: 1002,
        title: "블루밍",
        pins: [
            "https://i.postimg.cc/X7rsQKmz/c515cb3a81fbc99cc128967e1f17012f-2.png",
            "https://i.postimg.cc/Y0RhJy9V/Kakao-Talk-20251119-010108271-05.jpg",
            "https://i.postimg.cc/13jNmTHx/Kakao-Talk-20251119-010108271-04.jpg"
        ],
        count: 5,
        date: "1주일"
    }
];

const moodboardItems = [
  { id: 1, src: 'https://i.postimg.cc/MpN29K9y/1761627382319-1.png' },
  { id: 2, src: 'https://i.postimg.cc/hPY5BZTN/1761626699038-1.png' },
  { id: 3, src: 'https://i.postimg.cc/HLrXbHxn/Kakao-Talk-20251119-010108271-10.jpg' },
  { id: 4, src: 'https://i.postimg.cc/263WrG4J/K-pop-LIGHTSTICK-for-dr-(AI)-1.png' },
  { id: 5, src: 'https://i.postimg.cc/QM8nDF0n/Lightstik-officiel-de-Lunea.png' },
  { id: 6, src: 'https://i.postimg.cc/Dy7GB103/Kakao-Talk-20251119-010108271-01.jpg' },
  { id: 7, src: 'https://i.postimg.cc/v8hT8kY7/Lightstick-kpop-dr.png' },
  { id: 8, src: 'https://i.postimg.cc/BnrQwGgr/K-pop-LIGHTSTICK-for-dr-(AI)-(1).png' },
  { id: 9, src: 'https://i.postimg.cc/k4cJ4Rmr/GWSN-design-Lightstick-1.png' },
  { id: 10, src: 'https://i.postimg.cc/Dymvvzp9/Aespa-lightstick-1.png' },
];

const suggestionItems = [
    { id: 101, src: 'https://i.postimg.cc/dV8zwPFg/Kakao-Talk-20251119-010108271-09.jpg' },
    { id: 102, src: 'https://i.postimg.cc/k5szRQBf/Rectangle-173.png' },
    { id: 103, src: 'https://i.postimg.cc/ZRDQVJPP/image-147.png' },
    { id: 104, src: 'https://i.postimg.cc/cCpbGTbL/Chat-GPT-Image-2025nyeon-10wol-11il-ohu-09-12-16-2.png' },
    { id: 105, src: 'https://i.postimg.cc/BZRSv3Wg/Chat-GPT-Image-2025nyeon-10wol-11il-ohu-10-16-20-2.png' },
    { id: 106, src: 'https://i.postimg.cc/SxhmWGx8/daunlodeu-(1)-1.png' },
];

const MoodboardCard: React.FC<{ src: string }> = ({ src }) => (
    <div className="break-inside-avoid mb-4">
        <img src={src} alt="Moodboard item" className="w-full h-auto object-cover rounded-2xl" />
    </div>
);

const FeedPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'home'>('home');
  const [view, setView] = useState<'list' | 'detail'>('list');
  
  // 저장된 무드보드 목록 상태
  const [savedMoodboards, setSavedMoodboards] = useState(initialSavedMoodboards);

  // 상세 페이지(무드보드 만들기) 상태
  const [boardTitle, setBoardTitle] = useState('');
  const [myPins, setMyPins] = useState<string[]>([]);

  // 탭을 변경하면 목록 뷰로 초기화
  const handleTabChange = (tab: 'all' | 'home') => {
      setActiveTab(tab);
      setView('list');
  };

  // 만들기 버튼 클릭 핸들러
  const handleCreateClick = () => {
      setBoardTitle(''); // 제목 초기화
      setMyPins([]);     // 핀 초기화
      setView('detail');
  };

  const handleAddToBoard = (src: string) => {
      setMyPins(prev => [src, ...prev]);
  };

  // 완료 버튼 클릭 핸들러 (저장 로직)
  const handleComplete = () => {
      if (myPins.length === 0 && !boardTitle) {
          setView('list'); // 내용이 없으면 그냥 나감
          return;
      }

      const newBoard = {
          id: Date.now(),
          title: boardTitle || "무제",
          pins: [...myPins], // 현재 핀 복사
          count: myPins.length,
          date: "방금 전"
      };

      // 새 보드를 목록 맨 앞에 추가
      setSavedMoodboards(prev => [newBoard, ...prev]);
      setView('list');
  };

  const renderDetailView = () => (
      <div className="animate-fadeIn pb-20">
           {/* 상세 페이지 헤더 */}
           <div className="flex justify-between items-center mb-4 mt-2 px-2">
                <button onClick={() => setView('list')} className="p-2">
                    <ChevronLeftIcon className="w-6 h-6 text-white" />
                </button>
                <div className="flex space-x-4">
                    <button onClick={handleComplete} className="text-pink-500 font-semibold text-sm">완료</button>
                </div>
           </div>

           <div className="px-2 mb-6">
               <input 
                  type="text" 
                  value={boardTitle}
                  onChange={(e) => setBoardTitle(e.target.value)}
                  placeholder="보드 이름 입력"
                  className="text-2xl font-bold text-white bg-transparent border-b border-gray-700 w-full focus:outline-none focus:border-pink-500 pb-2 placeholder-gray-600"
               />
               <p className="text-sm text-gray-400 mt-2">핀 {myPins.length}개</p>
           </div>

           {/* 내 무드보드 영역 (상단 콜라주) */}
           <div className="min-h-[16rem] bg-gray-800/50 rounded-2xl p-4 mb-8 border border-gray-700 border-dashed">
                {myPins.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-gray-500 py-12">
                        <PlusIcon className="w-10 h-10 mb-2 opacity-50" />
                        <p className="text-sm">아래에서 마음에 드는 아이디어를<br/>담아보세요</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-3 gap-2">
                        {myPins.map((src, index) => (
                            <div key={index} className={`rounded-xl overflow-hidden bg-gray-700 relative group ${index === 0 ? 'col-span-2 row-span-2 h-64' : 'col-span-1 h-32'}`}>
                                <img src={src} className="w-full h-full object-cover" alt={`My pin ${index}`} />
                            </div>
                        ))}
                    </div>
                )}
           </div>

           {/* 아이디어 더 보기 섹션 */}
           <div className="mb-4 px-2">
               <h3 className="text-lg font-bold text-white">아이디어 더 보기</h3>
               <p className="text-xs text-gray-400 mt-1">회원님이 좋아할 만한 몇 가지 아이디어입니다.</p>
           </div>

           <div className="grid grid-cols-2 gap-4 px-2">
               {suggestionItems.map((item) => (
                   <div key={item.id} className="rounded-xl overflow-hidden h-40 relative group">
                       <img src={item.src} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Suggestion" />
                       {/* 담기 버튼 오버레이 (하나만 유지) */}
                       <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <button 
                                onClick={() => handleAddToBoard(item.src)}
                                className="bg-pink-500 text-white text-xs font-bold py-1.5 px-4 rounded-full shadow-lg hover:bg-pink-600 transform active:scale-95 transition-all"
                           >
                               담기
                           </button>
                       </div>
                   </div>
               ))}
           </div>
      </div>
  );

  return (
    <div className="bg-[#121212] min-h-full flex flex-col">
        <header className="sticky top-0 bg-[#121212]/90 backdrop-blur-sm z-10 p-4 space-y-4 border-b border-gray-800/50">
            {/* 상단 탭 */}
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
                <div className="columns-2 gap-4 space-y-4">
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
                                {savedMoodboards.map((board) => (
                                    <div key={board.id} className="flex-shrink-0 w-64 group cursor-pointer">
                                        <div className="h-40 rounded-2xl overflow-hidden bg-gray-800 grid grid-cols-3 gap-0.5 mb-3">
                                            {/* 핀 개수에 따른 동적 레이아웃 */}
                                            {board.pins.length > 0 && (
                                                <div className={`h-full bg-gray-700 ${board.pins.length === 1 ? 'col-span-3' : 'col-span-2'}`}>
                                                    <img src={board.pins[0]} className="w-full h-full object-cover" alt="Main" />
                                                </div>
                                            )}
                                            
                                            {board.pins.length > 1 && (
                                                <div className="col-span-1 h-full grid grid-rows-2 gap-0.5">
                                                    <div className="bg-gray-600 h-full">
                                                        <img src={board.pins[1]} className="w-full h-full object-cover" alt="Sub 1" />
                                                    </div>
                                                    <div className="bg-gray-600 h-full">
                                                        {board.pins.length > 2 ? (
                                                            <img src={board.pins[2]} className="w-full h-full object-cover" alt="Sub 2" />
                                                        ) : (
                                                            <div className="w-full h-full bg-gray-800" />
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {/* 핀이 없을 때 빈 상태 처리 (혹시 모를 에러 방지) */}
                                            {board.pins.length === 0 && (
                                                <div className="col-span-3 h-full bg-gray-800 flex items-center justify-center text-gray-600">
                                                    No Image
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-lg leading-tight">{board.title}</h3>
                                            <p className="text-xs text-gray-400 mt-1">핀 {board.pins.length}개 · {board.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 보드 제안 섹션 */}
                        <section>
                            <h2 className="text-lg font-bold text-white mb-4">보드 제안</h2>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { id: 1, img1: 'https://i.postimg.cc/MpN29K9y/1761627382319-1.png', img2: 'https://i.postimg.cc/NFJPLpVq/Group-327.png' },
                                    { id: 2, img1: 'https://i.postimg.cc/2S629s64/1761626699171-1.png', img2: 'https://i.postimg.cc/D08PpFjk/1761627382762-1.png' },
                                    { id: 3, img1: 'https://i.postimg.cc/PxzW5yJw/Kakao-Talk-20251119-010108271-08.jpg', img2: 'https://i.postimg.cc/Wz50M4Mg/Kakao-Talk-20251119-010108271-07.jpg' },
                                    { id: 4, img1: 'https://i.postimg.cc/9QRy7C0s/Kakao-Talk-20251119-010108271-06.jpg', img2: 'https://i.postimg.cc/Kjpg1H2K/Kakao-Talk-20251119-010108271-03.jpg' },
                                ].map((item) => (
                                    <div key={item.id} className="relative h-32 rounded-xl overflow-hidden group cursor-pointer">
                                        <div className="absolute inset-0 grid grid-cols-2">
                                            <img src={item.img1} className="w-full h-full object-cover" alt="Suggestion left" />
                                            <img src={item.img2} className="w-full h-full object-cover" alt="Suggestion right" />
                                        </div>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {/* 만들기 버튼 클릭 시 상세(제작) 뷰로 전환 */}
                                            <button 
                                                onClick={handleCreateClick}
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
