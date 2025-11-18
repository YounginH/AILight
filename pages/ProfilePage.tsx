
import React from 'react';
import { StarIcon } from '../components/Icons';

const orders = [
  { name: 'Cherry Blossom Stick', date: '2023.10.05', status: '배송 완료' },
];

const ProfilePage: React.FC = () => {
  return (
    <div className="p-6 bg-[#121212] min-h-full">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">마이페이지</h1>
      </header>

      <section className="flex items-center mb-10">
        <img
          src="https://picsum.photos/seed/cherry/200"
          alt="User profile"
          className="w-20 h-20 rounded-full border-2 border-pink-500 object-cover"
        />
        <div className="ml-5">
          <h2 className="text-xl font-bold">Cherry님</h2>
          <p className="text-gray-400">cherry@ailight.com</p>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-semibold mb-4">MY</h3>
        <div className="bg-gray-800 rounded-lg p-4 flex justify-around">
          <div className="text-center">
            <p className="text-gray-400 text-sm">내 코드</p>
            <p className="font-bold text-lg">AILIGHT-C</p>
          </div>
          <div className="border-l border-gray-700"></div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">보유 응원봉</p>
            <div className="flex items-center justify-center">
                 <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                 <p className="font-bold text-lg">1</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
          <button className="w-full py-3 bg-gray-700 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
            수정하기
          </button>
      </section>


      <section>
        <h3 className="text-lg font-semibold mb-4">주문 내역 (최근 1건)</h3>
        <div className="bg-gray-800 rounded-lg p-4">
            {orders.map((order) => (
              <div key={order.name} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{order.name}</p>
                  <p className="text-gray-400 text-sm">{order.date}</p>
                </div>
                <span className="text-sm bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">{order.status}</span>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
