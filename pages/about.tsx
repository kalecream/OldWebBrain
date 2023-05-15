import { Section } from "@components/global";
import Page from "../containers/layout/page";
import CurrentReads from "@components/about/currentReads";
import {
  BacklogGraph,
  BookShelf,
  GenreRadarChart,
} from "@components/about/backlogGraph";
import Books from "@data/books";
import styled from "@emotion/styled";

const AboutParagraph = styled.div`
margin: 0 auto;
max-width: 40rem;
text-align: justify;
position: relative;
`;

const AboutImage = styled.img`
  float: left;
  max-width: 300px;
  margin: auto;
 margin-right: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const About = () => {
  return (
    <Page>
      <Section style={{ marginTop: "5rem", gap: "3rem" }}>
        <h1>About</h1>
        <AboutParagraph>
        <p>Hey there, internet wanderer! I'm Sabrina aka KaleCream, but you can call me whatever floats your digital boat.</p>

          <p>You see, my story begins in the ancient times of the internet, crafting Tumblr pages and forum themes. Yep, you heard right! I was chiseling away at code blocks when cat videos were the pinnacle of online entertainment.</p>

            <AboutImage alt="cats on a couch" src="/cats.png" />

          <p>I made this about page because showing you my personality thorugh the things I like is much easier than describing it. I've personally always disliked that tell me a bit about yourself (in a personal environment)</p>
          <p>What's my personality like, you ask? Well, imagine if your favorite playlist, Netflix marathon, and book collection had a baby - that's me! But don't take my word for it. Dive into the treasure trove of media below. It's like a mixtape of my soul.
          </p>
          <p><b>Why KaleCream?</b> I liked making Kale smoothies and just decided to name myself that on the internet.</p>
        </AboutParagraph>
        
        <CurrentReads />
        <BacklogGraph books={Books} />
        <GenreRadarChart books={Books} />
        <BookShelf books={Books} />
      </Section>
    </Page>
  );
};

export default About;
