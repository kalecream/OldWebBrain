import * as React from "react";
import Page from "../containers/layout/page";
import { LightTable } from "../assets";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImageData} from "next/image";
import Image from "next/image";

const PhotoGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const CustomImage = styled(Image)`
    border-radius: 5px;
    filter: grayscale(100%);
    transition: filter 0.5s ease-in-out;

    &:hover{
        filter: grayscale(0%);}
`;

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('../public/img/light_table','')] = r(item); });
  return images;
}

const images = importAll(require.context('../public/img/light_table', false, /\.(png|jpe?g|svg)$/));

export const LightTablePage = () => {
  return (
    <Page>
      <h1>Light Table</h1>
      <small style={{padding: '2rem'}}>I am forgoing Instagram to make a yearly photo-journal on this page. There won't be much for 2022. <i>This is a work in progress</i> which does not support alt text or image grouping at the moment</small>
      <PhotoGrid>  
        {Object.entries(images).map(([key, value]) => (
          <CustomImage
            key={key}
            src={value}
            width={250}
            height={250}
            style={{objectFit: "cover"}}
          />
        ))}
      </PhotoGrid>
    </Page>
  );
};

export default LightTablePage;
