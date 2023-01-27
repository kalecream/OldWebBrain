import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import gasp, { Timeline } from "react-gsap";
import ScrollTrigger from "react-gsap";

const refScroll = useRef(null);

const Technologies = [
    'CSS3', 'JavaScript', 'TypeScript',
    'React', 'Next.js', 'Node.js', 'Python', 'MDX'
];

// Use GSAP to animate the mapping of the technologies moving left and right across the screen as the user scrolls down the page.

const Tech = () => {

    return (
        <div className="tech">
            <h2>Technologies</h2>
            <div className="tech__container">
                {Technologies.map((tech, index) => (
                    <div className="tech__container__item" key={index}>
                        <h3>{tech}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

