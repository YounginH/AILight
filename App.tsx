import React, { useState, useEffect } from 'react';
import { Page, SavedDesign } from './types';
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
  const [userName] = useState('Cherry');
  const [savedDesigns, setSavedDesigns] = useState<SavedDesign[]>([]);
  const [activeDesignBase, setActiveDesignBase] = useState('https://i.postimg.cc/d0ZpCV0X/image-105.png');
  const [editingDesign, setEditingDesign] = useState<SavedDesign | null>(null);

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
  
  const handleSaveDesign = (design: SavedDesign) => {
    if (editingDesign) {
      // Update existing design
      setSavedDesigns(prev => prev.map(d => d.id === editingDesign.id ? design : d));
      setEditingDesign(null);
    } else {
      // Add new design
      setSavedDesigns(prevDesigns => [...prevDesigns, design]);
    }
  };
  
  const handleEditDesign = (designId: string) => {
    const designToEdit = savedDesigns.find(d => d.id === designId);
    if (designToEdit) {
      setEditingDesign(designToEdit);
      setActiveDesignBase(designToEdit.baseImage);
      setCurrentPage(Page.PartSelection);
    }
  };

  const handleSelectAIDesign = (imageUrl: string) => {
    setActiveDesignBase(imageUrl);
    setEditingDesign(null); // Clear editing state when creating from AI
    setCurrentPage(Page.PartSelection);
  };

  const handleNavigateToPartSelection = () => {
    // Reset to default base when starting fresh
    setActiveDesignBase('https://i.postimg.cc/d0ZpCV0X/image-105.png'); 
    setEditingDesign(null);
    setCurrentPage(Page.PartSelection);
  };

  const handleNavigation = (page: Page) => {
    setEditingDesign(null); // Always reset editing state on main navigation
    if (page === Page.Create) {
      setCurrentPage(Page.GoodsSelection);
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
                  onNavigateToCreate={handleNavigateToPartSelection}
                />;
      case Page.PartSelection:
        return <PartSelectionPage 
                  activeDesignBase={activeDesignBase}
                  editingDesign={editingDesign}
                  onBack={() => {
                    setEditingDesign(null);
                    setCurrentPage(Page.GoodsSelection);
                  }} 
                  onNavigateToCreate={() => {
                    setEditingDesign(null);
                    setCurrentPage(Page.Create);
                  }}
                  onSave={handleSaveDesign}
                />
      case Page.Create:
        return <CreatePage 
                  userName={userName} 
                  onBack={() => setCurrentPage(Page.PartSelection)} 
                  onSelectDesign={handleSelectAIDesign}
                />;
      case Page.Feed:
        return <FeedPage />;
      case Page.Profile:
        return <ProfilePage savedDesigns={savedDesigns} onEditDesign={handleEditDesign} />;
      default:
        return <HomePage onSelectIdol={handleSelectIdol} />;
    }
  };

  const showNav = currentPage !== Page.Splash && currentPage !== Page.Login;

  const getActiveNavPage = (): Page => {
    if ([Page.GoodsSelection, Page.PartSelection, Page.Create].includes(currentPage)) {
      return Page.Create;
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