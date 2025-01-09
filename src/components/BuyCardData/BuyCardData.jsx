import React from "react";
import {SVGIco} from "../SVGIco/SVGIco.jsx";

export const CardData = ({ name, color, cellNumber, price}) => {

    return (
        <div className="square-center p-[5%] overflow-hidden">
            <div className="w-full h-full square-center-area shadow" style={{borderColor: color}}>
                <div className={`priceCard`} style={{ backgroundColor: color }}>
                    <div>{name}</div>
                    <div className="flex items-center"><SVGIco/> {price}</div>
                </div>
                <div className="p-[5%] h-full cardInfoContainer">
                    <div className="infoCard">
                        <div className="infoInfoCard">
                            <span>Rent cost:</span>
                            <span className="font-bold"><SVGIco/> 30</span>
                        </div>
                        <div className="infoInfoCard">
                            <span>Mints:</span>
                            <span className="font-bold">12K</span>
                        </div>
                    </div>
                    <div className="activityCard w-full">
                        <div className="buttonBuy">BUY</div>
                    </div>
                </div>
            </div>
        </div>
    )
}