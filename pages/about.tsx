import styled from "@emotion/styled";
import { Page } from "containers/layout";
import { Section } from "@components/global";
import CurrentReads from "@components/about/currentReads";
import { BacklogGraph } from "@components/about/backlogGraph";
import Books from "@data/books";

const AboutParagraph = styled.div`
margin: 0 auto;
max-width: 40rem;
text-align: justify;
`;

const AboutImage = styled.img`
  float: left;
  max-width: 300px;
  margin: auto;
 margin-right: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;


export const About = () => {

    const Fiction = Books.filter(
      (book) =>
        book.genre.includes("Fiction") && !book.genre.includes("Non-Fiction")
    );

    const NonFiction = Books.filter(
      (book) =>
        book.genre.includes("Non-Fiction") && !book.genre.includes("Fiction")
    );

    const FictionPercentage = (Fiction.length / Books.length) * 100;
    const NonFictionPercentage = (NonFiction.length / Books.length) * 100;


  return (
    <Page>
      <Section style={{ marginTop: "5rem", gap: "3rem" }}>
        <h1>About</h1>
        <AboutParagraph>
        <p>Hey there, internet wanderer! I'm Sabrina aka KaleCream, but you can call me whatever floats your digital boat.</p>

          <p>You see, my story begins in the ancient times of the internet, crafting Tumblr pages and forum themes. Yep, you heard right! I was chiseling away at code blocks when cat videos were the pinnacle of online entertainment.</p>

           <AboutImage ref={"/cats.png"} /> 

          <p>I made this about page because showing you my personality thorugh the things I like is much easier than describing it. I've personally always disliked that tell me a bit about yourself in a personal environment</p>
          <p>What's my personality like, you ask? Well, imagine if your favorite playlist, Netflix marathon, and book collection had a baby - that's me! But don't take my word for it. Dive into the treasure trove of media below. It's like a mixtape of my soul.
          </p>
          <p><b>Why KaleCream?</b> I liked making Kale smoothies and just decided to name myself that on the internet.</p>

          <h2>Books</h2>

          <p>I like to read to learn about the world around me or get laughs. A lot. I have <b>{Books.length} books in my library</b>, and I'm always looking for more. I read {FictionPercentage.toFixed(2)}% fiction and {NonFictionPercentage.toFixed(2)}% non-fiction. I'm current reading {Books.filter((book) => book.status === "Currently Reading").length} books. There are book topics that I like more than others. My most frequently read book topics are: {""}. </p> 

          <CurrentReads />
          <p>This is a graph of my book status backlog for the past year.</p>
          <BacklogGraph />
        </AboutParagraph>
      </Section>
    </Page>
  );
};

export default About;
