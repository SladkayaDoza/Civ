import React from 'react';
import arrow from "../../assets/arrow.svg";
import {city} from "../../api/index.js";
import {Cell} from "../Cell/Cell.jsx";
import {CardData} from "../BuyCardData/BuyCardData.jsx";
import {Header} from "../Header/Header.jsx";
import {Footer} from "../Footer/Footer.jsx";

export const GameBoard = () => {


    return (
        <>
            <Header />
            <div className="container">

                {/*<button onClick={() => city.buy(123123)}>Buy</button>*/}

                <div className="grid board">
                    <CardData name="TOKYO" price={300} color="#0087DB" />

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
            <Footer/>

        </>
    );
};
