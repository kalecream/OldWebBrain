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
  justify-content: space-around;
  background-color: var(--background);
  display: ${(props) => (props.display ? "flex" : "none")};
  align-items: center;

  @media screen and (max-width: 450px) {
    padding: 1rem 0;
    flex-wrap: wrap;
    flex-direction: row;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 3rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    padding: 2rem 3rem;
    flex-direction: row;
  }
`;

const DirectoryListItem = styled.li`
  list-style: none;

  & > * {
    margin: 0 0.5rem;
  }
`;

export const DirectoryLinks = styled(CustomLink)`
  color: var(--text);
  text-transform: capitalize;
  opacity: 0.7;
  font-size: 0.8rem;

  &:hover {
    color: var(--primary);
  }
`;

export const SiteName = styled(CustomLink)`
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 2rem;
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
    <StyledNavigation display>
      <SiteName href="/">KaleCream</SiteName>
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
