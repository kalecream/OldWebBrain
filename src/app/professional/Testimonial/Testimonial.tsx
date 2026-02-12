"use client"
import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Testimonial.module.scss';
import { Testimonial, TestimonialProps, TestimonialData } from './TestimonialData';
import { FaPlay, FaPause, FaStar, FaStarHalfStroke, FaRegStar } from 'react-icons/fa6';
import Link from 'next/link';
// code converted from: https://codepen.io/HCWebLabs/pen/NPxqdqW

const TRUSTPILOT = 3.5;

export const TestimonialBlock: React.FC<TestimonialProps> = ({
  title = "What Clients Say",
  items = TestimonialData,
  speed = "48s",
  className = ""
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const trackRef = useRef<HTMLUListElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const renderStars = useCallback((rating: number): JSX.Element[] => {
    const full = Math.floor(rating);
    const half = (rating - full) >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    
    const stars: JSX.Element[] = [];
    
    for (let i = 0; i < full; i++) {
      stars.push(<FaStar key={`full-${i}`} className="fa-solid fa-star" aria-hidden="true" />);
    }
    
    if (half) {
      stars.push(<FaStarHalfStroke key="half" className="fa-solid fa-star-half-stroke" aria-hidden="true" />);
    }
    
    for (let i = 0; i < empty; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="fa-regular fa-star" aria-hidden="true" />);
    }
    
    return stars;
  }, []);

  const renderCard = useCallback((item: Testimonial, index: number): JSX.Element => {
    const ariaLabel = `Testimonial from ${item.name}, rated ${item.rating} out of 5`;
    
    return (
      <li 
        key={`${item.name}-${index}`}
        className={styles.tcard}
        role="listitem"
        aria-label={ariaLabel}
      >
        <div 
          className={styles.stars}
          aria-label={`Rating: ${item.rating} out of 5`}
        >
          {renderStars(item.rating)}
        </div>
        <p className={styles.quote}>{item.text}</p>
        <p className={styles.meta}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.title}>• {item.title}</span>
        </p>
      </li>
    );
  }, [renderStars]);

  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  const handlePointerDown = useCallback(() => {
    setIsPointerDown(true);
    setIsPaused(true);
  }, []);

  const handlePointerUp = useCallback(() => {
    setIsPointerDown(false);
    setIsPaused(false);
  }, []);

  const handlePointerLeave = useCallback(() => {
    if (isPointerDown) {
      setIsPointerDown(false);
      setIsPaused(false);
    }
  }, [isPointerDown]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else if (!isPointerDown) {
        setIsPaused(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPointerDown]);

  useEffect(() => {
    if (trackRef.current) {
      if (isPaused) {
        trackRef.current.style.animationPlayState = 'paused';
      } else {
        trackRef.current.style.animationPlayState = 'running';
      }
    }
  }, [isPaused]);


  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.style.setProperty('--speed', speed);
    }
  }, [speed]);

  const duplicatedItems = [...items, ...items];

  return (
    <div className={styles.wrap}>
      <div 
        className={`${styles.tm} ${className}`}
        aria-label="Client testimonials"
      >
        <div className={styles.tmHead}>
          {/* <h2>{title}</h2> */}
          <div className={styles.spacer} />
           <button
            className={styles.tmBtn}
            onClick={togglePause}
            aria-label={isPaused ? 'Play marquee' : 'Pause marquee'}
          >
            {isPaused ? <FaPlay /> : <FaPause />}
          </button>
          <Link 
            className={styles.trustPilot}
            href={"https://www.trustpilot.com/review/yunghigue.com"}
            >
           Rate Us On TrustPilot! <span className={styles.stars}>{renderStars(TRUSTPILOT)}</span>
            </Link>
         
        </div>

        <div
          ref={viewportRef}
          className={styles.tmViewport}
          id="tmViewport"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
        >
          <ul
            ref={trackRef}
            className={`${styles.tmTrack} ${isPaused ? styles.paused : ''}`}
            id="tmTrack"
            role="list"
            aria-live="polite"
          >
            {duplicatedItems.map((item, index) => renderCard(item, index))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBlock;