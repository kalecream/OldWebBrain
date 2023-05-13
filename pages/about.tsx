import { Section } from "@components/global";
import Page from "../containers/layout/page";
import CurrentReads from "@components/about/currentReads";

export const About = () => {
  return (
    <Page>
      <Section style={{ marginTop: "5rem" }}>
        <h1>About</h1>
        <CurrentReads />
      </Section>
    </Page>
  );
};

export default About;
