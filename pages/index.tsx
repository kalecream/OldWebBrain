
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

  @media (max-width: 1100px) {
    width: 100%;
    display: grid;
    place-items: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  color: ${Colors.lightAccent};

  @media (max-width: 400px) {
    font-size: 3rem;
  }
`;

const HeroParagraph = styled.p`
  max-width: 40rem;
  font-size: 1.1rem;
  text-align: justify;
  padding: 0 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1100px) {
    max-width: 100%;
  }

  @media (max-width: 400px) {
    font-size: 0.85rem;
    max-width: 90%;
  }
`;

export default function Home() {
  return (
    <Page>

        <section id="home">
          <Hero className={styles.hero}>
            <HeroSection className={styles.heroText}>
              <HeroTitle className={styles.title}>Hi <span className={styles.bigEmoji}>👋🏽</span></HeroTitle>
              <HeroParagraph>
                I'm still in the process of porting over posts and experiments. Please free to check out <a href="https://github.com/kalecream"> my code experiments</a> or <a href="https://deviantart.com/kalecream">my art experiments</a> while I continue setting up my website.
              </HeroParagraph>
              <HeroParagraph>
                If you're trying to find me on the web, I'm available on <a href="https://twitter.com/kalecream">Twitter</a> and I run my own mastodon instance at <a rel="me" href="https://social.kalecream.com/@sab">social.kalecream.com</a>.
              </HeroParagraph>
            </HeroSection>
            <HeroSection className={styles.heroImage}>
              <Image src={HeroImage} alt="KaleCream" width={400} height={400} placeholder="blur" />
            </HeroSection>
          </Hero>
        </section>
    </Page>
  );
}
