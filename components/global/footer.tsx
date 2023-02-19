import styled from "@emotion/styled";
import { CustomLink } from "./Basics";

const StyledFooter = styled.footer`
  margin-top: 2rem;
  display: flex;
  bottom: 0;
  height: 3rem;
  font-size: 0.65rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    margin-right: 0.5rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 0.05rem 5rem;
  }

  @media screen and (max-width: 768px) {
    margin: 0.05rem 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: 450px) {
    margin: 0.5rem 0;
    padding: 1rem 0;
  }
`;

export const Footer: React.FunctionComponent = () => {
  return (
    <StyledFooter>
      <div>KaleCream Limited &copy; {new Date().getFullYear()}</div>
      <CustomLink href="/legal/terms"> Terms of Service</CustomLink>
    </StyledFooter>
  );
};
