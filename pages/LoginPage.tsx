import React from 'react';
import { LightbulbIcon } from '../components/Icons';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <div className="flex flex-col h-full px-8 bg-black pt-24">
      <div className="w-full text-left mb-12">
        <h1 className="text-3xl font-bold text-white mb-2">안녕하세요:)</h1>
        <div className="flex items-center text-3xl font-bold text-white mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-400">Ailight</span>
            <LightbulbIcon className="w-7 h-7 ml-1 text-pink-300" />
            <span> 입니다.</span>
        </div>
        <p className="text-gray-400 text-sm">간편 로그인으로 더 다양한 서비스를 이용하세요.</p>
      </div>
      <form className="w-full max-w-sm" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="아이디 입력"
            className="w-full px-4 py-3 bg-white text-black rounded-lg focus:outline-none placeholder-gray-500 border-none"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="비밀번호 입력"
            className="w-full px-4 py-3 bg-white text-black rounded-lg focus:outline-none placeholder-gray-500 border-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[#F9E9FF] text-black rounded-lg font-semibold"
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
