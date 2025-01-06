import React from 'react';
import { Flame, ShoppingCart, Sun, List, User } from 'lucide-react';

export const GameBoard = () => {
  return (
    <div className="relative w-full h-screen max-w-md mx-auto flex flex-col">
      <div className="flex-1 relative">
        {/* Верхняя группа */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1">
          <Cell type="city" variant="vertical" />
          <Cell type="city" variant="vertical" />
          <Cell type="city" variant="vertical" />
        </div>

        {/* Левая группа */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
          <Cell type="city" variant="horizontal" status="green" />
          <Cell type="city" variant="horizontal" status="green" />
          <Cell type="city" variant="horizontal" status="green" />
          <Cell type="city" variant="horizontal" status="yellow" />
          <Cell type="city" variant="horizontal" status="red" />
          <Cell type="city" variant="horizontal" status="red" />
          <Cell type="city" variant="horizontal" status="red" />
        </div>

        {/* Правая группа */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
          <Cell type="city" variant="horizontal" status="green" />
          <Cell type="city" variant="horizontal" status="green" />
          <Cell type="city" variant="horizontal" status="green" />
          <Cell type="city" variant="horizontal" status="yellow" />
          <Cell type="city" variant="horizontal" status="blue" />
          <Cell type="city" variant="horizontal" status="blue" />
          <Cell type="city" variant="horizontal" status="blue" />
        </div>

        {/* Нижняя группа */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          <Cell type="city" variant="vertical" />
          <Cell type="city" variant="vertical" />
          <Cell type="city" variant="vertical" />
        </div>

        {/*/!* Центральный счетчик *!/*/}
        {/*<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">*/}
        {/*  <div className="bg-green-200 rounded-full p-4 flex items-center gap-2">*/}
        {/*    <Flame className="text-orange-500" />*/}
        {/*    <span className="text-lg font-bold">1448.78</span>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

const Cell = ({ type, status, variant }) => {
  const getBackgroundColor = () => {
    if (status === 'green') return 'bg-green-200';
    if (status === 'yellow') return 'bg-yellow-200';
    if (status === 'red') return 'bg-red-200';
    if (status === 'blue') return 'bg-blue-600';
    return 'bg-white';
  };

  // Размеры для вертикальных карточек (3:5)
  const verticalStyles = {
    width: '60px',
    height: '100px'
  };

  // Размеры для горизонтальных карточек (5:3)
  const horizontalStyles = {
    width: '100px',
    height: '60px'
  };

  const cardStyle = variant === 'vertical' ? verticalStyles : horizontalStyles;

  return (
    <div
      className={`border rounded flex flex-col items-center justify-center ${getBackgroundColor()}`}
      style={cardStyle}
    >
      <span className="text-xs">SITY</span>
      <span className="text-sm">13.90</span>
    </div>
  );
};

const NavButton = ({ icon }) => {
  return (
    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
      {icon}
    </button>
  );
};