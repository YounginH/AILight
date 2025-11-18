
import React, { useState, useRef, useEffect } from 'react';
// 아이콘 및 타입 경로는 기존 프로젝트 구조에 맞춰주세요
import { ChevronLeftIcon, Bars3Icon, HeartIcon, RabbitIcon, BowIcon, LockIcon, GearIcon, StarIcon } from '../components/Icons';
import { Sticker, SavedDesign } from '../types';

interface PartSelectionPageProps {
  onBack: () => void;
  onNavigateToCreate: () => void;
  onSave: (design: SavedDesign) => void;
  activeDesignBase: string;
  editingDesign: SavedDesign | null;
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
    { id: 'h1', src: 'https://i.postimg.cc/3WMVnMbY/image-122.png' }, 
    { id: 'h2', src: 'https://i.postimg.cc/FRB2kkyx/image-99.png' }, 
    { id: 'h3', src: 'https://i.postimg.cc/C113Ksqx/image-121.png' }, 
  ],
};

const PartSelectionPage: React.FC<PartSelectionPageProps> = ({ onBack, onNavigateToCreate, onSave, activeDesignBase, editingDesign }) => {
  const [selectedCategory, setSelectedCategory] = useState(partCategories[0].id);
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  
  // dropAreaRef는 이제 화면 전체가 아니라 '이미지를 감싸는 div'를 가리킵니다.
  const dropAreaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (editingDesign) {
      setStickers(editingDesign.stickers);
    } else {
      setStickers([]);
    }
  }, [editingDesign, activeDesignBase]);

  // 1. 파츠 목록에서 드래그 시작
  const handleDragPartStart = (e: React.DragEvent<HTMLButtonElement>, src: string) => {
    e.dataTransfer.setData('stickerSrc', src);
    e.dataTransfer.setData('type', 'new');
    e.dataTransfer.effectAllowed = 'copy';
  };
  
  // 2. 이미 배치된 스티커 드래그 시작 (이동)
  const handleDragStickerStart = (e: React.DragEvent<HTMLImageElement>, stickerId: string) => {
      e.dataTransfer.setData('stickerId', stickerId);
      e.dataTransfer.setData('type', 'move');
      e.dataTransfer.effectAllowed = 'move';

      // 드래그 시 잔상 제거 (투명 이미지 사용)
      const img = new Image();
      img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      e.dataTransfer.setDragImage(img, 0, 0);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // 필수: 드롭 허용을 위해
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const dropArea = dropAreaRef.current;
    if (!dropArea) return;

    const type = e.dataTransfer.getData('type');
    
    // [핵심 수정] dropArea(이미지 래퍼) 기준으로 좌표 계산
    const rect = dropArea.getBoundingClientRect();
    
    // 마우스 좌표에서 영역의 시작점(left, top)을 뺌 = 영역 내부 좌표
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;

    // 백분율(%)로 변환하여 화면 크기가 바뀌어도 위치 유지
    const x = (relativeX / rect.width) * 100;
    const y = (relativeY / rect.height) * 100;

    if (type === 'new') {
      const src = e.dataTransfer.getData('stickerSrc');
      if (src) {
        const newSticker: Sticker = {
          id: `sticker-${Date.now()}`,
          src,
          x, // 0~100%
          y, // 0~100%
        };
        setStickers(prev => [...prev, newSticker]);
      }
    } else if (type === 'move') {
      const stickerId = e.dataTransfer.getData('stickerId');
      setStickers(prev => prev.map(sticker => 
        sticker.id === stickerId ? { ...sticker, x, y } : sticker
      ));
    }
  };

  const handleSave = () => {
    const designToSave: SavedDesign = {
      id: editingDesign ? editingDesign.id : `design-${Date.now()}`,
      baseImage: activeDesignBase,
      stickers: stickers,
    };
    onSave(designToSave);
    setShowSaveModal(true);
    setTimeout(() => {
      setShowSaveModal(false);
    }, 2000);
  };
  
  return (
    <div className="flex flex-col h-full bg-[#121212] overflow-hidden">
      {/* Header */}
      <header className="flex-shrink-0 sticky top-0 bg-[#121212]/90 backdrop-blur-sm z-30 flex justify-between items-center p-4 border-b border-gray-800">
        <button onClick={onBack}>
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="font-semibold text-lg">파츠 선택</h1>
        <button>
          <Bars3Icon className="w-6 h-6" />
        </button>
      </header>

      <main className="flex-grow flex flex-col px-4 pt-4 pb-1 overflow-hidden gap-4">
        {/* 상단 버튼 영역 */}
        <div className="flex-shrink-0 flex justify-end items-center gap-2">
          <button 
            onClick={onNavigateToCreate}
            className="px-4 py-1.5 bg-gray-700 text-white rounded-full text-sm font-semibold hover:bg-gray-600 transition-colors">
            AI 제작
          </button>
          <button 
            onClick={handleSave}
            className="px-4 py-1.5 bg-pink-500 text-white rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors">
            저장
          </button>
        </div>

        {/* [수정됨] 캔버스 영역 - 상단 패딩 조절 (pt-4) */}
        <div className="flex-grow flex items-center justify-center min-h-0 overflow-hidden relative pt-4">
            {/* dropAreaRef는 이제 내부 div에 붙습니다. 
               relative와 inline-block을 사용하여 이미지 크기에 딱 맞게 영역이 잡히도록 합니다.
            */}
            <div 
                ref={dropAreaRef}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="relative inline-block max-w-full max-h-full"
            >
                {/* 베이스 이미지: 드래그 방지(pointer-events-none) - 높이 조절로 잘림 방지 */}
                <img 
                    src={activeDesignBase} 
                    alt="Lightstick Preview" 
                    className="block max-w-full max-h-[45vh] object-contain drop-shadow-[0_10px_20px_rgba(238,130,238,0.25)] pointer-events-none select-none" 
                />
                
                {/* 스티커들 */}
                {stickers.map((sticker) => (
                    <img
                        key={sticker.id}
                        src={sticker.src}
                        draggable="true"
                        onDragStart={(e) => handleDragStickerStart(e, sticker.id)}
                        style={{ 
                            position: 'absolute', 
                            left: `${sticker.x}%`, 
                            top: `${sticker.y}%`,
                            transform: 'translate(-50%, -50%)', // 중심점을 마우스 커서 위치로
                            width: '15%', 
                            cursor: 'grab',
                            touchAction: 'none'
                        }}
                        className="object-contain hover:brightness-110 active:scale-95 transition-transform z-10"
                    />
                ))}
            </div>
        </div>
        
        {/* 하단 컨트롤 영역 */}
        <div className="flex-shrink-0 flex flex-col gap-2 mt-2">
            {/* 카테고리 탭 */}
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
                          <div className={`w-full h-14 rounded-lg flex justify-center items-center transition-colors ${
                              isSelected ? 'bg-white' : 'bg-gray-800'
                          } ${!isLocked ? 'group-hover:bg-gray-700' : ''}`}>
                              <cat.icon className={`w-7 h-7 transition-colors ${iconColor}`} />
                          </div>
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
            
            {/* 파츠 선택 리스트 */}
            <div className="py-2 flex items-center justify-center h-24">
                <div className="flex gap-6 justify-center px-4">
                    {/* 안전장치: 해당 카테고리에 아이템이 없어도 에러나지 않도록 || [] 처리 */}
                    {(partOptions[selectedCategory] || []).map(option => (
                        <button 
                            key={option.id}
                            draggable="true"
                            onDragStart={(e) => handleDragPartStart(e, option.src)}
                            className="flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-lg transition-transform transform hover:scale-110 focus:outline-none cursor-grab active:cursor-grabbing"
                        >
                            <img src={option.src} alt={`Part option ${option.id}`} className="w-16 h-16 object-contain pointer-events-none" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
      </main>

      {/* 저장 모달 */}
      {showSaveModal && (
        <div className="absolute inset-0 bg-black/60 flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-gray-800 p-6 rounded-xl text-center shadow-2xl shadow-purple-500/20">
            <h3 className="text-lg font-bold text-white">저장되었습니다!</h3>
          </div>
        </div>
      )}

    </div>
  );
};

export default PartSelectionPage;
