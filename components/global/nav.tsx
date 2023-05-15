import React from "react";
import styled from "@emotion/styled";
import Directory from "../../data/directory";
import { CustomLink } from "./Basics";
import ThemeSwitch from "../navigation/ThemeSwitch";
import { useRouter } from 'next/router';

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

  & > :only-child {
    justify-content: end;
  }

  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
    flex-direction: row;
    line-height: 1;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 3rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    padding: 2rem 0;
    flex-direction: row;

    & > * {
      margin: 0 1rem;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 2rem;

    & > * {
      margin: 0 2rem;
    }
  }
`;

const DirectoryListItem = styled.li`
  list-style: none;
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
`;

export const Navigation: React.FunctionComponent = () => {
  const router = useRouter();

  let style = {
    justifyContent: "center",
    paddingRight: "0",
  };

  if (router.pathname === '/') {
    style.justifyContent = "flex-end";
  }
  else if (router.pathname !== '/')
  {
    style.justifyContent = "center";
    }
  
  return (
    <StyledNavigation display style={style}>
      {
        // if url root is / then don't display, else display
        router.pathname !== "/" ? <SiteName href="/">KaleCream</SiteName>: null
      }
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
          <Settings><ThemeSwitch /></Settings>
      </DirectoryList>
      
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
