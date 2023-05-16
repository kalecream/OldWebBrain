import styled from "styled-components";
import Link from "next/link";
import { Container } from "./Basics";

export const Tag = styled(Link)`
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--faint);
  color: var(--text);
  font-size: 0.8rem;
  font-weight: 400;
`;

export const PostTags = styled.div`
  width: 100%;

  margin-top: 1.5rem;
  opacity: 0.7;

  & span {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  @media (max-width: 750px) {
    width: 100%;
    margin-top: 3rem;
  }
`;

export const Articles = styled.div`
  padding: 2rem;

  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid var(--faint);
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background-color: var(--faint);
    border-radius: 0.5rem;
    transform: scale(1.01);
  }

  & img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 1rem;
  }

  & span {
    font-size: 0.9rem;
    color: var(--lightgrey);
    text-align: center;
  }

  & h2 {
    color: var(--primary);
    padding: 1rem 0;
    font-size: 1.8rem;
    line-height: 1.2;
    font-weight: 600;
    height: 5rem;
    text-align: center;
  }

  & h2:hover {
    cursor: pointer;
    color: var(--accent);
  }

  & p {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.2rem;
    color: var(--text);
  }

  @media (max-width: 320px) {
    width: 275px;

    & h2 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }

    & p {
      padding: 0;
    }
  }

  @media (min-width: 768px) {
    width: 400px;
    height: fit-content;
    margin-bottom: 1rem;

    h2 {
      font-size: 2rem;
    }
  }
`;

export const ArticleContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  place-items: center;
  justify-items: center;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: baseline;
  }
`;
