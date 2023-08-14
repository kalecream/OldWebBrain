import { useEffect, useRef } from "react";
import Page from "../containers/layout/page";

import { format, parseISO } from "date-fns";
import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";
import styled from "@emotion/styled";

import { Section, Button, CapsTitle, CustomLink } from "../components/global/Basics";

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

    & > div:first-of-type {
      width: 40%;
    }

    & > div:last-of-type {
      width: 20%;
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
  animation: fadeInFromBelow 1s ease-in-out;

  p {
    line-height: 1.6rem;
    text-align: start;
    padding: 0;
  }

  @media (max-width: 1024px) {

    p {
      width: 80%;
      max-width: 25rem;
    }
  }

  @media (min-width: 1024px) {

    div {
      width: 60%;
    }

    p {
      max-width: 35rem;
    }
  }

  @keyframes fadeInFromBelow {
    0% {
      opacity: 0;
      transform: translateY(2rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }

`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 70%;
    max-width: 30rem;
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

const imageLoader  = ({ src, width, quality }) => {
  return `https://sabrinamedwinter.com/${src}?w=${width}&q=${quality || 75}`
}

export const Home = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Page>
      <Hero>
        <HeroSection >
          <div className="hider">
          <h1 className="sitename">Sabrina Medwinter</h1>
          </div>
          <p >
          I'm a web developer and 3D artist based in Kingston, Jamaica. I strive to enhance my skills in these fields while creating practical tools for both myself and others. I'm always learning and trying out new technologies to improve my work.
          </p>
          
          <ButtonContainer >
            <Button primary href="/services">Need a service?</Button>
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
          <CapsTitle >Blog</CapsTitle>
          <div className="pancake section-content">
            {posts.slice(0, 3).map((post) => (
                <div key={post.slug} className="blog--article pancake-child">
                {/* {post.coverImage && (
                  <div className="image-wrapper">
                    <Image
                      loader={imageLoader}
                      loading="lazy"
                      src={post.coverImage}
                      width={200}
                      height={200}
                      alt={ post.alt ? post.alt : '' }
                      className="blog--article__image"
                    />
                    </div>
                  )} */}
                  {post.date && (
                    <span className="blog--article__date">{format(parseISO(post.date), "MMMM dd, yyyy")}</span>
                  )}
                    <Link as={`/posts/${post.slug}`} key={post.slug} href={`/posts/[slug]`}><h2 className="blog--article__title">{post.title}</h2></Link>

                  <p className="blog--article__description">
                    {post.description}
                  </p>

                  {/* {post.tags && (
                    <div className="post-tags">
                      <span>
                        {post.tags.slice(0,2).map((tag) => (
                          <div className="post-tag" key={tag} href={"/tags/" + tag.replace(/\s+/g, "+")}>
                            {tag}
                          </div>
                        ))}
                      </span>
                    </div>
                  )} */}
                  <div className="links">
                  </div>
                </div>
              
            ))}
          
          </div>
          {/* TODO: Add weeklogs and tutorials */}
            <CustomLink href={`/blog`}>More Posts ⟶</CustomLink>
        </section>
      )}

      <section >
        <CapsTitle >Things I've Made</CapsTitle>
        <ProjectList />
        {/* 
        TODO: fix image displaying on hover
         */}
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
