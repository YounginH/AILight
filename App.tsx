import React, { useState, useEffect } from 'react';
import { Page } from './types';
import BottomNav from './components/BottomNav';
import SplashScreen from './pages/SplashScreen';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import GoodsSelectionPage from './pages/GoodsSelectionPage';
import PartSelectionPage from './pages/PartSelectionPage';
import CreatePage from './pages/CreatePage';
import FeedPage from './pages/FeedPage';
import ProfilePage from './pages/ProfilePage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Splash);
  const [userName] = useState('Cherry'); // Hardcoded user name for now

  useEffect(() => {
    if (currentPage === Page.Splash) {
      const timer = setTimeout(() => {
        setCurrentPage(Page.Login);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const handleLogin = () => {
    setCurrentPage(Page.Home);
  };

  const handleSelectIdol = () => {
    setCurrentPage(Page.GoodsSelection);
  };
  
  const handleNavigation = (page: Page) => {
    // Intercept the 'My Design' tab click to show the new PartSelection page,
    // which is the new entry point for the creation flow.
    if (page === Page.Create) {
      setCurrentPage(Page.PartSelection);
    } else {
      setCurrentPage(page);
    }
  };


  const renderPage = () => {
    switch (currentPage) {
      case Page.Splash:
        return <SplashScreen />;
      case Page.Login:
        return <LoginPage onLogin={handleLogin} />;
      case Page.Home:
        return <HomePage onSelectIdol={handleSelectIdol} />;
      case Page.GoodsSelection:
        return <GoodsSelectionPage 
                  userName={userName}
                  onBack={() => setCurrentPage(Page.Home)}
                  onNavigateToCreate={() => setCurrentPage(Page.PartSelection)}
                />;
      case Page.PartSelection:
        return <PartSelectionPage 
                  onBack={() => setCurrentPage(Page.GoodsSelection)} 
                  onNavigateToCreate={() => setCurrentPage(Page.Create)}
                />
      case Page.Create:
        return <CreatePage onBack={() => setCurrentPage(Page.PartSelection)} />;
      case Page.Feed:
        return <FeedPage />;
      case Page.Profile:
        return <ProfilePage />;
      default:
        return <HomePage onSelectIdol={handleSelectIdol} />;
    }
  };

  const showNav = currentPage !== Page.Splash && currentPage !== Page.Login;

  const getActiveNavPage = (): Page => {
    // If we're in the creation flow (parts selection or AI prompt), highlight the 'My Design' tab.
    if (currentPage === Page.PartSelection || currentPage === Page.Create) {
      return Page.Create;
    }
     // Keep Home active for GoodsSelection as it's a continuation of browsing idols
    if (currentPage === Page.GoodsSelection) {
      return Page.Home;
    }
    return currentPage;
  };

  return (
    <div className="h-dvh w-full max-w-md mx-auto bg-[#121212] text-white font-sans flex flex-col shadow-2xl shadow-purple-500/10">
      <div className="flex-grow overflow-y-auto relative">
        {renderPage()}
      </div>
      {showNav && <BottomNav activePage={getActiveNavPage()} onNavigate={handleNavigation} />}
    </div>
  );
};

export default App;
