import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/043ff5c08d91c2ccbf4e7d21fa3ec2c9d34d639f.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', key: 'home' },
    { name: 'About Us', key: 'about' },
    { name: 'Our Team', key: 'team' },
    { name: 'Contact Us', key: 'contact' },
  ];

  // All pages start transparent and become navy blue on scroll
  const headerBg = isScrolled 
    ? 'bg-primary/98 backdrop-blur-sm border-b border-primary/20 shadow-sm' 
    : 'bg-transparent';
  
  const navTextColor = 'text-white';
  const navActiveColor = !isScrolled ? 'bg-white/20 text-white' : 'bg-white/20 text-white';
  const navHoverColor = 'hover:bg-white/10 hover:text-white';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <img 
              src={logoImage} 
              alt="SCL Energy Alliance" 
              className="h-16 w-auto group-hover:opacity-90 transition-opacity duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  currentPage === item.key
                    ? navActiveColor
                    : `${navTextColor} ${navHoverColor}`
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden transition-colors duration-300 text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-primary">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.key
                      ? 'bg-white/20 text-white'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}