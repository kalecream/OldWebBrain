import React, { useEffect } from "react";
import Image from "next/image";

import Page from "../containers/layout/page";

import { format, parseISO } from "date-fns";
import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";

import styled from "@emotion/styled";

import {
  Section,
  Container,
  Button,
  CapsTitle,
} from "../components/global/Basics";
// import { ScrollDown } from "../components/global";

import { Model } from "../assets/models/me";

import "animate.css";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import { MediaProfiles } from "@components/socialmedia";
import LatestProjects from "@components/home/latestProjects";
import OtherProjects from "@components/home/otherProjects";
// import OtherProjects from "../components/home/otherProjects";
// import LatestProjects from "../components/home/latestProjects";

type IndexProps = {
  posts: PostType[];
};

const Hero = styled.section`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const HeroSection = styled.div`
  height: fit-content;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 1000px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 45%;
    margin-bottom: 5rem;
  }

  p {
    line-height: 1.6rem;
    text-align: start;

    @media (max-width: 1000px) {
      width: 20rem;
    }

    @media (min-width: 1000px) {
      width: 30rem;
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

  @media (max-width: 1000px) {
    width: 20rem;
  }

  @media (min-width: 1000px) {
    width: 30rem;
  }
`;

const CustomCanvas = styled(Canvas)`
  @media (min-width: 750px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

const BlogSection = styled.section`
  & h2 {
    font-weight: 400;
    color: var(--accent);
  }

  @media (max-width: 750px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 75%;
  }
`;

const ArticleContainer = styled(Container)`
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  place-items: center;
  height: fit-content;
  gap: 2rem;

  @media screen and (min-width: 750px) {
    max-width: 50rem;
    flex-direction: row;
    align-items: baseline;
  }

  @media screen and (max-width: 750px) {
    padding: auto;
    flex-direction: column;
    justify-content: flex-start;
    justify-items: center;
  }
`;

const Articles = styled.div`
  padding: 2rem;
  width: 300px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid var(--faint);
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background-color: var(--faint);
    border-radius: 0.5rem;
    transform: scale(1.01);
  }

  & img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 1rem;
  }

  & span {
    font-size: 0.9rem;
    color: var(--lightgrey);
  }

  & h2 {
    color: var(--accent);
    padding: 1rem 0;
    font-size: 1.8rem;
    line-height: 1.2;
    font-weight: 600;

    @media (max-width: 750px) {
      font-size: 2rem;
    }
  }

  & h2:hover {
    cursor: pointer;
    color: var(--accent);
  }

  & p {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.2rem;
    color: var(--text);
    height: 50px;
    text-overflow: ellipsis;
  }

  @media (max-width: 750px) {
    width: 400px;
    height: fit-content;
    margin-bottom: 1rem;
  }
`;

const PostTags = styled.div`
  width: 100%;

  margin-top: 1.5rem;
  opacity: 0.7;

  & span {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const Tag = styled(Link)`
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--faint);
  color: var(--text);
  font-size: 0.8rem;
  font-weight: 400;
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
      <Section id="hero">
        <Hero>
          <HeroSection>
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
        {/* <ScrollDown /> */}
      </Section>

      {posts.length > 0 && (
        <BlogSection id="blog-posts">
          <CapsTitle>Blog</CapsTitle>
          <ArticleContainer>
            {posts.slice(0, 9).map((post) => (
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <Articles key={post.slug}>
                  {post.coverImage && (
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
                  )}
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
