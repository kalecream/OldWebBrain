import React, { useEffect } from "react";

import Page from "../containers/layout/page";

import { format, parseISO } from "date-fns";
import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";

import styled from "@emotion/styled";

import { Section, Container } from "../components/global/Basics";
import { ScrollDown } from "../components/global";

import { Model } from "../assets/models/me";

import "animate.css";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";
// import OtherProjects from "../components/home/otherProjects";
// import LatestProjects from "../components/home/latestProjects";

type IndexProps = {
  posts: PostType[];
};

const Hero = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }

  @media (max-width: 400px) {
    margin: 0 1rem;
  }
`;

const HeroSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 0.5rem;
  text-align: center;

  @media (min-width: 1000px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const CustomCanvas = styled(Canvas)`
  width: 100%;
  height: 100%;

  @media (min-width: 1100px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1000px) {
    width: 50%;
    height: 50%;
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: var(--primary);
  opacity: 0.7;

  @media (max-width: 400px) {
    font-size: 3rem;
  }
`;

const HeroParagraph = styled.p`
  max-width: 25rem;
  font-size: 1rem;
  line-height: 1.6rem;
  text-align: justify;
  opacity: 0.7;

  @media (max-width: 400px) {
    font-size: 0.85rem;
    max-width: 100%;
  }
`;

const BlogSection = styled(Section)`
  display: flex;
  place-items: center;
`;

const BlogTitle = styled.h2`
  color: var(--faint);
  font-size: 5rem;
  height: 100%;
  writing-mode: sideways-lr;
  text-align: center;
  text-orientation: mixed;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const ArticleContainer = styled(Container)`
  padding: 0 5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Articles = styled.div`
  padding: 1rem;
  width: 400px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-around;

  & span {
    font-size: 0.7rem;
    color: var(--lightgrey);
  }

  & h2 {
    padding: 0;
    font-size: 2.5rem;
    font-weight: 800;
    font-family: "Playfair Display", serif;
  }

  & h2:hover {
    cursor: pointer;
    color: var(--accent);
  }

  & p {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1.2rem;
    text-align: justify;
  }

  &:hover {
    cursor: pointer;
    background-color: var(--faint);
    border-radius: 0.5rem;
  }
`;

const angletoRadian = (angle: number) => {
  return angle * (Math.PI / 180);
};

const Rotate3DModel = () => {
  // useFrame((state) => {
  // 	state.camera.position.x = Math.sin(state.clock.getElapsedTime()) * 5;
  // 	state.camera.position.z = Math.cos(state.clock.getElapsedTime()) * 5;
  // 	state.camera.lookAt(0, 0, 0);
  // });

  // requestAnimationFrame(() => {
  // 	document.getElementById("hero")?.scrollIntoView();
  // });

  const orbitControlsRef = React.useRef<any>(null);

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(angletoRadian(-x * 20));
      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      orbitControlsRef.current.setAzimuthalAngle(angletoRadian(0));
    }
  }, [orbitControlsRef.current]);

  return (
    <>
      <OrbitControls
        ref={orbitControlsRef}
        maxDistance={10}
        minDistance={8}
        enableZoom={false}
      />
    </>
  );
};

export const Home = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Page>
      <Section id="hero">
        <Hero>
          <HeroSection>
            <HeroTitle className="animate__animated animate__slideInUp">
              Hi <span>👋🏽</span>
            </HeroTitle>
            <HeroParagraph className="animate__animated animate__slideInUp">
              Thanks for stopping by my website!
            </HeroParagraph>
            <HeroParagraph className="animate__animated animate__slideInUp">
              I'm a generalist from Kingston, Jamaica currently working on
              improving my web development and multimedia skills.
            </HeroParagraph>
          </HeroSection>
          <HeroSection>
            <CustomCanvas
              className="animate__animated animate__slideInLeft"
              flat
              shadows
              dpr={[1, 2]}
              camera={{ position: [2, 0, 12], fov: 15 }}
              style={{
                width: "300px",
                height: "600px",
              }}
            >
              {/* <PerspectiveCamera makeDefault position={[0, 0, 12]} /> */}
              <ambientLight intensity={1.25} />
              <directionalLight intensity={0.4} />
              <Suspense fallback={null}>
                <PresentationControls
                  global
                  zoom={1}
                  rotation={[0, -Math.PI / 4, 0]}
                  polar={[0, Math.PI / 4]}
                  azimuth={[-Math.PI / 4, Math.PI / 4]}
                ></PresentationControls>
                <Rotate3DModel />
                <Model position={[0.025, -0.9, 0]} rotation={[0.1, -0.75, 0]} />
              </Suspense>
            </CustomCanvas>
          </HeroSection>
        </Hero>
        <ScrollDown />
      </Section>
      <BlogSection id="blog-posts">
        <BlogTitle>Blog</BlogTitle>
        {posts.length > 0 && (
          <ArticleContainer>
            {posts.slice(0, 9).map((post) => (
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <Articles key={post.slug}>
                  {post.date && (
                    <span>{format(parseISO(post.date), "MMMM dd, yyyy")}</span>
                  )}
                  <h2>{post.title}</h2>
                  <p className="text-gray-500">{post.description}</p>
                </Articles>
              </Link>
            ))}
          </ArticleContainer>
        )}
      </BlogSection>
      {/* <LatestProjects /> */}
      {/* <OtherProjects/> */}
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["date", "description", "slug", "title"]);

  return {
    props: { posts },
  };
};

export default Home;
