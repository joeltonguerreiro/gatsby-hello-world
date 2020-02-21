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

const StyledShade = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0);
    transition: background-color 0.5s ease;
    &:hover {
        background-color: rgba(0,0,0,0.2);
    }
`

const StyledPlan = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('https://via.placeholder.com/200x200.png?text=plano');
    background-repeat: none;
    background-position: center;
    background-size: cover;
    &:hover {
        cursor: pointer;
    }
`

export default () => (
    <LayoutContainer>
        <WrapperPlans id="plans">
            <StyledPlan>
                <StyledShade></StyledShade>
            </StyledPlan>
            <StyledPlan>
                <StyledShade></StyledShade>
            </StyledPlan>
            <StyledPlan>
                <StyledShade></StyledShade>
            </StyledPlan>

        </WrapperPlans>
    </LayoutContainer>
    
)