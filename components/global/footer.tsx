import * as React from "react";
import styled from "@emotion/styled";
import { Colors } from "../../styles/colors";

const StyledFooter = styled.footer`
  display: absolute;
  bottom: 0;
  font-size: 0.55rem;
`;

const FooterText = styled.p`
  text-align: center;
  margin: 0.5rem;
`;

export const Footer: React.FunctionComponent = () => {
  return (
    <StyledFooter>
      <FooterText id="copyright">
        &copy; {new Date().getFullYear()} KaleCream Limited. All rights
        reserved.
      </FooterText>
    </StyledFooter>
  );
};
