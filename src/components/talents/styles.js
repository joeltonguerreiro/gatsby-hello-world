import React from 'react'
import styled from "styled-components"

import office from '../../assets/office.jpg'


export const Talents = styled.div`
height: 400px;
width: 100%;
background-image: url('${office}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;

display: grid;
grid-template-columns: auto 300px auto;
grid-template-rows: auto 200px auto;
` 

const StyledTalentHover = styled.div`
justify-self: center;
align-self: center;
color: #ddd;
font-weigth: bold;
&:hover {
    color: white;
    transform: scale(1.1);
}
`;

export const TalentCreation = styled(StyledTalentHover)`
grid-column-start: 1;
grid-column-end: 1;
grid-row-start: 1;
grid-row-end: 1;
`

export const TalentSocialMedia = styled(StyledTalentHover)`
grid-column-start: 1;
grid-column-end: 1;
grid-row-start: 3;
grid-row-end: 3;
`

export const TalentPrinting = styled(StyledTalentHover)`
grid-column-start: 3;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 2;

`

export const TalentCircle = styled.div`
grid-column-start: 2;
grid-column-end: 2;
grid-row-start: 2;
grid-row-end: 2;
justify-self: center;
align-self: center;
&:hover {
    cursor: pointer;
}
`

export const TalentName = styled.div`
font-size: 1.2rem;
font-weight: bold;
`;

export const TalentDescription = styled.div`

`;