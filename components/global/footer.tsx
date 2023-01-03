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
  font-size: 0.6rem;
  display: flex;
  justify-content: space-between;
  margin: 0.1rem 3rem;
  padding: 0.5rem 0;
  border-top:  1px solid #eaeaea;

  @media screen and (max-width: 768px) {
		margin: 0.05rem 1rem;
		flex-wrap: wrap;
	}
`;

const FooterColumnHeader = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  gap: 0.2rem;
  margin: 0 0.5rem;

  @media screen and (max-width: 768px) {
    margin: 0.05rem 0.5rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
`;

const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const CustomImage = styled(Image)`
  transition: 0.5s;
  transform: rotate(25deg);

  &:hover {
    transform: rotate(0deg);
  }
`;

export const Footer: React.FunctionComponent = () => {
  let LastUpdateDate = new Date();
  LastUpdateDate.setDate(LastUpdateDate.getDate() - 1);
  let LastUpdate = LastUpdateDate.toDateString();
  return (
    <StyledFooter>
      <FooterColumn>
        <SocialsContainer>
        {MediaProfiles.map((profile) => (
          <a rel="me" href={profile.url} key={profile.name}>
            <CustomImage width={24} alt={profile.name} src={Brands[profile.name]}   />
          </a>
        ))}
        </SocialsContainer>
        <FooterText id="copyright">
        KaleCream Limited &copy; {new Date().getFullYear()}
        </FooterText>
      </FooterColumn>
      <FooterColumn>
        <FooterText>
          <a href="/legal/terms">Terms of Service</a>
        </FooterText>
      </FooterColumn>
    </StyledFooter>
  );
};
