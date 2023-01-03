import styles from "../styles/Home.module.css";
import Page from "../containers/layout/page";
import HeroImage from "../assets/images/Under_Construction.webp";
import styled from "@emotion/styled";
import { Colors } from "../styles/colors";
import Image from "next/image";
import Link from "next/link";
import { ThreeD } from "../assets";
import 'animate.css';

const directory = [
	{
		title: "About",
		links: "/about",
	},
	{
		title: "Contact",
		links: "/contact",
	},
	{
		title: "Blog",
		links: "/blog",
	},
	{
		title: "Directory",
		links: "/directory",
	},
];

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
`;

const HeroSection = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	place-items: center;
	gap: 0.5rem;
	text-align: center;

	@media (max-width: 750px) {
		width: 100%;
	}
`;

const HeroTitle = styled.h1`
	font-size: 4rem;
	margin-bottom: 2rem;
	color: ${Colors.lightAccent};

	@media (max-width: 400px) {
		font-size: 3rem;
	}
`;

const HeroParagraph = styled.p`
	max-width: 60rem;
	font-size: 1rem;
	line-height: 1.6rem;
	text-align: justify;
	margin-bottom: 2rem;

	@media (max-width: 400px) {
		font-size: 0.85rem;
		max-width: 100%;
	}
`;

const HeroButton = styled.button`
	padding: 1rem 2rem;
	border-radius: 3px;
	border: 1px solid ${Colors.darkAccent};
	background-color: ${Colors.lightShade};
	font-weight: 400;
	font-size: 0.8rem;
	color: ${Colors.darkAccent};
	text-transform: uppercase;
	font-family: monospace;
	opacity: 0.7;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		font-weight: 600;
		opacity: 1;
	}
`;

const HeroSectionImage = styled(Image)`
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 1500px) {
		width: 100%;
		height: 50%;
	}

	@media (max-width: 750px) {
		display: none;
	}
`;

const ThreeDRenders = styled(Image)`
	width: 30%;
	object-fit: cover;
	margin: 0 0.5rem;
`;

const Caption = styled.p`
	font-size: 0.8rem;
	color: ${Colors.darkAccent};
	text-align: center;
`;

export default function Home() {
	return (
		<Page>
			<section id="home">
				<Hero className={styles.hero}>
					<HeroSection className={styles.heroText}>
						<HeroTitle className={styles.title}>
							Hi <span className={styles.bigEmoji}>👋🏽</span>
						</HeroTitle>
						<HeroParagraph className="animate__animated animate__slideInLeft">
							Thanks for stopping by my website! I'm currently working on my{" "}
							<Link href="/read">reading history page</Link>.
							<br />
							<br />
							My next step will be changing the color scheme of this site to
							something with a little more contrast.
							<br />
						</HeroParagraph>
					</HeroSection>
					<HeroSection className={styles.heroImage } >
						<HeroSectionImage
							src={HeroImage}
							alt="KaleCream"
							width={450}
							height={450}
							placeholder="blur"
							style={{ filter: "grayscale(45%)" }}
						/>
					</HeroSection>
				</Hero>
			</section>
			<section>
				<div className={styles.directory}>
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
							/>
						</>
					))}
					<p
						style={{
							textAlign: "center",
							margin: "2rem 0 2rem 0",
						}}
					>
						My last three r/Daily3D renders.<br/> I'm working on making at least 52 renders for 2023 to keep up with
						the practice of daily3D.
					</p>
				</div>
			</section>
		</Page>
	);
}
