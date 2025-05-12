import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-[8rem] bg-white shadow-sm px-6 border-b border-gray-200 flex items-center">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
    </header>
  );
};

export default Header;