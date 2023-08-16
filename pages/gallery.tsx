import React, { useEffect, useRef} from 'react';
import styled from "@emotion/styled";
import Image from 'next/image';

const PhotoContainer = styled.div`
    position: relative;
    max-width: 800px;
    top: 60%;
    left: -35%;

    @media (max-width: 1024px) {
    display: none;
  }

    @media (min-width: 1024px) {
        max-width: 800px;
         margin-right: 2rem;
    }

    `;

const Picture = styled.div`
display: inline-block;
position: absolute;
top: 0;
left: 0;
border: 5px solid var(--body);
border-radius: var(--border-radius);
background: var(--body);
box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
transform: translate(-50%, -50%);
user-select: none;
cursor: pointer;

& img {
    display: block;
  width: 200px;
  pointer-events: none;
}

& span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    padding: 12px 24px;
    font-size: 1rem;
    text-align: center;
    font-family: 'Caveat', serif;
    overflow: hidden;
    line-height: 1;
}
`;

interface Functions {
    update: (event: MouseEvent | TouchEvent) => void;
    stop: () => void;
  }

let previousTouch: Touch | undefined = undefined;

const AlbumImages = [
    '/img/album/bananasunset.jpg',
    '/img/album/bw_trees.jpg',
    '/img/album/earring.jpg',
  '/img/album/jellyfish.jpg',
  '/img/album/flamingo.jpg',
    '/img/album/kitty.jpg',
]

const AlbumCaptions = [
    'The Green Thumb I wish I had',
    'Country',
    'A brief stint in jewelry making',
  'Jellyfish @ beach clean-up',
  'Flamingo @ the Zoo',
    'My fave stray had a kitten!'
]


const PhotoGalley= () => {
    const picturesRef = useRef<NodeListOf<Element> | null>(null);
    const emojis = ['💖', '💎', '👑', '🌈',  '🌵', '🌿', '🍃',  '🍊', '🍋', '🍑', '🍒','🎀', '✨', '💀']

    const randomEmoji = () => {
        return emojis[Math.floor(Math.random() * emojis.length)];
    }

    useEffect(() => {
        picturesRef.current = document.querySelectorAll(".Picture");
    
        const updateElementPosition = (element: any, event: MouseEvent | TouchEvent) => {
          let movementX: number, movementY: number;
    
          if (event.type === 'touchmove') {
            const touch = (event as TouchEvent).touches[0];
            movementX = previousTouch ? touch.clientX - previousTouch.clientX : 0;
            movementY = previousTouch ? touch.clientY - previousTouch.clientY : 0;
            previousTouch = touch;
          } else {
            movementX = (event as MouseEvent).movementX;
            movementY = (event as MouseEvent).movementY;
          }
          
          const elementY = parseInt(element.style.top || '0') + movementY;
          const elementX = parseInt(element.style.left || '0') + movementX;
    
          element.style.top = `${elementY}px`;
          element.style.left = `${elementX}px`;
        };
    
        const startDrag = (element: any, event: MouseEvent | TouchEvent) => {
          const updateFunction = (event: MouseEvent | TouchEvent) => updateElementPosition(element, event);
          const stopFunction = () => stopDrag({ update: updateFunction, stop: stopFunction });
    
          document.addEventListener("mousemove", updateFunction);
          document.addEventListener("touchmove", updateFunction);
          document.addEventListener("mouseup", stopFunction);
          document.addEventListener("touchend", stopFunction);
        };
    
        const stopDrag = (functions: Functions) => {
          previousTouch = undefined;
          document.removeEventListener("mousemove", functions.update);
          document.removeEventListener("touchmove", functions.update);
          document.removeEventListener("mouseup", functions.stop);
          document.removeEventListener("touchend", functions.stop);
        };
    
        if (picturesRef.current) {
          picturesRef.current.forEach((picture: any) => {
            const range = 100;
            const randomX = Math.random() * (range * 2) - range;
            const randomY = Math.random() * (range * 2) - range;
            const randomRotate = Math.random() * (range / 2) - range / 4;
            const startFunction = (event: MouseEvent | TouchEvent) => startDrag(picture, event);
      
            picture.style.top = `${randomY}px`;
            picture.style.left = `${randomX}px`;
            picture.style.transform = `translate(-50%, -50%) rotate(${randomRotate}deg)`;
      
            picture.addEventListener("mousedown", startFunction);
            picture.addEventListener("touchstart", startFunction);
          });
        }
    
        return () => {
          if (picturesRef.current) {
            picturesRef.current.forEach((picture: any) => {
              picture.removeEventListener("mousedown", startDrag);
              picture.removeEventListener("touchstart", startDrag);
            });
          }
        };
    
      }, []);
    

    return (
            <PhotoContainer>
                {AlbumImages.map((imagePath, index) => (
                    <Picture key={index} className="Picture">
                    <Image
                      height={0}
                        width={0}
                        loader={({ src }) => src}
                        sizes="100vw"
                        style={{ width: '100', height: 'auto' }}
                        src={imagePath}
                      alt={AlbumCaptions[index]}
                      className="blog--article__image"
                    />
                        <span>{randomEmoji()} {AlbumCaptions[index]}</span>
                    </Picture>
                ))}
            </PhotoContainer>
    );
};

export default PhotoGalley;
