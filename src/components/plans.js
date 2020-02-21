import React from "react"
import styled from "styled-components"

import {LayoutContainer} from "./layout"
import { colors } from "../styles/colors"

const WrapperPlans = styled.div`
    height: 400px;
    width: 100%;
    display: grid;
    grid-template-rows: 340px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;

`

const StyledPlan = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('https://via.placeholder.com/200x200.png?text=plano');
    background-repeat: none;
    backogrund-position: center;
    background-size: cover;
    transition: opacity 0.5s;
    opacity: 0.5;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`

export default () => (
    <LayoutContainer>
        <WrapperPlans id="plans">
            <StyledPlan></StyledPlan>
            <StyledPlan></StyledPlan>
            <StyledPlan></StyledPlan>

        </WrapperPlans>
    </LayoutContainer>
    
)