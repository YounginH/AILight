import React from 'react';
import { StarIcon } from '../components/Icons';
import { SavedDesign } from '../types';

interface ProfilePageProps {
  savedDesigns: SavedDesign[];
  onEditDesign: (designId: string) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ savedDesigns, onEditDesign }) => {
  return (
    <div className="p-4 bg-[#121212] min-h-full">
      <section className="flex items-center mb-6 pt-4">
        <img
          src="https://i.postimg.cc/KYWWZ96b/unnamed.jpg"
          alt="User profile"
          className="w-16 h-16 rounded-full border-2 border-gray-700 object-cover"
        />
        <div className="ml-4">
          <p className="text-sm text-gray-400">MY</p>
          <h2 className="text-xl font-bold">Cherry님</h2>
          <p className="text-xs text-gray-500">E-mail</p>
        </div>
      </section>

      <div className="bg-zinc-800 rounded-2xl p-4">
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">내 굿즈</h3>
            <div className="flex items-center text-sm text-gray-400">
              <StarIcon className="w-4 h-4 mr-1 text-yellow-400" />
              <span>Preset saved</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {savedDesigns.map(design => (
              <button 
                key={design.id} 
                onClick={() => onEditDesign(design.id)}
                className="aspect-square bg-gray-700 rounded-lg relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                 <img src={design.baseImage} alt="Saved Lightstick" className="w-full h-full object-contain scale-125" />
                 {design.stickers.map(sticker => (
                   <img 
                      key={sticker.id}
                      src={sticker.src}
                      style={{
                        position: 'absolute',
                        left: `${sticker.x}%`,
                        top: `${sticker.y}%`,
                        transform: 'translate(-50%, -50%)',
                        width: '25%', // smaller size for thumbnail
                      }}
                      alt="sticker"
                      className="object-contain"
                   />
                 ))}
              </button>
            ))}
             {Array.from({ length: Math.max(0, 4 - savedDesigns.length) }).map((_, index) => (
                <div key={`placeholder-${index}`} className="aspect-square bg-gray-700/50 rounded-lg"></div>
             ))}
          </div>
        </section>

        <section className="mb-6">
          <button className="w-full py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition-colors">
            주문하기
          </button>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">주문 이력 <span className="text-sm text-gray-400 font-normal">(굿즈 이름)</span></h3>
           <div className="flex justify-between items-center bg-gray-700/50 p-3 rounded-lg">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-600 rounded-md mr-3 flex items-center justify-center">
                         <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">2025.10.09</p>
                    </div>
                </div>
                <button className="text-xs bg-white/10 text-white px-3 py-1 rounded-full">
                    배송 현황
                </button>
           </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;