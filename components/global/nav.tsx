import * as React from "react";
import styles from "../../styles/nav.module.css";
import styled from "@emotion/styled";
import { Colors } from '../../styles/colors';

interface NavProps {
  title: string;
  links: string;
}

const StyledNavigation = styled.nav`
  top: 0;
  width: 100%;
  padding: 0.05rem 4rem;
  background-color: ${Colors.lightShade};
  position: sticky;
  justify-content: space-between;
  display: flex;
  align-items: center;
  z-index: 1;

  @media screen and (max-width: 768px) { 
    padding: 0.05rem 1rem;
  }
`;

const DirectoryList = styled.ul`
  right: 0;
  width: 66%;
  float:right;
  display: flex;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const DirectoryListItem = styled.li`
  margin: 0 1rem;
`;

const DirectoryLinks = styled.a`
  font-weight: 300;
  font-size: 0.75rem;
  opacity: 0.7;

  * hover {
    font-weight: 600;
    opacity: 1;
  }
`;

const SiteName = styled.a`
  padding: 0.75rem 0 !important;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ThemeToggle = styled.button`
  display: flex;
  cursor: pointer;
  height: 30px;
  width: 50px;
  border: 3px solid var(--color-black);
  margin-left: auto;
  position: relative;
  background-color: var(--color-primary);
  border-radius: 1rem;
  transform: rotate(-75deg);

  &:active {
    animation: switchColor 1s linear;
  }

  &:before {
    content: '☀️';
    z-index: 2;
    position: absolute;
    font-size: 0.8rem;
    top: 0.35rem;
    left: 1.65rem;
    transition-duration: 0.4s;
  }

  &:after{
    content: '';
    font-size: 0.9rem;
    position: absolute;
    height: 28px;
    width: 29px;
    top: -2px;
    left: 20px;
    background-color: var(--color-black);
    border-radius: 50%;
    border: none;
    transition-duration: 0.4s;
  }
`;

export const Navigation: React.FunctionComponent = () => {

  const directory = [
    {
      title: "About",
      links: "/about",
    },
    {
      title: "Projects",
      links: "/directory",
    },
  ];

  function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark");
  }

  return (
    <StyledNavigation className={styles.nav}>
      <DirectoryList>
        {directory.map((directory, index) => (
          <DirectoryListItem key={index}>
            <DirectoryLinks href={directory.links}>{directory.title}</DirectoryLinks>
          </DirectoryListItem>
        ))}
      </DirectoryList>
      <div className={styles.siteName}>
        <SiteName href="/">KaleCream</SiteName>
      </div>
      {/* <div className={styles.settings}>
        <ThemeToggle id="theme-toggle" className={styles.themeToggle}/>
      </div> */}
    </StyledNavigation>
  );
};
