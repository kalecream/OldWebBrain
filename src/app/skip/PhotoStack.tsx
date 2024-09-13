"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./books.module.scss";

interface Functions {
  update: (event: MouseEvent | TouchEvent) => void;
  stop: () => void;
}

let previousTouch: Touch | undefined = undefined;

const AlbumImages = [
  "/img/album/bananasunset.jpg",
  "/img/album/bw_trees.jpg",
  "/img/album/earring.jpg",
  "/img/album/jellyfish.jpg",
  "/img/album/flamingo.jpg",
  "/img/album/kitty.jpg",
];

const AlbumCaptions = [
  "The Green Thumb I wish I had",
  "Country",
  "A brief stint in jewelry making",
  "Jellyfish @ beach clean-up",
  "Flamingo @ the Zoo",
  "My fave stray had a kitten!",
];

const PhotoStack = () => {
  const picturesRef = useRef<NodeListOf<Element> | null>(null);
  const emojis = ["💖", "💎", "👑", "🌈", "🌵", "🌿", "🍃", "🍊", "🍋", "🍑", "🍒", "🎀", "✨", "💀"];

  const randomEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  useEffect(() => {
    picturesRef.current = document.querySelectorAll(".Picture");

    const updateElementPosition = (element: any, event: MouseEvent | TouchEvent) => {
      let movementX: number, movementY: number;

      if (event.type === "touchmove") {
        const touch = (event as TouchEvent).touches[0];
        movementX = previousTouch ? touch.clientX - previousTouch.clientX : 0;
        movementY = previousTouch ? touch.clientY - previousTouch.clientY : 0;
        previousTouch = touch;
      } else {
        movementX = (event as MouseEvent).movementX;
        movementY = (event as MouseEvent).movementY;
      }

      const elementY = parseInt(element.style.top || "0") + movementY;
      const elementX = parseInt(element.style.left || "0") + movementX;

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
    <div className={styles.photoContainer}>
      {AlbumImages.map((imagePath, index) => (
        <div key={index} className={styles.picture}>
          <Image
            height={0}
            width={0}
            loader={({ src }) => src}
            sizes="100vw"
            style={{ width: "100", height: "auto" }}
            src={imagePath}
            alt={AlbumCaptions[index]}
          />
          <span>
            {randomEmoji()} {AlbumCaptions[index]}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PhotoStack;
