import "animate.css";
import styled from "@emotion/styled";
import Link from "next/link";

// Layout
export const Section = styled.section`
  width: 100vw;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const HalfColumn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 0.5rem;
  text-align: center;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

// TYprography
export const Caption = styled.p`
  font-size: 0.8rem;
  color: var(--caption);
  text-align: center;
`;

export const CustomLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
  transition: color 0.15s;

  &:hover {
    color: var(--secondary);
    transform: scale(1.05);
    transform-origin: center;
    transition: color ease-in-out 0.15s;
  }
`;

// Components

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
}

const primaryBackground = `radial-gradient(100% 100% at 100% 0, var(--primary) 0, var(--secondary) 100%)`;
const secondaryBackground = `var(--background)`;
const boxShadow = `rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset`;
const border = `2px solid var(--secondary)`;

export const Button = styled(Link)<ButtonProps>`
  align-items: center;
  background-image: ${(props) =>
    props.primary ? primaryBackground : secondaryBackground};
  border: ${(props) => (props.primary ? "none" : border)};
  border-radius: 10px;
  box-shadow: ${(props) => (props.primary ? boxShadow : "none")};
  box-sizing: border-box;
  color: ${(props) => (props.primary ? "white" : "var(--secondary)")};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  max-width: 500px;
  line-height: 1;
  overflow: hidden;
  padding: 1rem 2rem;
  position: relative;
  transition: box-shadow 0.15s, background-image 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
    background-image: radial-gradient(
      100% 100% at 100% 0,
      var(--secondary) 0,
      var(--primary) 100%
    );
    color: ${(props) => (props.primary ? "white" : "var(--secondary)")};
  }
`;

export const Card = styled.div`
	width: 33%;
	min-width: 375px;
	max-width: 500px;
	min-height: 450px;
	display: grid;
	justify-content: center;
	align-self:auto;
	gap: 0.2rem;
	padding: 2rem;
	border: 3px solid #fff;
	border-radius: 1rem;
	box-shadow: ${boxShadow};
	transition: box-shadow 0.5s ease-in-out;
	background-color: var(--primary);
    background-image: 
	linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.45) )
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	&:hover {
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
	}

	& p {
		padding: 1rem;
		text-align: start;
		color: var(--background);
		color: var(--background);
		font-size: 0.8rem;
	}

	& a {
		width: 100%;
	}
`;

export const CardTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: 900;
  font-family: "Playfair Display", serif;
  text-align: center;
  color: var(--background);
  word-spacing: 100vw;
  line-height: 1.2;
  text-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.5);
`;
