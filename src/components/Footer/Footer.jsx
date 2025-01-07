import React from 'react';
import futtter from "../../assets/futtter.svg"
import { ShoppingCart, User, Flame, Sun, List } from 'lucide-react';
import logo from "../../assets/logo.svg";

export const Footer = () => {
  return (
    <>
      {/* Нижнее меню */}
      <div className="relative bg-[#7A8C65] h-20 mt-[45px]">
        {/* Фоновая "волна" для центральной кнопки */}
        <img src={futtter} className="absolute left-1/2 h-full -translate-x-1/2  overflow-hidden">
          {/*<img src={futter} height="100%"/>*/}
          {/*<div className="w-full h-full bg-[#EDF1D6] rounded-b-full" />*/}
        </img>

        {/* Центральная кнопка */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <button style={{width: "70px", height: "70px", border: "solid 8px #fff"}} className="bg-[#6B9960] rounded-3xl transparent-img rotate-45 flex items-center justify-center group transition-transform hover:scale-105">
            <div className="-rotate-45">
              <img style={{marginRight: "2px", marginBottom: "1px"}} className="" src={logo} alt="" width="25"/>
              {/*<Flame size={36} className="text-white"/>*/}
            </div>
          </button>
        </div>

        {/* Остальные кнопки меню */}
        <div className="h-full px-8 flex justify-between items-center">
          <div className="flex gap-12">
            <button className="text-white opacity-80 hover:opacity-100 transition-opacity">
              <ShoppingCart size={28} />
            </button>
            <button className="text-white opacity-80 hover:opacity-100 transition-opacity">
              <Sun size={28} />
            </button>
          </div>

          {/* Пустое место для центральной кнопки */}
          <div className="w-20" />

          <div className="flex gap-12">
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
