import React from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'opportunities', label: 'Opportunities' },
    { id: 'events', label: 'Events' },
    { id: 'join', label: 'Join' }
  ];

  return (
    <header className="fixed top-0 w-full bg-red-900/20 backdrop-blur-md z-40 border-b border-red-800/20">
      <nav className="flex gap-6 p-4 text-white justify-center">
        {navItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`hover:text-red-400 transition-colors px-4 py-2 rounded ${
              currentPage === item.id ? 'text-red-400 bg-red-900/30' : ''
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;