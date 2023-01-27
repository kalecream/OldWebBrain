import React, { useEffect } from "react";

import styles from "../styles/Home.module.css";
import Page from "../containers/layout/page";

import { format, parseISO } from "date-fns";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";

import styled from "@emotion/styled";
import { Colors } from "../styles/colors";

import {
	Button,
	PrimaryButton,
	SecondaryButton,
	Section,
	Container,
	Caption,
} from "../components/global/Basics";
import { ScrollDown } from "../components/global";

import { Model } from "../assets/models/me";

import "animate.css";
import { Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
	OrbitControls,
	Environment,
	PresentationControls,
	PerspectiveCamera,
} from "@react-three/drei";

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

	@media (min-width: 750px) {
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
	color: ${Colors.primary};
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

const HeroButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const HeroSectionImage = styled(Image)`
	width: 70%;
	height: 100%;
	min-height: 300px;
	max-height: 1000px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 1500px) {
		width: 100%;
		height: 50%;
	}

	@media (max-width: 900px) {
		width: 80%;
	}

	@media (max-width: 750px) {
		display: none;
	}
`;

const ArticleContainer = styled(Container)`
	padding: 0 2rem;
	justify-content: space-around;

	& > article {
		display: grid;
		place-items: center;
		min-width: 400px;
		max-width: 450px;
		gap: 0.05 rem;

		& > h2 {
			font-size: 2rem;
			text-align: center;
			letter-spacing: 1px;
			font-weight: 300;
			text-transform: capitalize;
		}

		& p {
			text-align: justify;
		}
	}
`;

const ArticleDate = styled(Caption)`
	font-size: 0.8rem;
	text-align: center;
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
			const { x, y } = state.mouse;
			orbitControlsRef.current.setAzimuthalAngle(angletoRadian(-x * 20));
			orbitControlsRef.current.update();
		}
	});

	useEffect(() => {
		if (!!orbitControlsRef.current) {
			// orbitControlsRef.current.setAzimuthalAngle(angletoRadian(0));
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
				<Hero className={styles.hero}>
					<HeroSection className={styles.heroText}>
						<HeroTitle className="animate__animated animate__slideInLeft">
							Hi <span className={styles.bigEmoji}>👋🏽</span>
						</HeroTitle>
						<HeroParagraph className="animate__animated animate__slideInLeft">
							Thanks for stopping by my website! I'm a generalist from Kingston,
							Jamaica. I'm currently working on improving my web development and
							multimedia skills.
						</HeroParagraph>
						<HeroButtonContainer>
							<PrimaryButton className="animate__animated animate__slideInLeft ">
								<Link href="/services">Commission me</Link>
							</PrimaryButton>
							<SecondaryButton className="animate__animated animate__slideInLeft">
								<Link href="/projects">Contact Me</Link>
							</SecondaryButton>
						</HeroButtonContainer>
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
			<Section id="blog-posts">
				{posts.length > 0 && (
					<>
						<ArticleContainer>
							{posts.map((post) => (
								<article key={post.slug}>
									{post.date && (
										<ArticleDate className="text-sm text-gray-500">
											{format(parseISO(post.date), "MMMM dd, yyyy")}
										</ArticleDate>
									)}
									<h2>
										<Link
											legacyBehavior
											as={`/posts/${post.slug}`}
											href={`/posts/[slug]`}
										>
											<a>{post.title}</a>
										</Link>
									</h2>
									<p className="text-gray-500">{post.description}</p>
								</article>
							))}
						</ArticleContainer>
					</>
				)}
			</Section>
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
