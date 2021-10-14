import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "./style.css";
import mini1 from '../../assets/mini1.jpg';
import mini2 from '../../assets/mini2.jpg';
import mini3 from '../../assets/mini3.jpg';
import mini4 from '../../assets/mini4.jpg';
import mini5 from '../../assets/mini5.jpg';
import mini6 from '../../assets/mini6.jpg';
import mini7 from '../../assets/mini7.jpg';
import mini8 from '../../assets/mini8.jpg';
import mini9 from '../../assets/mini9.jpg';
import mini10 from '../../assets/mini10.jpg';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5, itemsToScroll: 3 },
];

export default function Carrosel() {
    const [items, setItems] = useState([
        <img className="imgCarrosel" src={mini1} alt="" />,
        <img className="imgCarrosel" src={mini2} alt="" />,
        <img className="imgCarrosel" src={mini3} alt="" />,
        <img className="imgCarrosel" src={mini4} alt="" />,
        <img className="imgCarrosel" src={mini5} alt="" />,
        <img className="imgCarrosel" src={mini6} alt="" />,
        <img className="imgCarrosel" src={mini7} alt="" />,
        <img className="imgCarrosel" src={mini8} alt="" />,
        <img className="imgCarrosel" src={mini9} alt="" />,
        <img className="imgCarrosel" src={mini10} alt="" />,
    ]);

    const addItem = () => {
        const nextItem = Math.max(1, items.length + 1);
        setItems([...items, nextItem]);
    };

    return (
        <div className="carouselContainer">
            <div className="controls-wrapper">
                <a href onClick={addItem}> </a>
            </div>
            <div className="carousel-wrapper">
                <Carousel breakPoints={breakPoints}>
                    {items.map((item) => (
                        <Item key={item}>{item}</Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

