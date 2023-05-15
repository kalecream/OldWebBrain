import React, { useEffect } from "react";
// import Image from "next/image";

import Page from "../containers/layout/page";

import { format, parseISO } from "date-fns";
import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";
import styled from "@emotion/styled";

import { Section, Button, CapsTitle } from "../components/global/Basics";
import { Tag, PostTags, Articles, ArticleContainer } from "@components/global";

import { ScrollDown } from "../components/global";

import { Model } from "../assets/models/me";

import "animate.css";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import { MediaProfiles } from "@components/socialmedia";
import LatestProjects from "@components/home/latestProjects";
import OtherProjects from "@components/home/otherProjects";

type IndexProps = {
  posts: PostType[];
};

const Hero = styled(Section)`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  place-items: center;

  @media (max-width: 768px) {
    padding-top: 8rem;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    padding-top: 10rem;
    margin: 0 auto;

    & > div:first-of-type {
      width: 40%;
    }

    & > div:last-of-type {
      width: 25%;
    }
  }
`;

const HeroSection = styled.div`
  height: auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  place-items: center;

  & h1 {
    margin-bottom: 2rem;
    color: var(--primary);
  }

  p {
    line-height: 1.6rem;
    text-align: start;
    padding: 0;
  }

  @media (max-width: 1024px) {
    width: 100%;

    p {
      width: 80%;
      max-width: 25rem;
    }
  }

  @media (min-width: 1024px) {
    width: 35%;

    div {
      width: 60%;
    }

    p {
      max-width: 35rem;
    }
  }
`;

const ButtonContainer = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
    justify-content: center;
  }

  @media (min-width: 768px) {
    width: 30rem;
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

const BlogSection = styled.section`
  width: 100%;
  & h2 {
    font-weight: 400;
    color: var(--primary);
    opacity: 1;
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
        maxDistance={8}
        minDistance={8}
        enableZoom={false}
      />
    </>
  );
};

export const Home = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Page>
      <Hero>
        <HeroSection>
          <h1>KaleCream</h1>
          <p className="animate__animated animate__slideInUp">
            Web Developer + 3D Artist
          </p>
          <p className="animate__animated animate__slideInUp">
            I'm currently living in Kingston, Jamaica working on improving my
            web development and multimedia skills.
          </p>
          <p className="animate__animated animate__slideInUp">
            I'm focused on building, improving and maintaining simple, useful
            tools for myself and others.
          </p>
          <p className="animate__animated animate__slideInUp">
            My current project is <q>Rougelike Reality</q>, a customisation of
            my <Link href="https://obsidian.md/">Obsidian vault </Link> to
            tackle life like the rougelike it is.
          </p>
          <p className="animate__animated animate__slideInUp">
            This website is actively under construction.
          </p>
          <ButtonContainer className="animate__animated animate__slideInUp">
            {MediaProfiles.map((profile) => (
              <Button href={profile.url}>{profile.name}</Button>
            ))}
          </ButtonContainer>
        </HeroSection>
        <HeroSection>
          <CustomCanvas
            className="animate__animated animate__slideInRight"
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
        <BlogSection id="blog-posts">
          <CapsTitle>Blog</CapsTitle>
          <ArticleContainer>
            {posts.slice(0, 9).map((post) => (
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <Articles key={post.slug}>
                  {/* {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      width={300}
                      height={300}
                      objectFit="cover"
                      layout="responsive"
                      priority={true}
                      alt=""
                      unoptimized={true}
                    />
                  )} */}
                  {post.date && (
                    <span>{format(parseISO(post.date), "MMMM dd, yyyy")}</span>
                  )}
                  <h2>{post.title}</h2>

                  <p>
                    <span>{post.description}</span>
                  </p>

                  {post.tags && (
                    <PostTags>
                      <span>
                        {post.tags.map((tag) => (
                          <Tag href={"/tags/" + tag.replace(/\s+/g, "+")}>
                            {tag}
                          </Tag>
                        ))}
                      </span>
                    </PostTags>
                  )}
                </Articles>
              </Link>
            ))}
          </ArticleContainer>
        </BlogSection>
      )}

      <LatestProjects />
      <OtherProjects />
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
