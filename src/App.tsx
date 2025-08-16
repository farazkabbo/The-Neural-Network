import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NeuralNetworkCanvas from './components/NeuralNetworkCanvas';
import Home from './pages/Home';


import About from './pages/About';
import Opportunities from './pages/Opportunities';
import Events from './pages/Events';
import Join from './pages/Join';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPageContent = () => {
    switch(currentPage) {
      case 'about':
        return <About />;
      case 'opportunities':
        return <Opportunities />;
      case 'events':
        return <Events />;
      case 'join':
        return <Join />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-600 to-red-400 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Neural Network Canvas */}
      <NeuralNetworkCanvas 
        currentPage={currentPage} 
        onScrollProgress={setScrollProgress}
      />

      {/* Header */}
      <Header 
        currentPage={currentPage}
        onNavigate={handleNavigation}
      />

      {/* Page Content */}
      <main className="relative z-10">
        {renderPageContent()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;