import * as React from "react";

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
import { ScrollDown } from "../components/global/scrollDown";

import { Model } from "../assets/models/me";

import "animate.css";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
	OrbitControls,
	Environment,
	PresentationControls,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

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
	width: 90%;
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

export const Home = ({ posts }: IndexProps): JSX.Element => {
	return (
		<Page>
			<Section>
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
								<Link href="/services">Commission a service</Link>
							</PrimaryButton>
							<SecondaryButton className="animate__animated animate__slideInLeft">
								<Link href="/projects">View my projects</Link>
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
							<OrbitControls maxDistance={9} minDistance={8} /> 
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
								<Model position={[0.025, -0.9, 0]} rotation={[0.1, -0.75, 0]} />
							</Suspense>
						</CustomCanvas>
					</HeroSection>
				</Hero>
				<ScrollDown  />
			</Section>
			<Section>
				<Container>
					{posts.map((post) => (
						<article key={post.slug}>
							{/* <p >
								{format(parseISO(post.date), "MMMM dd, yyyy")}
							</p><p >
								{format(parseISO(post.date), "MMMM dd, yyyy")}
							</p> */}
							<h1 className="mb-2 text-xl">
								<Link
									legacyBehavior
									as={`/posts/${post.slug}`}
									href={`/posts/[slug]`}
								>
									<a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
										Test
										{post.title}
									</a>
								</Link>
							</h1>
							<p className="mb-3">{post.description}</p>
						</article>
					))}
				</Container>
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
