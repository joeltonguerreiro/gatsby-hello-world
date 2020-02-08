import React from "react"
import styled from "styled-components"

import {LayoutContainer} from "./layout"
import { colors } from "../styles/colors"

const Plans = styled.div`
    height: 300px;
    width: 100%;
    background-color: ${colors.secondaryColor};

`

export default () => (
    <LayoutContainer>
        <Plans id="plans"></Plans>
    </LayoutContainer>
    
)