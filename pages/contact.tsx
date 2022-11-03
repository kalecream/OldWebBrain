import * as React from "react";
import Page from "../containers/layout/page";
import { MediaProfiles } from "../components/socialmedia";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Socials = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: left;
    gap: 1rem;
    margin: 1rem 0;
    list-style: none;
`;

export default function Contact() {
  return (
    <Page>
      <section>
        I can be contacted at {" "}
        <a href="mailto:mail@kalecream.com">mail@kalecream.com</a>.<br/><br/> Otherwise,
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
