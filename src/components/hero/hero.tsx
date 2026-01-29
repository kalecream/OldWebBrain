"use client";
import hero from "@styles/modules/Index.module.scss";
import button from "@styles/modules/Button.module.scss";
import { HeroModel } from "@components/threeJS/HeroModel.jsx";
import Link from "next/link";
import MusicPlayer from "@components/MusicPlayer/MusicPlayer";

const Hero = () => {
  return (
    <section>
      <div className={`${hero.container}`}>
        <div className={hero.model}>
          <HeroModel />
          <div className={hero.cta}>
            <h1 className={hero.name}>Yung Higue</h1>
            <div className={hero.text}> <p className="p-note">
              A cross between<br/>
              <Link href="https://github.com/kalecream" rel="me">
                a portfolio
              </Link>
              ,{" "}
              <Link href="https://mstdn.social/@KaleCream" rel="me">
                a playground,
              </Link>
              <wbr />
              <Link href="mailto:sab@yunghigue.com" rel="me">
                {" "}
                and a prayer
              </Link>
              .
            </p></div>
            <div className={hero["button-block"]}>
              <Link href="/professional">
                <button className={button.vamp} role="button">
                  <span className={button.text}>The Professional Route</span>
                  <span className={button["vamp-background"]}></span>
                  <span className={button["vamp-border"]}></span>

                  {/* <!-- mask-border fallback --> */}
                  <svg style={{ position: "absolute", width: "0", height: "0" }}>
                    <filter id="remove-black-vamp" colorInterpolationFilters="sRGB">
                      <feColorMatrix
                        type="matrix"
                        values="1 0 0 0 0
                 0 1 0 0 0
                 0 0 1 0 0
                 -1 -1 -1 0 1"
                        result="black-pixels"
                      ></feColorMatrix>
                      <feComposite in="SourceGraphic" in2="black-pixels" operator="out"></feComposite>
                    </filter>
                  </svg>
                </button>
              </Link>
              <Link href="/skip">
                  <span className={button.text}>Skip</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MusicPlayer
        audioSrc={"/audio/hozier.m4a"}
        songTitle={"soft hozier playlist 🦌🍃 [slowed, muffled + waves]"}
        audioLink={"https://www.youtube.com/watch?v=9Rqwdl9fTvw"}
      />
    </section>
  );
};

export default Hero;
