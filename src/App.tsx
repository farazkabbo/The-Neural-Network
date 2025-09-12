
import  { useState } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (page: SetStateAction<string>) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    window.scrollTo(0, 0);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
      />

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            <button
              onClick={() => handleNavigation('home')}
              className={`hover:text-red-400 transition-colors ${
                currentPage === 'home' ? 'text-red-400' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className={`hover:text-red-400 transition-colors ${
                currentPage === 'about' ? 'text-red-400' : ''
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('opportunities')}
              className={`hover:text-red-400 transition-colors ${
                currentPage === 'opportunities' ? 'text-red-400' : ''
              }`}
            >
              Opportunities
            </button>
            <button
              onClick={() => handleNavigation('events')}
              className={`hover:text-red-400 transition-colors ${
                currentPage === 'events' ? 'text-red-400' : ''
              }`}
            >
              Events
            </button>
            <button
              onClick={() => handleNavigation('join')}
              className={`hover:text-red-400 transition-colors ${
                currentPage === 'join' ? 'text-red-400' : ''
              }`}
            >
              Join
            </button>
          </div>
        </div>
      )}

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