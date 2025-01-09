import arrow from "../../assets/arrow.svg";
import React from "react";

export const Cell = ({ type, color, cellNumber, positionClass, ssvg, text, nameCell }) => {
    if (type == "cornerCell") {
        const getClass = () => {
            if (cellNumber === 12) return 'station-top-left square-12';
            if (cellNumber === 16) return 'station-top-right square-16';
            if (cellNumber === 4) return 'station-bottom-left square-4';
            if (cellNumber === 0) return 'station-bottom-right square-0';
            return '';
        };

        return (
            <div className={`cell corner-cell ${getClass()}`} key={321}>
                <img src={ssvg} alt="" className="box-border w-[60%]"/>
                <div>{text}</div>
            </div>
        )
    }

    const cornerCells = {
        1: {class: 'jail', icon: '🔒', text: 'JAIL'},
        5: {class: 'go-to-jail', icon: '👮', text: 'GO TO JAIL'},
        41: {class: 'parking', icon: '🅿️', text: 'PARKING'},
        45: {class: 'start', icon: '🏁', text: 'START', svg: arrow}
    };

    const names = ["BER", "PAR", "LON", "ROM", "MAD", "LIS", "AMS", "WAW",
        "PRG", "BRU", "VIE", "ATH", "BUD", "OSL", "HEL", "STO",
        "CPH", "TYO", "SEL"];

    let used = "";
    const selected = Math.floor(Math.random()*2);
    if (selected) {
        used = "user-has-a-card ";
    }

    return(
        <div className={`cell ${used}square-${cellNumber} ${color}-border hover:shadow-[0_0_3px]`} key={2}>
            <div className={`marker ${color} ${positionClass}`}></div>
            <div className="w-full h-full">
                <div className={`details ${positionClass}`}>
                    <div className="marker-text flex">
                        <span>{names[nameCell]}</span>
                    </div>
                    <div className="infoarea">
                        <div className="info">${cellNumber * 10}</div>
                        <div className="info bought">0 mints</div>
                    </div>
                </div>
            </div>
        </div>
    );
};