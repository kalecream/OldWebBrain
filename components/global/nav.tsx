import React from "react";
import styled from "@emotion/styled";
import Directory from "../../data/directory";
import ThemeSwitch from "../navigation/ThemeSwitch";
import {  useRouter } from 'next/router';
import AvailableForWork from "@components/navigation/work";
import { MediaProfiles } from "@components/socialmedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

const StyledFooter = styled.footer`
  display: flex;
  bottom: 0;
  position: relative;
  height: 3rem;
  font-size: 0.65rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & > * {
    margin-right: 0.5rem;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

const SocialMediaList = () => {
  return (
    <div className="socia-media-list">
      {MediaProfiles.map((media, index) => (
        <Link href={media.url}
          className="social-media"
          target="_blank" rel="noopener" key={index}>
            <FontAwesomeIcon icon={media.icon} color="var(--muted)" />
          </Link>
      ))}
    </div>
  );
};

export const Navigation: React.FunctionComponent = () => {

  const router = useRouter();

  return (
    <nav >
      <div className="directory-list directory-section">
      {router?.pathname !== '/' && <Link className="site-name" href="/">Sabrina</Link>}
        {Directory.length > 0
          ? Directory.map((directory, index) => (
              <div className="directory-list"  key={index}>
                <Link className="directory-link" name={directory.title} href={directory.links}>
                  {directory.title}
                </Link>
              </div>
            ))
          : null}
        </div>
        <div className="settings directory-section">
        <SocialMediaList />
          <ThemeSwitch />
          {/* <AvailableForWork /> */}
        </div>
    </nav>
  );
};

export const Footer: React.FunctionComponent = () => {
  return (
    <StyledFooter>
      <div> sabrina medwinter &copy; {new Date().getFullYear()}</div>
    </StyledFooter>
  );
};
