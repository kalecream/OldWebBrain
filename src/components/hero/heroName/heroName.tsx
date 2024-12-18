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
              <div className={styles["icon--container"]}>
                <svg className={`${styles.icon} ${styles.star}`}>
                  <use xlinkHref="#star"></use>
                </svg>
              </div>
            </span>
          ))}
        </div>
      </div>
      {/* <svg className={styles.icons}>
				<symbol id="star" viewBox="0 0 296.789 296.789">
					<path d="m 128.07699,246.6702 16.62278,44.87778 c 0.62488,1.68958 2.24042,2.81007 4.04647,2.81007 1.80605,0 3.42159,-1.12049 4.04646,-2.81007 l 16.62278,-44.87778 c 13.45522,-36.3312 42.2174,-64.97071 78.70166,-78.36601 l 45.06998,-16.55188 c 1.69428,-0.62221 2.81958,-2.23087 2.81958,-4.02922 0,-1.79835 -1.1253,-3.40699 -2.81958,-4.0292 l -45.07253,-16.5519 C 211.63034,113.74417 182.86815,85.107178 169.41548,48.778514 L 152.7927,3.900743 c -0.62487,-1.6870583 -2.24041,-2.8075483 -4.04646,-2.8075483 -1.80605,0 -3.42159,1.12049 -4.04647,2.8075483 L 128.07699,48.778514 C 114.62179,85.107178 85.862143,113.74417 49.375346,127.14199 l -45.0725171,16.5519 c -1.694284,0.62221 -2.819573,2.23085 -2.819573,4.0292 0,1.79835 1.125289,3.40701 2.819573,4.02922 l 45.0699771,16.55188 c 36.486798,13.3953 65.248984,42.03228 78.704184,78.36601 z"></path>
				</symbol>
			</svg> */}
    </>
  );
};

export default HeroName;
