import React from "react";
import styled from "@emotion/styled";
import Directory from "../../data/directory";
import { CustomLink } from "./Basics";
import ThemeSwitch from "../navigation/ThemeSwitch";

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
  position: absolute;
  height: 2rem;
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

// TODO: Desktop navigation
// TODO: Mobile navigation

interface navProps {
  display?: boolean;
}

const StyledNavigation = styled.nav<navProps>`
  top: 0;
  width: 100%;
  height: 2rem;
  display: absolute;
  justify-content: space-around;
  background-color: var(--background);
  display: ${(props) => (props.display ? "flex" : "none")};
  align-items: center;

  @media screen and (max-width: 450px) {
    padding: 1rem 0;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 3rem;
    flex-wrap: wrap;
    flex-direction: column;
  }

  @media screen and (max-width: 1024px) {
    padding: 2rem 5rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 3rem 5rem;
    flex-direction: row;

    & > div {
      width: 50%;
    }
  }
`;

const DirectoryListItem = styled.li`
  list-style: none;

  & > * {
    margin: 2.5rem 0;
  }
`;

const DirectoryLinks = styled(CustomLink)`
  font-weight: 700;
  color: var(--text);
  text-transform: capitalize;
  opacity: 0.7;

  &:hover {
    color: var(--primary);
  }

  @media screen and (min-width: 1024px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
  }
`;

export const SiteName = styled(CustomLink)`
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  color: var(--primary);
  opacity: 0.7;

  & hover {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    & a h1 {
      text-align: center;
    }
  }
`;

export const Navigation: React.FunctionComponent = () => {
  return (
    <StyledNavigation>
      <SiteName href="/">KaleCream</SiteName>
      <DirectoryList>
        {Directory.map((directory, index) => (
          <DirectoryListItem key={index}>
            <DirectoryLinks href={directory.links}>
              {directory.title}
            </DirectoryLinks>
          </DirectoryListItem>
        ))}
      </DirectoryList>
      <ThemeSwitch />
    </StyledNavigation>
  );
};

export const Footer: React.FunctionComponent = () => {
  return (
    <StyledFooter>
      <div>KaleCream Limited &copy; {new Date().getFullYear()}</div>
      <CustomLink href="/legal/terms"> Terms of Service</CustomLink>
    </StyledFooter>
  );
};
