import * as React from "react";
import Page from "../containers/layout/page";
import { ExampleAlbum } from "../assets";
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
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

const CustomImage = styled(Image)`
    border-radius: 5px;
    filter: grayscale(100%);
    transition: filter 0.5s ease-in-out;

    &:hover{
        filter: grayscale(0%);}

    @media screen and (max-width: 1000px) {
        width: 200px;
        height: 200px;
    }
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
          <td>Fleshing out this website.</td>
        </tr>
      </DemographicTable>

      <PhotoGrid>  
        {ExampleAlbum.map((image: StaticImageData, index: number) => (
          <CustomImage key={index} src={image} alt="Example Album" width={300} height={300} style={{objectFit:'cover'}} placeholder="blur"/>
        ))}
      </PhotoGrid>
      </section>
    </Page>
  );
};

export default LightTablePage;
