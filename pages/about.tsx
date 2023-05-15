import { Section } from "@components/global";
import Page from "../containers/layout/page";
import CurrentReads from "@components/about/currentReads";
import {
  BacklogGraph,
  BookShelf,
  GenreRadarChart,
} from "@components/about/backlogGraph";
import Books from "@data/books";

export const About = () => {
  return (
    <Page>
      <Section style={{ marginTop: "5rem", gap: "3rem" }}>
        <h1>About</h1>
        <CurrentReads />
        <BacklogGraph books={Books} />
        <GenreRadarChart books={Books} />
        <BookShelf books={Books} />
      </Section>
    </Page>
  );
};

export default About;
