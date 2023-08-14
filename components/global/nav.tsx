import React from "react";
import styled from "@emotion/styled";
import Directory from "../../data/directory";
import { CustomLink } from "./Basics";
import ThemeSwitch from "../navigation/ThemeSwitch";
import { Router, useRouter } from 'next/router';
import AvailableForWork from "@components/navigation/work";
import { MediaProfiles } from "@components/socialmedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DirectoryList = styled.ul`
  right: 0;
  width: fit-content;
  float: right;
  display: flex;
  list-style: none;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

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

interface navProps {
  display?: boolean;
}

const StyledNavigation = styled.nav<navProps>`
  width: 100%;
  margin: 2rem 0;
  justify-content: space-around;
  background-color: var(--background);
  display: ${(props) => (props.display ? "flex" : "none")};
  align-items: center;

  & > :only-child {
    justify-content: end;
  }

  @media screen and (max-width: 425px) {
    margin: 1rem 0;
    flex-wrap: wrap;
    flex-direction: column;
    line-height: 2;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    line-height: 2;

    & > * {
      margin: 0 1rem;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 2rem 0;

    & > * {
      margin: 0 1rem;
    }
  }
`;

const DirectoryListItem = styled.li`
  list-style: none;
  margin-bottom: 0;
`;

export const DirectoryLinks = styled(CustomLink)`
  color: var(--text);
  text-transform: capitalize;
  font-size: 0.8rem;

  &:hover {
    color: var(--primary);
  }
`;

export const SiteName = styled(CustomLink)`
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--primary);

  & hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    & a h1 {
      text-align: center;
    }
  }
`;

const Settings = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;

  * {
    margin: 0 0.5rem;
  }
`;

const SocialMediaList = () => {
  return (
    <ul>
      {MediaProfiles.map((media, index) => (
          <CustomLink href={media.url} target="_blank" rel="noopener" key={index}>
            <FontAwesomeIcon icon={media.icon} color="var(--muted)" />
          </CustomLink>
      ))}
    </ul>
  );
};

export const Navigation: React.FunctionComponent = () => {

  const router = useRouter();

  let style = {
    justifyContent: "flex-end",
    paddingRight: "0",
  };

  return (
    <StyledNavigation display style={style} >
      {router?.pathname !== '/' && <SiteName href="/">KaleCream</SiteName>}
      <DirectoryList>
        {Directory.length > 0
          ? Directory.map((directory, index) => (
              <DirectoryListItem key={index}>
                <DirectoryLinks href={directory.links}>
                  {directory.title}
                </DirectoryLinks>
              </DirectoryListItem>
            ))
          : null}
        <Settings>
        <SocialMediaList />
          <ThemeSwitch />
          {/* <AvailableForWork /> */}
        </Settings>
      </DirectoryList>
      
    </StyledNavigation>
  );
};

export const Footer: React.FunctionComponent = () => {
  return (
    <StyledFooter>
      <div> sabrina medwinter &copy; {new Date().getFullYear()}</div>
    </StyledFooter>
  );
};
