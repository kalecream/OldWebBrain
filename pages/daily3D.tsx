import React from 'react';
import styled from '@emotion/styled';
import Page from '../containers/layout/page';

const ImageLightBox = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const Daily3D = () => {
    return (
        <div>
        <h1>3D Daily</h1>
        </div>
    );
};

export default Daily3D;