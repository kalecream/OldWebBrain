import styles from "../styles/Home.module.css";
import Page from "../containers/layout/page";
import HeroImage from "../assets/images/Under_Construction.webp";
import styled from "@emotion/styled";
import { Colors } from "../styles/colors";
import Image from "next/image";
import Link from "next/link";
import { ThreeD } from "../assets";
import { Section, Container, Caption } from "../components/global/Basics";

import "animate.css";

import { format, parseISO } from "date-fns";
import { GetStaticProps } from "next";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";

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
	width: 50%;
	display: flex;
	flex-direction: column;
	place-items: center;
	gap: 0.5rem;
	text-align: center;

	@media (max-width: 750px) {
		width: 80%;
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

const HeroPrimaryButton = styled.button`
	border: none;
	background-color: ${Colors.primary};
	text-transform: uppercase;
	font-family: monospace;
	opacity: 0.7;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	& a {
		color: ${Colors.lightShade};
	}

	&:hover {
		font-weight: 600;
		opacity: 1;
	}

	&:hover a {
		color: ${Colors.primary};
	}
`;

const HeroButton = styled.button`
	border: 1px solid ${Colors.primary};
	background-color: ${Colors.lightShade};
	color: ${Colors.darkAccent};
	text-transform: uppercase;
	font-family: monospace;
	opacity: 0.7;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		font-weight: 600;
		opacity: 1;
		border: 1px solid ${Colors.lightShade};
	}

	&:hover a {
		color: ${Colors.primary};
	}
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

const ThreeDRenders = styled(Image)`
	min-width: 300px;
	max-width: 400px;
	object-fit: cover;
	margin: 0 0.5rem;

	@media (max-width: 1500px) {
		width: 20%;
	}

	@media (max-width: 450px) {
		width: 100%;
	}
`;

export const Home = ({ posts }: IndexProps): JSX.Element => {
	return (
		<Page>
			<Section id="home">
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
							<HeroPrimaryButton className="animate__animated animate__slideInLeft ">
								<Link href="/services">Commission a service</Link>
							</HeroPrimaryButton>
							<HeroButton className="animate__animated animate__slideInLeft">
								<Link href="/projects">View my projects</Link>
							</HeroButton>
						</HeroButtonContainer>
					</HeroSection>
					<HeroSection>
						<HeroSectionImage
							className="animate__animated animate__slideInRight"
							src={HeroImage}
							alt="KaleCream"
							width={450}
							height={450}
							placeholder="blur"
							style={{ filter: "grayscale(45%)" }}
						/>
					</HeroSection>
				</Hero>
			</Section>
			<Section>
				<h2>Blog</h2>
				{posts.map((post) => (
					<article key={post.slug} className="mt-12">
						<p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
							{/* {format(parseISO(post.date), "MMMM dd, yyyy")} */}
						</p>
						<h1 className="mb-2 text-xl">
							<Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
								{/* <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
									{post.title}
								</a> */}
							</Link>
						</h1>
						<p className="mb-3">{post.description}</p>
						<p>
							<Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
								{/* <a>Read More</a> */}
							</Link>
						</p>
					</article>
				))}
			</Section>
			{/* <Section>
				<Container>
					{ThreeD.map((ThreeD, index) => (
						<>
							<ThreeDRenders
							className={"animate__animated animate__fadeInUp"}
								key={index}
								src={ThreeD.src}
								alt={""}
								width={1000}
								height={300}
								placeholder="blur"
								blurDataURL={ThreeD.src}
							/>
						</>
					))}
				</Container>
				<p
						style={{
							textAlign: "center",
							margin: "2rem 0 2rem 0",
						}}
					>
						My last three r/Daily3D renders.<br/> I'm working on making at least 52 renders for 2023 to keep up with
						the practice of daily3D.
					</p>
			</Section> */}
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
