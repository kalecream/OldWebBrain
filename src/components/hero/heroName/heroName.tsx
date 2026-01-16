"use client";
import { useRef } from "react";
import styles from "@styles/modules/heroName.module.scss";

const HeroName = ({ name }) => {
  const textArray = useRef(null);
  const colorArr = [" rgb(60, 60, 60)", "var(--secondary)"];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.text__container} ref={textArray}>
          {Array.from({ length: 2 }).map((_, index) => (
            <span key={index} className={styles.text} style={{ color: colorArr[index % colorArr.length] }}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroName;
