import React, { useState, useCallback } from 'react';
import { generateLightstickDesigns } from '../services/geminiService';
import { ChevronLeftIcon, PaperAirplaneIcon, StarIcon, Bars3Icon } from '../components/Icons';
import LoadingSpinner from '../components/LoadingSpinner';

type CreateState = 'prompting' | 'loading' | 'results' | 'saved';

interface CreatePageProps {
  onBack: () => void;
}

const CreatePage: React.FC<CreatePageProps> = ({ onBack }) => {
  const [state, setState] = useState<CreateState>('prompting');
  const [prompt, setPrompt] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) return;

    setState('loading');
    setError(null);
    try {
      const images = await generateLightstickDesigns(prompt);
      if (images && images.length > 0) {
        setResults(images);
        setState('results');
      } else {
        setError('생성에 실패했어요. 다시 시도해주세요.');
        setState('prompting');
      }
    } catch (err) {
      setError('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      setState('prompting');
    }
  }, [prompt]);
  
  const handleSave = () => {
      setState('saved');
      setTimeout(() => {
          handleReset();
      }, 2000);
  }

  const handleReset = () => {
    setPrompt('');
    setResults([]);
    setError(null);
    setState('prompting');
  };
  
  const renderHeader = () => (
      <header className="flex justify-between items-center p-4 bg-[#121212] border-b border-gray-800">
        <button onClick={onBack}>
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="font-semibold">AI 제작</h1>
        <button>
          <Bars3Icon className="w-6 h-6" />
        </button>
      </header>
  )

  if (state === 'loading') {
    return (
      <div className="flex flex-col h-full">
        {renderHeader()}
        <div className="flex flex-col flex-grow justify-center items-center p-8 text-center">
            <LoadingSpinner />
            <p className="mt-6 text-gray-400">AI가 Cherry님의 응원봉을 제작중이에요...</p>
        </div>
      </div>
    );
  }

  // FIX: Render the results view for both 'results' and 'saved' states to show the confirmation modal. This also resolves the TypeScript error.
  if (state === 'results' || state === 'saved') {
    return (
        <div className="flex flex-col h-full bg-[#121212]">
            {renderHeader()}
            <main className="flex-grow p-4 overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">AI 생성 결과</h2>
                <div className="grid grid-cols-2 gap-4">
                    {results.map((src, index) => (
                        <div key={index} className="relative aspect-[9/16] rounded-lg overflow-hidden group">
                            <img src={src} alt={`Generated lightstick ${index + 1}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                                    <StarIcon className="w-6 h-6 text-white"/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <footer className="p-4 border-t border-gray-800">
                <button 
                    onClick={handleSave}
                    className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transform transition-transform duration-200 shadow-lg shadow-pink-500/20">
                    저장하기
                </button>
            </footer>
            {state === 'saved' && (
                <div className="absolute inset-0 bg-black/60 flex justify-center items-center z-50">
                    <div className="bg-gray-800 p-8 rounded-xl text-center shadow-2xl shadow-purple-500/20">
                        <h3 className="text-xl font-bold mb-2">저장 완료!</h3>
                        <p className="text-gray-400">생성된 응원봉이 저장되었습니다.</p>
                    </div>
                </div>
            )}
        </div>
    );
  }


  return (
    <div className="flex flex-col h-full">
      {renderHeader()}
      <div className="flex flex-col flex-grow justify-center p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">어떤 응원봉을 만들어드릴까요?</h2>
        <p className="text-gray-400 mb-8">원하는 컨셉을 자유롭게 입력해주세요.</p>
        {error && <p className="text-red-400 mb-4">{error}</p>}
      </div>
      <div className="p-4 mt-auto border-t border-gray-800">
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="예) 우주를 여행하는 고양이 컨셉"
            rows={2}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 pl-4 pr-14 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim()}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-pink-600 rounded-full disabled:bg-gray-600 transition-colors"
          >
            <PaperAirplaneIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
