import React from 'react';
import icon from '../assets/icon.jpg';

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
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={icon}
            alt="Logo"
            className="h-10 w-auto cursor-pointer rounded-full"
            onClick={() => onNavigate('/home')}
          />
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-white">
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
      </div>
    </header>
  );
};

export default Header;
