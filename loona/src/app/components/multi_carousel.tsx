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
                <ul className="multi-carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    <li className="multi-carousel-track-item">
                        <div className="multi-carousel-card">
                            <div className="multi-carousel-card-content">
                                <img src="/sleepscapes_content.7f66ddcb64fc4d23a518.png" alt="Escapes" className="multi-carousel-card-background" />
                                <div className="multi-carousel-card-text">
                                    <span className="accent white">Escapes </span>invite you to color a magical rotating diorama while being guided by marvelous narration to gently occupy your mind. 
                                    <span className="accent white"> Disengage from solving all the world’s problems while in bed,</span> and slip into sleep instead. 
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="multi-carousel-track-item">
                        <div className="multi-carousel-card">
                            <div className="multi-carousel-card-content">
                                <img src="/stories_content.f2ab3ff43568ab19e10b.png" alt="Escapes" className="multi-carousel-card-background" />
                                <div className="multi-carousel-card-text">
                                    <span className="accent white">Soothe the mind with unique sound design experiences. </span>Tailored music and sound effects for each tale take you on a 360-audio-encounter
                                    <span className="accent white"> with the most compelling storytelling. </span> Unleash a sense of wonder and endless imagination.
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="multi-carousel-track-item">
                        <div className="multi-carousel-card">
                            <div className="multi-carousel-card-content">
                                <img src="/music_content.39eec6854fdb18930355.png" alt="Escapes" className="multi-carousel-card-background" />
                                <div className="multi-carousel-card-text">
                                    Dive into <span className="accent white">a world of original music </span>created with the help of analog instrumentation. Loóna’s gallery of sublime natural sounds is 
                                    <span className="accent white"> designed to alleviate anxiety, promote relaxation, and provide a bit of magic to your evening routine.</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="multi-carousel-track-item">
                        <div className="multi-carousel-card">
                            <div className="multi-carousel-card-content">
                                <img src="/episode_content.a1b0438bb1dffbac33dd.png" alt="Escapes" className="multi-carousel-card-background" />
                                <div className="multi-carousel-card-text">
                                    <span className="accent white">Inhale calm, and exhale worry </span>with Loóna breathing exercises. Designed to inspire resilience, 
                                    <span className="accent white"> take a deep breath and lose yourself in this centering experience.</span>
                                </div>
                            </div>
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