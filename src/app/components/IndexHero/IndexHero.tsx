"use client";
import { Suspense, lazy, useRef, useEffect, useState, ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  SMAA, Bloom, ChromaticAberration, EffectComposer,
  Vignette, Noise, ToneMapping,
} from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
import { Preload, Html, PresentationControls, useProgress, Stars } from "@react-three/drei";
import { FaSpider, FaLeaf, FaPaintbrush, } from "react-icons/fa6"
import * as THREE from "three";
import Link from "next/link";
import hero from "./Index.module.scss";
import button from "@styles/modules/Button.module.scss";
import MusicPlayer from "@components/MusicPlayer/MusicPlayer";
import TestimonialBlock from "@app/professional/Testimonial/Testimonial";
import Divider from "@components/Divider/Divider";

const Model = lazy(() =>
  import("src/assets/models/castlevania").then((m) => ({ default: m.Model }))
);

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" position={[4, 0, 0]}>
      <div style={{
        color: "var(--textColor)",
        fontSize: "0.75rem",
        letterSpacing: "0.3em",
        textAlign: "center",
        opacity: 0.7,
        whiteSpace: "nowrap",
        pointerEvents: "none",
      }}>
        SUMMONING<br />
        <span style={{ fontSize: "1rem", opacity: 0.5 }}>{progress.toFixed(0)}%</span>
      </div>
    </Html >
  );
};

const SceneLights = () => (
  <>
    <ambientLight intensity={2} />
    <directionalLight position={[-1, 2, 10]} intensity={5} castShadow
      shadow-mapSize-width={512} shadow-mapSize-height={512} shadow-bias={-0.001} />
    <directionalLight position={[10, 5, 5]} intensity={4} color="#ffddcc" />
    <directionalLight position={[-10, 5, 5]} intensity={4} color="#ccddff" />
    <pointLight position={[0, 5, 15]} intensity={8} distance={50} decay={1} />
  </>
);

// ─── AnimatedModel ────────────────────────────────────────────────────────────
//
// Scroll phases (in viewport heights):
//
//  Phase 0 | at rest       | Model sits right-of-centre (X≈1.8), idle breathe
//  Phase 1 | 0 → 0.6vh     | Headline. Model nudges further right, slight tilt
//  Phase 2 | 0.6 → 2.5vh   | About section. Rotates Y ~100°, drifts right
//  Phase 3 | 2.5 → 3.5vh   | Exit. Shrinks + sinks
//
// All interpolation is explicit lerp in useFrame — no springs fighting mutations.

const BASE_X_DESKTOP = 0.0;  // model stays centred; only the loader shifts right
const BASE_X_MOBILE = 0.0;  // centred on small screens

