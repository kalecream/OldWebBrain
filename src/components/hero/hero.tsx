"use client";
import hero from "@styles/modules/Index.module.scss";
import button from "@styles/modules/Button.module.scss";
import { HeroModel } from "@components/threeJS/HeroModel.jsx";
import Link from "next/link";

import HeroName from "@components/hero/heroName/heroName";
import Image from "next/image";
import HeroImage from "@assets/images/vamp.webp";
// import { ScrollDown } from '@components/scrollDown';

const Hero = () => {
  return (
    <section>
      <div className={hero.container}>
        <div className={hero.model}>
          <div className="desktop">
            <HeroModel />
          </div>
          <div className="mobile">
            <Image
              src={HeroImage}
              loader={({ src, width }) => `${src}?w=${width}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "clamp(100px, 40vw,1000px)", alignSelf: "center" }}
              alt=""
              className="u-photo"
            />{" "}
          </div>
          <div className={hero.cta}>
            <HeroName name={"Sabrina"} />
            <div className={` ` + hero.text}>
              <center>
                <h2>
                  the <span>Web Developer</span>
                </h2>
                <p className="p-note">
                  I intended this site to be a professional portfolio, but it has evolved into a personal showcase as I
                  explore the indie web.
                </p>
              </center>
            </div>

            <div className={button.container}>
              <Link href="/professional" rel="me">
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
              <Link href="/skip" style={{ scale: "0.8" }}>
                Skip
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <ScrollDown /> */}
    </section>
  );
};

export default Hero;
