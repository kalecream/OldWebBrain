import * as React from "react";
import styled from "@emotion/styled";
import { Colors } from "../../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MediaProfiles } from "../socialmedia";
import { Brands } from "../../assets";
import Image from "next/image";

const StyledFooter = styled.footer`
  display: absolute;
  bottom: 0;
  font-size: 0.55rem;
  display: flex;
  justify-content: space-between;
  margin: 0.2rem 4rem;
`;

const FooterText = styled.p`
  text-align: center;
  float:left;
`;

const SocialsContainer = styled.div`
  display: flex;
  width: 5%;
  align-items: center;
  justify-content: space-between;
`;

const CustomImage = styled(Image)`
  transition: 0.5s;
  transform: rotate(25deg);

  &:hover {
    transform: rotate(0deg);
  }
`;

export const Footer: React.FunctionComponent = () => {
  return (
    <StyledFooter>
      <FooterText id="copyright">
      KaleCream Limited &copy; {new Date().getFullYear()} —  <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">BY-NC-SA 4.0</a>
      </FooterText>
      <SocialsContainer>
        {MediaProfiles.map((profile) => (
          <a href={profile.url} key={profile.name}>
            <CustomImage alt={profile.name} src={Brands[profile.name]}   />
          </a>
        ))}
      </SocialsContainer>
    </StyledFooter>
  );
};
