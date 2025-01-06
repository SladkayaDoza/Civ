import React from 'react';
import { ShoppingCart, User, Flame, Sun, List } from 'lucide-react';

export const Footer = () => {
  return (
    <div className="relative w-full h-screen max-w-md mx-auto bg-green-50 flex flex-col">
      {/* Контент игры */}
      <div className="flex-1 relative">
        {/* ... остальной код игрового поля ... */}
      </div>

      {/* Нижнее меню */}
      <div className="relative bg-[#4B5F44] h-20">
        {/* Фоновая "волна" для центральной кнопки */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-28 h-16 overflow-hidden">
          <div className="w-full h-full bg-[#4B5F44] rounded-t-full" />
        </div>

        {/* Центральная кнопка с двумя квадратами */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <div className="relative">
            {/* Задний квадрат */}
            <div className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 bg-[#85987D] rounded-2xl rotate-45" />
            {/* Передний квадрат с иконкой */}
            <button className="relative w-20 h-20 bg-[#95A88D] rounded-2xl rotate-45 flex items-center justify-center group transition-transform hover:scale-105">
              <div className="-rotate-45">
                <Flame size={36} className="text-white" />
              </div>
            </button>
          </div>
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
    </div>
  );
};
