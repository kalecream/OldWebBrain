import React from "react";
import styled from "@emotion/styled";
import Directory from "../../data/directory";
import ThemeSwitch from "./ThemeSwitch";
import { useRouter } from "next/router";
import AvailableForWork from "src/components/navigation/work";
import { MediaProfiles } from "src/components/socialmedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { FaBars } from "react-icons/fa6";

const StyledFooter = styled.footer`
  display: flex;
  bottom: 0;
  position: relative;
  height: 3rem;
  font-size: 0.65rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & > * {
    text-transform: uppercase;
    font-weight: 500;
  }
`;

const Hamburger = styled(FaBars)`
  display: none;
  color: var(--muted);
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SocialMediaList = () => {
  return (
    <div className="socia-media-list">
      {MediaProfiles.map((media, index) => (
        <Link
          href={media.url}
          className="social-media"
          target="_blank"
          rel="noopener"
          key={index}
        >
          <FontAwesomeIcon icon={media.icon} color="var(--muted)" />
        </Link>
      ))}
    </div>
  );
};

export const Navigation: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <nav>
        <div className="directory-list directory-section">
          {router?.pathname !== "/" && (
            <Link className="site-name" href="/">
              Sabrina
            </Link>
          )}
          {Directory.length > 0
            ? Directory.map((directory, index) => (
                <div className="directory-list" key={index}>
                  <Link className="directory-link" href={directory.links}>
                    {directory.title}
                  </Link>
                </div>
              ))
            : null}
        </div>
        <div className="settings directory-section">
          <ThemeSwitch />
          {/* <AvailableForWork /> */}
        </div>
    </nav>
  );
};

export const Footer: React.FunctionComponent = () => {
  return (
    <StyledFooter>
      <SocialMediaList />
      <div> sabrina medwinter &copy; {new Date().getFullYear()}</div>
    </StyledFooter>
  );
};
