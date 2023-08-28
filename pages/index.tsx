import { useEffect, useRef } from "react";
import Page from "../containers/layout/page";
import Image from "next/image";

import { format, parseISO } from "date-fns";
import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";
import styled from "@emotion/styled";

import HeroName from "../components/heroName";
import { Button, CustomLink } from "../components/global/Basics";

import { ScrollDown } from "../components/global";
import ProjectList from "@components/home/projectsList";

import { Model } from "../assets/models/me";

import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";

import "../styles/animations.module.css";
import "animate.css";

type IndexProps = {
  posts: PostType[];
};

const Hero = styled.section`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  place-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    margin: 0 auto;
    flex-direction: row;
  }
`;

const HeroSection = styled.div`
  height: auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  place-items: center;
  animation: fadeInFromBelow 1s ease-in-out;

  p {
    line-height: 1.6rem;
    text-align: justify;
    font-weight: 300;
    max-width: 25rem;
    padding: 0;
  }

  @keyframes fadeInFromBelow {
    0% {
      opacity: 0;
      transform: translateY(1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }

`;

const ButtonContainer = styled.div`
  display: flex;

  margin: 1rem auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    max-width: 30rem;
    margin: 0 auto;
    justify-content: center;
    font-size: 1.2rem;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
  }
`;

const CustomCanvas = styled(Canvas)`
  @media (min-width: 768px) {
    width: fit-content;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: none;
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

  const orbitControlsRef = useRef<any>(null);

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
    <OrbitControls
      ref={orbitControlsRef}
      maxDistance={8}
      minDistance={8}
      enableZoom={false}
    />
  );
};

const imageLoader = ({ src, width, quality }) => {
  return `https://sabrinamedwinter.com/${src}?w=${width}&q=${quality || 75}`;
};

export const Home = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Page>
      <Hero>
        <HeroSection>
          <div className="hider">
            {/* <h1 className="sitename">Sabrina Medwinter</h1> */}
            <HeroName name={"Sabrina"} />
          </div>
          <p>
            <b>Web developer and 3D artist based in Kingston, Jamaica.</b>
          </p>
          <p>
            {" "}
            I strive to enhance my skills concurrently by creating functional
            resources to benefit the broader community. An ongoing journey of
            exploration drives me to constantly embrace novel technologies and
            refine my capabilities.
          </p>

          <ButtonContainer>
            <Button primary="true" href="/services">
              Need a service?
            </Button>
            <Button href="/blog">Check out the blog</Button>
          </ButtonContainer>
        </HeroSection>
        <HeroSection>
          <CustomCanvas
            flat
            shadows
            dpr={[1, 2]}
            camera={{ position: [2, 0, 12], fov: 15 }}
            style={{
              width: "375px",
              height: "500px",
            }}
          >
            {/* <PerspectiveCamera makeDefault position={[0, 0, 12]} /> */}
            <ambientLight />
            <directionalLight />
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

      {posts.length > 0 && (
        <section id="blog-posts" className="fadeIn--below index-section">
          <h2 className="section-title">Blog</h2>
          <div className="pancake section-content">
            {posts.slice(0, 3).map((post) => (
              <div key={post.slug} className="blog--article pancake-child">
                {post.coverImage && (
                  <div className="image-wrapper">
                    <Image
                      height={0}
                      width={0}
                      loader={({ src }) => src}
                      sizes="100vw"
                      style={{ width: "auto", height: "400px" }}
                      src={post.coverImage}
                      alt={post.alt ? post.alt : ""}
                      className="blog--article__image"
                    />
                  </div>
                )}
                <div className="blog--article__section">
                  {post.date && (
                    <span className="blog--article__date">
                      {format(parseISO(post.date), "MMMM dd, yyyy")}
                    </span>
                  )}
                  <Link
                    as={`/posts/${post.slug}`}
                    key={post.slug}
                    href={`/posts/[slug]`}
                  >
                    <h2 className="blog--article__title">{post.title}</h2>
                  </Link>

                  <p className="blog--article__description">
                    {post.description}
                  </p>

                  {post.tags && (
                    <div className="blog--article__tags">
                      {post.tags.slice(0, 2).map((tag) => (
                        <div
                          className="tag"
                          key={tag}
                          href={"/tags/" + tag.replace(/\s+/g, "+")}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* TODO: Add weeklogs and tutorials */}
          <CustomLink href={`/blog`}>More Posts ⟶</CustomLink>
        </section>
      )}

      <section style={{ width: "100%" }}>
        <h2 className="section-title">Things I've Made</h2>
        <ProjectList />
      </section>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    "date",
    "description",
    "slug",
    "title",
    "coverImage",
    "tags",
  ]);

  return {
    props: { posts },
  };
};

export default Home;