const AnimatedModel = ({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) => {
  const groupRef = useRef<THREE.Group>(null);
  const tRef = useRef(0);
  const mobileRef = useRef(false);

  useEffect(() => {
    const check = () => { mobileRef.current = window.innerWidth < 768; };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useFrame((_, delta) => {
    const g = groupRef.current;
    if (!g) return;

    tRef.current += delta;
    const t = tRef.current;
    const vh = window.innerHeight;
    const sy = scrollRef.current;

    // Phase progress 0 → 1
    const p2 = easeOut(clamp01((sy - vh * 0.6) / (vh * 1.9)));
    const p3 = clamp01((sy - vh * 2.5) / vh);

    // Idle motion
    const floatY = Math.sin(t * 0.28) * 0.16;
    const tiltZ = Math.sin(t * 0.19) * 0.022;
    const swing = Math.sin(t * 0.13) * (Math.PI / 7); // gentle idle Y swing

    const baseX = mobileRef.current ? BASE_X_MOBILE : BASE_X_DESKTOP;

    // Targets
    const tX = baseX + p2 * (mobileRef.current ? 0 : 1.4);
    const tY = floatY - p3 * 2.6;
    const tRotY = swing + p2 * (Math.PI * 0.52);
    const tRotZ = tiltZ;
    const tScale = 1 + p2 * 0.06 - p3 * 0.28;

    // Smooth damp — low factor = glassy inertia
    const lf = 0.045;
    g.position.x = lerp(g.position.x, tX, lf);
    g.position.y = lerp(g.position.y, tY, lf);
    g.rotation.y = lerp(g.rotation.y, tRotY, lf);
    g.rotation.z = lerp(g.rotation.z, tRotZ, 0.06);
    g.scale.setScalar(lerp(g.scale.x, tScale, lf));
  });

  return (
    <group ref={groupRef}>
      <PresentationControls
        global={false}
        cursor
        snap
        speed={1}
        zoom={0.8}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <Model />
      </PresentationControls>
    </group>
  );
};


const Effects = () => (
  <EffectComposer multisampling={4}>
    <SMAA />
    <Bloom
      blendFunction={BlendFunction.ADD}
      intensity={1}
      luminanceThreshold={0.6}
      luminanceSmoothing={0.3}
      kernelSize={KernelSize.SMALL}
      height={400}
      levels={9}
      mipmapBlur
    />
    <Bloom
      blendFunction={BlendFunction.SCREEN}
      intensity={0.3}
      luminanceThreshold={0.8}
      luminanceSmoothing={0.1}
      kernelSize={KernelSize.VERY_SMALL}
      height={600}
    />
    <ChromaticAberration
      blendFunction={BlendFunction.NORMAL}
      radialModulation
      modulationOffset={0.25}
      offset={[0.0015, 0.0015]}
    />
    <Vignette darkness={0.4} offset={0.15} eskil={false} />
    <Noise premultiply opacity={0.015} />
    <ToneMapping
      blendFunction={BlendFunction.NORMAL}
      adaptive
      resolution={256}
      middleGrey={0.7}
      maxLuminance={20}
      averageLuminance={2}
      adaptationRate={2}
    />
  </EffectComposer>
);

const HeroCanvas = ({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) => (
  <Canvas
    linear
    flat
    shadows
    dpr={1.5}
    performance={{ min: 0.9, max: 1, debounce: 300 }}
    gl={{
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true,
      precision: "mediump",
      depth: true,
      stencil: false,
    }}
    camera={{ fov: 17, position: [-1.1872, -2.385, 45.981], near: 1, far: 500 }}
    style={{ width: "100%", height: "100%", touchAction: "none", pointerEvents: "all" }}
    frameloop="always"
    onCreated={({ gl }) => {
      gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      gl.outputColorSpace = "srgb";
    }}
  >
    <Preload all />
    <Stars radius={90} depth={60} count={1400} factor={3} fade speed={0.35} />
    <Suspense fallback={<Loader />}>
      <SceneLights />
      <AnimatedModel scrollRef={scrollRef} />
    </Suspense>
    <Effects />
  </Canvas>
);

interface FlipCardProps {
  icon: ReactNode;
  heading: string;
  frontSub: string;
  backBody: string;
  skills: string[];
  href: string;
  index: number; // 0 | 1 | 2 — determines fan angle
}

const FlipCard = ({ icon, heading, frontSub, backBody, skills, href, index }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const [lifted, setLifted] = useState(false);

  const handleEnter = () => { setLifted(true); setFlipped(true); };
  const handleLeave = () => { setLifted(false); setFlipped(false); };
  const handleTap = () => setFlipped((f) => !f);

  return (
    <div
      className={`${hero.flipCard} ${hero[`flipCard--${index}`]} ${lifted ? hero["flipCard--lifted"] : ""}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      onClick={handleTap}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
    >
      <div className={`${hero.flipCardInner} ${flipped ? hero.flipCardInnerFlipped : ""}`}>
        {/* Front */}
        <div className={hero.flipCardFront} aria-hidden={flipped}>
          <span className={hero.flipCardIcon} aria-hidden="true">{icon}</span>
          <h3 className={hero.flipCardHeading}>{heading}</h3>
          <p className={hero.flipCardSub}>{frontSub}</p>
          <span className={hero.flipCardHint}>tap to reveal</span>
        </div>
        {/* Back */}
        <div className={hero.flipCardBack} aria-hidden={!flipped}>
          <h3 className={hero.flipCardBackHeading}>{heading}</h3>
          <p className={hero.flipCardBackBody}>{backBody}</p>
          {/* <ul className={hero.flipCardSkills}>
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul> */}
          {/* TODO: FIX SKILLS */}
          <Link href={href} className={hero.flipCardCta} tabIndex={flipped ? 0 : -1}>
            See work →
          </Link>
        </div>
      </div>
    </div>
  );
};

const CARDS: Omit<FlipCardProps, "index">[] = [
  {
    icon: <FaSpider />,
    heading: "Web Development",
    frontSub: "From architecture to animation",
    backBody: "Full-stack builds with performance and accessibility: Next.js, React, TypeScript, and whatever the project demands.",
    skills: ["Next.js", "TypeScript", "Node", "Animations"],
    href: "/portfolio",
  },
  {
    icon: <FaLeaf />,
    heading: "3D & Motion",
    frontSub: "Scenes that breathe",
    backBody: "Real-time 3D environments, WebGL shaders, and scroll-driven sequences built with Three.js and React Three Fiber.",
    skills: ["Three.js / R3F", "GLSL Shaders", "GSAP", "Blender"],
    href: "/portfolio",
  },
  {
    icon: <FaPaintbrush />,
    heading: "Brand Identity",
    frontSub: "Visual language with intent",
    backBody: "Mark-making, type systems, and colour palettes for brands that want to be remembered, not just recognised.",
    skills: ["Logomark Design", "Type Systems", "Figma"],
    href: "/portfolio",
  },
];

export const Index = () => {
  const scrollRef = useRef(0);
  const [scrollY, setScrollY] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = window.scrollY;
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const heroOpacity = clamp01(1 - (scrollY - vh * 0.4) / (vh * 0.5));

  return (
    <main className={`page ${revealed ? hero.revealed : ""}`}>
      <div className={hero.canvasFixed} aria-hidden="true">
        <HeroCanvas scrollRef={scrollRef} />
      </div>

      <div className={hero.fog} aria-hidden="true" />
      <section className={hero.headline} aria-label="Introduction">
        <div
          className={hero.headline__content}
          style={{ opacity: heroOpacity, pointerEvents: heroOpacity < 0.05 ? "none" : "auto" }}
        >
          <p className={hero.eyebrow}>a portfolio, a playground &amp; a prayer</p>
          <h2 className={hero.name}>Yung Higue</h2>
          <div className={hero.ctas}>
            <Link href="/pricing">
              <button className={button.vamp} role="button">
                <span className={button.text}>The Professional Route</span>
                <span className={button["vamp-background"]} />
                <span className={button["vamp-border"]} />
                <svg style={{ position: "absolute", width: 0, height: 0 }}>
                  <filter id="rfb" colorInterpolationFilters="sRGB">
                    <feColorMatrix type="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 0 1"
                      result="bp" />
                    <feComposite in="SourceGraphic" in2="bp" operator="out" />
                  </filter>
                </svg>
              </button>
            </Link>
            <Link href="/portfolio" className={button.secondary}>Skip the theatrics</Link>
          </div>
        </div>
        <div className={hero.scrollCue} style={{ opacity: heroOpacity }} aria-hidden="true">
          <span className={hero.scrollCue__label}>scroll</span>
          <div className={hero.scrollCue__line} />
        </div>
        <MusicPlayer
          audioSrc={"/audio/hozier.m4a"}
          songTitle={"soft hozier playlist 🦌🍃 [slowed, muffled + waves]"}
          audioLink={"https://www.youtube.com/watch?v=9Rqwdl9fTvw"}
        />
      </section>
      <section className={hero.about} aria-label="Services">
        <div className={hero.about__inner}>

          <div className={hero.about__text}>
            <p className={hero.about__label}>What I offer</p>
            <h2 className={hero.about__heading}>
              Craft with<br /><em>deliberate</em> design.
            </h2>
            {/* <p className={hero.about__body}>
              Digital spaces with weight, texture, and intention.
            </p> */}
          </div>
          <div className={hero.cardHand} aria-label="Service cards">
            {CARDS.map((c, i) => (
              <FlipCard key={c.heading} {...c} index={i} />
            ))}
          </div>

        </div>

      </section>
      <section className={hero.cta} aria-label="The Next Step">
        <Divider />
        <TestimonialBlock />
        <p className={hero.cta__label}>The Next Step</p>
        <h2 className={hero.cta__title}>
          Let's build something<br />worth remembering.
        </h2>
        <p className={hero.cta__sub}>
          Whether you need a full digital presence or a quick fix,
          I'm available.
        </p>
        <div className={hero.cta__actions}>
          <Link href="/portfolio">
            <button className={button.vamp} role="button">
              <span className={button.text}>See my pricing</span>
              <span className={button["vamp-background"]} />
              <span className={button["vamp-border"]} />
              <svg style={{ position: "absolute", width: 0, height: 0 }}>
                <filter id="rfb2" colorInterpolationFilters="sRGB">
                  <feColorMatrix type="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -1 -1 -1 0 1"
                    result="bp" />
                  <feComposite in="SourceGraphic" in2="bp" operator="out" />
                </filter>
              </svg>
            </button>
          </Link>
          <Link href="/portfolio" className={button.secondary}>
            <span aria-hidden="true">→</span> Explore the Project Archive
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;