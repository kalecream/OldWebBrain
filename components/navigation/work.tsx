
import { useEffect, useState } from "react";
import styled from "styled-components";


const WorkButton = styled.button`
    width: 200px;
    color: var(--primary);
    border: 1px solid var(--faint);
    border-radius: var(--border-radius);
    padding: var(--padding-small);
    font-family: var(--font-family);
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    animation: workScroll 5s infinite;

    &:focus, &:active, &:hover {
        background-color: var(--primary);
        color: var(--body);
        animation: none;

        &::before {
            background-image: none;
        }
    }

    @media (max-width: 750px) {
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
    }

    @media (max-width: 450px) {
        font-size: 0.5rem;
        padding: 0.25rem 0.5rem;
    }

    &::before {
        content: "";
        border-radius: 50%;
        background-image: radial-gradient(var(--primary), var(--body));
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 0.7rem;
        height: 0.7rem;
        margin-right: 0.5rem;
        display: inline-block;
        vertical-align: middle;
    }

    @keyframes workScroll {
        0% {
            color: var(--primary);
        }

        25% {
            color: var(--text);
        }

        50% {
            color: var(--primary);
        }
    }
`;

export const AvailableForWork = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    const handleMouseClick = () => {
        window.location.href = "/services";
    }


    return (
        <WorkButton
            className={`animated-button ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleMouseClick}
        >
            {!isHovered && (<span>Available For Work</span>)}
            {isHovered && (
        <span className={`animated-button-text in`}>Commission Me!</span>
      )}
        </WorkButton>
    )

};

export default AvailableForWork;
