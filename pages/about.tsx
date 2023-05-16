import styled from "@emotion/styled";
import { Page } from "containers/layout";
import { Section } from "@components/global";
import CurrentReads from "@components/about/currentReads";
import { BacklogGraph } from "@components/about/backlogGraph";
import Books from "@data/books";
import { use, useEffect, useState } from "react";

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
  const [Percentage, setPercentage] = useState([0, 0]);
  
  useEffect(() => {

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
  
    setPercentage([FictionPercentage, NonFictionPercentage]);
  }, []);

  let genreCount: { [genre: string]: number } = {};

  Books.forEach((book) => {
    if (book.genre) {
      book.genre.forEach((genre: string) => {
        if (genre !== 'Fiction' && genre !== 'Non-Fiction') {
          if (!genreCount[genre]) {
            genreCount[genre] = 1;
          } else {
            genreCount[genre]++;
          }
        }
      });
    }
  });

  let topGenres = Object.entries(genreCount)
  .sort(([,a], [,b]) => b - a)
  .slice(0, 10)
  .map(([genre,]) => genre)
  .join(', ');

  return (
    <Page>
      <Section style={{ marginTop: "5rem", gap: "3rem" }}>
        <h1>About</h1>
        <AboutParagraph>
        <p>Hey there, internet wanderer! I'm Sabrina aka KaleCream, but you can call me whatever floats your digital boat.</p>

          <p>You see, my story begins in the near ancient times of the internet, crafting Tumblr pages and forum themes. Yep, you heard right! I was chiseling away at code blocks when cat videos were the pinnacle of online entertainment.</p>

           <AboutImage src={"/cats.png"} /> 

          <p>I made this about page because showing you my personality thorugh the things I like is personally preferable to describing it. I've always disliked that tell me a bit about yourself in a personal environment.</p>
          <p>What's my personality like, you ask? Well, imagine if your favorite playlist, Netflix marathon, and book collection had a baby - that's me! But don't take my word for it. Dive into the treasure trove of media below. It's like a mixtape of my soul.
          </p>
          <p><b>Why KaleCream?</b> I liked making Kale smoothies and just decided to name myself that on the internet.</p>

          <h2>Books</h2>

          <p>I like to read to learn about the world around me or get laughs. A lot. I currently have <b>{Books.length} books in my library</b>, and I'm always looking for more. I read about {Percentage[0].toFixed(0)}% fiction and {Percentage[1].toFixed(0)}% non-fiction. I'm current reading {Books.filter((book) => book.status === "Reading").length} books, which you can see below. There are book topics that I like more than others. My most frequently read book tags are: <b>{topGenres}</b>. </p> 

          <CurrentReads />
          <p>This graph below is my book status backlog for the past year. This is relative to this month and ignores book from before then to ensure that I'm keeping my desired reading pace.</p>
          <BacklogGraph />
        </AboutParagraph>
      </Section>
    </Page>
  );
};

export default About;
