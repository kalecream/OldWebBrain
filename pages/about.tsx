import * as React from "react";
import Page from "../containers/layout/page";
import { LightTable } from "../assets";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImageData} from "next/image";
import Image from "next/image";
import { faStar,  } from "@fortawesome/free-solid-svg-icons";

const PhotoGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 0.25rem;
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

const DemographicTable = styled.table`
    font-size: 0.8rem;
    font-family: Monospace;
    border-collapse: collapse;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const DemographicTableHeader = styled.th`
    text-align: left;
    padding: 12px 0;
    min-width: 250px;
`;

const WarningBanner = styled.small`
    background-color: #f8d7da;
    color: #721c24;
    padding: 0.5rem;
    border-radius: 5px;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;


function importAll(r) {
  let images = {};
  r.keys().map((index:Number, item) => { images[item.replace('../public/img/light_table','')] = r(item); });
  return images;
}

const images = importAll(require.context('../public/img/light_table', false, /\.(png|jpe?g|svg)$/));

export const LightTablePage = () => {
  return (
    <Page>
      <h1>About</h1>
      <section>
      <DemographicTable>
        <tr>
          <DemographicTableHeader>Age / Sex / Location </DemographicTableHeader>
          <td>Late 20s / F / Jamaica </td>
        </tr>
        <tr>
          <DemographicTableHeader>Hobbies</DemographicTableHeader>
          <td>Blender3D, Painting, Annoying my cats.</td>
        </tr>
        <tr>
          <DemographicTableHeader>Current Focus</DemographicTableHeader>
          <td>A proper about page with a yearly photojournal that has imaging grouping, descriptiove alt text and captions.</td>
        </tr>
      </DemographicTable>

      <PhotoGrid>  
        {Object.entries(images).map(([key, value]) => (
          typeof value === "string" ? <CustomImage src={value} alt={key} width={300} height={300} /> : null 
        ))}
      </PhotoGrid>
      </section>
    </Page>
  );
};

export default LightTablePage;
