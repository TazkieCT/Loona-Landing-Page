"use client";

import { useState } from "react";
import "./../styles/multi_carousel.css";

export default function MultiCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const listItems = [
        "Escapes",
        "Immersive stories",
        "Music & Nature sounds",
        "Breathing exercises"
    ];

    return (
        <div className="container-multi-carousel">
            <div className="title">Content so good <span className="slip">it will put you to sleep</span></div>
            <button className="button">
                Try for free
            </button>
            <div className="multi-carousel">
                <ul className="multi-carousel-track">
                    <li className="multi-carousel-track-item">
                        <div className="multi-carousel-card">
                            <img src="/sleepscapes_content.7f66ddcb64fc4d23a518.png" alt="Escapes" className="multi-carousel-card-background" />
                            <div className="multi-carousel-card-text">Escapes</div>
                        </div>
                    </li>
                </ul>
                <ul className="multi-carousel-list">
                    {listItems.map((item, index) => (
                        <li
                            key={index}
                            className={`multi-carousel-list-item ${activeIndex === index ? "active" : ""}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}