import React from "react"
import styled from "styled-components"
import {LayoutContainer, defaultColors} from "../layout"

export const WrapperClients = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 260px 260px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    @media screen and (max-width: 920px) {
        grid-template-rows: 200px 200px;
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 540px) {
        grid-template-rows: 200px 200px;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 340px) {
        display: none;
    }
`

export const WrapperViewMore = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`