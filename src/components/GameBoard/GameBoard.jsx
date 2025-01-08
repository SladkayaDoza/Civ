import React from 'react';
import arrow from "../../assets/arrow.svg";

export const GameBoard = () => {

  const edgeColors = {
    2: 'pink', 3: 'pink', 4: 'pink',
    10: 'light-green', 15: 'light-green', 20: 'light-green',
    30: 'blue', 35: 'blue', 40: 'blue',
    42: 'brown', 43: 'brown', 44: 'brown',
    26: 'light-red', 31: 'light-red', 36: 'light-red',
    6: 'green', 11: 'green', 16: 'green',
    21: 'yellow', 25: 'yellow'
  };

  const cornerCells = {
    1: { class: 'jail', icon: '🔒', text: 'JAIL' },
    5: { class: 'go-to-jail', icon: '👮', text: 'GO TO JAIL' },
    41: { class: 'parking', icon: '🅿️', text: 'PARKING' },
    45: { class: 'start', icon: '🏁', text: 'START', svg: arrow}
  };

  const names = ["BER", "PAR", "LON", "ROM", "MAD", "LIS", "AMS", "WAW",
    "PRG", "BRU", "VIE", "ATH", "BUD", "OSL", "HEL", "STO",
    "CPH", "TYO", "SEL"];

  const renderCell = (index) => {
    const cellNumber = index + 1;
    const cornerCell = cornerCells[cellNumber];

    if (cornerCell) {
        const getClass = () => {
            if (cellNumber === 1) return 'station-top-left';
            if (cellNumber === 5) return 'station-top-right';
            if (cellNumber === 41) return 'station-bottom-left';
            if (cellNumber === 45) return 'station-bottom-right';
            return '';
        };
        return (
            <div className={`cell corner-cell ${cornerCell.class} ${getClass()}`} key={index}>
                <img src={cornerCell.svg} alt="" width="55"/>
                <div>{cornerCell.text}</div>
            </div>
        );
    }

      if (!edgeColors[cellNumber]) {
          return <div className="cell transparent" key={index} />;
    }

    let positionClass;
    if (index < 5) positionClass = 'top';
    else if ((index + 1) % 5 === 0) positionClass = 'right';
    else if (index >= 40) positionClass = 'bottom';
    else positionClass = 'left';

    return (
        <div className="cell" key={index}>
          <div className={`marker ${edgeColors[cellNumber]} ${positionClass}`}>
          </div>
            <div className={`details ${positionClass}`}>
                <span className="marker-text">{names[index % names.length]}</span>
                <div className="infoarea">
                    <div className="info">${cellNumber * 10}</div>
                    <div className="info bought">0 mints</div>
                </div>
            </div>
        </div>
    );
  };

  const cells = Array(45).fill(null).map((_, index) => renderCell(index));

  return (
      <div className="container">
        <div className="grid">
          {cells}
        </div>
          <div className="geep">

          </div>
      </div>
  );
};
