import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="fixed top-0 w-full h-20 backdrop-blur bg-white/80 dark:bg-gray-900/80 shadow-md border-b border-gray-200 dark:border-gray-700 z-50 flex items-center px-4 sm:px-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white truncate">{title}</h1>
    </header>
  );
};

export default Header;