import styles from "../styles/Home.module.css";
import Page from "../containers/layout/page";
import HeroImage from "../assets/images/Under_Construction.webp";
import styled from "@emotion/styled";
import { Colors } from "../styles/colors";
import Image from "next/image";

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

export default function Home() {
	return (
		<Page>
			<section id="home">
				<Hero className={styles.hero}>
					<HeroSection className={styles.heroText}>
						<HeroTitle className={styles.title}>
							Hi <span className={styles.bigEmoji}>👋🏽</span>
						</HeroTitle>
						<HeroParagraph>
							I'm still in the process of porting over posts and experiments.<br/><br/>
              
              My next step will be changing the color scheme and adding a media page to hold my past read books as I will be removing my <a href="https://www.goodreads.com/user/show/32855839-sabrina">Goodreads</a> & Storygraph accounts in short order.
							<br />
							<br />
              Goodreads was only useful to me while their API was alive, now our ratings only serve to help sell books on Amazon. Storygraph started out looking cool, but now it looks bland and the same as every site ever. They gave me the idea that I could download my Goodreads data and interpret it in a way that would be useful to me.
              <br />
							<br />
							Thanks for stopping by!
						</HeroParagraph>
					</HeroSection>
					<HeroSection className={styles.heroImage}>
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
		</Page>
	);
}
