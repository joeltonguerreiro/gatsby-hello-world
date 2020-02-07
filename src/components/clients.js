import React from "react"
import styled from "styled-components"
import {LayoutContainer, defaultColors} from "./layout"

import ViewMore from "../components/buttons/ViewMore"

const WrapperClients = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 200px 200px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

`

const Client = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${defaultColors.secondaryColor};
    transition: background-color 0.5s;
    &:hover {
        cursor: pointer;
        background-color: ${defaultColors.primaryColor}
    }

` 

const WrapperViewMore = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default () => (
    <LayoutContainer>
        <WrapperClients>
            <Client></Client>
            <Client></Client>
            <Client></Client>
            <Client></Client>
            <Client></Client>
            <Client></Client>
            <Client></Client>
            <Client></Client>
        </WrapperClients>
        <WrapperViewMore>
            <ViewMore></ViewMore>
        </WrapperViewMore>
    
    </LayoutContainer>
)