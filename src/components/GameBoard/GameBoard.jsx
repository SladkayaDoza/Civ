import React from 'react';
import arrow from "../../assets/arrow.svg";

export const GameBoard = () => {

    const Cell = ({ type, color, cellNumber, positionClass, ssvg, text, nameCell }) => {
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
            used = "user-has-a-card";
        }

        return(
            <div className={`cell ${used} square-${cellNumber} ${color}-border hover:shadow-[0_0_3px]`} key={2}>
                <div className={`marker ${color} ${positionClass}`}></div>
                <div className="w-full h-full">
                    <div className={`details ${positionClass}`}>
                        <span className="marker-text">{names[nameCell]}</span>
                        <div className="infoarea">
                            <div className="info">${cellNumber * 10}</div>
                            <div className="info bought">0 mints</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return(
        <div className="container">
            <div className="grid board">
                <Cell type="cornerCell" cellNumber={0} text='START' svg={arrow}/>

                <Cell type="city" positionClass="bottom" cellNumber={1} color="brown" nameCell={0} />
                <Cell type="city" positionClass="bottom" cellNumber={2} color="brown" nameCell={1} />
                <Cell type="city" positionClass="bottom" cellNumber={3} color="brown" nameCell={2} />

                <Cell type="cornerCell" cellNumber={4} text='PARKING' />

                <Cell type="city" positionClass="left" cellNumber={5} color="light-red" nameCell={3} />
                <Cell type="city" positionClass="left" cellNumber={6} color="light-red" nameCell={4} />
                <Cell type="city" positionClass="left" cellNumber={7} color="light-red" nameCell={5} />

                <Cell type="city" positionClass="left" cellNumber={8} color="yellow" nameCell={6} />

                <Cell type="city" positionClass="left" cellNumber={9} color="green" nameCell={7} />
                <Cell type="city" positionClass="left" cellNumber={10} color="green" nameCell={8} />
                <Cell type="city" positionClass="left" cellNumber={11} color="green" nameCell={9} />

                <Cell type="cornerCell" cellNumber={12} text='JAIL' />

                <Cell type="city" positionClass="top" cellNumber={13} color="pink" nameCell={10} />
                <Cell type="city" positionClass="top" cellNumber={14} color="pink" nameCell={11} />
                <Cell type="city" positionClass="top" cellNumber={15} color="pink" nameCell={12} />

                <Cell type="cornerCell" cellNumber={16} text='GO TO JAIL' />

                <Cell type="city" positionClass="right" cellNumber={17} color="light-green" nameCell={13} />
                <Cell type="city" positionClass="right" cellNumber={18} color="light-green" nameCell={14} />
                <Cell type="city" positionClass="right" cellNumber={19} color="light-green" nameCell={15} />

                <Cell type="city" positionClass="right" cellNumber={20} color="yellow" nameCell={16} />

                <Cell type="city" positionClass="right" cellNumber={21} color="blue" nameCell={17} />
                <Cell type="city" positionClass="right" cellNumber={22} color="blue" nameCell={18} />
                <Cell type="city" positionClass="right" cellNumber={23} color="blue" nameCell={18} />
            </div>
            <div className="geep">

            </div>
        </div>
    );
};
