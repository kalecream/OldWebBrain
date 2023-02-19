import styled from "@emotion/styled";
import { CustomLink } from "./Basics";

const StyledFooter = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4rem;
  font-size: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & > * {
    margin-right: 0.5rem;
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
