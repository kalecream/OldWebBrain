import * as React from "react";
import Page from "../containers/layout/page";
import { MediaProfiles } from "../components/socialmedia";
import styled from "@emotion/styled";

const Socials = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
    list-style: none;
`;

export default function Contact() {
  return (
    <Page>
      <section>
        I can be contacted at &nbsp;{" "}
        <a href="mailto:mail@kalecream.com">mail@kalecream.com</a>. Otherwise,
        you can contact me at the following social media platforms:
        <Socials>
          {MediaProfiles.map((profile) => (
            <li key={profile.name}>
              <a href={profile.url} target="_blank" rel="noopener noreferrer">
                {profile.name}
              </a>
            </li>
          ))}
        </Socials>
      </section>
    </Page>
  );
}
