import React from 'react';
import { ShoppingCart, User, Flame, Sun, List } from 'lucide-react';

export const Footer = () => {
  return (
    <>
      {/* Нижнее меню */}
      <div className="relative bg-[#7A8C65] h-20">
        {/* Фоновая "волна" для центральной кнопки */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-28 h-16 overflow-hidden">
          <div className="w-full h-full bg-[#EDF1D6] rounded-b-full" />
        </div>

        {/* Центральная кнопка */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <button className="w-20 h-20 bg-[#6B9960] rounded-2xl rotate-45 flex items-center justify-center group transition-transform hover:scale-105">
            <div className="-rotate-45">
              <Flame size={36} className="text-white" />
            </div>
          </button>
        </div>

        {/* Остальные кнопки меню */}
        <div className="h-full px-8 flex justify-between items-center">
          <div className="flex gap-16">
            <button className="text-white opacity-80 hover:opacity-100 transition-opacity">
              <ShoppingCart size={28} />
            </button>
            <button className="text-white opacity-80 hover:opacity-100 transition-opacity">
              <Sun size={28} />
            </button>
          </div>

          {/* Пустое место для центральной кнопки */}
          <div className="w-20" />

          <div className="flex gap-16">
            <button className="text-white opacity-80 hover:opacity-100 transition-opacity">
              <List size={28} />
            </button>
            <button className="text-white opacity-80 hover:opacity-100 transition-opacity">
              <User size={28} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
